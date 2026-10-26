import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Clock,
  Ticket,
  Users,
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
} from "lucide-react";
import { ATTRACTIONS_DATA, AttractionItem } from "@/data/attractionsData";

export const metadata = {
  title: "Experiences & World-Class Attractions | The Grand Atrium",
  description:
    "Discover monumental attractions at The Grand Atrium, Downtown Dubai: The Grand Aquarium & Underwater Zoo, Skyline Olympic Ice Arena, and Platinum Luxury Cinema Suites.",
};

export default function EntertainPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Editorial Header */}
      <div className="mb-14 space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[#c5a059]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            Leisure & Attractions
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
          Monumental Wonders & Experiences
        </h1>
        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
          From an Olympic-sized ice arena beneath radiant glass domes to a 10-million liter ocean sanctuary and private butler cinema suites, discover unrivaled entertainment in Downtown Dubai.
        </p>
      </div>

      {/* Attractions Showcase List */}
      <div className="space-y-16">
        {ATTRACTIONS_DATA.map((attraction, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={attraction.id}
              className={`rounded-2xl bg-[#14161f] border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Media Column */}
              <div
                className={`lg:col-span-7 relative min-h-[360px] md:min-h-[440px] bg-black/60 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#d8b26e] border border-[#c5a059]/40 rounded-sm">
                    {attraction.category}
                  </span>
                </div>
              </div>

              {/* Information Column */}
              <div
                className={`lg:col-span-5 p-6 md:p-10 flex flex-col justify-between ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-medium">
                      Level: {attraction.floorName} ({attraction.zone})
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-white font-semibold mt-1">
                      {attraction.name}
                    </h2>
                    <p className="text-xs text-[#d8b26e] font-serif italic mt-0.5">
                      {attraction.tagline}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
                    {attraction.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {attraction.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-3 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                      <span>{attraction.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="w-4 h-4 text-[#c5a059] shrink-0" />
                      <span>{attraction.admissionPrice}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                  <Link
                    href={`/entertain/${attraction.slug}`}
                    className="flex-1 py-3 px-4 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>View Visitor Guide & Tickets</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
