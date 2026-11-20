"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Car,
  Compass,
  Info,
  Shield,
  Phone,
  Bed,
} from "lucide-react";
import { ROOMS_DATA } from "@/data/hotelInfo";

function BookingForm() {
  const searchParams = useSearchParams();
  const initialRoom = searchParams.get("room") || "";

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState(initialRoom);
  const [airportPickup, setAirportPickup] = useState(false);
  const [lakeExcursion, setLakeExcursion] = useState(false);
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    referenceNumber: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Set min check-in date to today
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!checkIn || !checkOut) {
      setErrorMessage("Please select both check-in and check-out dates.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMessage("Check-out date must be later than check-in date.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          checkIn,
          checkOut,
          guests,
          roomType: roomType || "any",
          airportPickup,
          lakeExcursion,
          notes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitResult({
          referenceNumber: data.referenceNumber,
          message: data.message,
        });
      } else {
        setErrorMessage(data.error || "Failed to submit enquiry.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please try again or call our desk directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-cream text-walnut">
      {/* Header */}
      <section className="bg-oxblood text-cream py-20 border-b border-brass/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brass/40 bg-burgundy/60 text-xs uppercase tracking-widest text-brass font-serif">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Direct Reservation Inquiries</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream">
            Make a Booking Enquiry
          </h1>
          <p className="text-parchment/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Reserve your stay directly with Dib Anbessa Hotel in Bahir Dar. We
            will confirm room availability, accurate rates, and personalized
            transport arrangements.
          </p>
        </div>
      </section>

      {/* Booking Notice */}
      <div className="bg-parchment border-b border-brass/25 py-3 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-2 text-xs text-walnut/80">
          <Info className="w-4 h-4 text-oxblood shrink-0" />
          <span>
            <strong>Please Note:</strong> This is an authentic booking enquiry
            system. We do not charge advance deposits online; our management
            will contact you directly to confirm your reservation and room
            assignment.
          </span>
        </div>
      </div>

      {/* Main Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-parchment p-8 sm:p-12 rounded-xl border-2 border-brass/40 shadow-2xl">
            {submitResult ? (
              <div className="text-center space-y-6 py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
                    Enquiry Registered
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-oxblood">
                    Thank You, {fullName}!
                  </h2>
                  <p className="text-sm text-walnut/80 max-w-lg mx-auto leading-relaxed">
                    Your booking enquiry for Dib Anbessa Hotel has been received.
                    Our reservations manager will review your requested dates
                    and reach out to you via telephone or email within 12 hours.
                  </p>
                </div>

                {/* Reference Number Card */}
                <div className="p-4 bg-cream rounded-lg border border-brass/35 max-w-sm mx-auto">
                  <span className="text-xs text-tobacco block uppercase tracking-wider font-serif">
                    Your Booking Reference:
                  </span>
                  <span className="font-mono text-xl font-bold text-oxblood tracking-wider">
                    {submitResult.referenceNumber}
                  </span>
                  <p className="text-[11px] text-walnut/60 mt-1">
                    Please keep this reference for your communications with our
                    desk.
                  </p>
                </div>

                <div className="p-4 bg-parchment rounded border border-brass/20 text-xs text-tobacco max-w-md mx-auto space-y-1">
                  <p className="font-semibold text-oxblood">
                    Need immediate confirmation?
                  </p>
                  <p>
                    Call our 24-hour reception desk directly at:{" "}
                    <a
                      href="tel:+251582201436"
                      className="font-bold underline text-oxblood"
                    >
                      +251 58 220 1436
                    </a>{" "}
                    or Mobile:{" "}
                    <a
                      href="tel:+251946456212"
                      className="font-bold underline text-oxblood"
                    >
                      +251 946 456 212
                    </a>
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/"
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream bg-oxblood hover:bg-burgundy rounded transition-colors shadow"
                  >
                    Return to Homepage
                  </Link>
                  <Link
                    href="/rooms"
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-oxblood bg-cream hover:bg-cream/80 border border-brass/40 rounded transition-colors"
                  >
                    Browse Other Rooms
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Section 1: Guest Personal Information */}
                <div>
                  <h3 className="font-serif text-lg font-bold text-oxblood border-b border-brass/25 pb-2 mb-4">
                    1. Guest Contact Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Almaz Bekele"
                        className="w-full px-3.5 py-2.5 rounded bg-cream border border-brass/35 focus:outline-none focus:border-oxblood text-walnut"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="almaz@example.com"
                        className="w-full px-3.5 py-2.5 rounded bg-cream border border-brass/35 focus:outline-none focus:border-oxblood text-walnut"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Telephone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+251 91 ..."
                        className="w-full px-3.5 py-2.5 rounded bg-cream border border-brass/35 focus:outline-none focus:border-oxblood text-walnut"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Dates & Accommodation */}
                <div className="pt-2">
                  <h3 className="font-serif text-lg font-bold text-oxblood border-b border-brass/25 pb-2 mb-4">
                    2. Stay Dates &amp; Room Preference
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Check-in Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={today}
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded bg-cream border border-brass/35 focus:outline-none focus:border-oxblood text-walnut font-sans"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Check-out Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={checkIn || today}
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded bg-cream border border-brass/35 focus:outline-none focus:border-oxblood text-walnut font-sans"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Number of Guests *
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 rounded bg-cream border border-brass/35 focus:outline-none focus:border-oxblood text-walnut"
                      >
                        <option value={1}>1 Guest (Solo)</option>
                        <option value={2}>2 Guests (Couple / Pair)</option>
                        <option value={3}>3 Guests</option>
                        <option value={4}>4 Guests (Family)</option>
                        <option value={5}>5+ Guests (Group)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block font-semibold text-oxblood mb-1">
                      Preferred Room Category:
                    </label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-cream border border-brass/35 focus:outline-none focus:border-oxblood text-walnut"
                    >
                      <option value="">Any Available Room / Best Recommendation</option>
                      {ROOMS_DATA.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name} — ({r.bedType})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Section 3: Optional Excursion Services */}
                <div className="pt-2">
                  <h3 className="font-serif text-lg font-bold text-oxblood border-b border-brass/25 pb-2 mb-4">
                    3. Optional Excursions &amp; Airport Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex items-start p-3 bg-cream rounded border border-brass/25 cursor-pointer hover:border-oxblood transition-colors">
                      <input
                        type="checkbox"
                        checked={airportPickup}
                        onChange={(e) => setAirportPickup(e.target.checked)}
                        className="mt-1 rounded text-oxblood focus:ring-oxblood"
                      />
                      <div className="ml-3">
                        <span className="font-semibold text-oxblood block flex items-center">
                          <Car className="w-4 h-4 mr-1 text-brass" />
                          Airport Transfer (Bahir Dar BJR)
                        </span>
                        <span className="text-[11px] text-walnut/70">
                          Pickup or dropoff coordination with hotel drivers
                        </span>
                      </div>
                    </label>

                    <label className="flex items-start p-3 bg-cream rounded border border-brass/25 cursor-pointer hover:border-oxblood transition-colors">
                      <input
                        type="checkbox"
                        checked={lakeExcursion}
                        onChange={(e) => setLakeExcursion(e.target.checked)}
                        className="mt-1 rounded text-oxblood focus:ring-oxblood"
                      />
                      <div className="ml-3">
                        <span className="font-semibold text-oxblood block flex items-center">
                          <Compass className="w-4 h-4 mr-1 text-brass" />
                          Lake Tana Boat / Blue Nile Excursion
                        </span>
                        <span className="text-[11px] text-walnut/70">
                          Assistance connecting with licensed captains and guides
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Section 4: Special Notes */}
                <div className="pt-2">
                  <label className="block font-semibold text-oxblood mb-1">
                    Special Inquiries, Flight Times, or Dietary Requests:
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Arriving on morning flight ET126; requesting high-floor room overlooking the garden courtyard..."
                    className="w-full px-3.5 py-2.5 rounded bg-cream border border-brass/35 focus:outline-none focus:border-oxblood text-walnut"
                  />
                </div>

                {/* Honeypot spam trap */}
                <input
                  type="text"
                  name="company_trap"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="pt-4 border-t border-brass/25">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-oxblood hover:bg-burgundy text-cream font-semibold uppercase tracking-wider rounded-md border border-brass/40 shadow-lg transition-all flex items-center justify-center space-x-2 text-sm disabled:opacity-50"
                  >
                    <CalendarCheck className="w-4 h-4 text-brass" />
                    <span>
                      {submitting
                        ? "Registering Enquiry..."
                        : "Submit Booking Enquiry to Hotel Desk"}
                    </span>
                  </button>
                  <p className="text-[11px] text-center text-tobacco mt-2">
                    No payment details required now. Confirmed directly by
                    hotel management.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-tobacco">Loading booking portal...</div>}>
      <BookingForm />
    </Suspense>
  );
}
