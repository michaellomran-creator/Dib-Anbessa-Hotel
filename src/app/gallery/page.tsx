"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Tag, Maximize2, Info, Eye } from "lucide-react";
import { HOTEL_PHOTOS, PhotoItem } from "@/data/photography";
import LightboxModal from "@/components/LightboxModal";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Photographs" },
    { id: "exterior", label: "Architecture & Grounds" },
    { id: "rooms", label: "Guest Rooms" },
    { id: "dining", label: "Restaurant & Bar" },
    { id: "reception", label: "Lobby & Reception" },
    { id: "bahir-dar", label: "Bahir Dar & Culture" },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? HOTEL_PHOTOS
      : HOTEL_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-cream text-walnut">
      {/* Header */}
      <section className="bg-oxblood text-cream py-20 border-b border-brass/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brass/40 bg-burgundy/60 text-xs uppercase tracking-widest text-brass font-serif">
            <Camera className="w-3.5 h-3.5" />
            <span>Official Visual Archive</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream">
            Curated Photographic Gallery
          </h1>
          <p className="text-parchment/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            An authentic, unembellished photographic collection of Dib Anbessa
            Hotel’s architecture, rooms, culinary offerings, and Bahir Dar
            surroundings.
          </p>
        </div>
      </section>

      {/* Photography Ethics Notice */}
      <div className="bg-parchment border-b border-brass/25 py-3 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-2 text-xs text-walnut/80">
          <Info className="w-4 h-4 text-oxblood shrink-0" />
          <span>
            Every photograph presented in this archive depicts the authentic
            property and immediate surroundings of Dib Anbessa Hotel. No
            synthetic or artificial interiors are used.
          </span>
        </div>
      </div>

      {/* Gallery Grid & Filter Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((c) => {
              const count =
                c.id === "all"
                  ? HOTEL_PHOTOS.length
                  : HOTEL_PHOTOS.filter((p) => p.category === c.id).length;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-all duration-200 font-medium ${
                    activeCategory === c.id
                      ? "bg-oxblood text-cream font-semibold shadow-md border border-brass/40"
                      : "bg-parchment text-walnut/75 hover:bg-brass/20 border border-brass/20"
                  }`}
                >
                  {c.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Masonry / Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="group relative bg-parchment rounded-lg overflow-hidden border border-brass/30 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Darkening Overlay */}
                  <div className="absolute inset-0 bg-oxblood/0 group-hover:bg-oxblood/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-cream/90 text-oxblood p-2.5 rounded-full shadow-lg">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-oxblood/85 text-brass text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-sm border border-brass/30">
                    {photo.category}
                  </div>
                </div>

                {/* Caption Strip */}
                <div className="p-4 bg-parchment flex-1 flex flex-col justify-between space-y-1">
                  <div>
                    {photo.amharicTitle && (
                      <span className="text-[11px] font-serif text-tobacco block">
                        {photo.amharicTitle}
                      </span>
                    )}
                    <h3 className="font-serif text-base font-bold text-oxblood group-hover:text-burgundy transition-colors">
                      {photo.title}
                    </h3>
                  </div>
                  <p className="text-xs text-walnut/70 line-clamp-2 leading-relaxed font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        photos={filteredPhotos}
        currentIndex={selectedPhotoIndex ?? 0}
        isOpen={selectedPhotoIndex !== null}
        onClose={() => setSelectedPhotoIndex(null)}
        onPrev={() =>
          setSelectedPhotoIndex((i) =>
            i === null ? 0 : (i - 1 + filteredPhotos.length) % filteredPhotos.length
          )
        }
        onNext={() =>
          setSelectedPhotoIndex((i) =>
            i === null ? 0 : (i + 1) % filteredPhotos.length
          )
        }
      />
    </div>
  );
}
