"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  CalendarCheck,
  Bed,
  UtensilsCrossed,
  Trees,
  Award,
  ChevronRight,
  ShieldCheck,
  Phone,
  MapPin,
  Star,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Camera,
} from "lucide-react";
import { HOTEL_INFO, ROOMS_DATA, DESTINATIONS_DATA } from "@/data/hotelInfo";
import { HOTEL_PHOTOS, PhotoItem } from "@/data/photography";
import InteractiveMap from "@/components/InteractiveMap";
import LightboxModal from "@/components/LightboxModal";

export default function HomePage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>("all");

  const featuredRooms = ROOMS_DATA.slice(0, 3);
  const galleryPhotos =
    activeGalleryTab === "all"
      ? HOTEL_PHOTOS.slice(0, 8)
      : HOTEL_PHOTOS.filter((p) => p.category === activeGalleryTab);

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <div className="bg-cream text-walnut">
      {/* 1. HERO SECTION: A TIMELESS WELCOME IN BAHIR DAR */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-oxblood text-cream overflow-hidden">
        {/* Hero Background Image with Editorial Gradient Layering */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hotel/exterior-palms-facade.webp"
            alt="Dib Anbessa Hotel curved architecture and majestic date palms"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 brightness-95 transform scale-105 duration-1000 ease-out"
          />
          {/* Subtle gradient vignette tailored to the heritage palette */}
          <div className="absolute inset-0 bg-gradient-to-t from-oxblood via-oxblood/60 to-oxblood/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-oxblood/50 to-oxblood" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Traditional Amharic Crest Tagline */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-brass/50 bg-burgundy/60 backdrop-blur-sm text-xs sm:text-sm tracking-widest uppercase font-serif text-brass mb-6">
            <span className="w-2 h-2 rounded-full bg-brass animate-pulse" />
            <span>ድብ አንበሳ ሆቴል · Classic Ethiopian Hospitality</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream leading-[1.1] mb-6">
            A Timeless Welcome <br className="hidden sm:inline" />
            <span className="italic font-normal text-parchment">
              in Bahir Dar
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-parchment/90 font-light leading-relaxed mb-10">
            An established architectural landmark in the heart of Bahir Dar.
            Experience authentic warmth, hand-carved Ethiopian woodwork, fresh
            Lake Tana culinary specialties, and serene hospitality.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-oxblood bg-brass hover:bg-brass-light rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Bed className="w-4 h-4 mr-2" />
              Explore Our Rooms
            </Link>

            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream bg-burgundy/80 hover:bg-burgundy border border-brass/40 rounded shadow-md transition-all duration-300"
            >
              <CalendarCheck className="w-4 h-4 mr-2 text-brass" />
              Make an Enquiry
            </Link>
          </div>

          {/* Key Quick Facts Pills */}
          <div className="mt-14 pt-8 border-t border-brass/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="border-r border-brass/20 last:border-none px-2">
              <span className="block font-serif text-2xl font-bold text-brass">
                60
              </span>
              <span className="text-xs text-parchment/70 tracking-wide uppercase">
                Restful Guest Rooms
              </span>
            </div>
            <div className="border-r border-brass/20 last:border-none px-2">
              <span className="block font-serif text-2xl font-bold text-brass">
                Galleria
              </span>
              <span className="text-xs text-parchment/70 tracking-wide uppercase">
                Restaurant & Bar
              </span>
            </div>
            <div className="border-r border-brass/20 last:border-none px-2">
              <span className="block font-serif text-2xl font-bold text-brass">
                1.2 km
              </span>
              <span className="text-xs text-parchment/70 tracking-wide uppercase">
                To Lake Tana Jetty
              </span>
            </div>
            <div className="px-2">
              <span className="block font-serif text-2xl font-bold text-brass">
                4x4
              </span>
              <span className="text-xs text-parchment/70 tracking-wide uppercase">
                Safari Excursions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY: ESTABLISHED HOSPITALITY & ARCHITECTURAL CHARACTER */}
      <section className="py-20 bg-parchment border-b border-brass/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text Left */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-tobacco font-serif">
                <span className="w-8 h-[1px] bg-brass" />
                <span>Our Heritage & Identity</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oxblood leading-tight">
                Established Hospitality on Bahir Dar’s Palm Avenue
              </h2>

              <p className="text-walnut/90 text-base sm:text-lg leading-relaxed font-light">
                Dib Anbessa Hotel — known with fondness as{" "}
                <strong className="font-semibold text-oxblood">
                  ድብ አንበሳ ሆቴል (Bear Lion Hotel)
                </strong>
                — stands as a beloved fixture in Bahir Dar. Rather than adopting
                a generic modern facade, our property celebrates the grace of an
                older, established Ethiopian architectural tradition.
              </p>

              <p className="text-walnut/80 text-sm sm:text-base leading-relaxed">
                From our distinctive curved multi-tiered balconies overlooking
                the city’s royal palm trees to the hand-carved mahogany ceilings,
                traditional fresco art screens, and terrazzo floors in our lobby,
                every space reflects authentic cultural identity.
              </p>

              {/* General Manager Quote Card */}
              <div className="p-6 rounded-md bg-cream border-l-4 border-brass shadow-sm space-y-2">
                <p className="font-serif italic text-base text-walnut">
                  &ldquo;{HOTEL_INFO.generalManager.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs text-tobacco pt-1">
                  <span className="font-semibold text-oxblood">
                    — {HOTEL_INFO.generalManager.name},{" "}
                    {HOTEL_INFO.generalManager.title}
                  </span>
                  <span>{HOTEL_INFO.generalManager.experience}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-oxblood hover:text-burgundy transition-colors group"
                >
                  <span>Read More About Our Story & Architecture</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-brass group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Editorial Image Composition Right */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border-2 border-brass/40 shadow-2xl aspect-[4/5]">
                <Image
                  src="/images/hotel/lobby-timber-fresco-screen.webp"
                  alt="Dib Anbessa Hotel Lobby featuring traditional Ethiopian painted screen and timber arch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oxblood/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream">
                  <span className="text-xs uppercase tracking-widest text-brass font-serif">
                    Authentic Interior
                  </span>
                  <p className="font-serif text-lg font-bold">
                    Lobby Fresco & Hand-Carved Capitals
                  </p>
                </div>
              </div>

              {/* Floating Accent Thumbnail */}
              <div className="hidden sm:block absolute -bottom-6 -left-8 w-44 h-44 rounded-lg overflow-hidden border-2 border-brass/50 shadow-xl">
                <Image
                  src="/images/hotel/reception-grand-staircase.webp"
                  alt="Handcrafted wooden staircase balustrade"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ROOMS & ACCOMMODATION */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-brass/20 pb-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-tobacco font-serif mb-2">
                <Bed className="w-3.5 h-3.5 text-brass" />
                <span>Authentic Accommodation</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oxblood">
                Featured Guest Rooms
              </h2>
            </div>
            <p className="max-w-md text-sm text-walnut/70 mt-3 md:mt-0 font-light">
              60 individually arranged rooms showcasing genuine Ethiopian
              craftsmanship, crisp linens, private balconies, and restful
              privacy.
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-parchment rounded-lg overflow-hidden border border-brass/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Room Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-oxblood/85 text-brass text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm border border-brass/30 uppercase tracking-wider">
                    {room.bedType}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-walnut/80 text-cream text-[11px] px-2.5 py-0.5 rounded backdrop-blur-sm">
                    {room.sizeM2} m² · Up to {room.capacity.adults} Adults
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-serif text-tobacco tracking-wider">
                      {room.amharicName}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-oxblood group-hover:text-burgundy transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-walnut/80 mt-2 line-clamp-3 leading-relaxed font-light">
                      {room.description}
                    </p>
                  </div>

                  {/* Amenities Snippet */}
                  <div className="pt-2 border-t border-brass/20 space-y-2">
                    <ul className="text-xs text-walnut/70 space-y-1">
                      {room.amenities.slice(0, 3).map((amenity, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-brass mr-2 shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      href={`/book?room=${room.id}`}
                      className="text-xs font-semibold uppercase tracking-wider text-oxblood hover:text-burgundy flex items-center font-serif group-hover:underline"
                    >
                      Enquire for Dates
                      <ChevronRight className="w-4 h-4 ml-1 text-brass" />
                    </Link>
                    <Link
                      href="/rooms"
                      className="text-xs text-tobacco hover:text-oxblood"
                    >
                      Details &raquo;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center px-8 py-3 text-xs font-semibold uppercase tracking-wider text-cream bg-oxblood hover:bg-burgundy rounded transition-colors border border-brass/40 shadow"
            >
              View All 60 Rooms & Suites
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DINING & GASTRONOMY: GALLERIA RESTAURANT & BAR */}
      <section className="py-20 bg-oxblood text-cream relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-burgundy/40 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Dining Visuals Left */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden border border-brass/40 aspect-[4/5] shadow-xl">
                <Image
                  src="/images/hotel/dining-lake-tana-fish.webp"
                  alt="Fresh Lake Tana pan-fried fish dish at Galleria Restaurant"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-oxblood/85 backdrop-blur-sm text-[11px] p-2 rounded text-parchment">
                  Lake Tana Crisp Fried Fish
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden border border-brass/40 aspect-[4/3] shadow-xl">
                  <Image
                    src="/images/hotel/bar-classic-lounge.webp"
                    alt="Dib Anbessa classic timber bar"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-oxblood/85 backdrop-blur-sm text-[11px] p-1.5 rounded text-parchment">
                    Classic Timber Bar
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden border border-brass/40 aspect-[4/3] shadow-xl">
                  <Image
                    src="/images/hotel/dining-banquet-spread.webp"
                    alt="Traditional dining spread and banquet"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-oxblood/85 backdrop-blur-sm text-[11px] p-1.5 rounded text-parchment">
                    Banquet & Social Dinners
                  </div>
                </div>
              </div>
            </div>

            {/* Dining Story Right */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brass font-serif">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Culinary Tradition · Galleria</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream leading-tight">
                Fresh Lake Tana Fish & Classic Hospitality
              </h2>

              <p className="text-parchment/90 text-base leading-relaxed font-light">
                Dining at Dib Anbessa centers upon{" "}
                <strong className="text-brass font-medium">
                  Galleria Restaurant
                </strong>
                , where regional gastronomy meets genuine Ethiopian service.
                Known throughout Bahir Dar for fresh Lake Tana white fish pan-fried
                with local spices and fresh lime, as well as hearty traditional
                Ethiopian platters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded bg-burgundy/40 border border-brass/20">
                  <h4 className="font-serif font-bold text-brass text-sm mb-1">
                    Breakfast & Daily Dining
                  </h4>
                  <p className="text-xs text-parchment/70">
                    Breakfast 6:30 AM – 10:30 AM. Fresh Ethiopian coffee, eggs,
                    and regional morning specialties.
                  </p>
                </div>
                <div className="p-4 rounded bg-burgundy/40 border border-brass/20">
                  <h4 className="font-serif font-bold text-brass text-sm mb-1">
                    Lounge Bar & Spirits
                  </h4>
                  <p className="text-xs text-parchment/70">
                    Open till midnight. Ethiopian Rift Valley wines, fine whiskies,
                    cold St. George beer, and cocktails.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/dining"
                  className="inline-flex items-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-oxblood bg-brass hover:bg-brass-light rounded transition-colors shadow"
                >
                  Discover Dining & Reserve a Table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FACILITIES & SERVICES */}
      <section className="py-20 bg-parchment border-b border-brass/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
              Guest Amenities & Assistance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-oxblood mt-2">
              Thoughtful Facilities & Services
            </h2>
            <p className="text-walnut/70 text-sm mt-3 font-light">
              Everything needed for a comfortable retreat in Bahir Dar, from 4x4
              safari excursions to tranquil courtyard gardens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_INFO.facilities.slice(0, 8).map((facility) => (
              <div
                key={facility.id}
                className="bg-cream p-6 rounded-lg border border-brass/25 shadow-sm hover:border-oxblood transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-parchment border border-brass/40 flex items-center justify-center text-oxblood mb-4">
                    <Sparkles className="w-5 h-5 text-brass" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-oxblood mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-walnut/75 leading-relaxed font-light">
                    {facility.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brass/15 text-[11px] text-tobacco font-serif">
                  {facility.amharicTitle}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/facilities"
              className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-oxblood hover:text-burgundy group font-serif"
            >
              <span>Explore All Verified Facilities</span>
              <ArrowRight className="w-4 h-4 ml-2 text-brass group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CURATED PHOTOGRAPHY PREVIEW WITH CATEGORY TABS & LIGHTBOX */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-tobacco font-serif mb-2">
                <Camera className="w-3.5 h-3.5 text-brass" />
                <span>Visual Archive</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-oxblood">
                Curated Property Photography
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {[
                { id: "all", label: "All Photos" },
                { id: "exterior", label: "Architecture" },
                { id: "rooms", label: "Rooms" },
                { id: "dining", label: "Dining & Bar" },
                { id: "reception", label: "Lobby & Heritage" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveGalleryTab(tab.id)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded transition-colors font-medium ${
                    activeGalleryTab === tab.id
                      ? "bg-oxblood text-cream font-semibold"
                      : "bg-parchment text-walnut/70 hover:bg-parchment/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid with Click-to-Lightbox */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative h-56 sm:h-64 rounded-md overflow-hidden border border-brass/30 cursor-pointer shadow-sm hover:shadow-xl transition-all"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-oxblood/0 group-hover:bg-oxblood/50 transition-colors flex items-end p-3">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-cream">
                    <p className="font-serif font-bold text-sm leading-snug">
                      {photo.title}
                    </p>
                    <span className="text-[10px] text-brass uppercase tracking-wider">
                      Click to expand
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-oxblood border border-oxblood hover:bg-oxblood hover:text-cream rounded transition-colors"
            >
              Open Full Photographic Gallery (16 Photos)
            </Link>
          </div>
        </div>
      </section>

      {/* 7. DISCOVER BAHIR DAR: LAKE TANA & SURROUNDINGS */}
      <section className="py-20 bg-parchment border-b border-brass/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
              The Pearl of the Nile
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-oxblood mt-2">
              Discover Bahir Dar & Lake Tana
            </h2>
            <p className="text-walnut/75 text-sm sm:text-base mt-3 font-light leading-relaxed">
              Bahir Dar is renowned for its wide palm-lined boulevards, the sacred
              waters of Lake Tana, and the thundering majesty of Blue Nile Falls.
              Our hotel serves as your gracious base for exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS_DATA.map((dest) => (
              <div
                key={dest.id}
                className="bg-cream rounded-lg overflow-hidden border border-brass/30 shadow-sm flex flex-col justify-between"
              >
                <div className="relative h-44">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-oxblood/85 text-brass text-[10px] font-semibold px-2 py-0.5 rounded">
                    {dest.distance}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-serif text-tobacco uppercase tracking-wider">
                      {dest.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-oxblood mt-0.5">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-walnut/80 mt-2 line-clamp-3 leading-relaxed font-light">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brass/20">
                    <Link
                      href="/explore-bahir-dar"
                      className="text-xs font-semibold text-oxblood hover:text-burgundy flex items-center justify-between"
                    >
                      <span>Destination Guide</span>
                      <ChevronRight className="w-3.5 h-3.5 text-brass" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/explore-bahir-dar"
              className="inline-flex items-center px-8 py-3 text-xs font-semibold uppercase tracking-wider text-cream bg-oxblood hover:bg-burgundy rounded transition-colors shadow"
            >
              Read Full Bahir Dar Visitor Guide
            </Link>
          </div>
        </div>
      </section>

      {/* 8. GUEST REVIEWS & VERIFIED PROFILES */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Reviews Intro & Verified External Listings Left */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
                Guest Experience & Reputation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-oxblood">
                Authentic Guest Impressions
              </h2>
              <p className="text-walnut/80 text-sm leading-relaxed font-light">
                We believe in genuine, verified guest feedback. Whether booking
                directly or through leading global platforms, our hospitality
                leaves an enduring impression.
              </p>

              {/* Verified Platform Badges */}
              <div className="pt-2 space-y-3">
                <h4 className="font-serif font-semibold text-sm text-oxblood uppercase tracking-wider">
                  Check External Verified Portals:
                </h4>
                {HOTEL_INFO.externalReviews.map((item) => (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded bg-parchment hover:bg-brass/20 border border-brass/30 transition-colors group"
                  >
                    <div>
                      <span className="font-serif font-bold text-sm text-oxblood block">
                        {item.platform}
                      </span>
                      <span className="text-[11px] text-tobacco">
                        {item.description}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-brass group-hover:text-oxblood shrink-0 ml-3" />
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/reviews"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-oxblood hover:text-burgundy"
                >
                  <span>Submit Your Own Guest Review</span>
                  <ChevronRight className="w-4 h-4 ml-1 text-brass" />
                </Link>
              </div>
            </div>

            {/* Testimonials Cards Right */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  author: "Abebe Kassahun",
                  stay: "Stayed October 2026",
                  rating: 5,
                  title: "Warm Ethiopian hospitality and peaceful garden",
                  text: "Dib Anbessa Hotel is a genuine classic in Bahir Dar. The hand-carved woodwork in the rooms, the quiet courtyard fountain, and the warm service by the front desk team made our stay truly memorable. The fresh Lake Tana fish at Galleria Restaurant was prepared to perfection.",
                },
                {
                  author: "Marcus Schneider",
                  stay: "Stayed September 2026",
                  rating: 5,
                  title: "Authentic character, not a soulless corporate hotel",
                  text: "If you want to experience real Ethiopian hospitality and classic architecture with character, this is the place. The curved balconies overlooking the palm avenue, the traditional art in the lobby, and the helpful staff who arranged our Blue Nile Falls trip made it a highlight of our trip.",
                },
                {
                  author: "Selamawit Tadesse",
                  stay: "Stayed November 2026",
                  rating: 4,
                  title: "Clean rooms, historic atmosphere, and great location",
                  text: "Spacious rooms with comfortable beds and nice balconies. Very convenient to walk to the market and quick drive to the lake boat departure point. The staff greeted us with warm smiles every day.",
                },
              ].map((rev, i) => (
                <div
                  key={i}
                  className="bg-parchment p-6 rounded-lg border border-brass/30 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-brass">
                      {[...Array(rev.rating)].map((_, s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 fill-brass text-brass"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-tobacco">{rev.stay}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-oxblood">
                    &ldquo;{rev.title}&rdquo;
                  </h4>
                  <p className="text-xs text-walnut/80 leading-relaxed font-light">
                    {rev.text}
                  </p>
                  <p className="text-xs font-semibold text-oxblood font-serif">
                    — {rev.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOCATION & INTERACTIVE MAP SECTION */}
      <section className="py-20 bg-parchment border-t border-b border-brass/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
              Central Bahir Dar Location
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-oxblood mt-2">
              Where to Find Dib Anbessa
            </h2>
            <p className="text-walnut/70 text-sm mt-3 font-light">
              Situated on the central A3 highway avenue, moments from the Lake
              Tana shoreline and St. George Church.
            </p>
          </div>

          <InteractiveMap />
        </div>
      </section>

      {/* 10. FINAL BOOKING ENQUIRY BANNER */}
      <section className="py-20 bg-oxblood text-cream text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest text-brass font-serif">
            Plan Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream">
            Experience Classic Ethiopian Hospitality
          </h2>
          <p className="text-parchment/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Reserve your stay with us in Bahir Dar. Submit a direct booking
            enquiry for personalized room arrangements, airport transfers, and
            Lake Tana excursion coordination.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-oxblood bg-brass hover:bg-brass-light rounded shadow-lg transition-all"
            >
              Submit Booking Enquiry
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-cream bg-burgundy/80 hover:bg-burgundy border border-brass/40 rounded transition-all"
            >
              Contact Hotel Reception
            </Link>
          </div>

          <p className="text-xs text-parchment/60 font-serif pt-4">
            Direct Phone: +251 58 220 1436 · Mobile: +251 946 456 212 · Bahir Dar
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        photos={galleryPhotos}
        currentIndex={selectedPhotoIndex ?? 0}
        isOpen={selectedPhotoIndex !== null}
        onClose={() => setSelectedPhotoIndex(null)}
        onPrev={() =>
          setSelectedPhotoIndex((i) =>
            i === null ? 0 : (i - 1 + galleryPhotos.length) % galleryPhotos.length
          )
        }
        onNext={() =>
          setSelectedPhotoIndex((i) =>
            i === null ? 0 : (i + 1) % galleryPhotos.length
          )
        }
      />
    </div>
  );
}
