import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  Clock,
  Sparkles,
  ArrowLeft,
  Utensils,
  Calendar,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { DINING_DATA, DiningItem } from "@/data/diningData";
import { MALL_CONFIG } from "@/config/mallConfig";
import DiningCard from "@/components/DiningCard";

interface DiningDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DINING_DATA.map((dining) => ({
    slug: dining.slug,
  }));
}

export default async function DiningDetailPage({ params }: DiningDetailPageProps) {
  const { slug } = await params;
  const dining = DINING_DATA.find((d) => d.slug === slug);

  if (!dining) {
    notFound();
  }

  const relatedDining = DINING_DATA.filter(
    (d) => d.id !== dining.id && (d.cuisine === dining.cuisine || d.diningType === dining.diningType)
  ).slice(0, 3);

  return (
    <div className="w-full pb-20">
      {/* Breadcrumb Bar */}
      <div className="border-b border-white/10 bg-[#08090b] py-3 px-4 md:px-8 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/dine" className="hover:text-white transition-colors">
            Dining Directory
          </Link>
          <span>/</span>
          <span className="text-[#d8b26e] font-medium">{dining.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <Link
          href="/dine"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dining Directory</span>
        </Link>

        {/* Hero Card */}
        <div className="relative rounded-2xl overflow-hidden bg-[#14161f] border border-white/10 mb-12 shadow-2xl">
          <div className="relative aspect-[21/9] min-h-[340px] w-full bg-black/60">
            <Image
              src={dining.image}
              alt={dining.name}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-[#14161f]/50 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#d8b26e] border border-[#c5a059]/40 rounded-sm">
                    {dining.cuisine}
                  </span>
                  <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-white/10 text-white rounded-sm backdrop-blur-md">
                    {dining.diningType}
                  </span>
                  {dining.outdoorSeating && (
                    <span className="px-3 py-1 text-[10px] font-medium bg-[#c5a059] text-[#0d0e12] rounded-sm">
                      Fountain Terrace View
                    </span>
                  )}
                  <span className="px-3 py-1 text-[10px] font-medium bg-black/60 text-zinc-300 rounded-sm">
                    {dining.priceRange}
                  </span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold">
                  {dining.name}
                </h1>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${dining.phone}`}
                  className="px-5 py-2.5 rounded-sm bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Venue</span>
                </a>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-sm bg-white/10 hover:bg-white/15 text-white text-xs font-medium uppercase tracking-wider border border-white/20 transition-all flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Reserve Table</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-white font-semibold">
                Culinary Experience & Ambience
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                {dining.description}
              </p>
            </div>

            {dining.chefNotes && (
              <div className="p-6 rounded-xl bg-gradient-to-r from-[#1c1f2c] to-[#14161f] border-l-4 border-[#c5a059] space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#d8b26e] font-semibold">
                  Chef&apos;s Culinary Philosophy
                </span>
                <p className="font-serif italic text-sm md:text-base text-zinc-200">
                  &ldquo;{dining.chefNotes}&rdquo;
                </p>
              </div>
            )}

            {/* Signature Dishes */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-white font-semibold">
                Signature Culinary Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {dining.signatureDishes.map((dish, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#14161f] border border-white/10 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2 text-[#c5a059] mb-2">
                      <Utensils className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">
                        Course 0{idx + 1}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-white">{dish}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Practical Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-5">
              <h3 className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold pb-3 border-b border-white/10">
                Restaurant Details
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Floor & Location</div>
                    <div className="text-zinc-400 mt-0.5">{dining.locationDetails}</div>
                    <div className="text-zinc-400">Level: {dining.floorName}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Opening Hours</div>
                    <div className="text-zinc-400 mt-0.5">{dining.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Dress Code</div>
                    <div className="text-zinc-400 mt-0.5">{dining.dressCode}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Table Reservations</div>
                    <a
                      href={`tel:${dining.phone}`}
                      className="text-[#d8b26e] hover:underline mt-0.5 block"
                    >
                      {dining.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-3 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Priority Table</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Dining */}
        {relatedDining.length > 0 && (
          <div className="pt-12 border-t border-white/10">
            <h3 className="font-serif text-2xl text-white font-semibold mb-6">
              More Gastronomy & Lounges
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDining.map((item) => (
                <DiningCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
