export interface EventItem {
  id: string;
  slug: string;
  title: string;
  type: "Event" | "Privilege & Offer";
  category: "Haute Horlogerie" | "Gastronomy" | "Fashion Week" | "Art & Culture" | "Seasonal Campaign";
  dateRange: string;
  location: string;
  status: "Now Showing" | "Upcoming" | "Limited Privilege";
  description: string;
  details: string[];
  ctaText: string;
  image: string;
  featured?: boolean;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: "dubai-fashion-week-autumn",
    slug: "fashion-week-illuminations",
    title: "Dubai Haute Couture Illuminations",
    type: "Event",
    category: "Fashion Week",
    dateRange: "November 14 – 20, 2026",
    location: "Fashion Avenue Grand Runway & Atrium",
    status: "Upcoming",
    description: "Seven days of breathtaking runway presentations showcasing Parisian and regional couture houses. Featuring private showroom viewings, international supermodels, and after-hours atelier cocktails.",
    details: [
      "Daily runway presentations at 07:00 PM and 09:30 PM",
      "Front-row VIP seatings by invitation and private registration",
      "Exclusive capsule collections available immediately off the runway",
      "Special appearances by renowned artistic directors and master couturiers",
    ],
    ctaText: "Request Runway Invitation",
    image: "/images/fashion-avenue.jpg",
    featured: true,
  },
  {
    id: "haute-horlogerie-fair",
    slug: "haute-horlogerie-fair",
    title: "The Grand Horological Masters Fair",
    type: "Event",
    category: "Haute Horlogerie",
    dateRange: "October 28 – November 8, 2026",
    location: "Grand Atrium Center Rotunda",
    status: "Now Showing",
    description: "An extraordinary gathering of the world's most revered independent watchmakers and storied Swiss manufactures. Featuring live tourbillon assembly demonstrations and rare vintage timepieces.",
    details: [
      "Over 40 rare grand complication timepieces on public display",
      "Live daily watchmaking masterclasses led by Swiss academy horologists",
      "Private valuation and authentication salon by appointment",
    ],
    ctaText: "Book Masterclass Seat",
    image: "/images/hero-atrium.jpg",
    featured: true,
  },
  {
    id: "fountain-symphony-show",
    slug: "grand-fountain-symphony",
    title: "The Grand Symphony of Water & Light",
    type: "Event",
    category: "Art & Culture",
    dateRange: "Daily • 06:00 PM – 11:30 PM",
    location: "Waterfront Esplanade & Promenade",
    status: "Now Showing",
    description: "Every 30 minutes each evening, witness water jets shooting 150 meters into the desert sky synchronized to classical orchestral masterpieces and contemporary Arabic melodies.",
    details: [
      "Spectacular illuminated choreographies set to Andrea Bocelli and Arabic symphonies",
      "Best viewed from the waterfront dining terraces on Lower Ground and Level 1",
      "Traditional wooden Abra lake rides available during performances",
    ],
    ctaText: "Reserve Waterfront Table",
    image: "/images/waterfront-dining.jpg",
    featured: true,
  },
  {
    id: "autumn-tasting-tour",
    slug: "autumn-gastronomy-tour",
    title: "The Grand Gastronomy Tasting Experience",
    type: "Privilege & Offer",
    category: "Gastronomy",
    dateRange: "October 15 – November 30, 2026",
    location: "Participating Waterfront Fine Dining Venues",
    status: "Limited Privilege",
    description: "Eight acclaimed executive chefs present exclusive four-course tasting menus paired with artisanal mocktails at celebratory seasonal privileges for mall patrons.",
    details: [
      "Curated 4-course bespoke menus starting at AED 380 per guest",
      "Complimentary chef's amuse-bouche and glass of sparkling vintage cider",
      "Direct priority reservations through our concierge team",
    ],
    ctaText: "View Tasting Menus",
    image: "/images/waterfront-dining.jpg",
    featured: false,
  },
  {
    id: "vip-styling-privilege",
    slug: "vip-styling-privilege",
    title: "Platinum VIP Personal Styling Privilege",
    type: "Privilege & Offer",
    category: "Seasonal Campaign",
    dateRange: "Year-Round Privilege",
    location: "The Presidential VIP Concierge Suite",
    status: "Now Showing",
    description: "Complimentary 3-hour private styling consultation in our secluded VIP salon with champagne service when shopping from participating Haute Couture houses.",
    details: [
      "Dedicated wardrobe curator and personal shopper",
      "Discreet hands-free collection and delivery to your hotel or residence",
      "Complimentary presidential valet parking pass",
    ],
    ctaText: "Inquire for Appointment",
    image: "/images/concierge-lounge.jpg",
    featured: false,
  },
];
