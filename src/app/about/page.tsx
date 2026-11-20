import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Trees,
  Compass,
  ArrowRight,
  ShieldCheck,
  Heart,
  History,
  Building,
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";

export const metadata: Metadata = {
  title: "About Our Heritage & Hospitality",
  description:
    "Discover the history, architecture, and enduring hospitality of Dib Anbessa Hotel (ድብ አንበሳ ሆቴል / Bear Lion Hotel) in Bahir Dar, Ethiopia.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream text-walnut">
      {/* Editorial Header */}
      <section className="bg-oxblood text-cream py-20 border-b border-brass/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brass/40 bg-burgundy/60 text-xs uppercase tracking-widest text-brass font-serif">
            <span>ድብ አንበሳ ሆቴል · Established Hospitality</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream">
            Our Story & Heritage
          </h1>
          <p className="max-w-2xl mx-auto text-parchment/80 text-base sm:text-lg font-light leading-relaxed">
            A classic Ethiopian hotel celebrating regional architectural
            distinction, timeless character, and genuine human connection on the
            threshold of Lake Tana.
          </p>
        </div>
      </section>

      {/* Main Narrative & Architecture */}
      <section className="py-20 bg-parchment border-b border-brass/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Composition */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-lg overflow-hidden border-2 border-brass/40 shadow-xl aspect-[4/5]">
                <Image
                  src="/images/hotel/exterior-front-safari-patrol.webp"
                  alt="Dib Anbessa Hotel front entrance, historic patriot statue, and safari vehicle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-cream rounded border border-brass/20 text-xs text-tobacco text-center font-serif">
                Front Portico with Native Stonework, Historic Monument Statue &amp; Hotel Safari Transport
              </div>
            </div>

            {/* Narrative Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-tobacco font-serif">
                <History className="w-3.5 h-3.5 text-brass" />
                <span>The Story of Bear Lion Hotel</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-oxblood leading-tight">
                An Architectural Anchor in Bahir Dar
              </h2>

              <p className="text-walnut/90 text-base leading-relaxed font-light">
                For decades, travelers, dignitaries, and families traveling to
                Lake Tana and the Blue Nile Falls have known{" "}
                <strong className="text-oxblood font-semibold">
                  Dib Anbessa Hotel (ድብ አንበሳ)
                </strong>
                . Known in Amharic as Bear Lion Hotel, its name evokes strength,
                dignity, and traditional Ethiopian pride.
              </p>

              <p className="text-walnut/80 text-sm leading-relaxed">
                Rather than mirroring the sterile minimalism of recent chain
                resorts, Dib Anbessa has preserved the rich architectural
                craftsmanship of Ethiopia’s golden era of hospitality:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-cream rounded border border-brass/20 space-y-1">
                  <h4 className="font-serif font-bold text-oxblood text-sm">
                    Curved Balcony Architecture
                  </h4>
                  <p className="text-xs text-walnut/70 leading-relaxed">
                    Sculpted mid-century tiered curves overlooking the tall date
                    palms of Bahir Dar’s main boulevard.
                  </p>
                </div>

                <div className="p-4 bg-cream rounded border border-brass/20 space-y-1">
                  <h4 className="font-serif font-bold text-oxblood text-sm">
                    Hand-Carved Timber Craft
                  </h4>
                  <p className="text-xs text-walnut/70 leading-relaxed">
                    Coffered ceilings, turned balustrades, and intricately carved
                    wooden bed heads by master carpenters.
                  </p>
                </div>

                <div className="p-4 bg-cream rounded border border-brass/20 space-y-1">
                  <h4 className="font-serif font-bold text-oxblood text-sm">
                    Traditional Religious Art
                  </h4>
                  <p className="text-xs text-walnut/70 leading-relaxed">
                    A vibrant Ethiopian church-style painted screen greeting
                    guests in the reception hall.
                  </p>
                </div>

                <div className="p-4 bg-cream rounded border border-brass/20 space-y-1">
                  <h4 className="font-serif font-bold text-oxblood text-sm">
                    Terrazzo &amp; Courtyard
                  </h4>
                  <p className="text-xs text-walnut/70 leading-relaxed">
                    Polished mosaic stone floors and an enclosed garden courtyard
                    with fountain and cypress trees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Hospitality Philosophy */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-parchment rounded-xl p-8 sm:p-12 border-2 border-brass/30 shadow-lg space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
                Management &amp; Staff Ethos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-oxblood">
                Hospitality from the Heart
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-oxblood/10 border-2 border-brass flex items-center justify-center text-oxblood mb-3 shadow">
                  <Heart className="w-12 h-12 text-brass" />
                </div>
                <h3 className="font-serif font-bold text-lg text-oxblood">
                  {HOTEL_INFO.generalManager.name}
                </h3>
                <p className="text-xs font-serif text-tobacco">
                  {HOTEL_INFO.generalManager.title}
                </p>
                <p className="text-[11px] text-walnut/60 mt-1">
                  {HOTEL_INFO.generalManager.experience}
                </p>
              </div>

              <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-brass/25 pt-6 md:pt-0 md:pl-8 space-y-4">
                <blockquote className="font-serif italic text-lg sm:text-xl text-walnut leading-relaxed">
                  &ldquo;{HOTEL_INFO.generalManager.quote}&rdquo;
                </blockquote>
                <p className="text-xs text-walnut/80 leading-relaxed font-light">
                  Our team members have lived in Bahir Dar for generations. We
                  take pride in welcoming international travelers, local
                  explorers, conference delegates, and visiting families with the
                  timeless warmth for which Gojjam and Ethiopia are renowned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Heritage Gallery Callout */}
      <section className="py-16 bg-oxblood text-cream border-t border-brass/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
            Experience Our Rooms &amp; Dining
          </h2>
          <p className="text-parchment/80 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Explore our comfortable accommodation, reserve a table at Galleria
            Restaurant, or get in touch with our front desk team.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/rooms"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-oxblood bg-brass hover:bg-brass-light rounded transition-colors shadow"
            >
              View Room Options
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-cream bg-burgundy hover:bg-burgundy/80 border border-brass/40 rounded transition-colors"
            >
              Contact Our Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
