"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Car,
  Compass,
  MapPin,
  Train,
  Navigation,
  ShieldCheck,
  Phone,
  Sparkles,
  ChevronDown,
  ExternalLink,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { MALL_CONFIG } from "@/config/mallConfig";
import { VISITOR_FAQS_DATA } from "@/data/visitorFaqsData";
import FloorMapExplorer from "@/components/FloorMapExplorer";

export default function PlanYourVisitPage() {
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("All");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-hours");

  const faqCategories = [
    "All",
    "Hours & Schedules",
    "Parking & Transport",
    "Dress Code & Etiquette",
    "Guest Services & Accessibility",
    "Photography & Media",
  ];

  const filteredFaqs = VISITOR_FAQS_DATA.filter((f) => {
    if (activeFaqCategory === "All") return true;
    return f.category === activeFaqCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="w-full pb-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-12">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
              Guest Services & Guide
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
            Plan Your Extraordinary Visit
          </h1>
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
            Everything you need for a seamless arrival: live operating hours, automated parking zones, Dubai Metro connectivity, interactive level directories, and VIP concierge amenities.
          </p>
        </div>
      </div>

      {/* 1. TODAY'S OPERATING HOURS DASHBOARD */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="p-6 md:p-8 rounded-2xl bg-[#14161f] border border-[#c5a059]/30 shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  Live Mall Status
                </span>
                <div className="font-serif text-xl md:text-2xl text-white font-semibold">
                  Open Today • 10:00 AM – 12:00 Midnight
                </div>
              </div>
            </div>

            <div className="text-xs text-zinc-400">
              <span>Financial Center Road, Downtown Dubai</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1.5">
              <div className="text-[11px] uppercase tracking-wider text-[#d8b26e] font-semibold">
                Haute Couture & Retail
              </div>
              <div className="text-sm font-semibold text-white">
                {MALL_CONFIG.schedule.retail.weekday}
              </div>
              <div className="text-xs text-zinc-400">
                {MALL_CONFIG.schedule.retail.weekend}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1.5">
              <div className="text-[11px] uppercase tracking-wider text-[#d8b26e] font-semibold">
                Dining & Waterfront Terraces
              </div>
              <div className="text-sm font-semibold text-white">
                {MALL_CONFIG.schedule.dining.weekday}
              </div>
              <div className="text-xs text-zinc-400">
                {MALL_CONFIG.schedule.dining.weekend}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1.5">
              <div className="text-[11px] uppercase tracking-wider text-[#d8b26e] font-semibold">
                Attractions & Cinema
              </div>
              <div className="text-sm font-semibold text-white">
                {MALL_CONFIG.schedule.attractions.weekday}
              </div>
              <div className="text-xs text-zinc-400">
                {MALL_CONFIG.schedule.attractions.weekend}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE LEVEL MAP & WAYFINDING */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20" id="maps">
        <div className="mb-8 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            Wayfinding & Concourses
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
            Interactive Level Navigator
          </h2>
          <p className="text-xs md:text-sm text-zinc-400">
            Select a level to view its architectural zones, featured brands, and guest amenities.
          </p>
        </div>

        <FloorMapExplorer />
      </section>

      {/* 3. GETTING HERE & TRANSPORTATION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20" id="transport">
        <div className="mb-8 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            Seamless Arrival
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
            Getting to The Grand Atrium
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dubai Metro */}
          <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#d8b26e]">
              <Train className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white">
                Dubai Metro (Red Line)
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Alight at the Burj Khalifa / Dubai Mall Metro Station. A climate-controlled, glass-enclosed travellator footbridge (820m) connects directly to Lower Ground.
              </p>
            </div>
            <div className="text-[11px] text-[#c5a059] font-medium pt-2 border-t border-white/5">
              Approx. 7–9 minute walk in full AC comfort
            </div>
          </div>

          {/* Chauffeured & Valet */}
          <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#d8b26e]">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white">
                Presidential Valet Parking
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Dedicated curbside valet holding areas at Fashion Avenue Entrance, Grand Atrium West Gate, and Waterfront Promenade. Vehicle pre-cooling available upon pickup.
              </p>
            </div>
            <div className="text-[11px] text-[#c5a059] font-medium pt-2 border-t border-white/5">
              Standard Valet: AED 60 • VIP Presidential: AED 120
            </div>
          </div>

          {/* Driving & Highway Access */}
          <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#d8b26e]">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white">
                Driving Routes & Highway Off-Ramps
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Direct dedicated flyover bridge from Financial Center Road and Al Khail Road without stopping at traffic lights. Enter via Gate 1 or Gate 2.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5">
              <a
                href={MALL_CONFIG.identity.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#d8b26e] hover:underline flex items-center gap-1 font-medium"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARKING GUIDE & ZONES */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20" id="parking">
        <div className="mb-8 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            12,000 Bays
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
            Automated Ticketless Parking Zones
          </h2>
          <p className="text-xs md:text-sm text-zinc-400">
            Enjoy barrier-free, seamless license plate recognition integrated with Salik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {MALL_CONFIG.parkingZones.map((zone) => (
            <div
              key={zone.id}
              className="p-6 rounded-xl bg-[#14161f] border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-serif text-white font-semibold">
                    {zone.name}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                    {zone.statusBadge}
                  </span>
                </div>
                <div className="text-xs text-[#d8b26e] font-medium mb-3">
                  Capacity: {zone.capacity}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {zone.pricing}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-xs text-zinc-400 space-y-1">
                <div><strong className="text-zinc-300">Nearest Gate:</strong> {zone.nearestEntry}</div>
                <div><strong className="text-zinc-300">Salik Toll-Free:</strong> {zone.salikIntegrated ? "Yes (Ticketless Auto)" : "Free All Day"}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GUEST SERVICES & VIP AMENITIES */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20" id="services">
        <div className="mb-8 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            Concierge Privileges
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
            Five-Star Guest Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MALL_CONFIG.guestServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#c5a059]/20 text-[#d8b26e] rounded-sm">
                  {service.badge}
                </span>
                <Sparkles className="w-4 h-4 text-[#c5a059]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VISITOR FAQS & ETIQUETTE ACCORDION */}
      <section className="max-w-5xl mx-auto px-4 md:px-8" id="faq">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            Need Assistance?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-xs md:text-sm text-zinc-400">
            Clear guidelines on dress code, parking regulations, photography policies, and family facilities.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap mb-8">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFaqCategory(cat)}
              className={`px-3.5 py-1.5 text-xs rounded-full transition-all ${
                activeFaqCategory === cat
                  ? "bg-[#c5a059] text-[#0d0e12] font-semibold shadow-sm"
                  : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-lg bg-[#14161f] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 md:p-5 flex items-center justify-between text-left text-xs md:text-sm font-semibold text-white hover:text-[#d8b26e] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#c5a059] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 md:px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Concierge Action Box */}
        <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-white">Have a specific inquiry?</div>
            <div className="text-xs text-zinc-400">
              Our multilingual Guest Relations team is available 24/7 to assist with special arrangements.
            </div>
          </div>
          <a
            href={`tel:${MALL_CONFIG.contact.conciergeDirect}`}
            className="px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shrink-0 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 800-ATRIUM</span>
          </a>
        </div>
      </section>
    </div>
  );
}
