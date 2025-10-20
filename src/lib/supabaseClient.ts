
import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

// Check if we're in a browser environment before creating the client.
// This prevents the client from being initialized during the build process on the server,
// which can cause issues if environment variables are not available at build time.
if (typeof window !== 'undefined') {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseAnonKey) {
    try {
      supabase = createClient(supabaseUrl, supabaseAnonKey);
    } catch (error) {
      console.error("Error creating Supabase client:", error);
    }
  } else {
    console.warn("Supabase credentials are not provided. Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in your environment. The forms will not work without them.");
  }
}

export { supabase };
