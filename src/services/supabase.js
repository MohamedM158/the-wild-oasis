import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zztglwmgsjdqpizhokgr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dGdsd21nc2pkcXBpemhva2dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NzA1ODYsImV4cCI6MjAyMTM0NjU4Nn0._SL_jSqgPMFOZQfo9JaQ3dsT6gsgNyN0D829ltqFxfQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
