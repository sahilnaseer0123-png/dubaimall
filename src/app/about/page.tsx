import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Compass,
  Award,
  Leaf,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { MALL_CONFIG } from "@/config/mallConfig";

export const metadata = {
  title: "About The Grand Atrium | Architectural Vision & Heritage",
  description:
    "Discover the architectural wonder, sustainable design ethos, and luxury retail legacy of The Grand Atrium in Downtown Dubai.",
};

export default function AboutPage() {
  return (
    <div className="w-full pb-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-12">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
              Heritage & Architecture
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
            An Architectural Icon in Downtown Dubai
          </h1>
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
            Conceived as a contemporary tribute to classical grand gallerias and Islamic geometric symmetry, The Grand Atrium represents the pinnacle of international retail engineering and cultural curation.
          </p>
        </div>
      </div>

      {/* Hero Architectural Image */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="relative aspect-[21/9] min-h-[360px] md:min-h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="/images/hero-atrium.jpg"
            alt="The Grand Atrium vaulted skylight and architectural concourses"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 max-w-xl text-xs text-white">
            <span className="text-[10px] uppercase tracking-widest text-[#d8b26e] font-semibold block mb-1">
              Architectural Landmark
            </span>
            <p className="font-serif text-lg md:text-2xl font-light leading-snug">
              A 42-meter vaulted glass conservatory skylight casting radiant desert daylight over Italian Calacatta marble terraces.
            </p>
          </div>
        </div>
      </section>

      {/* The Vision & Design Ethos */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
                Design Philosophy
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight">
              Where Light, Proportion & Grandeur Converge
            </h2>
            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
              Commissioned by leading international master developers, The Grand Atrium was engineered to transcend conventional retail concepts. Rather than enclosed corridors, the mall unfolds as an interconnected sequence of light-filled urban plazas, shaded promenades, and cascading water features.
            </p>
            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
              Every detail—from the bronze mashrabiya screening that diffuses afternoon sunlight to the acoustic resonance beneath the central rotunda—has been calibrated to cultivate tranquility, elegance, and awe.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-2">
              <div className="font-serif text-3xl md:text-4xl text-[#d8b26e] font-semibold">
                12M
              </div>
              <div className="text-xs font-semibold text-white">
                Sq. Ft. Built-Up Area
              </div>
              <p className="text-[11px] text-zinc-400">
                Spanning five distinct climate-controlled retail and lifestyle tiers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-2">
              <div className="font-serif text-3xl md:text-4xl text-[#d8b26e] font-semibold">
                450+
              </div>
              <div className="text-xs font-semibold text-white">
                Luxury Maisons & Boutiques
              </div>
              <p className="text-[11px] text-zinc-400">
                The world&apos;s densest concentration of multi-level haute couture flagships.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-2">
              <div className="font-serif text-3xl md:text-4xl text-[#d8b26e] font-semibold">
                85+
              </div>
              <div className="text-xs font-semibold text-white">
                Gastronomy Venues
              </div>
              <p className="text-[11px] text-zinc-400">
                Including Michelin-starred chef concepts and waterfront fountain terraces.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-2">
              <div className="font-serif text-3xl md:text-4xl text-[#d8b26e] font-semibold">
                100%
              </div>
              <div className="text-xs font-semibold text-white">
                Renewable Energy Goal
              </div>
              <p className="text-[11px] text-zinc-400">
                Certified LEED Platinum commercial destination with solar wing shades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Environmental Stewardship */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="rounded-2xl bg-gradient-to-r from-[#14161f] via-[#1c1f2c] to-[#14161f] border border-[#c5a059]/30 p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                  LEED Platinum Certified
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-white font-normal">
                Pioneering Sustainable Luxury Infrastructure
              </h2>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
                The Grand Atrium demonstrates that monumental retail architecture can coexist with environmental responsibility. Our automated solar kinetic louvers adjust dynamically throughout the day, mitigating solar thermal gain by 38% while maximizing natural illumination.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-300">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>100% Greywater recycling for botanical irrigation</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>District cooling with thermal energy storage</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 p-6 rounded-xl bg-black/40 border border-white/10 text-center space-y-3">
              <Award className="w-12 h-12 text-[#d8b26e] mx-auto" />
              <div className="font-serif text-lg text-white font-semibold">
                Global Architecture & Retail Award
              </div>
              <p className="text-xs text-zinc-400">
                Recognized by the International Council of Shopping Centers (ICSC) for Best Mega-Destination Architecture & Sustainable Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
          Experience The Grand Atrium
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/shop"
            className="px-8 py-3.5 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
          >
            Explore 450+ Boutiques
          </Link>
          <Link
            href="/plan"
            className="px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider border border-white/20 rounded-sm transition-all"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
