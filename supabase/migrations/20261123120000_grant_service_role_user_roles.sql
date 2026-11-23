-- Allow server-side code using the service role key (admin seed script,
-- sub-admin management) to manage roles. Newer Supabase projects no longer
-- grant table access to service_role automatically.
GRANT ALL ON public.user_roles TO service_role;
