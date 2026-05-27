import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase: SupabaseClient = supabaseUrl
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (new Proxy({} as SupabaseClient, {
      get: () => () => ({ data: null, error: { message: "Supabase not configured" } }),
    }) as SupabaseClient);

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

export type Product = {
  id: string;
  title: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: "workshop" | "compost";
  stock: number | null;
  date: string | null;
  time: string | null;
  location: string | null;
  max_attendees: number | null;
  is_published: boolean;
  created_at: string;
};
