"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  getRedirectTarget,
  type AppRole,
} from "@/lib/auth/authorization";

export type LoginState = {
  error: string | null;
  email: string;
};

export async function login(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const nextParam = String(formData.get("next") ?? "").trim();

  if (!email || !password) {
    return { error: "Please enter your email and password.", email };
  }

  const supabase = await createClient();

  const { data, error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError || !data.user) {
    return {
      error: "Invalid email or password. Please verify your credentials.",
      email,
    };
  }

  // Resolve the role server-side from the user_roles table (RLS: own row only).
  const { data: roleRecord } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", data.user.id)
    .maybeSingle();

  const role = (roleRecord?.role ?? null) as AppRole | null;

  if (!role) {
    // Account has not been provisioned with an application role.
    await supabase.auth.signOut();
    return {
      error: "Access restricted. Your account has not been assigned an authorized role.",
      email,
    };
  }

  // Redirect by role: staff -> /admin/tab-1, members -> /account (respecting safe relative same-site ?next=)
  const destination = getRedirectTarget(role, nextParam);

  redirect(destination);
}
