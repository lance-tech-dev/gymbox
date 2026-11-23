"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { USER_HOME_PATH } from "@/lib/auth/authorization";

export type RegisterState = {
  error: string | null;
  success: string | null;
  fullName: string;
  email: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_HAS_LETTER = /[a-zA-Z]/;
const PASSWORD_HAS_NUMBER = /[0-9]/;

export async function register(
  _prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  // 1. Required fields
  if (!fullName || !email || !password || !confirmPassword) {
    return {
      error: "All fields are required.",
      success: null,
      fullName,
      email,
    };
  }

  // 2. Valid email format
  if (!EMAIL_REGEX.test(email) || email.length > 255) {
    return {
      error: "Please enter a valid email address.",
      success: null,
      fullName,
      email,
    };
  }

  // 3. Password minimum 8 characters with letters and numbers
  if (
    password.length < 8 ||
    !PASSWORD_HAS_LETTER.test(password) ||
    !PASSWORD_HAS_NUMBER.test(password)
  ) {
    return {
      error:
        "Password must be at least 8 characters long and contain both letters and numbers.",
      success: null,
      fullName,
      email,
    };
  }

  // 4. Passwords match
  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match.",
      success: null,
      fullName,
      email,
    };
  }

  // 5. Use supabase.auth.signUp() with anon key (lib/supabase/server)
  const supabase = await createClient();

  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (signUpError) {
    return {
      error: "Unable to complete registration. Please check your details and try again.",
      success: null,
      fullName,
      email,
    };
  }

  // 6. Handle email confirmation:
  // If no active session was returned (or identities list is empty/unconfirmed),
  // email confirmation is required by the project configuration.
  if (!data.session) {
    return {
      error: null,
      success: "Check your email to confirm your account.",
      fullName: "",
      email: "",
    };
  }

  // If session is present, user is immediately logged in
  redirect(USER_HOME_PATH);
}
