import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Clock,
  Sparkles,
  Car,
  ChevronRight,
  Info,
  ShieldCheck,
} from "lucide-react";
import { DESTINATIONS_DATA } from "@/data/hotelInfo";

export const metadata: Metadata = {
  title: "Explore Bahir Dar & Lake Tana Attractions",
  description:
    "Discover Lake Tana island monasteries, Blue Nile Falls (Tis Issat), Bahir Dar cultural market, and Bezawit Palace viewpoint from Dib Anbessa Hotel.",
};

export default function ExploreBahirDarPage() {
  return (
    <div className="bg-cream text-walnut">
      {/* Header */}
      <section className="bg-oxblood text-cream py-20 border-b border-brass/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brass/40 bg-burgundy/60 text-xs uppercase tracking-widest text-brass font-serif">
            <Compass className="w-3.5 h-3.5" />
            <span>Regional Guide · Bahir Dar &amp; Gojjam</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream">
            Discover Bahir Dar &amp; Lake Tana
          </h1>
          <p className="text-parchment/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            The ancient cradle of the Blue Nile. Explore island monasteries,
            thundering waterfalls, vibrant weaving markets, and breathtaking
            sunsets.
          </p>
        </div>
      </section>

      {/* Excursion Assistance Banner */}
      <div className="bg-parchment border-b border-brass/25 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-walnut/80">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-oxblood shrink-0" />
            <span>
              <strong>Hotel Concierge Coordination:</strong> Our 24-hour front
              desk assists with coordinating licensed local boat captains,
              certified regional guides, and 4x4 excursion transport.
            </span>
          </div>
          <Link
            href="/contact"
            className="px-4 py-1.5 bg-oxblood text-cream rounded font-semibold uppercase tracking-wider text-[11px] shrink-0 border border-brass/30"
          >
            Inquire at Desk
          </Link>
        </div>
      </div>

      {/* Destinations Detailed List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {DESTINATIONS_DATA.map((dest, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={dest.id}
                className="bg-parchment rounded-xl border border-brass/30 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center"
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] ${
                    isReversed ? "lg:order-last" : ""
                  }`}
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-oxblood/90 text-brass text-xs font-semibold px-3 py-1 rounded backdrop-blur-sm border border-brass/30">
                    {dest.category}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                  <div>
                    <span className="text-xs font-serif text-tobacco uppercase tracking-widest block mb-1">
                      {dest.amharicName}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-oxblood">
                      {dest.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-tobacco font-sans mt-2">
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-oxblood" />
                        {dest.distance}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-oxblood" />
                        {dest.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-walnut/85 leading-relaxed font-light">
                    {dest.description}
                  </p>

                  {/* Highlights */}
                  <div className="p-4 bg-cream rounded border border-brass/20 space-y-2">
                    <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-oxblood">
                      Key Highlights:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-walnut/80">
                      {dest.highlights.map((h, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-brass mr-2 mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Visitor Tips */}
                  <div className="text-xs text-tobacco bg-parchment/80 p-3 rounded border-l-2 border-brass space-y-1">
                    <span className="font-semibold text-oxblood block">
                      Visitor Note &amp; Practical Advice:
                    </span>
                    <p className="leading-relaxed">{dest.practicalTips}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cultural Etiquette & Travel Advice */}
      <section className="py-16 bg-cream border-t border-brass/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
              Responsible Travel
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-oxblood">
              Visiting Sacred Monasteries &amp; Cultural Sites
            </h3>
          </div>

          <div className="bg-parchment p-6 rounded-lg border border-brass/30 text-xs sm:text-sm text-walnut/85 space-y-3 font-light leading-relaxed">
            <p>
              When visiting the island monasteries of Lake Tana, please observe
              traditional modesty. Shoes are removed before entering holy
              sanctuaries, and photography of sacred parchment manuscripts or
              priests should only be undertaken with permission.
            </p>
            <p>
              Please note that certain historic monasteries on isolated islands
              (such as Dega Estifanos and Kibran Gabriel) follow ancient monastic
              rules permitting only male visitors, while monasteries on the
              Zege Peninsula (including the magnificent Ura Kidane Mihret and
              Azwa Maryam) warmly welcome all visitors regardless of gender.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
