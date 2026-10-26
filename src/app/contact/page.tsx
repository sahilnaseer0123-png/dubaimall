"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { MALL_CONFIG } from "@/config/mallConfig";

export default function ContactPage() {
  const [department, setDepartment] = useState("VIP Concierge & Guest Services");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [referenceId, setReferenceId] = useState("GA-89241");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReferenceId(`GA-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      {/* Editorial Header */}
      <div className="mb-12 space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[#c5a059]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#d8b26e] font-semibold">
            Inquiries & Concierge
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
          Connect with The Grand Atrium
        </h1>
        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
          Whether arranging a private styling consultation, requesting commercial retail leasing prospectuses, or coordinating five-star guest hospitality, our executive team is at your disposal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-[#14161f] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-2xl text-white font-semibold">
                Inquiry Dispatched Successfully
              </h2>
              <p className="text-xs md:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#d8b26e] font-semibold">{fullName}</span>. Your correspondence has been directed to the <span className="text-white font-medium">{department}</span> team.
              </p>
              <div className="p-4 rounded-lg bg-black/40 border border-white/10 text-xs text-zinc-400 max-w-sm mx-auto space-y-1 text-left">
                <div><strong className="text-white">Email:</strong> {email}</div>
                <div><strong className="text-white">Phone:</strong> {phone}</div>
                <div><strong className="text-white">Reference ID:</strong> {referenceId}</div>
              </div>
              <p className="text-xs text-zinc-500">
                An executive relations officer will reply within 4 business hours. For urgent VIP assistance, please call our 24/7 hotline at +971 4 800 287486.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFullName("");
                  setEmail("");
                  setPhone("");
                  setMessage("");
                  setSubject("");
                }}
                className="mt-4 px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d8b26e] font-semibold block mb-1">
                  Department
                </span>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2.5 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="VIP Concierge & Guest Services">
                    VIP Concierge & Guest Services
                  </option>
                  <option value="Personal Shopping & Styling Salon">
                    Personal Shopping & Private Styling Salon
                  </option>
                  <option value="Retail Leasing & Commercial Opportunities">
                    Retail Leasing & Commercial Franchising
                  </option>
                  <option value="Private Events & Atrium Buyouts">
                    Private Event Hosting & Venue Buyouts
                  </option>
                  <option value="Media, Filming & Press Relations">
                    Media, Filming Permits & Press Relations
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3 py-2.5 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3 py-2.5 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2.5 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. VIP Styling Appointment Request"
                    className="w-full px-3 py-2.5 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                  Your Message & Requirements *
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please provide details regarding your schedule, boutique preferences, or commercial specifications..."
                  className="w-full px-3 py-2.5 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Official Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Department Coordinates & Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 md:p-8 rounded-2xl bg-[#14161f] border border-white/10 space-y-6 shadow-xl">
            <h3 className="text-xs uppercase tracking-widest text-[#d8b26e] font-semibold pb-3 border-b border-white/10">
              Departmental Coordinates
            </h3>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>VIP Concierge Hotline (Toll-Free)</span>
                </div>
                <a
                  href={`tel:${MALL_CONFIG.contact.generalPhone}`}
                  className="text-zinc-300 hover:text-[#d8b26e] block pl-5"
                >
                  {MALL_CONFIG.contact.generalPhone} (800-ATRIUM)
                </a>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>WhatsApp Concierge Desk</span>
                </div>
                <a
                  href={`https://wa.me/971501234567`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#d8b26e] block pl-5"
                >
                  {MALL_CONFIG.contact.whatsappDesk}
                </a>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>General Hospitality</span>
                </div>
                <a
                  href={`mailto:${MALL_CONFIG.contact.generalEmail}`}
                  className="text-zinc-300 hover:text-[#d8b26e] block pl-5"
                >
                  {MALL_CONFIG.contact.generalEmail}
                </a>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Retail Leasing Division</span>
                </div>
                <a
                  href={`mailto:${MALL_CONFIG.contact.leasingEmail}`}
                  className="text-zinc-300 hover:text-[#d8b26e] block pl-5"
                >
                  {MALL_CONFIG.contact.leasingEmail}
                </a>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Physical Address</span>
                </div>
                <div className="text-zinc-400 pl-5">
                  {MALL_CONFIG.contact.address.street}, {MALL_CONFIG.contact.address.city}, {MALL_CONFIG.contact.address.country}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={MALL_CONFIG.identity.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open Location in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
