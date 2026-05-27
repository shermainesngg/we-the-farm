import type { Event } from "./supabase";

export type PastEvent = Event & {
  external_url?: string;
  highlights?: string[];
};

export const pastEvents: PastEvent[] = [
  {
    id: "urban-rooftop-farm-feb-2026",
    title: "Urban Rooftop Farm",
    description:
      "A volunteer session to do your bit for food security in Singapore! Join us at the rooftop farm for hands-on urban farming activities including soil mixing, planting, and composting.\n\nFacilitated by Tan Jing Xiang and Nicholas Chin, urban farmers at wethefarm.\n\nWhat to bring:\n• Gloves, water, hat, and sunscreen\n• Optional: vegetable scraps and fruit peels for composting (no cooked items or animal products)",
    date: "2026-02-14",
    time: "9:30 AM – 12:00 PM / 4:30 PM – 7:00 PM",
    location: "Level 5, Beauty World Centre, 144 Upper Bukit Timah Rd, S588177",
    image_url: null,
    max_attendees: null,
    is_published: true,
    created_at: "2026-01-01T00:00:00Z",
    external_url: "https://tchs-global.org/event/urban-rooftop-farm-wethefarm-14-15-feb-2026/",
    highlights: [
      "Soil mixing & planting",
      "Composting workshop",
      "Community volunteering",
    ],
  },
  {
    id: "urban-rooftop-farm-may-2025",
    title: "Urban Rooftop Farm",
    description:
      "A volunteer session to do your bit for food security in Singapore! Join us at the rooftop farm for hands-on urban farming activities including soil mixing, planting, and composting.\n\nFacilitated by Tan Jing Xiang and Nicholas Chin, urban farmers at wethefarm.\n\nDrop-in format — come any time within the session window.\n\nWhat to bring:\n• Gloves, water, hat, and sunscreen\n• Optional: vegetable scraps and fruit peels for composting (no cooked items or animal products)",
    date: "2025-05-24",
    time: "9:00 AM – 12:00 PM / 4:30 PM – 6:30 PM",
    location: "Level 5, Beauty World Centre, 144 Upper Bukit Timah Rd, S588177",
    image_url: null,
    max_attendees: null,
    is_published: true,
    created_at: "2025-05-01T00:00:00Z",
    external_url: "https://tchs-global.org/event/urban-rooftop-farm-wethefarm-24-25-may-2025/",
    highlights: [
      "Soil mixing & planting",
      "Composting workshop",
      "Community volunteering",
    ],
  },
  {
    id: "farm-in-the-sky-compost-may-2025",
    title: "Farm in the Sky! + Compost",
    description:
      "A free community farming and composting session hosted by wethefarm at our rooftop farm. Come get your hands dirty, learn about composting, and connect with fellow urban farming enthusiasts.\n\nOpen to all — no experience needed. Just bring yourself and a willingness to dig in!",
    date: "2025-05-30",
    time: "9:30 AM",
    location: "Beauty World Centre, Singapore",
    image_url: null,
    max_attendees: null,
    is_published: true,
    created_at: "2025-05-01T00:00:00Z",
    external_url: "https://www.eventbrite.sg/e/farm-in-the-sky-compost-tickets-1988711921893",
    highlights: [
      "Rooftop farming",
      "Composting basics",
      "Free admission",
    ],
  },
];

export function getPastEvent(id: string): PastEvent | undefined {
  return pastEvents.find((e) => e.id === id);
}
