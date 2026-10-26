import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Clock,
  Ticket,
  Users,
  MapPin,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Phone,
} from "lucide-react";
import { ATTRACTIONS_DATA, AttractionItem } from "@/data/attractionsData";
import { MALL_CONFIG } from "@/config/mallConfig";

interface AttractionDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ATTRACTIONS_DATA.map((attraction) => ({
    slug: attraction.slug,
  }));
}

export default async function AttractionDetailPage({
  params,
}: AttractionDetailPageProps) {
  const { slug } = await params;
  const attraction = ATTRACTIONS_DATA.find((a) => a.slug === slug);

  if (!attraction) {
    notFound();
  }

  return (
    <div className="w-full pb-20">
      {/* Breadcrumb Bar */}
      <div className="border-b border-white/10 bg-[#08090b] py-3 px-4 md:px-8 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/entertain" className="hover:text-white transition-colors">
            Experiences
          </Link>
          <span>/</span>
          <span className="text-[#d8b26e] font-medium">{attraction.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <Link
          href="/entertain"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Experiences</span>
        </Link>

        {/* Hero Card */}
        <div className="relative rounded-2xl overflow-hidden bg-[#14161f] border border-white/10 mb-12 shadow-2xl">
          <div className="relative aspect-[21/9] min-h-[360px] w-full bg-black/60">
            <Image
              src={attraction.image}
              alt={attraction.name}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-[#14161f]/50 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#d8b26e] border border-[#c5a059]/40 rounded-sm">
                    {attraction.category}
                  </span>
                  <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-white/10 text-white rounded-sm backdrop-blur-md">
                    Level: {attraction.floorName}
                  </span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold">
                  {attraction.name}
                </h1>
                <p className="text-xs md:text-sm text-[#d8b26e] font-serif italic">
                  {attraction.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-sm bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
                >
                  <Ticket className="w-4 h-4" />
                  <span>VIP Passes & Tickets</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-white font-semibold">
                Overview & Experience
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                {attraction.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-[#d8b26e] font-semibold">
                Attraction Highlights
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-zinc-300">
                {attraction.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visitor Guidelines */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-white font-semibold">
                Visitor Guidelines & Etiquette
              </h3>
              <div className="space-y-2">
                {attraction.visitorGuidelines.map((guide, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#14161f] border border-white/10 flex items-start gap-3 text-xs text-zinc-300"
                  >
                    <AlertCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{guide}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visitor Essentials Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-5">
              <h3 className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold pb-3 border-b border-white/10">
                Visitor Essentials
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Opening Hours</div>
                    <div className="text-zinc-400 mt-0.5">{attraction.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ticket className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Admission Rates</div>
                    <div className="text-zinc-400 mt-0.5">{attraction.admissionPrice}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Suitable For</div>
                    <div className="text-zinc-400 mt-0.5">{attraction.suitableFor}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Location inside Mall</div>
                    <div className="text-zinc-400 mt-0.5">
                      Level: {attraction.floorName} ({attraction.zone})
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link
                  href="/contact"
                  className="w-full py-3 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Priority Passes</span>
                </Link>
                <a
                  href={`tel:${MALL_CONFIG.contact.conciergeDirect}`}
                  className="w-full py-2.5 rounded bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-medium border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#c5a059]" />
                  <span>Concierge Booking Hotline</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
