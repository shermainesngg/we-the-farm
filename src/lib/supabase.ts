import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Event = {
  id: string;
  title: string;
  description: string | null;
  date: string;
  time: string | null;
  location: string;
  image_url: string | null;
  max_attendees: number | null;
  is_published: boolean;
  created_at: string;
};

export type Booking = {
  id: string;
  event_id: string;
  name: string;
  email: string;
  attendees: number;
  notes: string | null;
  created_at: string;
  events?: Event;
};
