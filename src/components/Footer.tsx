"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Shield,
  ExternalLink,
  Award,
  Clock,
  Compass,
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";

export default function Footer() {
  return (
    <footer className="bg-oxblood text-cream border-t-2 border-brass/40 relative overflow-hidden">
      {/* Decorative Antique Brass Pattern Top Rim */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brass via-brass-light to-brass opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Heritage Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full border border-brass bg-burgundy/60 flex items-center justify-center text-brass font-serif text-xl font-bold shadow-md">
                DA
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-cream">
                  Dib Anbessa
                </h3>
                <p className="text-xs font-serif uppercase tracking-widest text-brass">
                  Hotel · ድብ አንበሳ ሆቴል
                </p>
              </div>
            </div>

            <p className="text-sm text-parchment/80 leading-relaxed font-light">
              An established landmark of classic Ethiopian hospitality in Bahir
              Dar. Nestled near the shores of Lake Tana, offering timeless
              character, restful accommodations, and sincere warmth.
            </p>

            <div className="pt-2 text-xs text-brass/90 flex items-center space-x-2">
              <Award className="w-4 h-4 text-brass shrink-0" />
              <span>Historically known as Bear Lion Hotel (ድብ አንበሳ)</span>
            </div>
          </div>

          {/* Column 2: Navigation & Discover */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-brass border-b border-brass/20 pb-2">
              Discover the Property
            </h4>
            <ul className="space-y-2 text-sm text-parchment/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-brass transition-colors flex items-center"
                >
                  <span className="text-brass mr-2 font-serif">›</span>
                  About Hotel & Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-brass transition-colors flex items-center"
                >
                  <span className="text-brass mr-2 font-serif">›</span>
                  Guest Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="hover:text-brass transition-colors flex items-center"
                >
                  <span className="text-brass mr-2 font-serif">›</span>
                  Galleria Restaurant & Bar
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="hover:text-brass transition-colors flex items-center"
                >
                  <span className="text-brass mr-2 font-serif">›</span>
                  Facilities & Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-brass transition-colors flex items-center"
                >
                  <span className="text-brass mr-2 font-serif">›</span>
                  Curated Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/explore-bahir-dar"
                  className="hover:text-brass transition-colors flex items-center"
                >
                  <span className="text-brass mr-2 font-serif">›</span>
                  Explore Lake Tana & Falls
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-brass transition-colors flex items-center"
                >
                  <span className="text-brass mr-2 font-serif">›</span>
                  Guest Reviews & Ratings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-brass border-b border-brass/20 pb-2">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm text-parchment/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brass shrink-0 mt-1" />
                <span>
                  A3 Highway / Lake Street, near St. George Church & Blue Nile
                  Bridge, Bahir Dar, Ethiopia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brass shrink-0" />
                <div>
                  <a
                    href="tel:+251582201436"
                    className="hover:text-brass block"
                  >
                    +251 58 220 1436 (Desk)
                  </a>
                  <a
                    href="tel:+251946456212"
                    className="hover:text-brass block text-xs text-brass-light"
                  >
                    +251 946 456 212 (Mobile)
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brass shrink-0" />
                <a
                  href="mailto:info@dibanbessahotel.com"
                  className="hover:text-brass text-xs"
                >
                  info@dibanbessahotel.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brass shrink-0" />
                <span className="text-xs">24-Hour Reception & Hospitality</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/book"
                className="inline-block w-full text-center py-2 px-3 text-xs font-semibold uppercase tracking-wider text-oxblood bg-brass hover:bg-brass-light transition-colors rounded shadow"
              >
                Booking Enquiry
              </Link>
            </div>
          </div>

          {/* Column 4: Verified External Listings & Management */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-brass border-b border-brass/20 pb-2">
              Verified Profiles
            </h4>
            <p className="text-xs text-parchment/70 leading-relaxed">
              Verify our property credentials across recognized global hotel
              portals:
            </p>

            <div className="space-y-2">
              {HOTEL_INFO.externalReviews.map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded bg-burgundy/40 hover:bg-burgundy text-xs text-parchment border border-brass/20 transition-colors group"
                >
                  <span className="font-medium group-hover:text-brass">
                    {item.platform}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-brass opacity-70 group-hover:opacity-100" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-brass/20">
              <div className="flex items-center justify-between text-xs text-parchment/60">
                <span className="font-serif italic">
                  General Manager: Yidersal Mengistu
                </span>
                <Link
                  href="/admin"
                  className="hover:text-brass transition-colors flex items-center"
                >
                  <Shield className="w-3 h-3 mr-1" />
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-6 border-t border-brass/20 flex flex-col md:flex-row items-center justify-between text-xs text-parchment/60">
          <p>
            © 2026 Dib Anbessa Hotel — ድብ አንበሳ ሆቴል.
            All rights reserved. Bahir Dar, Ethiopia.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 font-serif">
            <span>Classic Ethiopian Hospitality</span>
            <span className="text-brass">·</span>
            <Link href="/contact" className="hover:text-brass">
              Location & Directions
            </Link>
            <span className="text-brass">·</span>
            <Link href="/admin" className="hover:text-brass">
              Management Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
