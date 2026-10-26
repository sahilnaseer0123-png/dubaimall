"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Sparkles, Filter, ArrowRight } from "lucide-react";
import { EVENTS_DATA, EventItem } from "@/data/eventsData";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Fashion Week",
    "Haute Horlogerie",
    "Gastronomy",
    "Art & Culture",
    "Seasonal Campaign",
  ];

  const filteredEvents = EVENTS_DATA.filter((e) => {
    if (selectedType === "Events" && e.type !== "Event") return false;
    if (selectedType === "Privileges" && e.type !== "Privilege & Offer") return false;
    if (selectedCategory !== "All" && e.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Editorial Header */}
      <div className="mb-12 space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[#c5a059]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            Cultural Season & Offers
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
          What&apos;s Happening at The Atrium
        </h1>
        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
          Experience exclusive Haute Couture runway presentations, world-class horological exhibitions, seasonal dining privileges, and the evening fountain symphony.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-[#14161f] border border-white/10 rounded-xl p-5 mb-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Type Segmented Controls */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 shrink-0">
          {[
            { id: "All", label: "All Happenings" },
            { id: "Events", label: "Cultural Events" },
            { id: "Privileges", label: "Exclusive Privileges" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedType(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                selectedType === tab.id
                  ? "bg-[#c5a059] text-[#0d0e12] shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories scroll */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded-full transition-all shrink-0 ${
                selectedCategory === cat
                  ? "bg-white/20 text-white font-semibold"
                  : "bg-white/5 hover:bg-white/10 text-zinc-400 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Calendar Reminder Banner */}
      <div className="p-8 rounded-xl bg-gradient-to-r from-[#14161f] via-[#1c1f2c] to-[#14161f] border border-[#c5a059]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#d8b26e] font-semibold">
            Private VIP RSVP
          </span>
          <h3 className="font-serif text-xl md:text-2xl text-white font-semibold">
            Hosting an Exclusive Reception or Private Showing?
          </h3>
          <p className="text-xs text-zinc-400 max-w-xl">
            Our private events atelier coordinates directly with luxury brands, media organizations, and private family offices for bespoke atrium events.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shrink-0"
        >
          Inquire for Event Hosting
        </Link>
      </div>
    </div>
  );
}
