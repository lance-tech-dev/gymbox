
import { loadEnvConfig } from "@next/env";
import { createClient } from "@supabase/supabase-js";

loadEnvConfig(process.cwd());

async function seedAdmin() {
  const {
    NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
    SEED_ADMIN_EMAIL,
    SEED_ADMIN_PASSWORD,
    SEED_ADMIN_NAME,
  } = process.env;

  if (
    !NEXT_PUBLIC_SUPABASE_URL ||
    !SUPABASE_SERVICE_ROLE_KEY ||
    !SEED_ADMIN_EMAIL ||
    !SEED_ADMIN_PASSWORD ||
    !SEED_ADMIN_NAME
  ) {
    throw new Error("Missing required admin seed environment variables.");
  }

  const supabase = createClient(
    NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );

  console.log("Creating initial Admin account...");

  const { data, error } = await supabase.auth.admin.createUser({
    email: SEED_ADMIN_EMAIL,
    password: SEED_ADMIN_PASSWORD,
    email_confirm: true,
    user_metadata: {
      full_name: SEED_ADMIN_NAME,
    },
  });

  if (error) {
    throw new Error(`Admin account creation failed: ${error.message}`);
  }

  const userId = data.user.id;

  // The on_auth_user_created trigger already gave this account the default
  // 'user' role, so promote it instead of inserting a second row.
  const { error: roleError } = await supabase
    .from("user_roles")
    .upsert(
      {
        user_id: userId,
        role: "admin",
      },
      { onConflict: "user_id" },
    );

  if (roleError) {
    const { error: rollbackError } =
      await supabase.auth.admin.deleteUser(userId);

    if (rollbackError) {
      throw new Error(
        `Role assignment failed: ${roleError.message}. ` +
        `User cleanup also failed: ${rollbackError.message}`,
      );
    }

    throw new Error(
      `Role assignment failed. The newly created user was removed: ${roleError.message}`,
    );
  }

  console.log("Initial Admin account created successfully.");
  console.log(`Email: ${data.user.email}`);
}

seedAdmin().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
