import React from "react";
import Link from "next/link";
import { Compass, Store, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-[#c5a059]/30 flex items-center justify-center text-[#d8b26e]">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8b26e] font-semibold">
            Error 404 • Destination Not Located
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-white font-semibold">
            Wayfinding Notice
          </h1>
          <p className="text-xs text-zinc-400 leading-relaxed">
            The boutique, salon, or page you are seeking could not be found within The Grand Atrium concourse directory.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Grand Atrium</span>
          </Link>

          <Link
            href="/shop"
            className="w-full sm:w-auto px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider rounded-sm border border-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Store className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Search Shop Directory</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
