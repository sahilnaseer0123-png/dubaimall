export interface FAQItem {
  id: string;
  category: "Hours & Schedules" | "Parking & Transport" | "Dress Code & Etiquette" | "Guest Services & Accessibility" | "Photography & Media";
  question: string;
  answer: string;
}

export const VISITOR_FAQS_DATA: FAQItem[] = [
  {
    id: "faq-hours",
    category: "Hours & Schedules",
    question: "What are the standard opening hours for shops, dining, and attractions?",
    answer: "Retail boutiques are open Monday through Thursday from 10:00 AM to 11:00 PM, and Friday through Sunday from 10:00 AM to 12:00 Midnight. Waterfront restaurants and cafés operate until 12:00 Midnight on weekdays and until 01:00 AM on weekends. Major entertainment attractions such as The Grand Aquarium open at 10:00 AM daily.",
  },
  {
    id: "faq-parking-cost",
    category: "Parking & Transport",
    question: "How does the parking system work and is parking complimentary?",
    answer: "We offer barrier-free, ticketless parking across 12,000 bays. Parking in Grand and Fashion Avenue zones is complimentary for the first 4 hours on weekdays and the first 6 hours on weekends (Friday through Sunday). After the complimentary period, standard rates of AED 20 per hour apply. Zabeel Expansion parking remains complimentary all day with climate-controlled travellators directly connecting to the main atrium.",
  },
  {
    id: "faq-valet",
    category: "Parking & Transport",
    question: "Where are the valet parking stations and what is the fee?",
    answer: "Valet stations are situated at Fashion Avenue Entrance, Grand Atrium Main Entrance, and Waterfront Promenade. Standard valet is AED 60, while Presidential VIP Valet (featuring reserved curbside holding and vehicle pre-cooling) is AED 120. Valet is complimentary for select First & Business Class airline passengers and Platinum tier cardholders.",
  },
  {
    id: "faq-metro",
    category: "Parking & Transport",
    question: "Can I reach The Grand Atrium via the Dubai Metro?",
    answer: "Yes. The Grand Atrium is directly linked via an 820-meter air-conditioned, climate-controlled travellator footbridge from the Burj Khalifa / Dubai Mall Metro Station (Red Line). The covered walk takes approximately 7-9 minutes and arrives directly onto the Lower Ground floor.",
  },
  {
    id: "faq-dresscode",
    category: "Dress Code & Etiquette",
    question: "What is the recommended dress code when visiting the mall?",
    answer: "In respect of UAE cultural traditions and family-oriented elegance, guests are requested to wear respectful clothing that covers shoulders and knees. Swimwear, sheer fabrics, and excessively revealing clothing are strictly prohibited inside the mall concourses. Fine dining establishments enforce a smart-casual or smart-elegant dress code in the evening.",
  },
  {
    id: "faq-hands-free",
    category: "Guest Services & Accessibility",
    question: "How does the Hands-Free Shopping service work?",
    answer: "Guests can drop shopping bags at participating boutiques or any Guest Services desk. Our secure logistics team will consolidate your purchases. You can collect everything at your vehicle, the valet desk, or arrange same-day delivery directly to your Dubai hotel or residential address.",
  },
  {
    id: "faq-wheelchairs",
    category: "Guest Services & Accessibility",
    question: "Are wheelchairs and baby strollers available for loan?",
    answer: "Yes. Complimentary manual wheelchairs and lightweight premium baby strollers are available at all Concierge and Information Desks on Lower Ground, Ground Floor, and Level 1 upon presenting a valid ID. Motorized mobility scooters are also available upon advance request at the VIP Concierge.",
  },
  {
    id: "faq-prayer-rooms",
    category: "Guest Services & Accessibility",
    question: "Where are the prayer rooms and ablution facilities located?",
    answer: "Spacious, beautifully designed dedicated prayer rooms for ladies and gentlemen with complete ablution facilities are located on every floor: Lower Ground (adjacent to Marine Avenue), Level 1 (near Tech Pavilion), and Level 2 (near Cinema Suites).",
  },
  {
    id: "faq-photography",
    category: "Photography & Media",
    question: "Is personal and professional photography permitted?",
    answer: "Casual smartphone photography and personal souvenir pictures are warmly welcomed. However, commercial video recording, professional camera rigs, drones, tripods, and filming for media broadcast require advance clearance and permits from The Grand Atrium Press Office.",
  },
];
