"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Utensils } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName: string;
}

export default function ReservationModal({
  isOpen,
  onClose,
  restaurantName,
}: ReservationModalProps) {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [date, setDate] = useState("2026-10-30");
  const [time, setTime] = useState("20:00");
  const [partySize, setPartySize] = useState("2 Guests");
  const [seatingPreference, setSeatingPreference] = useState("Waterfront Terrace View");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg bg-[#14161f] border border-[#c5a059]/40 rounded-xl p-6 md:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-white font-semibold">
              Reservation Request Received
            </h3>
            <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
              Your priority table reservation request for <span className="text-[#d8b26e] font-semibold">{restaurantName}</span> has been transmitted to our hospitality maitre d&apos;.
            </p>
            <div className="p-4 rounded-lg bg-black/40 border border-white/10 text-xs text-zinc-400 max-w-sm mx-auto space-y-1 text-left">
              <div><strong className="text-white">Party:</strong> {partySize} ({seatingPreference})</div>
              <div><strong className="text-white">Date & Time:</strong> {date} at {time}</div>
              <div><strong className="text-white">Guest:</strong> {guestName} ({guestPhone})</div>
            </div>
            <p className="text-[11px] text-zinc-500">
              A confirmation WhatsApp / SMS will be dispatched shortly. For immediate changes, contact our VIP Concierge directly at +971 4 800 287486.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Utensils className="w-4 h-4 text-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-semibold">
                Priority Table Reservation
              </span>
            </div>
            <h2 className="font-serif text-2xl text-white font-semibold mb-1">
              {restaurantName}
            </h2>
            <p className="text-xs text-zinc-400 mb-6">
              Reserve your waterfront table or private dining salon with immediate concierge notification.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Lord Sterling"
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+971 50 000 0000"
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-2 py-2 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-2 py-2 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="19:00">07:00 PM (Sunset)</option>
                    <option value="20:00">08:00 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Fountain Show)</option>
                    <option value="22:30">10:30 PM (Late Night)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                    Party Size
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full px-2 py-2 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="8+ (Private Salon)">8+ (Private Salon)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                  Seating Preference
                </label>
                <select
                  value={seatingPreference}
                  onChange={(e) => setSeatingPreference(e.target.value)}
                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="Waterfront Terrace View">Waterfront Terrace View (Fountain Frontage)</option>
                  <option value="Main Dining Salon">Main Dining Salon (Air Conditioned)</option>
                  <option value="Omakase / Chef Counter">Chef / Omakase Counter</option>
                  <option value="Private VIP Room">Private VIP Salon (Minimum spend applies)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">
                  Dietary Requirements & Notes
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Anniversary celebration, window request, dietary allergies..."
                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#c5a059] hover:bg-[#d8b26e] text-[#0d0e12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
                >
                  Confirm Reservation Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
