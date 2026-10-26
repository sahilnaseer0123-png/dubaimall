export interface AttractionItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "Marine & Wildlife" | "Ice & Skating" | "Luxury Cinema" | "Immersive Tech" | "Architecture & Art";
  floor: "LG" | "G" | "L1" | "L2";
  floorName: string;
  zone: string;
  hours: string;
  admissionPrice: string;
  suitableFor: string;
  duration: string;
  description: string;
  highlights: string[];
  visitorGuidelines: string[];
  image: string;
  featured?: boolean;
}

export const ATTRACTIONS_DATA: AttractionItem[] = [
  {
    id: "grand-aquarium",
    slug: "grand-aquarium",
    name: "The Grand Aquarium & Underwater Zoo",
    tagline: "One of the World's Largest Indoor Marine Sanctuaries",
    category: "Marine & Wildlife",
    floor: "LG",
    floorName: "Lower Ground & Level 1",
    zone: "Marine Avenue",
    hours: "10:00 AM – 11:00 PM (Daily)",
    admissionPrice: "From AED 199 (VIP & Behind-the-Scenes available)",
    suitableFor: "All Ages • Families • Marine Enthusiasts",
    duration: "2 - 3 Hours",
    description: "Home to thousands of aquatic animals comprising over 140 marine species. Marvel at over 300 sharks and rays swimming above you in the 270-degree transparent underwater walkthrough tunnel, and explore the nocturnal creatures of the Rainforest Zoo.",
    highlights: [
      "Monumental 10-million liter acrylic viewing panel holding world records",
      "270-degree walkthrough underwater ocean tunnel",
      "Shark cage diving and ray-feeding interactive encounters",
      "King Croc sanctuary & nocturnal desert animal habitat",
    ],
    visitorGuidelines: [
      "Strollers are permitted throughout the main concourse and tunnel.",
      "Flash photography is prohibited inside the nocturnal habitats to safeguard marine wellbeing.",
      "VIP tickets include fast-track priority entry and a behind-the-scenes glass-bottom boat tour.",
    ],
    image: "/images/grand-aquarium.jpg",
    featured: true,
  },
  {
    id: "olympic-ice-arena",
    slug: "olympic-ice-arena",
    name: "Skyline Olympic Ice Arena",
    tagline: "Glide Beneath Dubai's Soaring Sunlit Glass Dome",
    category: "Ice & Skating",
    floor: "L2",
    floorName: "Level 2",
    zone: "Skyline Ice Arena",
    hours: "10:00 AM – 11:30 PM (Daily)",
    admissionPrice: "From AED 125 (Includes skate rental)",
    suitableFor: "All Ages • Beginners & Figure Skaters",
    duration: "90 Minutes per session",
    description: "An Olympic-sized ice rink located at the heart of the mall beneath a majestic glass conservatory roof. Whether learning your first strides with penguin aids or practicing figure-skating spins, experience pure alpine bliss in the Arabian desert.",
    highlights: [
      "Regulation Olympic competition size (60m x 30m)",
      "DJ night skating sessions with vibrant synchronized laser light shows",
      "Private coaching academy certified by international ISU instructors",
      "Comfortable ringside heated viewing cafés and chocolate parlors",
    ],
    visitorGuidelines: [
      "Warm clothing, long socks, and gloves are recommended (available on-site).",
      "Skating aids (penguins and seals) available for young children.",
      "Lockers and helmet rentals provided complimentary with admission.",
    ],
    image: "/images/ice-rink.jpg",
    featured: true,
  },
  {
    id: "platinum-cinema-suites",
    slug: "platinum-cinema-suites",
    name: "Platinum Luxury Cinema Suites",
    tagline: "Five-Star Butler Service Meets Cutting-Edge Laser Projection",
    category: "Luxury Cinema",
    floor: "L2",
    floorName: "Level 2",
    zone: "Cinema Suites Grand Concourse",
    hours: "11:00 AM – 02:00 AM (Daily)",
    admissionPrice: "From AED 175 per suite seat",
    suitableFor: "Adults • Film Connoisseurs",
    duration: "Feature Film Length",
    description: "Redefining the silver screen experience with 14 ultra-luxury private auditoriums. Sink into heated leather recliners with personal marble cocktail tables, cashmere blankets, and gourmet à la carte dining delivered directly to your seat by personal butlers.",
    highlights: [
      "Dolby Atmos 360-degree acoustic immersion with 4K laser projection",
      "Chef-curated gourmet dining menu paired with mocktails and fine desserts",
      "Exclusive private VIP pre-screening lounge with complimentary refreshments",
      "Private screening room buyouts available for corporate and celebratory events",
    ],
    visitorGuidelines: [
      "Please arrive 20 minutes prior to showtime to enjoy the private VIP Lounge.",
      "Butler dining orders must be placed within the first 30 minutes of entry.",
      "Strict smart-casual dress code enforced.",
    ],
    image: "/images/cinema-suites.jpg",
    featured: true,
  },
  {
    id: "vip-concierge-lounge",
    slug: "vip-concierge-lounge",
    name: "The Presidential VIP Concierge & Styling Salon",
    tagline: "Unrivaled Discretion, Personal Shopping & Private Living Salons",
    category: "Architecture & Art",
    floor: "G",
    floorName: "Ground Floor",
    zone: "Haute Couture Promenade",
    hours: "09:00 AM – 11:00 PM (By Appointment)",
    admissionPrice: "Complimentary for Platinum Patrons & by invitation",
    suitableFor: "VIP Visitors & Private Shoppers",
    duration: "Tailored to your itinerary",
    description: "An oasis of calm and supreme refinement. Featuring dedicated private dressing salons, champagne bar, personal shopper escorts across all 450 boutiques, and curbside private chauffeur transitions.",
    highlights: [
      "Private entrance with dedicated subterranean valet elevator",
      "Complimentary champagne, espresso, and Ladurée macarons",
      "Secure private dressing salons for discreet multi-boutique fittings",
      "Same-day packing, international tax refund facilitation & hotel transfer",
    ],
    visitorGuidelines: [
      "Advance booking recommended via our digital concierge or hotel butler.",
      "Discreet security and bodyguard waiting salons available.",
    ],
    image: "/images/concierge-lounge.jpg",
    featured: false,
  },
];
