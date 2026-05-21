"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Event } from "@/lib/supabase";
import { Upload, X, ImageIcon } from "lucide-react";

type Props = {
  event?: Event;
};

export default function EventForm({ event }: Props) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState(event?.title ?? "");
  const [description, setDescription] = useState(event?.description ?? "");
  const [date, setDate] = useState(event?.date ?? "");
  const [time, setTime] = useState(event?.time ?? "");
  const [location, setLocation] = useState(
    event?.location ?? "Beauty World Centre Rooftop"
  );
  const [maxAttendees, setMaxAttendees] = useState(
    event?.max_attendees?.toString() ?? ""
  );
  const [imageUrl, setImageUrl] = useState(event?.image_url ?? "");
  const [isPublished, setIsPublished] = useState(event?.is_published ?? true);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("event-images")
      .upload(fileName, file);

    if (uploadError) {
      setError("Failed to upload image. Please try again.");
      setUploading(false);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("event-images").getPublicUrl(fileName);

    setImageUrl(publicUrl);
    setUploading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title,
      description: description || null,
      date,
      time: time || null,
      location,
      max_attendees: maxAttendees ? parseInt(maxAttendees) : null,
      image_url: imageUrl || null,
      is_published: isPublished,
    };

    if (event) {
      const { error: err } = await supabase
        .from("events")
        .update(payload)
        .eq("id", event.id);
      if (err) {
        setError("Failed to update event.");
        setSaving(false);
        return;
      }
    } else {
      const { error: err } = await supabase.from("events").insert(payload);
      if (err) {
        setError("Failed to create event.");
        setSaving(false);
        return;
      }
    }

    router.push("/admin/events");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-5">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-soil mb-2">
            Event Photo
          </label>
          {imageUrl ? (
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-cream-dark">
              <img
                src={imageUrl}
                alt="Event"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setImageUrl("")}
                className="absolute top-2 right-2 p-1.5 bg-soil/70 text-cream rounded-full hover:bg-soil transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="w-full aspect-[16/9] rounded-xl border-2 border-dashed border-cream-dark hover:border-sage transition-colors bg-cream flex flex-col items-center justify-center gap-2 text-soil/40 hover:text-soil/60"
            >
              {uploading ? (
                <div className="h-6 w-6 border-2 border-sage border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <ImageIcon className="h-8 w-8" />
                  <span className="text-sm">Click to upload a photo</span>
                </>
              )}
            </button>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-soil mb-1">
            Event Title
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Weekend Farming Session"
            className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
          />
        </div>

        {/* Date & Time */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-soil mb-1">
              Date
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-soil mb-1">
              Time{" "}
              <span className="text-soil/40 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="e.g. 9:00 AM - 12:00 PM"
              className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-soil mb-1">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
          />
        </div>

        {/* Max Attendees */}
        <div>
          <label className="block text-sm font-medium text-soil mb-1">
            Max Attendees{" "}
            <span className="text-soil/40 font-normal">
              (leave empty for unlimited)
            </span>
          </label>
          <input
            type="number"
            min="1"
            value={maxAttendees}
            onChange={(e) => setMaxAttendees(e.target.value)}
            placeholder="e.g. 20"
            className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-soil mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            placeholder="Tell people what to expect, what to bring, etc."
            className="w-full rounded-xl border border-cream-dark px-4 py-2.5 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage resize-none"
          />
        </div>

        {/* Published toggle */}
        <label className="flex items-center gap-3 cursor-pointer">
          <div
            className={`relative w-11 h-6 rounded-full transition-colors ${
              isPublished ? "bg-forest" : "bg-cream-dark"
            }`}
            onClick={() => setIsPublished(!isPublished)}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                isPublished ? "translate-x-5" : ""
              }`}
            />
          </div>
          <span className="text-sm text-soil">
            {isPublished ? "Published — visible on the site" : "Draft — hidden from visitors"}
          </span>
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="bg-forest text-cream px-6 py-2.5 rounded-xl font-medium hover:bg-forest-light transition-colors disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : event
              ? "Update Event"
              : "Create Event"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/events")}
            className="px-6 py-2.5 rounded-xl font-medium text-soil/60 hover:bg-cream-dark transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
