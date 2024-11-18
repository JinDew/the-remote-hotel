import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bpubuakfjtqnkjkugqag.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwdWJ1YWtmanRxbmtqa3VncWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4NTAyNTYsImV4cCI6MjA0MjQyNjI1Nn0.m5oks5LxcxjOyNDeyVzbaBaXb11AEQ4EhMvtOV11hII";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
