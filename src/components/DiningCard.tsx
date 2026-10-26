"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { DiningItem } from "@/data/diningData";
import ReservationModal from "./ReservationModal";

interface DiningCardProps {
  item: DiningItem;
}

export default function DiningCard({ item }: DiningCardProps) {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      <div className="group relative bg-[#14161f] border border-white/10 hover:border-[#c5a059]/40 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
        {/* Image & Badges */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-transparent to-transparent opacity-80" />

          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#d8b26e] border border-[#c5a059]/30 rounded-sm">
              {item.diningType}
            </span>
            {item.outdoorSeating && (
              <span className="px-2 py-0.5 text-[10px] font-medium bg-[#c5a059]/90 text-[#0d0e12] rounded-sm">
                Terrace View
              </span>
            )}
          </div>

          <div className="absolute bottom-3 right-3 text-[11px] font-semibold text-white bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
            {item.priceRange}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-[#c5a059] font-medium mb-1">
              {item.cuisine} • {item.floorName}
            </div>
            <h3 className="font-serif text-lg font-semibold text-white group-hover:text-[#d8b26e] transition-colors mb-2">
              {item.name}
            </h3>
            <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Signature dishes pills */}
            <div className="space-y-1 mb-4">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">Signature Highlights:</span>
              <div className="flex flex-wrap gap-1">
                {item.signatureDishes.slice(0, 2).map((dish, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-zinc-300"
                  >
                    {dish}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{item.zone}</span>
              </span>
              <span className="text-[11px] text-zinc-400">Dress: {item.dressCode}</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => setReservationOpen(true)}
                className="flex-1 py-2 px-3 rounded-sm bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>

              <Link
                href={`/dine/${item.slug}`}
                className="py-2 px-3 rounded-sm bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-colors flex items-center justify-center gap-1"
                aria-label={`View details for ${item.name}`}
              >
                <span>Menu</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
        restaurantName={item.name}
      />
    </>
  );
}
