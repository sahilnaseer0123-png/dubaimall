import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Grand Atrium | Dubai's Premier Luxury Fashion & Cultural Destination",
    template: "%s | The Grand Atrium Mall",
  },
  description:
    "Experience the pinnacle of luxury shopping, Michelin-caliber dining, and world-class entertainment at The Grand Atrium, Downtown Dubai. Discover over 450 prestigious boutiques, the Grand Aquarium, and bespoke concierge services.",
  keywords: [
    "The Grand Atrium",
    "Dubai Mall luxury shopping",
    "Haute Couture Dubai",
    "Downtown Dubai dining",
    "Grand Aquarium Dubai",
    "VIP concierge shopping",
    "Dubai attractions",
  ],
  authors: [{ name: "The Grand Atrium Hospitality & Retail Group" }],
  openGraph: {
    title: "The Grand Atrium | Dubai's Premier Luxury Destination",
    description:
      "450+ Luxury Boutiques, Michelin-caliber Dining, and World-Record Entertainment in Downtown Dubai.",
    url: "https://thegrandatrium.com",
    siteName: "The Grand Atrium",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0d0e12] text-[#f4f2ee] font-sans antialiased selection:bg-[#c5a059] selection:text-[#0d0e12] flex flex-col justify-between">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
