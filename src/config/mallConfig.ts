/**
 * THE GRAND ATRIUM - CLIENT CONFIGURATION
 * 
 * This file serves as the centralized source of truth for all mall branding,
 * operational schedules, contact coordinates, floors, parking zones, and concierge services.
 * 
 * When updating official client data, modify the values below without needing
 * to alter presentation or routing logic.
 */

export interface MallSchedule {
  dayName: string;
  retailHours: string;
  diningHours: string;
  attractionsHours: string;
  isWeekend?: boolean;
}

export interface FloorLevel {
  id: string;
  code: string;
  name: string;
  shortDescription: string;
  zones: string[];
  primaryCategories: string[];
}

export interface ParkingZone {
  id: string;
  name: string;
  capacity: string;
  nearestEntry: string;
  pricing: string;
  salikIntegrated: boolean;
  valetAvailable: boolean;
  statusBadge: "Ample Spaces" | "Moderate" | "Limited";
}

export const MALL_CONFIG = {
  identity: {
    name: "The Grand Atrium",
    legalName: "The Grand Atrium Hospitality & Commercial Assets LLC",
    tagline: "Where Extraordinary Meets Refinement",
    subheadline: "Dubai's Premier Fashion, Gastronomy & Cultural Landmark",
    locationSummary: "Financial Center Road, Downtown Dubai, United Arab Emirates",
    coordinates: {
      lat: 25.1972,
      lng: 55.2744,
    },
    googleMapsUrl: "https://maps.google.com/?q=25.1972,55.2744",
    establishedYear: 2024,
  },

  contact: {
    generalPhone: "+971 4 800 287486", // 800-ATRIUM
    conciergeDirect: "+971 4 800 847266", // VIP Concierge
    whatsappDesk: "+971 50 123 4567",
    generalEmail: "concierge@thegrandatrium.com",
    leasingEmail: "leasing@thegrandatrium.com",
    mediaEmail: "press@thegrandatrium.com",
    vipServicesEmail: "viplounge@thegrandatrium.com",
    address: {
      street: "Financial Center Road, Downtown Dubai",
      poBox: "P.O. Box 99401",
      city: "Dubai",
      country: "United Arab Emirates",
    },
  },

  social: {
    instagram: "https://instagram.com/thegrandatrium",
    facebook: "https://facebook.com/thegrandatrium",
    linkedin: "https://linkedin.com/company/thegrandatrium",
    tiktok: "https://tiktok.com/@thegrandatrium",
    youtube: "https://youtube.com/@thegrandatrium",
  },

  // Operating Hours schedule
  schedule: {
    retail: {
      weekday: "10:00 AM – 11:00 PM (Mon – Thu)",
      weekend: "10:00 AM – 12:00 Midnight (Fri – Sun)",
    },
    dining: {
      weekday: "10:00 AM – 12:00 Midnight (Mon – Thu)",
      weekend: "10:00 AM – 01:00 AM (Fri – Sun)",
    },
    attractions: {
      weekday: "10:00 AM – 11:00 PM",
      weekend: "10:00 AM – 12:00 Midnight",
    },
    specialRamadanNote: "Extended operating hours apply during Ramadan and Eid festivals.",
  },

  // Key Statistics & Metrics
  stats: [
    { label: "Haute Couture & Boutiques", value: "450+" },
    { label: "Michelin & Global Dining Venues", value: "85+" },
    { label: "Architectural & Leisure Wonders", value: "5 Flagships" },
    { label: "Automated & Valet Parking Bays", value: "12,000" },
  ],

  // Floor Directory Breakdown
  floors: [
    {
      id: "lg",
      code: "LG",
      name: "Lower Ground",
      shortDescription: "Waterfront Dining Promenade, Grand Fountain Views & Marine Realm",
      zones: ["Fountain Promenade", "Waterfront Esplanade", "Marine Avenue", "Metro Link Bridge"],
      primaryCategories: ["Waterfront Dining", "Grand Aquarium", "Fine Casual Eateries", "Guest Services"],
    },
    {
      id: "g",
      code: "G",
      name: "Ground Floor",
      shortDescription: "The Grand Atrium & Haute Couture Fashion Avenue",
      zones: ["Haute Couture Promenade", "Grand Atrium Center", "Jewelry Courtyard", "Valet Drop-off"],
      primaryCategories: ["Luxury Fashion", "High Jewelry", "Art Installations", "VIP Concierge Lounge"],
    },
    {
      id: "l1",
      code: "L1",
      name: "Level 1",
      shortDescription: "Contemporary Designer Boutiques, Tech Flagships & Beauty Ateliers",
      zones: ["Contemporary Runway", "Tech Pavilion", "Beauty Boulevard", "Terrace Cafés"],
      primaryCategories: ["Designer Ready-to-Wear", "Electronics", "Beauty & Fragrance", "Artisanal Bakeries"],
    },
    {
      id: "l2",
      code: "L2",
      name: "Level 2",
      shortDescription: "Entertainment Arena, Cinema Suites, Ice Rink & Rooftop Dining",
      zones: ["Entertainment Deck", "Cinema Suites Grand Concourse", "Skyline Ice Arena", "Gourmet Terrace"],
      primaryCategories: ["Olympic Ice Rink", "VIP Cinema", "Boutique Homeware", "Fine Dining Terraces"],
    },
  ] as FloorLevel[],

  // Parking Zones
  parkingZones: [
    {
      id: "grand-parking",
      name: "Grand Atrium Parking",
      capacity: "4,500 bays",
      nearestEntry: "Financial Center Road West Gate",
      pricing: "First 4 hours complimentary; AED 20/hr thereafter. Weekend 6 hours complimentary.",
      salikIntegrated: true,
      valetAvailable: true,
      statusBadge: "Ample Spaces",
    },
    {
      id: "fashion-parking",
      name: "Fashion Avenue VIP Parking",
      capacity: "3,200 bays",
      nearestEntry: "Downtown Boulevard Gate 2",
      pricing: "Dedicated VIP & Valet access. Standard bays complimentary for first 4 hours.",
      salikIntegrated: true,
      valetAvailable: true,
      statusBadge: "Moderate",
    },
    {
      id: "zabeel-parking",
      name: "Zabeel Premium Expansion",
      capacity: "4,300 bays",
      nearestEntry: "Al Khail Road Connector Bridge",
      pricing: "Complimentary all day. Direct climate-controlled travellator connection to main atrium.",
      salikIntegrated: false,
      valetAvailable: false,
      statusBadge: "Ample Spaces",
    },
  ] as ParkingZone[],

  // VIP Guest Services
  guestServices: [
    {
      id: "hands-free",
      title: "Hands-Free Shopping",
      description: "Leave your shopping bags at any participating boutique and collect them at your vehicle or hotel.",
      badge: "Complimentary for VIPs",
    },
    {
      id: "valet-service",
      title: "Presidential Valet Parking",
      description: "Drop-off and pick-up available at Fashion Avenue, Grand Atrium Entrance, and Waterfront Promenade.",
      badge: "Available 24/7",
    },
    {
      id: "personal-styling",
      title: "Private Stylist & VIP Suite",
      description: "Bespoke consultations in our secluded VIP Salon with international stylists and champagne service.",
      badge: "By Appointment",
    },
    {
      id: "buggy-service",
      title: "Electric Chauffeur Buggies",
      description: "Effortless, climate-controlled transit across all levels for elderly visitors, families, and VIP patrons.",
      badge: "On Demand",
    },
    {
      id: "luggage-storage",
      title: "Luggage Lounge & Concierge",
      description: "Secure baggage drop, flight check-in assistance, and private courier delivery to Dubai International Airport.",
      badge: "Level G & LG",
    },
    {
      id: "accessibility",
      title: "Accessibility & Mobility Loans",
      description: "Complimentary motorized and manual wheelchairs, sensory maps, and braille guides available at all desks.",
      badge: "Complimentary",
    },
  ],
};

/**
 * Calculates whether the mall is currently open based on local/current time
 */
export function getMallStatus(): {
  isOpen: boolean;
  statusText: string;
  hoursToday: string;
  nextEventText: string;
} {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
  const isWeekend = day === 0 || day === 5 || day === 6;
  const hoursToday = isWeekend
    ? "10:00 AM – 12:00 Midnight"
    : "10:00 AM – 11:00 PM";

  const hour = now.getHours();
  // Open 10 AM to 23 (11 PM) or 24 (Midnight)
  const closeHour = isWeekend ? 24 : 23;
  const isOpen = hour >= 10 && hour < closeHour;

  return {
    isOpen,
    statusText: isOpen ? "OPEN NOW" : "OPENS AT 10:00 AM",
    hoursToday,
    nextEventText: isOpen ? `Closes at ${isWeekend ? "12:00 Midnight" : "11:00 PM"}` : "Opens at 10:00 AM",
  };
}
