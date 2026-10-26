"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { MALL_CONFIG } from "@/config/mallConfig";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [hasConsent, setHasConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!hasConsent) {
      setErrorMessage("Please agree to receive curated updates and invitations.");
      return;
    }

    setErrorMessage("");
    setIsSubmitted(true);
  };

  return (
    <footer className="bg-[#08090b] text-[#c2beaf] border-t border-white/10 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Newsletter & Brand Privilege Banner */}
        <div className="bg-gradient-to-r from-[#14161f] via-[#1c1f2c] to-[#14161f] border border-[#c5a059]/20 rounded-xl p-6 md:p-10 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
                The Atrium Privileges Club
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-medium">
                Subscribe for Private Previews & VIP Invitations
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 max-w-lg leading-relaxed">
                Receive private invitations to Haute Couture runway presentations, seasonal gastronomy masterclasses, and curated boutique privileges.
              </p>
            </div>

            <div className="lg:col-span-6">
              {isSubmitted ? (
                <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-xs md:text-sm">
                    <p className="font-medium">Welcome to The Atrium Privileges Club.</p>
                    <p className="text-emerald-400/80 text-xs">
                      A confirmation message has been dispatched to {newsletterEmail}.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your private email address"
                        className="w-full pl-10 pr-4 py-2.5 bg-black/50 border border-white/10 rounded-sm text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2"
                    >
                      <span>Join Privileges</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="consentCheckbox"
                      checked={hasConsent}
                      onChange={(e) => setHasConsent(e.target.checked)}
                      className="mt-0.5 rounded border-white/20 bg-black/40 text-[#c5a059] focus:ring-0"
                    />
                    <label htmlFor="consentCheckbox" className="text-[11px] text-zinc-400 leading-tight">
                      I agree to receive communications regarding private previews, cultural exhibitions, and exclusive services. You may unsubscribe at any time. View our{" "}
                      <Link href="/privacy" className="text-zinc-300 hover:text-white underline">
                        Privacy Policy
                      </Link>.
                    </label>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-rose-400 font-medium">{errorMessage}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand & Emblem */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm border border-[#c5a059]/40 flex items-center justify-center bg-gradient-to-br from-[#1c1f2c] to-[#0d0e12]">
                <span className="font-serif text-[#d8b26e] text-base font-bold">GA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.2em] text-white text-base font-semibold uppercase">
                  The Grand Atrium
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a059] font-medium">
                  Downtown Dubai
                </span>
              </div>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              An iconic luxury destination featuring 450+ haute couture boutiques, Michelin-caliber gastronomy, and monumental cultural and entertainment landmarks.
            </p>
            <div className="pt-2 text-xs text-zinc-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <span>Financial Center Rd, Downtown Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <span>Concierge: +971 4 800 287486</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <span>Retail: 10:00 AM – 11:00 PM (12:00 AM Weekends)</span>
              </div>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white font-semibold">Shop</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Store Directory
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Haute+Couture" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Haute Couture
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Fine+Jewelry+%26+Watches" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Fine Jewelry & Watches
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Beauty+%26+Fragrance" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Beauty & Fragrance
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Tech+%26+Lifestyle" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Tech & Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          {/* Dine Column */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white font-semibold">Dine</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/dine" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  All Restaurants
                </Link>
              </li>
              <li>
                <Link href="/dine?type=Waterfront+Terrace" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Waterfront Terraces
                </Link>
              </li>
              <li>
                <Link href="/dine?cuisine=French+Fine+Dining" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Fine Dining Venues
                </Link>
              </li>
              <li>
                <Link href="/dine?type=Artisanal+Café" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Artisanal Cafés
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Private Dining Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiences & Plan Column */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white font-semibold">Experience</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/entertain/grand-aquarium" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  The Grand Aquarium
                </Link>
              </li>
              <li>
                <Link href="/entertain/olympic-ice-arena" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Skyline Ice Arena
                </Link>
              </li>
              <li>
                <Link href="/entertain/platinum-cinema-suites" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Platinum Cinema Suites
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  What&apos;s Happening
                </Link>
              </li>
              <li>
                <Link href="/plan" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Interactive Floor Maps
                </Link>
              </li>
            </ul>
          </div>

          {/* Visitor Services & Corporate */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white font-semibold">Visitor Services</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/plan#parking" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Parking & Salik Rates
                </Link>
              </li>
              <li>
                <Link href="/plan#services" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Hands-Free Shopping
                </Link>
              </li>
              <li>
                <Link href="/plan#faq" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Visitor FAQs & Etiquette
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Architectural Vision
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-[#d8b26e] transition-colors">
                  Retail Leasing & Media
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Socials & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span>© 2026 {MALL_CONFIG.identity.name}. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/privacy#terms" className="hover:text-zinc-300 transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/privacy#accessibility" className="hover:text-zinc-300 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-400">
            {/* Instagram SVG */}
            <a
              href={MALL_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded bg-white/5 hover:bg-white/10 hover:text-[#d8b26e] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook SVG */}
            <a
              href={MALL_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded bg-white/5 hover:bg-white/10 hover:text-[#d8b26e] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.598 0 9 1.582 9 4.615V8z"/>
              </svg>
            </a>

            {/* LinkedIn SVG */}
            <a
              href={MALL_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded bg-white/5 hover:bg-white/10 hover:text-[#d8b26e] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* YouTube SVG */}
            <a
              href={MALL_CONFIG.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 rounded bg-white/5 hover:bg-white/10 hover:text-[#d8b26e] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
