import Link from "next/link";
import { Compass, Bed, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream px-4 py-16 text-center">
      <div className="max-w-md w-full bg-parchment p-8 sm:p-12 rounded-xl border-2 border-brass/40 shadow-xl space-y-6">
        <div className="space-y-2">
          <span className="font-serif text-6xl sm:text-7xl font-bold text-oxblood block">
            404
          </span>
          <h1 className="font-serif text-2xl font-bold text-oxblood">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-walnut/70 font-light leading-relaxed">
            The page you are looking for may have been moved or does not exist.
            Allow us to welcome you back to our comfortable spaces.
          </p>
        </div>

        <div className="pt-2 flex flex-col space-y-2 text-xs">
          <Link
            href="/"
            className="w-full py-3 bg-oxblood hover:bg-burgundy text-cream font-semibold uppercase tracking-wider rounded border border-brass/40 shadow transition-colors flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4 text-brass" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/rooms"
            className="w-full py-2.5 bg-cream hover:bg-cream/80 text-oxblood font-semibold uppercase tracking-wider rounded border border-brass/30 transition-colors"
          >
            Explore Our Rooms
          </Link>
          <Link
            href="/contact"
            className="w-full py-2.5 text-tobacco hover:text-oxblood font-medium"
          >
            Contact Hotel Reception
          </Link>
        </div>
      </div>
    </div>
  );
}
