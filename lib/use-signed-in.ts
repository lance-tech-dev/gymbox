"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

/**
 * Whether the visitor has a Supabase session: `null` while unknown (first
 * render), then `true`/`false`. For choosing what UI to show only; access to
 * protected pages is always verified on the server.
 */
export function useSignedIn(): boolean | null {
  const [signedIn, setSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => setSignedIn(!!data.session));
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(!!session);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  return signedIn;
}
