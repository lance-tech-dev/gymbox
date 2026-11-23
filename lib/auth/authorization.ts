import "server-only";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const APP_ROLES = ["admin", "sub_admin", "user"] as const;

export type AppRole = (typeof APP_ROLES)[number];

// Only these roles may access the admin area.
export const ADMIN_ROLES = ["admin", "sub_admin"] as const satisfies readonly AppRole[];

export type AdminRole = (typeof ADMIN_ROLES)[number];

export function isAdminRole(role: AppRole | null | undefined): role is AdminRole {
  return !!role && (ADMIN_ROLES as readonly AppRole[]).includes(role);
}

export const LOGIN_PATH = "/login";
export const ACCESS_RESTRICTED_PATH = `${LOGIN_PATH}?error=access-restricted`;
export const ADMIN_HOME_PATH = "/admin/tab-1";
export const USER_HOME_PATH = "/account";
export const USER_ACCESS_RESTRICTED_PATH = `${USER_HOME_PATH}?error=access-restricted`;

export function getHomePathForRole(role: AppRole | null | undefined): string {
  if (isAdminRole(role)) {
    return ADMIN_HOME_PATH;
  }
  return USER_HOME_PATH;
}

/**
 * Sanitizes a redirect path to strictly disallow open redirects.
 * Only same-site relative paths starting with a single '/' are permitted.
 * Blocks protocol-relative URLs ('//'), backslashes ('\'), control characters, and scheme-based URLs.
 */
export function sanitizeRedirectPath(path: string | null | undefined): string | null {
  if (!path) return null;
  const trimmed = path.trim();
  if (
    trimmed.startsWith("/") &&
    !trimmed.startsWith("//") &&
    !trimmed.startsWith("/\\") &&
    !trimmed.includes("\\") &&
    !/[\x00-\x1F\x7F]/.test(trimmed)
  ) {
    try {
      const url = new URL(trimmed, "http://localhost");
      if (url.origin === "http://localhost") {
        return url.pathname + url.search + url.hash;
      }
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Determines the safe, role-appropriate post-login redirect destination.
 * Staff accounts (admin, sub_admin) are redirected to the admin area.
 * Member accounts (user) are never allowed into the admin area and are routed to /account.
 */
export function getRedirectTarget(role: AppRole, nextParam?: string | null): string {
  const safeNext = sanitizeRedirectPath(nextParam);
  if (safeNext) {
    if (isAdminRole(role)) {
      if (!safeNext.startsWith("/account")) {
        return safeNext;
      }
    } else if (role === "user") {
      if (!safeNext.startsWith("/admin")) {
        return safeNext;
      }
    }
  }
  return getHomePathForRole(role);
}

export async function getCurrentUserRole() {
  const supabase = await createClient();

  // Verify the authenticated user with Supabase.
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return null;
  }

  // Retrieve the user's role from our protected database table.
  const { data: roleRecord, error: roleError } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .maybeSingle();

  if (roleError || !roleRecord) {
    return null;
  }

  const role = roleRecord.role;

  // Validate the role against our supported application roles.
  if (!APP_ROLES.includes(role as AppRole)) {
    return null;
  }

  return {
    user,
    role: role as AppRole,
  };
}

export async function requireDashboardAccess() {
  const access = await getCurrentUserRole();

  if (!access) {
    redirect(LOGIN_PATH);
  }

  // Authenticated, but not authorized for the admin area (e.g. gym member).
  // Redirect away to member area with restricted notice.
  if (!isAdminRole(access.role)) {
    redirect(USER_ACCESS_RESTRICTED_PATH);
  }

  return { user: access.user, role: access.role as AdminRole };
}

export async function requireUserAccess() {
  const access = await getCurrentUserRole();

  if (!access) {
    redirect(LOGIN_PATH);
  }

  // Staff visiting member area are sent to staff dashboard.
  if (isAdminRole(access.role)) {
    redirect(ADMIN_HOME_PATH);
  }

  return { user: access.user, role: access.role };
}
