import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Sparkles, ArrowUpRight } from "lucide-react";
import { StoreItem } from "@/data/storesData";

interface StoreCardProps {
  store: StoreItem;
}

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <div className="group relative bg-[#14161f] border border-white/10 hover:border-[#c5a059]/40 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        <Image
          src={store.image}
          alt={store.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-transparent to-transparent opacity-80" />

        {/* Floor & Category Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#d8b26e] border border-[#c5a059]/30 rounded-sm">
            {store.floorName}
          </span>
          {store.vipStyling && (
            <span className="px-2 py-0.5 text-[10px] font-medium bg-[#c5a059] text-[#0d0e12] rounded-sm flex items-center gap-1 shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              VIP Salon
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-[#c5a059] font-medium mb-1">
            {store.category} • {store.subCategory}
          </div>
          <h3 className="font-serif text-lg font-semibold text-white group-hover:text-[#d8b26e] transition-colors mb-2">
            {store.name}
          </h3>
          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
            {store.description}
          </p>
        </div>

        <div className="pt-3 border-t border-white/5 space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="flex items-center gap-1 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{store.zone}</span>
            </span>
            <span className="text-[11px] text-zinc-400">
              {store.hours.split(" ")[0]} - {store.hours.split(" ")[2]}
            </span>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <a
              href={`tel:${store.phone}`}
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c5a059]" />
              <span>Call Boutique</span>
            </a>

            <Link
              href={`/shop/${store.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#d8b26e] hover:text-white transition-colors"
            >
              <span>Explore Boutique</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
