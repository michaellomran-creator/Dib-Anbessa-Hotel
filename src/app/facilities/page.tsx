import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  UtensilsCrossed,
  Trees,
  Users,
  Wifi,
  Clock,
  ShieldCheck,
  Sparkles,
  Phone,
  ArrowRight,
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";

export const metadata: Metadata = {
  title: "Facilities & Services | Dib Anbessa Hotel",
  description:
    "Explore the confirmed facilities and guest services at Dib Anbessa Hotel in Bahir Dar, Ethiopia: 4x4 safari excursions, airport transfers, Galleria restaurant, courtyard garden, and 24-hour reception.",
};

export default function FacilitiesPage() {
  return (
    <div className="bg-cream text-walnut">
      {/* Header */}
      <section className="bg-oxblood text-cream py-20 border-b border-brass/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brass/40 bg-burgundy/60 text-xs uppercase tracking-widest text-brass font-serif">
            <span>Verified Guest Amenities</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream">
            Facilities &amp; Guest Services
          </h1>
          <p className="text-parchment/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need for an authentic, comfortable, and well-supported
            stay in Bahir Dar, Ethiopia.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-parchment border-b border-brass/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Airport Shuttle & Safari 4x4 */}
            <div className="bg-cream p-8 rounded-xl border border-brass/30 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-oxblood text-brass flex items-center justify-center shadow">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-serif text-tobacco uppercase tracking-wider">
                      Transport &amp; Excursions
                    </span>
                    <h3 className="font-serif text-xl font-bold text-oxblood">
                      Roundtrip Airport Transfers &amp; 4x4 Safari Excursions
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-walnut/80 leading-relaxed font-light">
                  Our dedicated hotel fleet includes rugged 4x4 Nissan Patrol
                  expedition vehicles equipped for highland exploration. We
                  provide reliable transfers to and from Bahir Dar Airport
                  (BJR) and direct excursions to the Blue Nile Falls and Lake
                  Tana boat departure points.
                </p>
              </div>

              <div className="relative h-48 rounded-lg overflow-hidden border border-brass/20">
                <Image
                  src="/images/hotel/exterior-front-safari-patrol.webp"
                  alt="Hotel 4x4 safari expedition patrol vehicle parked at entrance"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* 2. Courtyard Garden & Fountain */}
            <div className="bg-cream p-8 rounded-xl border border-brass/30 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-oxblood text-brass flex items-center justify-center shadow">
                    <Trees className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-serif text-tobacco uppercase tracking-wider">
                      Peaceful Sanctuary
                    </span>
                    <h3 className="font-serif text-xl font-bold text-oxblood">
                      Courtyard Garden &amp; Fountain Terrace
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-walnut/80 leading-relaxed font-light">
                  Nestled within the hotel wings, our private courtyard garden
                  is filled with native palm trees, pencil cypresses, and
                  blooming tropical flowers surrounding a tranquil fountain
                  pool. A serene place to read, sip Ethiopian coffee, or unwind.
                </p>
              </div>

              <div className="relative h-48 rounded-lg overflow-hidden border border-brass/20">
                <Image
                  src="/images/hotel/courtyard-garden-fountain.webp"
                  alt="Courtyard garden with fountain basin and palms"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* 3. Galleria Dining & Bar Lounge */}
            <div className="bg-cream p-8 rounded-xl border border-brass/30 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-oxblood text-brass flex items-center justify-center shadow">
                    <UtensilsCrossed className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-serif text-tobacco uppercase tracking-wider">
                      Dining &amp; Beverages
                    </span>
                    <h3 className="font-serif text-xl font-bold text-oxblood">
                      Galleria Restaurant &amp; Classic Timber Bar
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-walnut/80 leading-relaxed font-light">
                  Serving three daily meals with a focus on fresh Lake Tana
                  tilapia and Nile perch, traditional Ethiopian banquets, and an
                  extensive bar selection of local beers, wines, and fine
                  spirits in a warm timber lounge.
                </p>
              </div>

              <div className="relative h-48 rounded-lg overflow-hidden border border-brass/20">
                <Image
                  src="/images/hotel/restaurant-mezzanine-overview.webp"
                  alt="Galleria Restaurant dining and lounge overview"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* 4. Conference & Event Space */}
            <div className="bg-cream p-8 rounded-xl border border-brass/30 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-oxblood text-brass flex items-center justify-center shadow">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-serif text-tobacco uppercase tracking-wider">
                      Business &amp; Events
                    </span>
                    <h3 className="font-serif text-xl font-bold text-oxblood">
                      Conference &amp; Meeting Facilities
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-walnut/80 leading-relaxed font-light">
                  Our versatile event spaces accommodate business workshops,
                  regional seminars, governmental delegations, and social
                  banquets for up to 120 guests with catering, coffee breaks,
                  and audiovisual support.
                </p>
              </div>

              <div className="relative h-48 rounded-lg overflow-hidden border border-brass/20">
                <Image
                  src="/images/hotel/dining-banquet-spread.webp"
                  alt="Conference and banquet dining presentation"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Essential Services Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
              Standard Conveniences
            </span>
            <h2 className="font-serif text-3xl font-bold text-oxblood mt-1">
              Guest Services Included
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-parchment rounded-lg border border-brass/20 space-y-2">
              <Wifi className="w-5 h-5 text-oxblood mb-2" />
              <h4 className="font-serif font-bold text-oxblood text-base">
                Complimentary Wi-Fi
              </h4>
              <p className="text-xs text-walnut/70 leading-relaxed font-light">
                Reliable wireless internet access throughout the lobby,
                restaurant, and guest accommodations.
              </p>
            </div>

            <div className="p-6 bg-parchment rounded-lg border border-brass/20 space-y-2">
              <Clock className="w-5 h-5 text-oxblood mb-2" />
              <h4 className="font-serif font-bold text-oxblood text-base">
                24-Hour Reception Desk
              </h4>
              <p className="text-xs text-walnut/70 leading-relaxed font-light">
                Day and night front desk presence for check-in, late arrivals,
                luggage assistance, and travel advice.
              </p>
            </div>

            <div className="p-6 bg-parchment rounded-lg border border-brass/20 space-y-2">
              <ShieldCheck className="w-5 h-5 text-oxblood mb-2" />
              <h4 className="font-serif font-bold text-oxblood text-base">
                Gated Compound Parking
              </h4>
              <p className="text-xs text-walnut/70 leading-relaxed font-light">
                Secure, guarded on-site parking for private vehicles, rental
                cars, and touring vans.
              </p>
            </div>

            <div className="p-6 bg-parchment rounded-lg border border-brass/20 space-y-2">
              <Sparkles className="w-5 h-5 text-oxblood mb-2" />
              <h4 className="font-serif font-bold text-oxblood text-base">
                Housekeeping &amp; Laundry
              </h4>
              <p className="text-xs text-walnut/70 leading-relaxed font-light">
                Daily fresh linens, room tidying, and fast in-house laundry and
                garment pressing services.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/book"
              className="inline-flex items-center px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-cream bg-oxblood hover:bg-burgundy rounded transition-colors shadow"
            >
              Reserve Your Stay or Request Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
