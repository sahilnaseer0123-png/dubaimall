"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  X,
  Store,
} from "lucide-react";
import { STORES_DATA } from "@/data/storesData";
import StoreCard from "@/components/StoreCard";

function ShopDirectoryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialFloor = searchParams.get("floor") || "All";
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedFloor, setSelectedFloor] = useState(initialFloor);
  const [selectedLetter, setSelectedLetter] = useState<string>("All");

  const categories = [
    "All",
    "Haute Couture",
    "Fine Jewelry & Watches",
    "Ready-to-Wear",
    "Beauty & Fragrance",
    "Tech & Lifestyle",
    "Home & Living",
  ];

  const floors = [
    { code: "All", label: "All Levels" },
    { code: "LG", label: "Lower Ground" },
    { code: "G", label: "Ground Floor" },
    { code: "L1", label: "Level 1" },
    { code: "L2", label: "Level 2" },
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Filtered stores calculation
  const filteredStores = STORES_DATA.filter((store) => {
    // Search text
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchesName = store.name.toLowerCase().includes(q);
      const matchesCategory = store.category.toLowerCase().includes(q);
      const matchesSub = store.subCategory.toLowerCase().includes(q);
      const matchesDesc = store.description.toLowerCase().includes(q);
      if (!matchesName && !matchesCategory && !matchesSub && !matchesDesc) {
        return false;
      }
    }

    // Category filter
    if (selectedCategory !== "All" && store.category !== selectedCategory) {
      return false;
    }

    // Floor filter
    if (selectedFloor !== "All" && store.floor !== selectedFloor) {
      return false;
    }

    // Alphabetical filter
    if (selectedLetter !== "All") {
      if (!store.name.toUpperCase().startsWith(selectedLetter)) {
        return false;
      }
    }

    return true;
  });

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "All" ||
    selectedFloor !== "All" ||
    selectedLetter !== "All";

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedFloor("All");
    setSelectedLetter("All");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Editorial Page Header */}
      <div className="mb-12 space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[#c5a059]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            Retail Directory
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
          Boutiques & Haute Couture Maisons
        </h1>
        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
          Explore over 450 prestigious luxury fashion flagships, high jewelry salons, fine perfumeries, and lifestyle ateliers situated across four palatial levels in Downtown Dubai.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-[#14161f] border border-white/10 rounded-xl p-5 md:p-6 mb-8 shadow-xl space-y-5">
        {/* Top row: Search input + Floor dropdown */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c5a059]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search boutique name, category, or service..."
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

          {/* Floor Level Filter */}
          <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto pb-1 md:pb-0">
            {floors.map((f) => (
              <button
                key={f.code}
                onClick={() => setSelectedFloor(f.code)}
                className={`px-3 py-2 text-xs font-semibold rounded transition-colors shrink-0 ${
                  selectedFloor === f.code
                    ? "bg-[#c5a059] text-[#0d0e12]"
                    : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500 shrink-0 mr-1">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded-full transition-all shrink-0 ${
                selectedCategory === cat
                  ? "bg-[#c5a059] text-[#0d0e12] font-semibold shadow-sm"
                  : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Alphabetical A - Z Jump Bar */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-1 overflow-x-auto pb-1">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500 shrink-0 mr-2">
            A – Z:
          </span>
          <button
            onClick={() => setSelectedLetter("All")}
            className={`px-2 py-0.5 text-[11px] rounded transition-colors shrink-0 ${
              selectedLetter === "All"
                ? "bg-[#d8b26e] text-black font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            All
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`px-1.5 py-0.5 text-[11px] font-mono rounded transition-colors shrink-0 ${
                selectedLetter === letter
                  ? "bg-[#c5a059] text-black font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Status / Counter Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-8 text-xs text-zinc-400">
        <div>
          Showing <span className="text-white font-semibold">{filteredStores.length}</span> of{" "}
          <span>{STORES_DATA.length}</span> luxury boutiques
        </div>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1.5 text-[#d8b26e] hover:text-white font-medium transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>

      {/* Stores Grid or Empty State */}
      {filteredStores.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      ) : (
        <div className="bg-[#14161f] border border-white/10 rounded-xl p-12 text-center space-y-4 max-w-lg mx-auto">
          <Store className="w-10 h-10 text-zinc-500 mx-auto" />
          <h3 className="font-serif text-xl text-white font-semibold">
            No Boutiques Found
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            No boutiques match your active filter criteria. Try clearing some filters or searching for another designer.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* VIP Concierge Banner */}
      <div className="mt-20 p-8 rounded-xl bg-gradient-to-r from-[#14161f] to-[#1c1f2c] border border-[#c5a059]/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#d8b26e] font-semibold">
            Personal Shopping & Concierge
          </span>
          <h3 className="font-serif text-xl md:text-2xl text-white font-semibold mt-1">
            Seeking a Rare Piece or Private Fitting?
          </h3>
          <p className="text-xs text-zinc-300 mt-1 max-w-xl">
            Our VIP Stylist team coordinates directly with flagship maison directors for private appointments, pre-orders, and discreet hotel deliveries.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shrink-0"
        >
          Contact VIP Stylist
        </Link>
      </div>
    </div>
  );
}

export default function ShopDirectoryPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-zinc-400">Loading Directory...</div>}>
      <ShopDirectoryContent />
    </Suspense>
  );
}
