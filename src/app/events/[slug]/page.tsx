import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Share2,
  Ticket,
} from "lucide-react";
import { EVENTS_DATA, EventItem } from "@/data/eventsData";
import EventCard from "@/components/EventCard";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return EVENTS_DATA.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = EVENTS_DATA.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const otherEvents = EVENTS_DATA.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <div className="w-full pb-20">
      {/* Breadcrumb Bar */}
      <div className="border-b border-white/10 bg-[#08090b] py-3 px-4 md:px-8 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/events" className="hover:text-white transition-colors">
            What&apos;s On
          </Link>
          <span>/</span>
          <span className="text-[#d8b26e] font-medium">{event.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Happenings</span>
        </Link>

        {/* Hero Card */}
        <div className="relative rounded-2xl overflow-hidden bg-[#14161f] border border-white/10 mb-12 shadow-2xl">
          <div className="relative aspect-[21/9] min-h-[340px] w-full bg-black/60">
            <Image
              src={event.image}
              alt={event.title}
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
                    {event.type}
                  </span>
                  <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-[#c5a059] text-[#0d0e12] rounded-sm">
                    {event.status}
                  </span>
                  <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-white/10 text-white rounded-sm backdrop-blur-md">
                    {event.category}
                  </span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold">
                  {event.title}
                </h1>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-sm bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
                >
                  <Ticket className="w-4 h-4" />
                  <span>{event.ctaText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-white font-semibold">
                Event Overview
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                {event.description}
              </p>
            </div>

            {/* Key Schedule / Details */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-[#d8b26e] font-semibold">
                Program & Exhibition Highlights
              </h3>
              <ul className="space-y-2.5 text-xs md:text-sm text-zinc-300">
                {event.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Schedule & Venue Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-5">
              <h3 className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold pb-3 border-b border-white/10">
                Date & Location
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Dates & Timings</div>
                    <div className="text-zinc-400 mt-0.5">{event.dateRange}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Location inside Mall</div>
                    <div className="text-zinc-400 mt-0.5">{event.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full py-3 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Request VIP Registration</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other happenings */}
        {otherEvents.length > 0 && (
          <div className="pt-12 border-t border-white/10">
            <h3 className="font-serif text-2xl text-white font-semibold mb-6">
              More Happenings & Privileges
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherEvents.map((item) => (
                <EventCard key={item.id} event={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
