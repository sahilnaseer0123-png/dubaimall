import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  Clock,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Share2,
  ExternalLink,
} from "lucide-react";
import { STORES_DATA, StoreItem } from "@/data/storesData";
import { MALL_CONFIG } from "@/config/mallConfig";
import StoreCard from "@/components/StoreCard";

interface StoreDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return STORES_DATA.map((store) => ({
    slug: store.slug,
  }));
}

export default async function StoreDetailPage({ params }: StoreDetailPageProps) {
  const { slug } = await params;
  const store = STORES_DATA.find((s) => s.slug === slug);

  if (!store) {
    notFound();
  }

  const relatedStores = STORES_DATA.filter(
    (s) => s.category === store.category && s.id !== store.id
  ).slice(0, 3);

  return (
    <div className="w-full pb-20">
      {/* Top Breadcrumbs */}
      <div className="border-b border-white/10 bg-[#08090b] py-3 px-4 md:px-8 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white transition-colors">
            Shop Directory
          </Link>
          <span>/</span>
          <span className="text-[#d8b26e] font-medium">{store.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        {/* Back Link */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Store Directory</span>
        </Link>

        {/* Hero Card */}
        <div className="relative rounded-2xl overflow-hidden bg-[#14161f] border border-white/10 mb-12 shadow-2xl">
          <div className="relative aspect-[21/9] min-h-[340px] w-full bg-black/60">
            <Image
              src={store.image}
              alt={store.name}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-[#14161f]/50 to-transparent" />

            {/* Floating Title and Badges */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#d8b26e] border border-[#c5a059]/40 rounded-sm">
                    {store.category}
                  </span>
                  <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-white/10 text-white rounded-sm backdrop-blur-md">
                    {store.floorName} ({store.zone})
                  </span>
                  {store.vipStyling && (
                    <span className="px-2.5 py-1 text-[10px] font-medium bg-[#c5a059] text-[#0d0e12] rounded-sm flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      VIP Private Salon
                    </span>
                  )}
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold">
                  {store.name}
                </h1>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${store.phone}`}
                  className="px-5 py-2.5 rounded-sm bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Boutique</span>
                </a>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-sm bg-white/10 hover:bg-white/15 text-white text-xs font-medium uppercase tracking-wider border border-white/20 transition-all flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>VIP Fitting</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Detail Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Main Description & Highlights */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-white font-semibold">
                About the Boutique
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-light">
                {store.description}
              </p>
            </div>

            {/* Highlights Section */}
            {store.highlights && store.highlights.length > 0 && (
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-[#d8b26e] font-semibold">
                  Maison Highlights & Exclusives
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-zinc-300">
                  {store.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Boutique Services */}
            {store.services && store.services.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-white font-semibold">
                  Complimentary Boutique Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {store.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#14161f] border border-white/10 flex items-center gap-3 text-xs text-zinc-300"
                    >
                      <Sparkles className="w-4 h-4 text-[#c5a059]" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Location & Practical Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-[#14161f] border border-white/10 space-y-5">
              <h3 className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold pb-3 border-b border-white/10">
                Visitor Information
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Location Details</div>
                    <div className="text-zinc-400 mt-0.5">{store.locationDetails}</div>
                    <div className="text-zinc-400">Level: {store.floorName}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Operating Hours</div>
                    <div className="text-zinc-400 mt-0.5">{store.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Telephone</div>
                    <a
                      href={`tel:${store.phone}`}
                      className="text-[#d8b26e] hover:underline mt-0.5 block"
                    >
                      {store.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link
                  href={`/plan#level-${store.floor.toLowerCase()}`}
                  className="w-full py-2.5 px-3 rounded bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>View Floor Wayfinding</span>
                </Link>
                <a
                  href={MALL_CONFIG.identity.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-medium border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Driving Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* Hands Free shopping reminder */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#1c1f2c] to-[#14161f] border border-[#c5a059]/20 text-xs space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#d8b26e] font-semibold">
                VIP Hands-Free Shopping
              </span>
              <p className="text-zinc-300 text-[11px] leading-relaxed">
                Purchases made at this boutique can be held securely by our concierge and delivered directly to your car, valet, or hotel suite.
              </p>
            </div>
          </div>
        </div>

        {/* Related Boutiques in this category */}
        {relatedStores.length > 0 && (
          <div className="pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d8b26e] font-semibold">
                  More in {store.category}
                </span>
                <h3 className="font-serif text-2xl text-white font-semibold mt-1">
                  Nearby Maisons & Salons
                </h3>
              </div>
              <Link
                href={`/shop?category=${encodeURIComponent(store.category)}`}
                className="text-xs text-[#d8b26e] hover:text-white font-medium flex items-center gap-1"
              >
                <span>View all</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedStores.map((related) => (
                <StoreCard key={related.id} store={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
