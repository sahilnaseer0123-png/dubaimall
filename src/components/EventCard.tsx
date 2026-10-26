import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { EventItem } from "@/data/eventsData";

interface EventCardProps {
  event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="group relative bg-[#14161f] border border-white/10 hover:border-[#c5a059]/40 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-transparent to-transparent opacity-80" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#d8b26e] border border-[#c5a059]/30 rounded-sm">
            {event.type}
          </span>
          <span
            className={`px-2 py-0.5 text-[10px] font-medium rounded-sm ${
              event.status === "Now Showing"
                ? "bg-emerald-500/90 text-black"
                : event.status === "Upcoming"
                ? "bg-[#c5a059] text-black"
                : "bg-amber-500/90 text-black"
            }`}
          >
            {event.status}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-[#c5a059] font-medium mb-1">
            {event.category}
          </div>
          <h3 className="font-serif text-lg font-semibold text-white group-hover:text-[#d8b26e] transition-colors mb-2">
            {event.title}
          </h3>
          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
            {event.description}
          </p>
        </div>

        <div className="pt-3 border-t border-white/5 space-y-3">
          <div className="space-y-1 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{event.dateRange}</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{event.location}</span>
            </div>
          </div>

          <Link
            href={`/events/${event.slug}`}
            className="w-full py-2.5 px-3 rounded-sm bg-white/5 hover:bg-[#c5a059] hover:text-[#0d0e12] text-white text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-[#c5a059] transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
          >
            <span>{event.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
