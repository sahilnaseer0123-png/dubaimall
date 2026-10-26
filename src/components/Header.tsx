"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  Compass,
  Phone,
  ChevronDown,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { MALL_CONFIG, getMallStatus } from "@/config/mallConfig";
import GlobalSearchModal from "./GlobalSearchModal";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  
  const [statusInfo, setStatusInfo] = useState({
    isOpen: true,
    statusText: "OPEN TODAY",
    hoursToday: "10:00 AM – 12:00 Midnight",
    nextEventText: "Closes at 12:00 Midnight",
  });

  useEffect(() => {
    setStatusInfo(getMallStatus());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  };

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#08090b] text-[#b8b5ab] text-xs border-b border-white/5 py-1.5 px-4 md:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Live Hours Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">
              {statusInfo ? statusInfo.statusText : "OPEN TODAY"}
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-zinc-300">
              {statusInfo ? statusInfo.hoursToday : "10:00 AM – 12:00 Midnight"}
            </span>
          </div>

          {/* Quick Concierge & Location Links */}
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${MALL_CONFIG.contact.conciergeDirect}`}
              className="hidden md:flex items-center gap-1.5 text-zinc-300 hover:text-[#d8b26e] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c5a059]" />
              <span>VIP Concierge: 800-ATRIUM</span>
            </a>
            <span className="text-zinc-700 hidden md:inline">|</span>
            <a
              href={MALL_CONFIG.identity.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-300 hover:text-[#d8b26e] transition-colors"
            >
              <Navigation className="w-3 h-3 text-[#c5a059]" />
              <span>Downtown Dubai Directions</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0d0e12]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3"
            : "bg-[#0d0e12]/80 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <Link
            href="/"
            onClick={handleNavClick}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="The Grand Atrium Home"
          >
            <div className="w-9 h-9 rounded-sm border border-[#c5a059]/40 flex items-center justify-center bg-gradient-to-br from-[#1c1f2c] to-[#0d0e12] group-hover:border-[#c5a059] transition-colors shadow-sm">
              <span className="font-serif text-[#d8b26e] text-lg font-bold tracking-tighter">
                GA
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.22em] text-white text-base md:text-lg font-semibold uppercase leading-tight group-hover:text-[#d8b26e] transition-colors">
                The Grand Atrium
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
                Downtown Dubai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* SHOP Item with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("shop")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                href="/shop"
                onClick={handleNavClick}
                className={`flex items-center gap-1 px-3 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                  pathname.startsWith("/shop")
                    ? "text-[#d8b26e]"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                <span>Shop</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>

              {activeMegaMenu === "shop" && (
                <div className="absolute top-full left-0 w-80 p-4 bg-[#14161f] border border-[#c5a059]/30 rounded-lg shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] uppercase tracking-widest text-[#c5a059] font-semibold mb-2">
                    Curated Categories
                  </div>
                  <div className="space-y-1 text-xs">
                    <Link
                      href="/shop?category=Haute+Couture"
                      onClick={handleNavClick}
                      className="block p-2 rounded hover:bg-white/5 text-zinc-300 hover:text-white transition-colors"
                    >
                      <div className="font-medium text-white">Haute Couture Promenade</div>
                      <div className="text-[11px] text-zinc-400">Chanel, Dior, Hermès, Louis Vuitton</div>
                    </Link>
                    <Link
                      href="/shop?category=Fine+Jewelry+%26+Watches"
                      onClick={handleNavClick}
                      className="block p-2 rounded hover:bg-white/5 text-zinc-300 hover:text-white transition-colors"
                    >
                      <div className="font-medium text-white">Fine Jewelry & Timepieces</div>
                      <div className="text-[11px] text-zinc-400">Rolex, Cartier, Patek Philippe, Tiffany</div>
                    </Link>
                    <Link
                      href="/shop?category=Beauty+%26+Fragrance"
                      onClick={handleNavClick}
                      className="block p-2 rounded hover:bg-white/5 text-zinc-300 hover:text-white transition-colors"
                    >
                      <div className="font-medium text-white">Haute Parfumerie & Beauty</div>
                      <div className="text-[11px] text-zinc-400">Creed, Le Labo, Sephora Flagship</div>
                    </Link>
                  </div>
                  <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">450+ Luxury Boutiques</span>
                    <Link
                      href="/shop"
                      onClick={handleNavClick}
                      className="text-[#d8b26e] font-semibold hover:underline"
                    >
                      Full Directory →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* DINE Item with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("dine")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                href="/dine"
                onClick={handleNavClick}
                className={`flex items-center gap-1 px-3 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                  pathname.startsWith("/dine")
                    ? "text-[#d8b26e]"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                <span>Dine</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>

              {activeMegaMenu === "dine" && (
                <div className="absolute top-full left-0 w-80 p-4 bg-[#14161f] border border-[#c5a059]/30 rounded-lg shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] uppercase tracking-widest text-[#c5a059] font-semibold mb-2">
                    Gastronomy & Lounges
                  </div>
                  <div className="space-y-1 text-xs">
                    <Link
                      href="/dine?type=Waterfront+Terrace"
                      onClick={handleNavClick}
                      className="block p-2 rounded hover:bg-white/5 text-zinc-300 hover:text-white transition-colors"
                    >
                      <div className="font-medium text-white">Waterfront Fountain Terraces</div>
                      <div className="text-[11px] text-zinc-400">L&apos;Orangerie, Cipriani, Al-Masa</div>
                    </Link>
                    <Link
                      href="/dine?cuisine=Contemporary+Japanese"
                      onClick={handleNavClick}
                      className="block p-2 rounded hover:bg-white/5 text-zinc-300 hover:text-white transition-colors"
                    >
                      <div className="font-medium text-white">Fine Dining & Omakase</div>
                      <div className="text-[11px] text-zinc-400">Nobu Downtown, Prime Cut Grill</div>
                    </Link>
                    <Link
                      href="/dine?type=Artisanal+Café"
                      onClick={handleNavClick}
                      className="block p-2 rounded hover:bg-white/5 text-zinc-300 hover:text-white transition-colors"
                    >
                      <div className="font-medium text-white">Artisanal Cafés & Patisseries</div>
                      <div className="text-[11px] text-zinc-400">Pierre Hermé, Bacha Coffee 1910</div>
                    </Link>
                  </div>
                  <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">85+ Culinary Venues</span>
                    <Link
                      href="/dine"
                      onClick={handleNavClick}
                      className="text-[#d8b26e] font-semibold hover:underline"
                    >
                      View All Dining →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* EXPERIENCES Item */}
            <Link
              href="/entertain"
              onClick={handleNavClick}
              className={`px-3 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                pathname.startsWith("/entertain")
                  ? "text-[#d8b26e]"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              Experiences
            </Link>

            {/* EVENTS & OFFERS Item */}
            <Link
              href="/events"
              onClick={handleNavClick}
              className={`px-3 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                pathname.startsWith("/events")
                  ? "text-[#d8b26e]"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              What&apos;s On
            </Link>

            {/* PLAN YOUR VISIT Item */}
            <Link
              href="/plan"
              onClick={handleNavClick}
              className={`px-3 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                pathname.startsWith("/plan")
                  ? "text-[#d8b26e]"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              Plan Your Visit
            </Link>

            {/* ABOUT Item */}
            <Link
              href="/about"
              onClick={handleNavClick}
              className={`px-3 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                pathname === "/about"
                  ? "text-[#d8b26e]"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              About
            </Link>

            {/* CONTACT Item */}
            <Link
              href="/contact"
              onClick={handleNavClick}
              className={`px-3 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-[#d8b26e]"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Global Search Button */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-300 hover:text-white transition-all group"
              aria-label="Search directory"
            >
              <Search className="w-3.5 h-3.5 text-[#c5a059] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-[11px] text-zinc-400">Search directory</span>
              <kbd className="hidden md:inline text-[9px] px-1.5 py-0.5 bg-white/10 text-zinc-400 rounded font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Plan Visit / Concierge Primary Button */}
            <Link
              href="/plan"
              onClick={handleNavClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0d0e12] bg-[#c5a059] hover:bg-[#d8b26e] rounded-sm transition-all shadow-sm hover:shadow-[#c5a059]/20"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Plan Visit</span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white lg:hidden rounded border border-white/10 bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#c5a059]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0d0e12] px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            {/* Mobile Search Bar */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchModalOpen(true);
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded bg-white/5 border border-white/10 text-zinc-400 text-xs"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#c5a059]" />
                Search stores, dining, attractions...
              </span>
              <span className="text-[10px] uppercase text-[#c5a059] font-semibold">Search</span>
            </button>

            {/* Navigation Links List */}
            <div className="divide-y divide-white/5 text-sm font-medium">
              <Link
                href="/shop"
                onClick={handleNavClick}
                className="flex items-center justify-between py-3 text-zinc-200 hover:text-[#d8b26e]"
              >
                <span>Shop Directory (450+ Boutiques)</span>
                <span className="text-xs text-[#c5a059]">Haute Couture & Jewelry →</span>
              </Link>
              <Link
                href="/dine"
                onClick={handleNavClick}
                className="flex items-center justify-between py-3 text-zinc-200 hover:text-[#d8b26e]"
              >
                <span>Dining & Gastronomy (85+ Venues)</span>
                <span className="text-xs text-[#c5a059]">Waterfront Terraces →</span>
              </Link>
              <Link
                href="/entertain"
                onClick={handleNavClick}
                className="flex items-center justify-between py-3 text-zinc-200 hover:text-[#d8b26e]"
              >
                <span>Attractions & Experiences</span>
                <span className="text-xs text-[#c5a059]">Aquarium & Ice Rink →</span>
              </Link>
              <Link
                href="/events"
                onClick={handleNavClick}
                className="flex items-center justify-between py-3 text-zinc-200 hover:text-[#d8b26e]"
              >
                <span>What&apos;s On & Privileges</span>
                <span className="text-xs text-[#c5a059]">Exhibitions & Offers →</span>
              </Link>
              <Link
                href="/plan"
                onClick={handleNavClick}
                className="flex items-center justify-between py-3 text-zinc-200 hover:text-[#d8b26e]"
              >
                <span>Plan Your Visit</span>
                <span className="text-xs text-[#c5a059]">Hours, Maps & Parking →</span>
              </Link>
              <Link
                href="/about"
                onClick={handleNavClick}
                className="flex items-center justify-between py-3 text-zinc-200 hover:text-[#d8b26e]"
              >
                <span>About The Grand Atrium</span>
                <span className="text-xs text-zinc-500">Architecture & Vision →</span>
              </Link>
              <Link
                href="/contact"
                onClick={handleNavClick}
                className="flex items-center justify-between py-3 text-zinc-200 hover:text-[#d8b26e]"
              >
                <span>Concierge & Inquiries</span>
                <span className="text-xs text-zinc-500">Contact Us →</span>
              </Link>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${MALL_CONFIG.contact.generalPhone}`}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Call Concierge</span>
              </a>
              <a
                href={MALL_CONFIG.identity.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded bg-[#c5a059] text-[#0d0e12] font-semibold hover:bg-[#d8b26e] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Instant Search Modal */}
      <GlobalSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}
