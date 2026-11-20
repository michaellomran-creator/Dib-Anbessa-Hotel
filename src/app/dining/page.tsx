import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  Clock,
  Phone,
  Sparkles,
  Coffee,
  Wine,
  CheckCircle2,
  Info,
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";

export const metadata: Metadata = {
  title: "Dining at Galleria Restaurant & Classic Bar",
  description:
    "Experience Lake Tana fresh fish specialties, traditional Ethiopian banquets, and evening beverages at Galleria Restaurant & Bar in Dib Anbessa Hotel, Bahir Dar.",
};

export default function DiningPage() {
  return (
    <div className="bg-cream text-walnut">
      {/* Header */}
      <section className="bg-oxblood text-cream py-20 border-b border-brass/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brass/40 bg-burgundy/60 text-xs uppercase tracking-widest text-brass font-serif">
            <span>ጋለሪያ የምግብ አዳራሽ · Galleria Restaurant</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream">
            Dining &amp; Classic Bar
          </h1>
          <p className="text-parchment/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Fresh Lake Tana fish, time-honored Ethiopian feasts, and an authentic
            wooden bar lounge in Bahir Dar.
          </p>
        </div>
      </section>

      {/* Main Dining Overview */}
      <section className="py-20 bg-parchment border-b border-brass/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mosaic Left */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden border-2 border-brass/35 shadow-xl aspect-[3/4]">
                <Image
                  src="/images/hotel/dining-lake-tana-fish.webp"
                  alt="Lake Tana crisp pan-fried fish specialty with lime and rice"
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden border-2 border-brass/35 shadow-xl aspect-[4/3]">
                  <Image
                    src="/images/hotel/bar-classic-lounge.webp"
                    alt="Dib Anbessa classic wooden bar with spirits"
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>

                <div className="relative rounded-lg overflow-hidden border-2 border-brass/35 shadow-xl aspect-[4/3]">
                  <Image
                    src="/images/hotel/dining-banquet-spread.webp"
                    alt="Traditional Ethiopian banquet setting"
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Narrative Right */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-tobacco font-serif">
                <UtensilsCrossed className="w-3.5 h-3.5 text-brass" />
                <span>Culinary Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-oxblood leading-tight">
                Fresh Waters of Lake Tana, Handcrafted Traditions
              </h2>

              <p className="text-walnut/90 text-base leading-relaxed font-light">
                Dining at Dib Anbessa Hotel is rooted in the rich agricultural and
                aquatic bounty of Bahir Dar. Our flagship venue,{" "}
                <strong className="text-oxblood font-semibold">
                  Galleria Restaurant
                </strong>
                , features an airy multi-tier layout where hotel guests and
                travelers gather over memorable meals.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-cream rounded border border-brass/20 space-y-1">
                  <h4 className="font-serif font-bold text-oxblood text-sm flex items-center">
                    <Sparkles className="w-4 h-4 text-brass mr-2" />
                    Lake Tana Pan-Fried Fish Specialty
                  </h4>
                  <p className="text-xs text-walnut/75 leading-relaxed">
                    Delivered daily from the nearby shoreline docks, whole white
                    fish and fillets are seasoned with garlic and regional herbs,
                    pan-crisped to golden texture, and served with fresh lime,
                    steamed rice, and garden vegetables.
                  </p>
                </div>

                <div className="p-4 bg-cream rounded border border-brass/20 space-y-1">
                  <h4 className="font-serif font-bold text-oxblood text-sm flex items-center">
                    <Coffee className="w-4 h-4 text-brass mr-2" />
                    Traditional Coffee Ceremony
                  </h4>
                  <p className="text-xs text-walnut/75 leading-relaxed">
                    Freshly roasted Ethiopian highland coffee beans ground by
                    hand, brewed in a traditional clay jebena pot, and poured
                    amid the fragrance of smoking frankincense.
                  </p>
                </div>

                <div className="p-4 bg-cream rounded border border-brass/20 space-y-1">
                  <h4 className="font-serif font-bold text-oxblood text-sm flex items-center">
                    <Wine className="w-4 h-4 text-brass mr-2" />
                    The Classic Timber Bar
                  </h4>
                  <p className="text-xs text-walnut/75 leading-relaxed">
                    A warm evening gathering retreat with handcrafted timber
                    shelving, serving fine whiskies, cold Ethiopian beers (St.
                    George, Bedele, Walia), and Ethiopian Rift Valley wines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours & Dining Schedule */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
              Operating Schedule
            </span>
            <h2 className="font-serif text-3xl font-bold text-oxblood">
              Galleria Restaurant &amp; Bar Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-parchment p-6 rounded-lg border border-brass/30 text-center space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-tobacco font-bold">
                Breakfast
              </span>
              <p className="font-serif text-xl font-bold text-oxblood">
                {HOTEL_INFO.dining.hours.breakfast}
              </p>
              <p className="text-[11px] text-walnut/70">
                Fresh coffee, eggs, bread rolls, and morning buffet
              </p>
            </div>

            <div className="bg-parchment p-6 rounded-lg border border-brass/30 text-center space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-tobacco font-bold">
                Lunch
              </span>
              <p className="font-serif text-xl font-bold text-oxblood">
                {HOTEL_INFO.dining.hours.lunch}
              </p>
              <p className="text-[11px] text-walnut/70">
                Fresh fish specialties, salads, and Ethiopian dishes
              </p>
            </div>

            <div className="bg-parchment p-6 rounded-lg border border-brass/30 text-center space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-tobacco font-bold">
                Dinner
              </span>
              <p className="font-serif text-xl font-bold text-oxblood">
                {HOTEL_INFO.dining.hours.dinner}
              </p>
              <p className="text-[11px] text-walnut/70">
                Full à la carte dining, banquets, and regional platters
              </p>
            </div>

            <div className="bg-parchment p-6 rounded-lg border border-brass/30 text-center space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-tobacco font-bold">
                Lounge Bar
              </span>
              <p className="font-serif text-xl font-bold text-oxblood">
                {HOTEL_INFO.dining.hours.bar}
              </p>
              <p className="text-[11px] text-walnut/70">
                Local and international spirits, wines, and cold beers
              </p>
            </div>
          </div>

          {/* Verification Notice */}
          <div className="mt-10 p-4 bg-parchment rounded border border-brass/20 text-xs text-walnut/80 flex items-center justify-between">
            <span className="flex items-center">
              <Info className="w-4 h-4 text-oxblood mr-2 shrink-0" />
              Full seasonal menus and current dish pricing are provided in person
              at Galleria Restaurant upon seating.
            </span>
            <a
              href="tel:+251582201436"
              className="font-semibold text-oxblood hover:text-burgundy shrink-0 ml-4"
            >
              Reserve Table: +251 58 220 1436
            </a>
          </div>
        </div>
      </section>

      {/* Mezzanine Perspective Showcase */}
      <section className="py-16 bg-oxblood text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 relative h-80 sm:h-96 rounded-lg overflow-hidden border border-brass/40 shadow-xl">
              <Image
                src="/images/hotel/restaurant-mezzanine-overview.webp"
                alt="Mezzanine perspective of Galleria Restaurant dining hall"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <div className="md:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-brass font-serif">
                Social Space
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream">
                The Galleria Mezzanine
              </h3>
              <p className="text-parchment/80 text-sm leading-relaxed font-light">
                Overlooking the ground dining hall and illuminated sign, the
                mezzanine level offers comfortable lounge seating with red velvet
                couches, quiet alcoves for conversation, and easy access to the
                upper floor suites.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brass hover:text-brass-light"
                >
                  <span>Inquire for Group or Event Catering</span>
                  <span className="ml-1 text-base">&raquo;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
