"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Users,
  Maximize2,
  CalendarCheck,
  CheckCircle2,
  Info,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ROOMS_DATA, RoomType } from "@/data/hotelInfo";
import LightboxModal from "@/components/LightboxModal";
import { HOTEL_PHOTOS, PhotoItem } from "@/data/photography";

export default function RoomsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalRoom, setActiveModalRoom] = useState<RoomType | null>(null);

  const filteredRooms =
    selectedFilter === "all"
      ? ROOMS_DATA
      : ROOMS_DATA.filter((r) => {
          if (selectedFilter === "twin") return r.bedType.toLowerCase().includes("twin");
          if (selectedFilter === "double") return r.bedType.toLowerCase().includes("queen") || r.bedType.toLowerCase().includes("king");
          if (selectedFilter === "suite") return r.id.includes("suite");
          return true;
        });

  return (
    <div className="bg-cream text-walnut">
      {/* Header */}
      <section className="bg-oxblood text-cream py-20 border-b border-brass/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brass/40 bg-burgundy/60 text-xs uppercase tracking-widest text-brass font-serif">
            <span>60 Individually Arranged Guest Rooms</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream">
            Accommodations &amp; Suites
          </h1>
          <p className="text-parchment/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Authentic comfort, hand-carved Ethiopian mahogany details, private
            balconies, and tranquil courtyard atmospheres in Bahir Dar.
          </p>
        </div>
      </section>

      {/* Pricing Policy Disclaimer Banner */}
      <div className="bg-parchment border-b border-brass/25 py-3 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-2 text-xs text-walnut/80">
          <Info className="w-4 h-4 text-oxblood shrink-0" />
          <span>
            <strong>Management Notice:</strong> Room rates and seasonal
            allocations are confirmed directly upon enquiry to guarantee
            accurate, up-to-date pricing without hidden commissions.
          </span>
        </div>
      </div>

      {/* Main Catalog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-brass/20 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
                Select Category
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-oxblood">
                Our Room Inventory
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Accommodations" },
                { id: "twin", label: "Twin Bed Rooms" },
                { id: "double", label: "Queen & King Doubles" },
                { id: "suite", label: "Executive Suites" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-colors font-medium ${
                    selectedFilter === tab.id
                      ? "bg-oxblood text-cream font-semibold shadow"
                      : "bg-parchment text-walnut/70 hover:bg-parchment/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rooms List Cards */}
          <div className="space-y-12">
            {filteredRooms.map((room, idx) => (
              <div
                key={room.id}
                className="bg-parchment rounded-xl border border-brass/35 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-oxblood transition-colors"
              >
                {/* Image Showcase Left */}
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-oxblood/90 text-brass text-xs font-semibold px-3 py-1 rounded backdrop-blur-sm border border-brass/30 uppercase tracking-wider">
                    {room.bedType}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-walnut/85 text-cream text-xs px-3 py-1 rounded backdrop-blur-sm">
                    {room.sizeM2} m² · Up to {room.capacity.adults} Adults
                  </div>
                </div>

                {/* Content Box Right */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif text-tobacco uppercase tracking-widest">
                        {room.amharicName}
                      </span>
                      <span className="text-xs text-brass font-medium flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                        Confirmed Room Category
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-oxblood">
                      {room.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-tobacco font-serif italic">
                      &ldquo;{room.tagline}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-walnut/80 leading-relaxed font-light">
                      {room.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="border-t border-b border-brass/20 py-4">
                    <h4 className="text-xs font-serif uppercase tracking-widest text-oxblood font-semibold mb-3">
                      Confirmed Room Amenities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex items-center text-xs text-walnut/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brass mr-2 shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Pricing Note */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <div className="text-xs text-tobacco">
                      <span className="font-semibold block text-oxblood">
                        Rates confirmed upon enquiry
                      </span>
                      <span>No prepayment required to enquire</span>
                    </div>

                    <div className="flex items-center space-x-3 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => setActiveModalRoom(room)}
                        className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-oxblood bg-cream hover:bg-cream/80 border border-brass/40 rounded transition-colors"
                      >
                        Photo Gallery
                      </button>

                      <Link
                        href={`/book?room=${room.id}`}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream bg-oxblood hover:bg-burgundy border border-brass/40 rounded transition-colors shadow"
                      >
                        <CalendarCheck className="w-3.5 h-3.5 mr-1.5 text-brass" />
                        Enquire for This Room
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal for Selected Room Photos */}
      {activeModalRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-walnut/90 backdrop-blur-sm p-4">
          <div className="bg-cream rounded-xl border-2 border-brass/40 max-w-2xl w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-brass/25 pb-3">
              <div>
                <h3 className="font-serif text-xl font-bold text-oxblood">
                  {activeModalRoom.name}
                </h3>
                <p className="text-xs font-serif text-tobacco">
                  {activeModalRoom.amharicName}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalRoom(null)}
                className="text-walnut/60 hover:text-oxblood p-1 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeModalRoom.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative h-48 rounded overflow-hidden border border-brass/30"
                >
                  <Image
                    src={img}
                    alt={`${activeModalRoom.name} gallery view ${i + 1}`}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-walnut/80 space-y-2">
              <p className="leading-relaxed">{activeModalRoom.description}</p>
              <div className="p-3 bg-parchment rounded border border-brass/20">
                <span className="font-semibold text-oxblood block mb-1">
                  Key Features:
                </span>
                <ul className="list-disc list-inside space-y-1">
                  {activeModalRoom.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-brass/25 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setActiveModalRoom(null)}
                className="px-4 py-2 text-xs uppercase font-medium text-walnut/70 hover:text-walnut"
              >
                Close
              </button>
              <Link
                href={`/book?room=${activeModalRoom.id}`}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-cream bg-oxblood hover:bg-burgundy rounded shadow border border-brass/40"
              >
                Proceed to Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
