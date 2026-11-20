"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Navigation,
  Compass,
  MessageSquare,
  Building,
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";
import InteractiveMap from "@/components/InteractiveMap";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate contact message receipt
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }, 800);
  };

  return (
    <div className="bg-cream text-walnut">
      {/* Header */}
      <section className="bg-oxblood text-cream py-20 border-b border-brass/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brass/40 bg-burgundy/60 text-xs uppercase tracking-widest text-brass font-serif">
            <MapPin className="w-3.5 h-3.5" />
            <span>ድብ አንበሳ ሆቴል · Bahir Dar, Ethiopia</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream">
            Contact &amp; Location
          </h1>
          <p className="text-parchment/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Reach our reception desk in Bahir Dar for reservation inquiries,
            directions, airport transfers, and general hospitality support.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Left */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
                  Hotel Address &amp; Desk
                </span>
                <h2 className="font-serif text-3xl font-bold text-oxblood mt-1">
                  We Welcome Your Inquiries
                </h2>
                <p className="text-xs sm:text-sm text-walnut/75 mt-2 font-light leading-relaxed">
                  Located along Bahir Dar’s principal palm avenue, close to the
                  lakefront jetty and the Blue Nile Bridge.
                </p>
              </div>

              {/* Verified Contact Card */}
              <div className="bg-parchment p-6 rounded-xl border border-brass/30 space-y-5">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-oxblood shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-oxblood">
                      Physical Location:
                    </h4>
                    <p className="text-xs text-walnut/80 mt-0.5 leading-relaxed">
                      {HOTEL_INFO.contact.address}
                    </p>
                    <p className="text-[11px] text-tobacco mt-1">
                      {HOTEL_INFO.contact.neighborhood}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-brass/20">
                  <Phone className="w-5 h-5 text-oxblood shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-oxblood">
                      Telephone Numbers:
                    </h4>
                    <div className="text-xs text-walnut/80 mt-1 space-y-1">
                      {HOTEL_INFO.contact.phones.map((p, i) => (
                        <p key={i}>
                          <span className="text-tobacco">{p.label}:</span>{" "}
                          <a
                            href={`tel:${p.number.replace(/\s+/g, "")}`}
                            className="font-semibold text-oxblood hover:underline"
                          >
                            {p.number}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-brass/20">
                  <Mail className="w-5 h-5 text-oxblood shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-oxblood">
                      Electronic Mail:
                    </h4>
                    <div className="text-xs text-walnut/80 mt-1 space-y-1">
                      {HOTEL_INFO.contact.emails.map((e, i) => (
                        <p key={i}>
                          <span className="text-tobacco">{e.label}:</span>{" "}
                          <a
                            href={`mailto:${e.address}`}
                            className="text-oxblood font-medium hover:underline"
                          >
                            {e.address}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-brass/20">
                  <Clock className="w-5 h-5 text-oxblood shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-oxblood">
                      Reception Hours:
                    </h4>
                    <p className="text-xs text-walnut/80 mt-0.5">
                      24 Hours / 7 Days a week continuous service
                    </p>
                  </div>
                </div>
              </div>

              {/* General Manager Info */}
              <div className="p-4 bg-cream rounded border-l-4 border-brass shadow-sm">
                <span className="text-[11px] font-serif text-tobacco uppercase tracking-wider block">
                  Property Leadership
                </span>
                <p className="font-serif font-bold text-oxblood text-sm">
                  {HOTEL_INFO.generalManager.name},{" "}
                  <span className="font-normal font-sans text-xs text-walnut/70">
                    {HOTEL_INFO.generalManager.title}
                  </span>
                </p>
                <p className="text-xs text-walnut/75 mt-1 font-light italic">
                  &ldquo;Our desk is always at your service to make your stay in
                  Bahir Dar peaceful and well accommodated.&rdquo;
                </p>
              </div>
            </div>

            {/* Contact Form Right */}
            <div className="lg:col-span-7">
              <div className="bg-parchment p-8 sm:p-10 rounded-xl border-2 border-brass/40 shadow-xl">
                <div className="space-y-2 mb-6">
                  <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
                    Message Reception
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-oxblood">
                    Send Us a Direct Inquiry
                  </h3>
                  <p className="text-xs text-walnut/70 leading-relaxed font-light">
                    For general questions, group conferences, or catering
                    inquiries, please complete the form below.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-cream rounded-lg border border-brass/30 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-oxblood">
                      Thank You for Contacting Us
                    </h4>
                    <p className="text-xs text-walnut/80 leading-relaxed">
                      Your message has been received by our front desk. A member
                      of the Dib Anbessa hospitality team will respond promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-3 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-oxblood bg-brass/30 hover:bg-brass/50 rounded transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-oxblood mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-3 py-2.5 rounded bg-cream border border-brass/30 focus:outline-none focus:border-oxblood text-walnut"
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
                          placeholder="your.email@example.com"
                          className="w-full px-3 py-2.5 rounded bg-cream border border-brass/30 focus:outline-none focus:border-oxblood text-walnut"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-oxblood mb-1">
                          Telephone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+251 ..."
                          className="w-full px-3 py-2.5 rounded bg-cream border border-brass/30 focus:outline-none focus:border-oxblood text-walnut"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-oxblood mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="e.g. Conference Hall / Group Booking"
                          className="w-full px-3 py-2.5 rounded bg-cream border border-brass/30 focus:outline-none focus:border-oxblood text-walnut"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-oxblood mb-1">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please write your questions or requests here..."
                        className="w-full px-3 py-2.5 rounded bg-cream border border-brass/30 focus:outline-none focus:border-oxblood text-walnut"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 bg-oxblood hover:bg-burgundy text-cream font-semibold uppercase tracking-wider rounded border border-brass/40 shadow transition-colors flex items-center justify-center space-x-2"
                      >
                        <Send className="w-3.5 h-3.5 text-brass" />
                        <span>
                          {submitting
                            ? "Transmitting..."
                            : "Send Message to Reception"}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="mt-20 pt-16 border-t border-brass/25">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-tobacco font-serif">
                Exact Coordinates
              </span>
              <h2 className="font-serif text-3xl font-bold text-oxblood mt-1">
                Interactive Property Location
              </h2>
            </div>
            <InteractiveMap />
          </div>
        </div>
      </section>
    </div>
  );
}
