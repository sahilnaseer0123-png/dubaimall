"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, MapPin, ChevronRight, Store, Utensils, Compass, Calendar, HelpCircle } from "lucide-react";
import { STORES_DATA } from "@/data/storesData";
import { DINING_DATA } from "@/data/diningData";
import { ATTRACTIONS_DATA } from "@/data/attractionsData";
import { EVENTS_DATA } from "@/data/eventsData";
import { VISITOR_FAQS_DATA } from "@/data/visitorFaqsData";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Filtered collections
  const matchedStores = cleanQuery
    ? STORES_DATA.filter(
        (s) =>
          s.name.toLowerCase().includes(cleanQuery) ||
          s.category.toLowerCase().includes(cleanQuery) ||
          s.subCategory.toLowerCase().includes(cleanQuery) ||
          s.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedDining = cleanQuery
    ? DINING_DATA.filter(
        (d) =>
          d.name.toLowerCase().includes(cleanQuery) ||
          d.cuisine.toLowerCase().includes(cleanQuery) ||
          d.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedAttractions = cleanQuery
    ? ATTRACTIONS_DATA.filter(
        (a) =>
          a.name.toLowerCase().includes(cleanQuery) ||
          a.description.toLowerCase().includes(cleanQuery) ||
          a.category.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedEvents = cleanQuery
    ? EVENTS_DATA.filter(
        (e) =>
          e.title.toLowerCase().includes(cleanQuery) ||
          e.description.toLowerCase().includes(cleanQuery) ||
          e.location.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedFaqs = cleanQuery
    ? VISITOR_FAQS_DATA.filter(
        (f) =>
          f.question.toLowerCase().includes(cleanQuery) ||
          f.answer.toLowerCase().includes(cleanQuery)
      )
    : [];

  const totalResults =
    matchedStores.length +
    matchedDining.length +
    matchedAttractions.length +
    matchedEvents.length +
    matchedFaqs.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 md:pt-24 px-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div
        className="relative w-full max-w-3xl rounded-xl bg-[#14161f] border border-[#c5a059]/30 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 md:px-6 py-4 border-b border-white/10 bg-[#0d0e12]">
          <Search className="w-5 h-5 text-[#c5a059] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stores, fine dining, attractions, events, services..."
            className="w-full bg-transparent text-[#f4f2ee] placeholder-zinc-400 text-base md:text-lg outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-zinc-400 hover:text-white mr-2 transition-colors"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400 border border-white/10 rounded hover:border-white/30 hover:text-white transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {!cleanQuery ? (
            <div className="space-y-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold mb-3">
                  Trending Destinations
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Chanel", "Rolex", "L'Orangerie", "Grand Aquarium", "Cipriani", "Olympic Ice Arena", "Apple", "Parking Rates"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 text-xs bg-white/5 hover:bg-[#c5a059]/20 hover:text-[#d8b26e] rounded-full text-zinc-300 border border-white/10 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                <Link
                  href="/shop"
                  onClick={handleClose}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex flex-col items-center text-center transition-colors group"
                >
                  <Store className="w-5 h-5 text-[#c5a059] mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-white">450+ Boutiques</span>
                  <span className="text-[10px] text-zinc-400 mt-0.5">Explore Retail</span>
                </Link>

                <Link
                  href="/dine"
                  onClick={handleClose}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex flex-col items-center text-center transition-colors group"
                >
                  <Utensils className="w-5 h-5 text-[#c5a059] mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-white">85+ Restaurants</span>
                  <span className="text-[10px] text-zinc-400 mt-0.5">Waterfront & Fine</span>
                </Link>

                <Link
                  href="/entertain"
                  onClick={handleClose}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex flex-col items-center text-center transition-colors group"
                >
                  <Compass className="w-5 h-5 text-[#c5a059] mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-white">Attractions</span>
                  <span className="text-[10px] text-zinc-400 mt-0.5">Aquarium & Ice</span>
                </Link>

                <Link
                  href="/plan"
                  onClick={handleClose}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex flex-col items-center text-center transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-[#c5a059] mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-white">Plan Visit</span>
                  <span className="text-[10px] text-zinc-400 mt-0.5">Hours & Maps</span>
                </Link>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-sm">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-zinc-500 mt-1">
                Try searching for a designer brand, cuisine, floor, or amenity like &ldquo;valet&rdquo; or &ldquo;aquarium&rdquo;.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Stores Results */}
              {matchedStores.length > 0 && (
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#c5a059] font-medium flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5" /> Boutiques & Fashion ({matchedStores.length})
                    </span>
                    <Link
                      href={`/shop?q=${encodeURIComponent(cleanQuery)}`}
                      onClick={handleClose}
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
                    >
                      View all in Directory <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid gap-2">
                    {matchedStores.slice(0, 4).map((store) => (
                      <Link
                        key={store.id}
                        href={`/shop/${store.slug}`}
                        onClick={handleClose}
                        className="p-3 rounded-lg bg-white/5 hover:bg-[#c5a059]/10 border border-white/5 hover:border-[#c5a059]/30 flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="text-sm font-medium text-white">{store.name}</div>
                          <div className="text-xs text-zinc-400 flex items-center gap-2 mt-0.5">
                            <span className="text-[#c5a059]">{store.category}</span>
                            <span>•</span>
                            <span>{store.floorName} ({store.zone})</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Dining Results */}
              {matchedDining.length > 0 && (
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#c5a059] font-medium flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5" /> Dining & Gastronomy ({matchedDining.length})
                    </span>
                    <Link
                      href={`/dine?q=${encodeURIComponent(cleanQuery)}`}
                      onClick={handleClose}
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
                    >
                      View in Dining <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid gap-2">
                    {matchedDining.slice(0, 3).map((item) => (
                      <Link
                        key={item.id}
                        href={`/dine/${item.slug}`}
                        onClick={handleClose}
                        className="p-3 rounded-lg bg-white/5 hover:bg-[#c5a059]/10 border border-white/5 hover:border-[#c5a059]/30 flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="text-sm font-medium text-white">{item.name}</div>
                          <div className="text-xs text-zinc-400 flex items-center gap-2 mt-0.5">
                            <span className="text-[#c5a059]">{item.cuisine}</span>
                            <span>•</span>
                            <span>{item.floorName}</span>
                            <span>•</span>
                            <span>{item.priceRange}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Attractions Results */}
              {matchedAttractions.length > 0 && (
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#c5a059] font-medium flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" /> Attractions & Experiences ({matchedAttractions.length})
                    </span>
                  </div>
                  <div className="grid gap-2">
                    {matchedAttractions.slice(0, 2).map((item) => (
                      <Link
                        key={item.id}
                        href={`/entertain/${item.slug}`}
                        onClick={handleClose}
                        className="p-3 rounded-lg bg-white/5 hover:bg-[#c5a059]/10 border border-white/5 hover:border-[#c5a059]/30 flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="text-sm font-medium text-white">{item.name}</div>
                          <div className="text-xs text-zinc-400 mt-0.5">{item.tagline}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Events Results */}
              {matchedEvents.length > 0 && (
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#c5a059] font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> What&apos;s Happening ({matchedEvents.length})
                    </span>
                  </div>
                  <div className="grid gap-2">
                    {matchedEvents.slice(0, 2).map((item) => (
                      <Link
                        key={item.id}
                        href={`/events/${item.slug}`}
                        onClick={handleClose}
                        className="p-3 rounded-lg bg-white/5 hover:bg-[#c5a059]/10 border border-white/5 hover:border-[#c5a059]/30 flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="text-sm font-medium text-white">{item.title}</div>
                          <div className="text-xs text-zinc-400 mt-0.5">{item.dateRange} • {item.location}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs Results */}
              {matchedFaqs.length > 0 && (
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#c5a059] font-medium flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5" /> Visitor Information & FAQs
                    </span>
                    <Link
                      href="/plan"
                      onClick={handleClose}
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
                    >
                      Plan Your Visit <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid gap-2">
                    {matchedFaqs.slice(0, 2).map((faq) => (
                      <div
                        key={faq.id}
                        className="p-3 rounded-lg bg-white/5 border border-white/5"
                      >
                        <div className="text-xs font-semibold text-white mb-1">{faq.question}</div>
                        <div className="text-xs text-zinc-400 line-clamp-2">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="px-4 md:px-6 py-3 border-t border-white/10 bg-[#0d0e12] flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <span>Press <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-zinc-300">Esc</kbd> to close</span>
          </div>
          <span className="text-[#c5a059] font-medium">The Grand Atrium • Concierge Search</span>
        </div>
      </div>
    </div>
  );
}
