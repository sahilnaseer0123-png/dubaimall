"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  ArrowRight,
  Sparkles,
  Clock,
  Car,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { MALL_CONFIG } from "@/config/mallConfig";
import { STORES_DATA } from "@/data/storesData";
import { DINING_DATA } from "@/data/diningData";
import { ATTRACTIONS_DATA } from "@/data/attractionsData";
import { EVENTS_DATA } from "@/data/eventsData";
import StoreCard from "@/components/StoreCard";
import DiningCard from "@/components/DiningCard";
import EventCard from "@/components/EventCard";
import FloorMapExplorer from "@/components/FloorMapExplorer";

export default function HomePage() {
  const [selectedStoreCategory, setSelectedStoreCategory] = useState<string>("All");

  const categories = [
    "All",
    "Haute Couture",
    "Fine Jewelry & Watches",
    "Beauty & Fragrance",
    "Tech & Lifestyle",
  ];

  const filteredStores =
    selectedStoreCategory === "All"
      ? STORES_DATA.filter((s) => s.featured).slice(0, 6)
      : STORES_DATA.filter((s) => s.category === selectedStoreCategory).slice(0, 6);

  const featuredDining = DINING_DATA.filter((d) => d.featured).slice(0, 3);
  const featuredEvents = EVENTS_DATA.slice(0, 3);
  const featuredAttractions = ATTRACTIONS_DATA.slice(0, 3);

  return (
    <div className="w-full flex flex-col space-y-24 md:space-y-32 pb-24">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Hero Image with Next.js priority optimization */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-atrium.jpg"
            alt="The Grand Atrium Mall Downtown Dubai Interior View"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center scale-105 animate-in fade-in zoom-in duration-1000"
          />
          {/* Dual luxury gradients for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/60 to-[#0d0e12]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e12]/80 via-transparent to-[#0d0e12]/80" />
        </div>

        {/* Hero Copy & CTAs */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center pt-24 pb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#c5a059]/40 text-[#d8b26e] text-xs font-semibold uppercase tracking-[0.25em] mb-6 shadow-lg animate-in fade-in slide-in-from-bottom-3 duration-500">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Downtown Dubai Landmark</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight leading-[1.08] mb-6 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            Where Extraordinary Meets <span className="gold-gradient-text italic font-serif">Refinement</span>
          </h1>

          <p className="text-sm md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-5 duration-900">
            Immerse yourself in Dubai&apos;s ultimate sanctuary of luxury fashion, world-class gastronomy, and iconic cultural marvels beneath a soaring glass architectural sky.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-8 py-4 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-[0.18em] rounded-sm transition-all shadow-xl hover:shadow-[#c5a059]/30 flex items-center justify-center gap-2 group"
            >
              <span>Explore 450+ Boutiques</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/plan"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-[0.18em] rounded-sm border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#c5a059]" />
              <span>Plan Your Visit</span>
            </Link>
          </div>

          {/* Fast Navigation Quick-Pill Links */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400">
            <span className="text-zinc-500 uppercase tracking-widest text-[10px] mr-1">Quick Links:</span>
            {[
              { label: "Haute Couture Avenue", href: "/shop?category=Haute+Couture" },
              { label: "Waterfront Dining", href: "/dine?type=Waterfront+Terrace" },
              { label: "Grand Aquarium", href: "/entertain/grand-aquarium" },
              { label: "Interactive Floor Maps", href: "/plan" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="px-3 py-1 rounded-full bg-black/40 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors text-[11px]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Floating Metrics Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#0d0e12]/85 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
              {MALL_CONFIG.stats.map((stat, i) => (
                <div key={i} className="pt-2 sm:pt-0 sm:px-4">
                  <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-[#d8b26e]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL DISCOVERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
              Curated Destinations
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-normal leading-tight max-w-xl">
              An Architectural Marvel of World-Class Experiences
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 max-w-md leading-relaxed">
              Discover a universe of distinct realms seamlessly interconnected under radiant glass canopies in Downtown Dubai.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Feature 1: Haute Couture Promenade (Prominent large card) */}
          <div className="md:col-span-8 group relative rounded-xl overflow-hidden bg-[#14161f] border border-white/10 min-h-[460px] flex flex-col justify-end p-6 md:p-10 shadow-2xl transition-all duration-500 hover:border-[#c5a059]/50">
            <Image
              src="/images/fashion-avenue.jpg"
              alt="Haute Couture Promenade Flagship Boutiques"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/60 to-transparent" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#d8b26e] bg-black/70 border border-[#c5a059]/30 rounded-sm backdrop-blur-md">
                Ground Floor • Haute Couture Promenade
              </span>
              <h3 className="font-serif text-2xl md:text-4xl text-white font-semibold">
                The Haute Couture Promenade
              </h3>
              <p className="text-xs md:text-sm text-zinc-300 max-w-xl leading-relaxed">
                Home to the world’s most prestigious fashion houses. Discover multi-level flagship boutiques from Chanel, Dior, Hermès, Louis Vuitton, and Cartier, designed by acclaimed international interior architects.
              </p>
              <div className="pt-2">
                <Link
                  href="/shop?category=Haute+Couture"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d8b26e] group-hover:text-white transition-colors"
                >
                  <span>Explore Fashion Avenue</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 2: Waterfront Gastronomy */}
          <div className="md:col-span-4 group relative rounded-xl overflow-hidden bg-[#14161f] border border-white/10 min-h-[460px] flex flex-col justify-end p-6 md:p-8 shadow-2xl transition-all duration-500 hover:border-[#c5a059]/50">
            <Image
              src="/images/waterfront-dining.jpg"
              alt="Waterfront Gastronomy and Terrace Dining"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/60 to-transparent" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#d8b26e] bg-black/70 border border-[#c5a059]/30 rounded-sm backdrop-blur-md">
                Waterfront Promenade
              </span>
              <h3 className="font-serif text-2xl text-white font-semibold">
                Gastronomy by the Lake
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Michelin-starred concepts and open-air dining terraces overlooking the mesmerizing fountain symphony and evening light projections.
              </p>
              <div className="pt-2">
                <Link
                  href="/dine"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d8b26e] group-hover:text-white transition-colors"
                >
                  <span>View All 85+ Dining Venues</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 3: The Grand Aquarium & Marine Realm */}
          <div className="md:col-span-4 group relative rounded-xl overflow-hidden bg-[#14161f] border border-white/10 min-h-[420px] flex flex-col justify-end p-6 md:p-8 shadow-2xl transition-all duration-500 hover:border-[#c5a059]/50">
            <Image
              src="/images/grand-aquarium.jpg"
              alt="The Grand Aquarium Ocean Tank"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/60 to-transparent" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#d8b26e] bg-black/70 border border-[#c5a059]/30 rounded-sm backdrop-blur-md">
                Marine Sanctuary • Lower Ground
              </span>
              <h3 className="font-serif text-2xl text-white font-semibold">
                The Grand Aquarium
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                A 10-million liter marine marvel featuring over 300 sharks and rays swimming overhead in a 270-degree transparent tunnel.
              </p>
              <div className="pt-2">
                <Link
                  href="/entertain/grand-aquarium"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d8b26e] group-hover:text-white transition-colors"
                >
                  <span>Discover Attraction</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 4: Skyline Olympic Ice Arena */}
          <div className="md:col-span-4 group relative rounded-xl overflow-hidden bg-[#14161f] border border-white/10 min-h-[420px] flex flex-col justify-end p-6 md:p-8 shadow-2xl transition-all duration-500 hover:border-[#c5a059]/50">
            <Image
              src="/images/ice-rink.jpg"
              alt="Skyline Olympic Ice Arena"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/60 to-transparent" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#d8b26e] bg-black/70 border border-[#c5a059]/30 rounded-sm backdrop-blur-md">
                Level 2 • Entertainment Deck
              </span>
              <h3 className="font-serif text-2xl text-white font-semibold">
                Skyline Ice Arena
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Glide beneath the majestic sunlit glass dome on an Olympic-regulation ice arena featuring DJ sunset sessions and figure skating academies.
              </p>
              <div className="pt-2">
                <Link
                  href="/entertain/olympic-ice-arena"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d8b26e] group-hover:text-white transition-colors"
                >
                  <span>View Skating Sessions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 5: Platinum Cinema Suites & VIP Lounge */}
          <div className="md:col-span-4 group relative rounded-xl overflow-hidden bg-[#14161f] border border-white/10 min-h-[420px] flex flex-col justify-end p-6 md:p-8 shadow-2xl transition-all duration-500 hover:border-[#c5a059]/50">
            <Image
              src="/images/cinema-suites.jpg"
              alt="Platinum Luxury Cinema Suites"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/60 to-transparent" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#d8b26e] bg-black/70 border border-[#c5a059]/30 rounded-sm backdrop-blur-md">
                Level 2 • Concourse
              </span>
              <h3 className="font-serif text-2xl text-white font-semibold">
                Platinum Cinema Suites
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Fourteen bespoke private screening rooms with heated leather recliners, cashmere blankets, and personal five-star butler service.
              </p>
              <div className="pt-2">
                <Link
                  href="/entertain/platinum-cinema-suites"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d8b26e] group-hover:text-white transition-colors"
                >
                  <span>Reserve Suites</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORE DIRECTORY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
                450+ Luxury Flagships
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-normal">
              Featured Boutiques & Maisons
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedStoreCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                  selectedStoreCategory === cat
                    ? "bg-[#c5a059] text-[#0d0e12] font-semibold shadow-md"
                    : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>

        {/* Directory CTA */}
        <div className="text-center pt-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-[#c5a059] text-white hover:text-[#0d0e12] border border-[#c5a059]/40 hover:border-[#c5a059] rounded-sm text-xs font-semibold uppercase tracking-[0.18em] transition-all"
          >
            <span>Explore Complete Store Directory (A – Z)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. WATERFRONT & FINE DINING SECTION */}
      <section className="bg-gradient-to-b from-[#0d0e12] via-[#14161f] to-[#0d0e12] py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
                  World-Class Gastronomy
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-normal">
                Michelin Caliber & Waterfront Dining
              </h2>
            </div>
            <Link
              href="/dine"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d8b26e] hover:text-white transition-colors shrink-0"
            >
              <span>Explore All 85+ Dining Venues</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredDining.map((item) => (
              <DiningCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE FLOOR MAP EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
              Wayfinding & Navigation
            </span>
            <span className="h-px w-8 bg-[#c5a059]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-normal mb-3">
            Explore Levels & Concourses
          </h2>
          <p className="text-xs md:text-sm text-zinc-400">
            Navigate between Lower Ground, Ground Level, Level 1, and Level 2 to discover key retail zones, dining promenades, and guest amenities.
          </p>
        </div>

        <FloorMapExplorer />
      </section>

      {/* 6. WHAT'S HAPPENING / EVENTS & OFFERS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
                Cultural Season & Highlights
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-normal">
              What&apos;s Happening at The Atrium
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d8b26e] hover:text-white transition-colors shrink-0"
          >
            <span>View All Exhibitions & Privileges</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* 7. PLAN YOUR VISIT / VISITOR ESSENTIALS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="bg-[#14161f] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
                  Visitor Information
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight">
                Plan Your Visit to The Grand Atrium
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                Conveniently situated in Downtown Dubai along Financial Center Road. Whether arriving by chauffeured limousine, Dubai Metro, or personal vehicle, experience frictionless arrival.
              </p>

              {/* Practical Quick Info Cards */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">Opening Hours Today</div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Boutiques: 10:00 AM – 11:00 PM (12:00 AM Fri–Sun)
                    </div>
                    <div className="text-xs text-zinc-400">
                      Dining & Cafés: 10:00 AM – 12:00 Midnight (01:00 AM Fri–Sun)
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      12,000 Bays & Automated Parking
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Complimentary for the first 4 hours (6 hours on weekends). Salik integrated ticketless exit.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Hands-Free Shopping & VIP Valet
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Drop purchases at any store for vehicle delivery or direct transfer to your Dubai hotel.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/plan"
                  className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
                >
                  Full Visitor Guide & FAQs
                </Link>
                <a
                  href={MALL_CONFIG.identity.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider rounded-sm border border-white/10 transition-all flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Visual Lounge Image */}
            <div className="lg:col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/concierge-lounge.jpg"
                alt="VIP Concierge Reception and Guest Lounge"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-black/75 backdrop-blur-md border border-[#c5a059]/30 text-xs">
                <div className="text-[#d8b26e] font-semibold uppercase tracking-wider text-[10px] mb-1">
                  VIP Concierge Desk • Ground Floor
                </div>
                <div className="text-white font-medium">
                  Luggage holding, wheelchair loans, electric buggies & personal shopper escorts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
