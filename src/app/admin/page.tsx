"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  MessageSquare,
  CalendarCheck,
  Bed,
  Camera,
  Settings,
  CheckCircle2,
  XCircle,
  Trash2,
  Lock,
  LogOut,
  RefreshCw,
  Search,
  Filter,
  Eye,
  Mail,
  Phone,
  Calendar,
  AlertTriangle,
  ClipboardList,
} from "lucide-react";
import { Review, BookingEnquiry } from "@/lib/db";
import { ROOMS_DATA, RoomType, HOTEL_INFO } from "@/data/hotelInfo";
import { HOTEL_PHOTOS, PhotoItem } from "@/data/photography";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<
    "reviews" | "enquiries" | "rooms" | "gallery" | "settings" | "checklist"
  >("reviews");

  // Data states
  const [reviews, setReviews] = useState<Review[]>([]);
  const [enquiries, setEnquiries] = useState<BookingEnquiry[]>([]);
  const [rooms, setRooms] = useState<RoomType[]>(ROOMS_DATA);
  const [loading, setLoading] = useState(false);
  const [actionMessage, setActionMessage] = useState("");

  // Review filters
  const [reviewFilter, setReviewFilter] = useState<"all" | "pending" | "approved" | "rejected">("all");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "dibanbessa2026" || password === "admin123") {
      setIsAuthenticated(true);
      setLoginError("");
      loadDashboardData();
    } else {
      setLoginError("Invalid password. Please use 'dibanbessa2026'.");
    }
  };

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [resRev, resEnq] = await Promise.all([
        fetch("/api/reviews?all=true"),
        fetch("/api/enquiries"),
      ]);

      const dataRev = await resRev.json();
      const dataEnq = await resEnq.json();

      if (dataRev.success) setReviews(dataRev.reviews);
      if (dataEnq.success) setEnquiries(dataEnq.enquiries);
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Review Actions
  const handleReviewStatus = async (id: string, status: "approved" | "rejected") => {
    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        setReviews((prev) =>
          prev.map((r) => (r.id === id ? { ...r, status } : r))
        );
        setActionMessage(`Review status updated to ${status}.`);
        setTimeout(() => setActionMessage(""), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteReview = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this review?")) return;
    try {
      const res = await fetch(`/api/reviews/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setReviews((prev) => prev.filter((r) => r.id !== id));
        setActionMessage("Review permanently deleted.");
        setTimeout(() => setActionMessage(""), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Enquiry Actions
  const handleEnquiryStatus = async (
    id: string,
    status: "new" | "contacted" | "confirmed" | "archived"
  ) => {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status } : e))
        );
        setActionMessage(`Enquiry status changed to ${status}.`);
        setTimeout(() => setActionMessage(""), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4 py-16">
        <div className="max-w-md w-full bg-parchment p-8 rounded-xl border-2 border-brass/40 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-oxblood text-brass mx-auto flex items-center justify-center shadow">
              <Shield className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-oxblood">
              Dib Anbessa Management
            </h2>
            <p className="text-xs text-tobacco font-serif">
              Staff &amp; Content Administration Console
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            {loginError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded text-center">
                {loginError}
              </div>
            )}

            <div>
              <label className="block font-semibold text-oxblood mb-1">
                Administrative Passcode:
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter passcode (e.g. dibanbessa2026)"
                className="w-full px-3.5 py-2.5 rounded bg-cream border border-brass/35 focus:outline-none focus:border-oxblood text-walnut font-mono text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-oxblood hover:bg-burgundy text-cream font-semibold uppercase tracking-wider rounded border border-brass/40 shadow transition-colors"
            >
              Enter Management Console
            </button>

            <div className="text-center text-[11px] text-tobacco pt-2">
              Default system passcode:{" "}
              <code className="bg-cream px-1.5 py-0.5 rounded text-oxblood font-bold font-mono">
                dibanbessa2026
              </code>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const filteredReviews =
    reviewFilter === "all"
      ? reviews
      : reviews.filter((r) => r.status === reviewFilter);

  const pendingReviewsCount = reviews.filter((r) => r.status === "pending").length;
  const newEnquiriesCount = enquiries.filter((e) => e.status === "new").length;

  return (
    <div className="bg-cream min-h-screen text-walnut">
      {/* Top Admin Bar */}
      <header className="bg-oxblood text-cream border-b border-brass/30 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-burgundy border border-brass flex items-center justify-center text-brass font-serif font-bold text-sm">
              DA
            </div>
            <div>
              <h1 className="font-serif text-lg font-bold text-cream">
                Dib Anbessa Hotel — Management Dashboard
              </h1>
              <p className="text-[11px] text-brass font-serif">
                General Manager: Yidersal Mengistu · Bahir Dar, Ethiopia
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <button
              type="button"
              onClick={loadDashboardData}
              className="p-2 rounded bg-burgundy hover:bg-brass hover:text-oxblood transition-colors flex items-center"
              title="Refresh Data"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1" />
              Refresh
            </button>

            <button
              type="button"
              onClick={() => setIsAuthenticated(false)}
              className="px-3 py-2 rounded bg-cream/10 hover:bg-cream/20 text-cream transition-colors flex items-center"
            >
              <LogOut className="w-3.5 h-3.5 mr-1 text-brass" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Action Notification Toast */}
      {actionMessage && (
        <div className="bg-emerald-700 text-cream py-2 px-4 text-center text-xs font-semibold tracking-wider">
          {actionMessage}
        </div>
      )}

      {/* Admin Nav Tabs */}
      <div className="bg-parchment border-b border-brass/25 px-4 sm:px-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex space-x-2 py-2">
          {[
            {
              id: "reviews",
              label: "Guest Reviews",
              icon: MessageSquare,
              badge: pendingReviewsCount,
            },
            {
              id: "enquiries",
              label: "Booking Enquiries",
              icon: CalendarCheck,
              badge: newEnquiriesCount,
            },
            { id: "rooms", label: "Room Inventory", icon: Bed },
            { id: "gallery", label: "Photo Gallery", icon: Camera },
            { id: "checklist", label: "Verification Checklist", icon: ClipboardList },
            { id: "settings", label: "Hotel Information", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 ${
                  active
                    ? "bg-oxblood text-cream shadow-sm"
                    : "text-walnut/70 hover:bg-brass/20"
                }`}
              >
                <Icon className="w-3.5 h-3.5 mr-1.5 text-brass" />
                <span>{tab.label}</span>
                {Boolean(tab.badge && tab.badge > 0) && (
                  <span className="ml-2 px-1.5 py-0.5 rounded-full text-[10px] bg-brass text-oxblood font-bold font-mono">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Panels */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* TAB 1: REVIEWS MODERATION */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-oxblood">
                  Guest Reviews Moderation
                </h2>
                <p className="text-xs text-walnut/70 font-light">
                  Approve, reject, or manage submissions before public display
                  on the website.
                </p>
              </div>

              {/* Status Filter */}
              <div className="flex space-x-1 text-xs">
                {(["all", "pending", "approved", "rejected"] as const).map(
                  (st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setReviewFilter(st)}
                      className={`px-3 py-1.5 rounded uppercase tracking-wider font-medium ${
                        reviewFilter === st
                          ? "bg-oxblood text-cream font-semibold"
                          : "bg-parchment text-walnut/70 hover:bg-brass/20"
                      }`}
                    >
                      {st} (
                      {st === "all"
                        ? reviews.length
                        : reviews.filter((r) => r.status === st).length}
                      )
                    </button>
                  )
                )}
              </div>
            </div>

            {filteredReviews.length === 0 ? (
              <div className="bg-parchment p-12 text-center rounded-lg border border-brass/25 text-sm text-walnut/70">
                No reviews found under the &apos;{reviewFilter}&apos; filter.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-parchment p-6 rounded-lg border border-brass/30 shadow-sm flex flex-col md:flex-row justify-between gap-6"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-3">
                        <span
                          className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-wider ${
                            rev.status === "approved"
                              ? "bg-emerald-100 text-emerald-800"
                              : rev.status === "pending"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          Status: {rev.status}
                        </span>
                        <div className="flex text-brass text-xs">
                          {"★".repeat(rev.rating)}
                          {"☆".repeat(5 - rev.rating)}
                        </div>
                        {rev.stayDate && (
                          <span className="text-[11px] text-tobacco">
                            Stay: {rev.stayDate}
                          </span>
                        )}
                        <span className="text-[11px] text-walnut/50">
                          Submitted: {new Date(rev.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-base text-oxblood">
                        &ldquo;{rev.title}&rdquo;
                      </h4>

                      <p className="text-xs sm:text-sm text-walnut/85 leading-relaxed font-light">
                        {rev.comment}
                      </p>

                      <div className="text-xs text-tobacco font-mono pt-1">
                        Guest: <strong className="text-oxblood">{rev.guestName}</strong>{" "}
                        · Private Email: <span>{rev.email}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex md:flex-col items-center justify-center gap-2 border-t md:border-t-0 md:border-l border-brass/25 pt-4 md:pt-0 md:pl-6 shrink-0">
                      {rev.status !== "approved" && (
                        <button
                          type="button"
                          onClick={() => handleReviewStatus(rev.id, "approved")}
                          className="w-full px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-cream text-xs font-semibold rounded flex items-center justify-center space-x-1"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Approve</span>
                        </button>
                      )}

                      {rev.status !== "rejected" && (
                        <button
                          type="button"
                          onClick={() => handleReviewStatus(rev.id, "rejected")}
                          className="w-full px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-cream text-xs font-semibold rounded flex items-center justify-center space-x-1"
                        >
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Reject</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleDeleteReview(rev.id)}
                        className="w-full px-3 py-1.5 bg-red-800 hover:bg-red-900 text-cream text-xs font-semibold rounded flex items-center justify-center space-x-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: BOOKING ENQUIRIES */}
        {activeTab === "enquiries" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-oxblood">
                Booking Enquiries Directory ({enquiries.length})
              </h2>
              <p className="text-xs text-walnut/70 font-light">
                Follow up with travelers regarding room assignment, dates, and
                arrival transport.
              </p>
            </div>

            {enquiries.length === 0 ? (
              <div className="bg-parchment p-12 text-center rounded-lg border border-brass/25 text-sm text-walnut/70">
                No booking enquiries registered yet.
              </div>
            ) : (
              <div className="space-y-4">
                {enquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="bg-parchment p-6 rounded-lg border border-brass/30 shadow-sm space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brass/20 pb-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono font-bold text-sm bg-oxblood text-brass px-2.5 py-1 rounded">
                          {enq.referenceNumber}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-oxblood">
                          {enq.fullName}
                        </h4>
                      </div>

                      {/* Status Selector */}
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="text-tobacco font-medium">Status:</span>
                        <select
                          value={enq.status}
                          onChange={(e) =>
                            handleEnquiryStatus(enq.id, e.target.value as any)
                          }
                          className="px-2.5 py-1 rounded bg-cream border border-brass/35 text-oxblood font-semibold focus:outline-none"
                        >
                          <option value="new">New (Uncontacted)</option>
                          <option value="contacted">Contacted</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="archived">Archived</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                      <div>
                        <span className="text-tobacco block">Stay Dates:</span>
                        <strong className="text-walnut">
                          {enq.checkIn} &rarr; {enq.checkOut}
                        </strong>
                      </div>
                      <div>
                        <span className="text-tobacco block">Guests &amp; Room:</span>
                        <strong className="text-walnut">
                          {enq.guests} Guests · Room: {enq.roomType}
                        </strong>
                      </div>
                      <div>
                        <span className="text-tobacco block">Contact Telephone:</span>
                        <a
                          href={`tel:${enq.phone}`}
                          className="text-oxblood font-semibold hover:underline"
                        >
                          {enq.phone}
                        </a>
                      </div>
                      <div>
                        <span className="text-tobacco block">Email Address:</span>
                        <a
                          href={`mailto:${enq.email}`}
                          className="text-oxblood hover:underline"
                        >
                          {enq.email}
                        </a>
                      </div>
                    </div>

                    {/* Excursion & Note badges */}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] pt-1">
                      {enq.airportPickup && (
                        <span className="bg-brass/20 text-oxblood font-medium px-2 py-0.5 rounded border border-brass/40">
                          ✈ Airport Transfer Requested
                        </span>
                      )}
                      {enq.lakeExcursion && (
                        <span className="bg-brass/20 text-oxblood font-medium px-2 py-0.5 rounded border border-brass/40">
                          ⛵ Lake Tana / Nile Excursion Coordination
                        </span>
                      )}
                      <span className="text-walnut/50 ml-auto">
                        Submitted: {new Date(enq.createdAt).toLocaleString()}
                      </span>
                    </div>

                    {enq.notes && (
                      <div className="p-3 bg-cream rounded border border-brass/20 text-xs text-walnut/80">
                        <strong className="text-oxblood block mb-0.5">
                          Guest Message / Special Request:
                        </strong>
                        <p>{enq.notes}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: ROOMS INVENTORY */}
        {activeTab === "rooms" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-oxblood">
                Room Inventory Management (60 Rooms Total)
              </h2>
              <p className="text-xs text-walnut/70 font-light">
                Manage room descriptions, verified amenities, and status.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-parchment p-6 rounded-lg border border-brass/30 shadow-sm space-y-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-24 h-24 rounded overflow-hidden shrink-0 border border-brass/25">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-serif text-tobacco">
                        {room.amharicName}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-oxblood">
                        {room.name}
                      </h4>
                      <p className="text-xs text-walnut/70">
                        {room.bedType} · {room.sizeM2} m²
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-walnut/80 leading-relaxed font-light">
                    {room.description}
                  </p>

                  <div className="p-3 bg-cream rounded border border-brass/20 text-xs space-y-1">
                    <span className="font-semibold text-oxblood block">
                      Amenities ({room.amenities.length}):
                    </span>
                    <p className="text-walnut/70 truncate">
                      {room.amenities.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PHOTO ARCHIVE */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-oxblood">
                Photographic Library ({HOTEL_PHOTOS.length} Authentic Photos)
              </h2>
              <p className="text-xs text-walnut/70 font-light">
                Verified photos from client uploads and the official Tab Travel
                hub.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {HOTEL_PHOTOS.map((p) => (
                <div
                  key={p.id}
                  className="bg-parchment rounded-lg border border-brass/30 overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  <div className="relative h-40">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-oxblood/85 text-brass text-[10px] px-2 py-0.5 rounded uppercase">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-3 text-xs">
                    <h5 className="font-serif font-bold text-oxblood truncate">
                      {p.title}
                    </h5>
                    <p className="text-[10px] text-tobacco truncate mt-0.5">
                      {p.src}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: MANAGEMENT VERIFICATION CHECKLIST */}
        {activeTab === "checklist" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-oxblood">
                Management Verification Checklist
              </h2>
              <p className="text-xs text-walnut/70 font-light">
                Critical property information items to confirm with Dib Anbessa
                Hotel leadership before full commercial rollout.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  category: "Room Inventory & Rates",
                  items: [
                    "Confirm total current operable room count (Expedia reports 60 rooms).",
                    "Verify exact room categories (Classic Twin, Heritage Carved Wood, Deluxe Terracotta, Executive Suite).",
                    "Provide verified public room rates (rack rates in ETB and USD for international travelers).",
                    "Confirm standard check-in time (e.g. 2:00 PM) and check-out time (e.g. 11:00 AM / 12:00 PM).",
                  ],
                },
                {
                  category: "Dining & Menu",
                  items: [
                    "Confirm that 'Galleria Restaurant' remains the official dining brand.",
                    "Verify current operating hours for Breakfast, Lunch, Dinner, and Bar service.",
                    "Review signature Lake Tana fish preparation and regional menu pricing.",
                    "Confirm whether complimentary breakfast is included in standard room bookings.",
                  ],
                },
                {
                  category: "Contact Details & Map Pin",
                  items: [
                    "Verify primary front desk landline: +251 58 220 1436.",
                    "Verify mobile guest hub number: +251 946 456 212.",
                    "Verify reservation hotline: +251 98 211 7777.",
                    "Confirm exact GPS coordinates on A3 Highway [11.5945, 37.3905] against the physical main entrance gate.",
                  ],
                },
                {
                  category: "Excursion & Airport Transport",
                  items: [
                    "Confirm operational status of the hotel 4x4 safari expedition vehicle (shown in entrance photograph).",
                    "Clarify whether airport transfers from Bahir Dar Airport (BJR) are complimentary or incur a nominal fee.",
                    "Confirm licensed boat captain contacts for guest excursions to Lake Tana island monasteries.",
                  ],
                },
                {
                  category: "Branding & Official Signage",
                  items: [
                    "Confirm English spelling convention: 'Dib Anbessa Hotel' vs 'Deb Anbessa Hotel' (both appear on physical signage on the building roof and entrance billboard).",
                    "Check whether high-resolution vector artwork exists for the official hotel crest or seal.",
                  ],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="bg-parchment p-6 rounded-lg border border-brass/30 shadow-sm space-y-3"
                >
                  <h3 className="font-serif font-bold text-base text-oxblood uppercase tracking-wider flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-brass mr-2" />
                    {section.category}
                  </h3>
                  <ul className="space-y-2 text-xs text-walnut/85">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-brass mr-2 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: SETTINGS */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-oxblood">
                Hotel Information &amp; Settings
              </h2>
              <p className="text-xs text-walnut/70 font-light">
                Configure published contact numbers, emails, and notices.
              </p>
            </div>

            <div className="bg-parchment p-6 rounded-lg border border-brass/30 shadow-sm space-y-4 max-w-2xl text-xs">
              <div>
                <label className="block font-semibold text-oxblood mb-1">
                  Primary Phone Numbers:
                </label>
                <input
                  type="text"
                  defaultValue="+251 58 220 1436, +251 946 456 212, +251 98 211 7777"
                  className="w-full px-3 py-2 rounded bg-cream border border-brass/35 text-walnut"
                />
              </div>

              <div>
                <label className="block font-semibold text-oxblood mb-1">
                  Contact Emails:
                </label>
                <input
                  type="text"
                  defaultValue="info@dibanbessahotel.com, reservations@dibanbessahotel.com"
                  className="w-full px-3 py-2 rounded bg-cream border border-brass/35 text-walnut"
                />
              </div>

              <div>
                <label className="block font-semibold text-oxblood mb-1">
                  Physical Address:
                </label>
                <input
                  type="text"
                  defaultValue="A3 Highway / Lake Street, near St. George Church, Bahir Dar, Ethiopia"
                  className="w-full px-3 py-2 rounded bg-cream border border-brass/35 text-walnut"
                />
              </div>

              <div>
                <label className="block font-semibold text-oxblood mb-1">
                  Top Announcement Message:
                </label>
                <input
                  type="text"
                  defaultValue="ድብ አንበሳ ሆቴል — Classic Hospitality Since Establishment"
                  className="w-full px-3 py-2 rounded bg-cream border border-brass/35 text-walnut"
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setActionMessage("Settings saved successfully.");
                    setTimeout(() => setActionMessage(""), 3000);
                  }}
                  className="px-6 py-2.5 bg-oxblood text-cream font-semibold uppercase tracking-wider rounded border border-brass/40 shadow hover:bg-burgundy transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
