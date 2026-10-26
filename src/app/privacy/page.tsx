import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import { MALL_CONFIG } from "@/config/mallConfig";

export const metadata = {
  title: "Privacy Policy & Terms of Service | The Grand Atrium",
  description:
    "Official privacy policy, terms of service, and accessibility commitment for The Grand Atrium Mall, Downtown Dubai.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16 text-zinc-300 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-white/10 pb-8">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[#c5a059]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            Legal & Compliance
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal">
          Privacy Policy & Terms of Service
        </h1>
        <p className="text-xs text-zinc-400">
          Last Updated: October 2026 • Governed under UAE Federal Decree Law No. 45 of 2021 on Personal Data Protection (PDPL).
        </p>
      </div>

      {/* 1. Privacy Statement */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-white font-semibold flex items-center gap-2">
          <Lock className="w-5 h-5 text-[#c5a059]" />
          <span>1. Privacy Commitment & Data Collection</span>
        </h2>
        <p className="text-xs md:text-sm leading-relaxed font-light">
          {MALL_CONFIG.identity.legalName} (&ldquo;The Grand Atrium&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is dedicated to safeguarding the privacy and confidential personal data of all visitors, digital patrons, and commercial partners. This policy outlines how information gathered through our digital platform and physical on-premise guest services (such as VIP Valet, Wi-Fi networks, and Concierge inquiries) is processed and secured.
        </p>
        <p className="text-xs md:text-sm leading-relaxed font-light">
          We collect personal identifiers exclusively with explicit user authorization, including when registering for The Atrium Privileges Club, reserving tables at dining establishments, submitting leasing inquiries, or utilizing complimentary guest Wi-Fi.
        </p>
      </section>

      {/* 2. Premises & Security */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-white font-semibold flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#c5a059]" />
          <span>2. Premises Surveillance & Parking Recognition</span>
        </h2>
        <p className="text-xs md:text-sm leading-relaxed font-light">
          For the protection and security of all patrons, closed-circuit television (CCTV) cameras operate 24 hours daily throughout public mall concourses, service docks, and parking facilities. Automated license plate recognition (ALPR) systems are utilized strictly for traffic management, parking validation, and automated Salik fee settlement. Video records are retained in compliance with UAE police and state security statutory requirements.
        </p>
      </section>

      {/* 3. Terms of Service */}
      <section className="space-y-4" id="terms">
        <h2 className="font-serif text-2xl text-white font-semibold flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#c5a059]" />
          <span>3. Premises Etiquette & Terms of Service</span>
        </h2>
        <p className="text-xs md:text-sm leading-relaxed font-light">
          All guests entering The Grand Atrium agree to comply with standard cultural guidelines and UAE public etiquette norms:
        </p>
        <ul className="space-y-2 text-xs md:text-sm list-disc pl-5 font-light">
          <li>Guests must wear respectful clothing covering shoulders and knees in public concourses.</li>
          <li>Commercial photography, drone operation, and videography require advance permits from the Media Relations office.</li>
          <li>Smoking, including electronic cigarettes, is prohibited indoors and restricted solely to designated open-air terraces.</li>
          <li>Pets and companion animals are not permitted inside the mall, with the sole exception of certified guide dogs for visually impaired patrons.</li>
        </ul>
      </section>

      {/* 4. Accessibility Statement */}
      <section className="space-y-4" id="accessibility">
        <h2 className="font-serif text-2xl text-white font-semibold flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
          <span>4. Accessibility & Inclusion Commitment</span>
        </h2>
        <p className="text-xs md:text-sm leading-relaxed font-light">
          The Grand Atrium is fully committed to digital and physical accessibility, designed to satisfy Web Content Accessibility Guidelines (WCAG 2.1 Level AA) across all online experiences and universal access on premises.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-lg bg-[#14161f] border border-white/10 text-xs">
            <strong className="text-white block mb-1">Physical Infrastructure:</strong>
            Complimentary motorized and manual wheelchairs, step-free access across all entrances, braille signage, and tactile paving.
          </div>
          <div className="p-4 rounded-lg bg-[#14161f] border border-white/10 text-xs">
            <strong className="text-white block mb-1">Digital Inclusivity:</strong>
            Full keyboard navigation, semantic headings, high-contrast typography, and reduced-motion support.
          </div>
        </div>
      </section>

      {/* Inquiries */}
      <div className="pt-8 border-t border-white/10 text-xs text-zinc-400">
        <p>
          For privacy inquiries or data rights requests, please contact the Data Protection Officer at{" "}
          <a href={`mailto:${MALL_CONFIG.contact.generalEmail}`} className="text-[#d8b26e] hover:underline">
            {MALL_CONFIG.contact.generalEmail}
          </a>.
        </p>
      </div>
    </div>
  );
}
