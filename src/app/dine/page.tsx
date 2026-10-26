"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  X,
  Utensils,
} from "lucide-react";
import { DINING_DATA } from "@/data/diningData";
import DiningCard from "@/components/DiningCard";

function DiningDirectoryContent() {
  const searchParams = useSearchParams();
  const initialCuisine = searchParams.get("cuisine") || "All";
  const initialType = searchParams.get("type") || "All";
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCuisine, setSelectedCuisine] = useState(initialCuisine);
  const [selectedType, setSelectedType] = useState(initialType);
  const [outdoorOnly, setOutdoorOnly] = useState(false);

  const cuisines = [
    "All",
    "French Fine Dining",
    "Contemporary Japanese",
    "Italian & Mediterranean",
    "Artisanal Middle Eastern",
    "Cafés & Patisseries",
    "Steakhouse & Grill",
  ];

  const diningTypes = [
    "All",
    "Waterfront Terrace",
    "Fine Dining",
    "Artisanal Café",
    "Bistro & Lounge",
  ];

  const filteredDining = DINING_DATA.filter((item) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchesName = item.name.toLowerCase().includes(q);
      const matchesCuisine = item.cuisine.toLowerCase().includes(q);
      const matchesDesc = item.description.toLowerCase().includes(q);
      const matchesDish = item.signatureDishes.some((d) => d.toLowerCase().includes(q));
      if (!matchesName && !matchesCuisine && !matchesDesc && !matchesDish) {
        return false;
      }
    }

    if (selectedCuisine !== "All" && item.cuisine !== selectedCuisine) {
      return false;
    }

    if (selectedType !== "All" && item.diningType !== selectedType) {
      return false;
    }

    if (outdoorOnly && !item.outdoorSeating) {
      return false;
    }

    return true;
  });

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCuisine !== "All" ||
    selectedType !== "All" ||
    outdoorOnly;

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCuisine("All");
    setSelectedType("All");
    setOutdoorOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Editorial Header */}
      <div className="mb-12 space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[#c5a059]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            Gastronomy Directory
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
          Fine Dining & Waterfront Cafés
        </h1>
        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
          Embark on a world-class culinary voyage featuring Michelin-acclaimed chefs, alfresco terraces overlooking the illuminated grand fountains, and storied European patisseries.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#14161f] border border-white/10 rounded-xl p-5 md:p-6 mb-8 shadow-xl space-y-5">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c5a059]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search restaurant, cuisine, or signature dish..."
              className="w-full pl-10 pr-10 py-2.5 bg-black/40 border border-white/10 rounded text-xs md:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a059]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Terrace Filter Toggle */}
          <button
            onClick={() => setOutdoorOnly(!outdoorOnly)}
            className={`px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shrink-0 ${
              outdoorOnly
                ? "bg-[#c5a059] text-[#0d0e12]"
                : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
            }`}
          >
            <span>Fountain Terrace Only</span>
          </button>
        </div>

        {/* Cuisines Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500 shrink-0 mr-1">
            Cuisine:
          </span>
          {cuisines.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCuisine(c)}
              className={`px-3 py-1.5 text-xs rounded-full transition-all shrink-0 ${
                selectedCuisine === c
                  ? "bg-[#c5a059] text-[#0d0e12] font-semibold shadow-sm"
                  : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Dining Type Filter */}
        <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500 shrink-0 mr-1">
            Style:
          </span>
          {diningTypes.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1 text-xs rounded transition-all shrink-0 ${
                selectedType === t
                  ? "bg-white/20 text-white font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Counter bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-8 text-xs text-zinc-400">
        <div>
          Showing <span className="text-white font-semibold">{filteredDining.length}</span> of{" "}
          <span>{DINING_DATA.length}</span> dining establishments
        </div>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1.5 text-[#d8b26e] hover:text-white font-medium transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredDining.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDining.map((item) => (
            <DiningCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="bg-[#14161f] border border-white/10 rounded-xl p-12 text-center space-y-4 max-w-lg mx-auto">
          <Utensils className="w-10 h-10 text-zinc-500 mx-auto" />
          <h3 className="font-serif text-xl text-white font-semibold">
            No Restaurants Found
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            No venues match your current filters. Try resetting your search or selecting another cuisine.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function DiningDirectoryPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-zinc-400">Loading Dining...</div>}>
      <DiningDirectoryContent />
    </Suspense>
  );
}
