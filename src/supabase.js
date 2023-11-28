import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ikeztqmwfkfiyunwvvhx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrZXp0cW13ZmtmaXl1bnd2dmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4NDExMzAsImV4cCI6MjAxNDQxNzEzMH0.7CyJUEQwafuxKcUJSbxD8OEDEuLoqeYoo-48XaMGirk";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
