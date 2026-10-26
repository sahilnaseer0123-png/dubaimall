"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { MALL_CONFIG } from "@/config/mallConfig";
import { STORES_DATA } from "@/data/storesData";
import { DINING_DATA } from "@/data/diningData";

type FloorCode = "LG" | "G" | "L1" | "L2";

export default function FloorMapExplorer() {
  const [activeFloorCode, setActiveFloorCode] = useState<FloorCode>("G");

  const currentFloor =
    MALL_CONFIG.floors.find((f) => f.code === activeFloorCode) ||
    MALL_CONFIG.floors[1];

  const storesOnFloor = STORES_DATA.filter((s) => s.floor === activeFloorCode);
  const diningOnFloor = DINING_DATA.filter((d) => d.floor === activeFloorCode);

  return (
    <div className="bg-[#14161f] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
      {/* Floor Level Selector Header */}
      <div className="bg-[#0d0e12] border-b border-white/10 p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-4 h-4 text-[#c5a059]" />
            <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-semibold">
              Interactive Wayfinding
            </span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl text-white font-semibold">
            {currentFloor.name} ({currentFloor.code})
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">{currentFloor.shortDescription}</p>
        </div>

        {/* Floor Buttons */}
        <div className="flex items-center gap-1.5 bg-black/40 p-1.5 rounded-lg border border-white/10 shrink-0">
          {MALL_CONFIG.floors.map((floor) => {
            const isActive = floor.code === activeFloorCode;
            return (
              <button
                key={floor.id}
                onClick={() => setActiveFloorCode(floor.code as FloorCode)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all ${
                  isActive
                    ? "bg-[#c5a059] text-[#0d0e12] shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{floor.code}</span>
                <span className="hidden sm:inline ml-1 font-normal text-[11px] opacity-80">
                  {floor.name.replace(" Floor", "").replace("Level ", "L")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Floor Visual & Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Interactive Schematic Diagram */}
        <div className="lg:col-span-7 p-6 md:p-8 bg-gradient-to-br from-[#0e1017] to-[#14161f] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-4 pb-2 border-b border-white/10">
              <span className="uppercase tracking-wider font-medium text-[#c5a059]">
                Architectural Zones & Concourses
              </span>
              <span>Level Code: {currentFloor.code}</span>
            </div>

            {/* Stylized Visual Layout representation of the Floor */}
            <div className="relative aspect-[16/9] w-full rounded-lg bg-[#08090b] border border-white/10 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#c5a059 1px, transparent 1px), radial-gradient(#c5a059 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 12px 12px",
                }}
              />

              {/* Floor Plan Zones */}
              <div className="grid grid-cols-2 gap-3 relative z-10 flex-1">
                {currentFloor.zones.map((zone, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-md bg-[#161824]/90 border border-[#c5a059]/20 hover:border-[#c5a059]/60 hover:bg-[#1a1e2c] transition-all flex flex-col justify-between group"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#d8b26e] font-semibold">
                        Zone 0{idx + 1}
                      </span>
                      <MapPin className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#c5a059] transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#d8b26e] transition-colors">
                        {zone}
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">
                        {idx === 0 && "Grand Atrium Direct Access"}
                        {idx === 1 && "Central Rotunda & Elevators"}
                        {idx === 2 && "Valet & VIP Transit Portals"}
                        {idx === 3 && "Terrace Overlook & Escalators"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wayfinding key at bottom */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] text-zinc-400 gap-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#c5a059]" /> VIP Concierge
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Prayer Rooms
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-400" /> High-Speed Elevators
                  </span>
                </div>
                <span className="text-zinc-500">Interactive Floor Navigation Map</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-zinc-400">Primary Categories on {currentFloor.code}:</span>
            {currentFloor.primaryCategories.map((cat, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300 text-[11px]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Directory Highlights for This Floor */}
        <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#c5a059] font-semibold mb-3 flex items-center justify-between">
              <span>Boutiques on {currentFloor.name}</span>
              <span className="text-zinc-400 text-[11px] font-normal">
                {storesOnFloor.length} Featured
              </span>
            </h4>

            {storesOnFloor.length > 0 ? (
              <div className="space-y-2 mb-6">
                {storesOnFloor.slice(0, 4).map((store) => (
                  <Link
                    key={store.id}
                    href={`/shop/${store.slug}`}
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#c5a059]/30 flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#d8b26e] transition-colors">
                        {store.name}
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        {store.category} • {store.locationDetails}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-zinc-500 mb-6">
                Specialty venues and attractions occupy this level.
              </p>
            )}

            {/* Dining Highlights on this floor */}
            {diningOnFloor.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#c5a059] font-semibold mb-3 flex items-center justify-between">
                  <span>Dining on {currentFloor.name}</span>
                  <span className="text-zinc-400 text-[11px] font-normal">
                    {diningOnFloor.length} Featured
                  </span>
                </h4>
                <div className="space-y-2 mb-6">
                  {diningOnFloor.slice(0, 2).map((dining) => (
                    <Link
                      key={dining.id}
                      href={`/dine/${dining.slug}`}
                      className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#c5a059]/30 flex items-center justify-between transition-colors group"
                    >
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-[#d8b26e] transition-colors">
                          {dining.name}
                        </div>
                        <div className="text-[10px] text-zinc-400">
                          {dining.cuisine} • {dining.diningType}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10">
            <Link
              href={`/shop?floor=${currentFloor.code}`}
              className="w-full py-2.5 px-4 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All Venues on {currentFloor.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
