// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zfyvnzxtgslxekzyvpri.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmeXZuenh0Z3NseGVrenl2cHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0OTU3NTQsImV4cCI6MjA1OTA3MTc1NH0.LGssax9MuHKFW165Fa8EFz7bq2ILwji7N55_EMGJOrg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);