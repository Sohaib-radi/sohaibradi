import { supabase } from "@/lib/supabase";

export async function submitEnrollment(data: {
  name: string;
  email: string;
  phone: string;
  lang: string;
}) {
  const { error } = await supabase.from("enrollments").insert(data);
  if (error) console.error("Enrollment submission failed:", error);
  return !error;
}

export async function submitReview(data: {
  name: string;
  rating: number;
  text: string;
  lang: string;
}) {
  const { error } = await supabase.from("reviews").insert(data);
  if (error) console.error("Review submission failed:", error);
  return !error;
}

export type ApprovedReview = { name: string; rating: number; text: string };

export async function fetchApprovedReviews(): Promise<ApprovedReview[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("name, rating, text")
    .eq("approved", true)
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Fetching reviews failed:", error);
    return [];
  }
  return data ?? [];
}
