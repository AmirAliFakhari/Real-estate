import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ecaeztmdfrcwezajiapg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjYWV6dG1kZnJjd2V6YWppYXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4NTM4MDQsImV4cCI6MjAyNDQyOTgwNH0.vC8F3ZnFWMBk7vLQZD05i3tgIdBaHFWlPr6z7c3tL3w"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase