"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Star,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Send,
  MessageSquare,
  Lock,
  ThumbsUp,
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";
import { Review } from "@/lib/db";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | "all">("all");

  // Form states
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [stayDate, setStayDate] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews?status=approved");
      const data = await res.json();
      if (data.success) {
        setReviews(data.reviews);
      }
    } catch (err) {
      console.error("Failed to load reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!consent) {
      setErrorMessage("Please check the consent box to confirm your submission.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName,
          email,
          rating,
          title,
          comment,
          stayDate,
          consent,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        // Reset form
        setGuestName("");
        setEmail("");
        setTitle("");
        setComment("");
        setStayDate("");
        setConsent(false);
      } else {
        setErrorMessage(data.error || "Failed to submit review. Please try again.");
      }
    } catch (err) {
      setErrorMessage("An unexpected network error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const filteredReviews =
    selectedRatingFilter === "all"
      ? reviews
      : reviews.filter((r) => r.rating === selectedRatingFilter);

  return (
    <div className="bg-cream text-walnut">
      {/* Header */}
      <section className="bg-oxblood text-cream py-20 border-b border-brass/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brass/40 bg-burgundy/60 text-xs uppercase tracking-widest text-brass font-serif">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Guest Voices &amp; Verified Portals</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream">
            Guest Impressions &amp; Reviews
          </h1>
          <p className="text-parchment/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Read verified impressions from travelers around the world, or share
            your own experience staying at Dib Anbessa Hotel in Bahir Dar.
          </p>
        </div>
      </section>

      {/* Part 1: Official External Review Platforms */}
      <section className="py-16 bg-parchment border-b border-brass/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
              Global Platform Directory
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-oxblood">
              Official External Review Profiles
            </h2>
            <p className="text-xs sm:text-sm text-walnut/70 font-light">
              We encourage guests to consult and verify our independent ratings
              directly on international hospitality services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_INFO.externalReviews.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream p-6 rounded-lg border border-brass/30 shadow-sm hover:shadow-md hover:border-oxblood transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-brass uppercase tracking-wider bg-oxblood/85 px-2.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                    <ExternalLink className="w-4 h-4 text-brass group-hover:text-oxblood transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-oxblood group-hover:text-burgundy">
                    {item.platform}
                  </h3>
                  <p className="text-xs text-walnut/75 mt-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-brass/20 text-xs font-semibold text-oxblood flex items-center justify-between">
                  <span>Visit Verified Profile</span>
                  <span className="text-brass group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Direct Website Reviews & Submission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Reviews List Left */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brass/20 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
                    Published Submissions
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-oxblood">
                    Direct Guest Feedback ({reviews.length})
                  </h3>
                </div>

                {/* Rating Filter */}
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-tobacco mr-2">Filter:</span>
                  {[
                    { val: "all", label: "All" },
                    { val: 5, label: "5 ★" },
                    { val: 4, label: "4 ★" },
                  ].map((btn) => (
                    <button
                      key={btn.val}
                      type="button"
                      onClick={() =>
                        setSelectedRatingFilter(
                          btn.val as number | "all"
                        )
                      }
                      className={`px-3 py-1 text-xs rounded transition-colors ${
                        selectedRatingFilter === btn.val
                          ? "bg-oxblood text-cream font-semibold"
                          : "bg-parchment text-walnut/70 hover:bg-brass/20"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {loading ? (
                <div className="text-center py-12 text-sm text-tobacco">
                  Loading verified guest reviews...
                </div>
              ) : filteredReviews.length === 0 ? (
                <div className="bg-parchment p-8 rounded text-center text-sm text-walnut/70">
                  No reviews match this rating filter.
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="bg-parchment p-6 rounded-lg border border-brass/30 shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-brass">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-brass text-brass"
                            />
                          ))}
                        </div>
                        {rev.stayDate && (
                          <span className="text-[11px] text-tobacco">
                            Stayed: {rev.stayDate}
                          </span>
                        )}
                      </div>

                      <h4 className="font-serif font-bold text-lg text-oxblood">
                        &ldquo;{rev.title}&rdquo;
                      </h4>

                      <p className="text-xs sm:text-sm text-walnut/85 leading-relaxed font-light">
                        {rev.comment}
                      </p>

                      <div className="pt-2 border-t border-brass/20 flex items-center justify-between text-xs">
                        <span className="font-serif font-semibold text-oxblood">
                          — {rev.guestName}
                        </span>
                        <span className="text-emerald-700 flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                          Verified Guest
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Review Form Right */}
            <div className="lg:col-span-5">
              <div className="bg-parchment p-6 sm:p-8 rounded-xl border-2 border-brass/40 shadow-lg sticky top-24">
                <div className="space-y-2 mb-6">
                  <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
                    Share Your Journey
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-oxblood">
                    Submit a Guest Review
                  </h3>
                  <p className="text-xs text-walnut/70 leading-relaxed font-light">
                    Have you stayed with us recently? We appreciate your
                    reflections. Submitted reviews are moderated prior to public
                    display to safeguard authenticity.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="p-6 bg-cream rounded-lg border border-brass/30 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-oxblood">
                      Review Received with Gratitude
                    </h4>
                    <p className="text-xs text-walnut/80 leading-relaxed">
                      Thank you for taking the time to share your stay at Dib
                      Anbessa Hotel. Your submission is now in our moderation
                      queue and will be published upon verification.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-3 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-oxblood bg-brass/20 hover:bg-brass/40 rounded transition-colors"
                    >
                      Submit Another Reflection
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Star Rating Picker */}
                    <div>
                      <label className="block font-semibold text-oxblood mb-1.5">
                        Your Rating (1 to 5 Stars):
                      </label>
                      <div className="flex items-center space-x-1.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setRating(s)}
                            onMouseEnter={() => setHoverRating(s)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 text-brass focus:outline-none"
                            aria-label={`${s} Stars`}
                          >
                            <Star
                              className={`w-6 h-6 transition-colors ${
                                (hoverRating || rating) >= s
                                  ? "fill-brass text-brass"
                                  : "text-brass/40"
                              }`}
                            />
                          </button>
                        ))}
                        <span className="text-tobacco text-xs ml-2 font-serif">
                          {rating} of 5 Stars
                        </span>
                      </div>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Your Full Name:
                      </label>
                      <input
                        type="text"
                        required
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="e.g. Solomon Alemu"
                        className="w-full px-3 py-2 rounded bg-cream border border-brass/30 focus:outline-none focus:border-oxblood text-walnut"
                      />
                    </div>

                    {/* Email (Private) */}
                    <div>
                      <label className="block font-semibold text-oxblood mb-1 flex items-center justify-between">
                        <span>Email Address:</span>
                        <span className="text-[10px] text-tobacco font-normal flex items-center">
                          <Lock className="w-3 h-3 mr-0.5" />
                          Strictly Private
                        </span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 rounded bg-cream border border-brass/30 focus:outline-none focus:border-oxblood text-walnut"
                      />
                    </div>

                    {/* Stay Date */}
                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Approximate Date or Month of Stay (Optional):
                      </label>
                      <input
                        type="text"
                        value={stayDate}
                        onChange={(e) => setStayDate(e.target.value)}
                        placeholder="e.g. November 2026"
                        className="w-full px-3 py-2 rounded bg-cream border border-brass/30 focus:outline-none focus:border-oxblood text-walnut"
                      />
                    </div>

                    {/* Title */}
                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Review Title:
                      </label>
                      <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Memorable retreat by Lake Tana"
                        className="w-full px-3 py-2 rounded bg-cream border border-brass/30 focus:outline-none focus:border-oxblood text-walnut"
                      />
                    </div>

                    {/* Written Comment */}
                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Written Review:
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Share your experience regarding our rooms, the Galleria dining, gardens, or team hospitality..."
                        className="w-full px-3 py-2 rounded bg-cream border border-brass/30 focus:outline-none focus:border-oxblood text-walnut"
                      />
                    </div>

                    {/* Honeypot spam trap */}
                    <input
                      type="text"
                      name="website_trap"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Consent checkbox */}
                    <div className="flex items-start space-x-2 pt-1">
                      <input
                        type="checkbox"
                        id="reviewConsent"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 rounded text-oxblood focus:ring-oxblood"
                      />
                      <label
                        htmlFor="reviewConsent"
                        className="text-[11px] text-walnut/70 leading-snug cursor-pointer"
                      >
                        I certify this review represents my authentic personal
                        experience as a guest of Dib Anbessa Hotel. I consent to
                        its publication following editorial moderation.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3 bg-oxblood hover:bg-burgundy text-cream font-semibold uppercase tracking-wider rounded border border-brass/40 shadow transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        <Send className="w-3.5 h-3.5 text-brass" />
                        <span>
                          {submitting
                            ? "Submitting..."
                            : "Submit for Moderation"}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
