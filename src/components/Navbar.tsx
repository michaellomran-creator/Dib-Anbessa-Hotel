"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MapPin,
  CalendarCheck,
  ChevronRight,
  Shield,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/rooms", label: "Rooms" },
    { href: "/dining", label: "Dining" },
    { href: "/facilities", label: "Facilities" },
    { href: "/gallery", label: "Gallery" },
    { href: "/explore-bahir-dar", label: "Explore Bahir Dar" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Heritage Utility Bar */}
      <div className="bg-walnut text-parchment text-xs py-2 px-4 border-b border-brass/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6 text-[13px]">
            <span className="flex items-center text-brass">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-brass" />
              A3 Highway, Bahir Dar, Lake Tana, Ethiopia
            </span>
            <span className="text-parchment/60">|</span>
            <span className="font-serif italic text-parchment/90">
              ድብ አንበሳ ሆቴል — Classic Hospitality Since Establishment
            </span>
          </div>

          <div className="flex items-center space-x-6 text-[13px]">
            <a
              href="tel:+251582201436"
              className="flex items-center hover:text-brass transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-brass" />
              +251 58 220 1436
            </a>
            <span className="text-parchment/60">|</span>
            <a
              href="tel:+251946456212"
              className="hover:text-brass transition-colors"
            >
              Mob: +251 946 456 212
            </a>
            <span className="text-parchment/60">|</span>
            <Link
              href="/admin"
              className="flex items-center text-parchment/70 hover:text-brass transition-colors"
            >
              <Shield className="w-3 h-3 mr-1" />
              Staff Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md border-b border-brass/20 py-3"
            : "bg-cream border-b border-brass/15 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark */}
            <Link
              href="/"
              className="group flex items-center space-x-3 text-left focus:outline-none"
            >
              {/* Heritage Crest Seal */}
              <div className="w-11 h-11 rounded-full border border-brass/40 bg-parchment flex items-center justify-center text-oxblood shadow-inner group-hover:border-oxblood transition-colors">
                <span className="font-serif text-lg font-bold tracking-tight text-oxblood">
                  DA
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-oxblood uppercase group-hover:text-burgundy transition-colors">
                    Dib Anbessa
                  </span>
                  <span className="text-xs font-serif text-tobacco tracking-widest uppercase">
                    Hotel
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-tobacco tracking-wider">
                  <span className="font-medium">ድብ አንበሳ ሆቴል</span>
                  <span className="text-brass font-bold">·</span>
                  <span className="italic font-serif">Bahir Dar</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors rounded-sm ${
                      active
                        ? "text-oxblood font-semibold"
                        : "text-walnut/80 hover:text-oxblood hover:bg-parchment/50"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brass rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Button & Mobile Toggle */}
            <div className="flex items-center space-x-3">
              <Link
                href="/book"
                className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream bg-oxblood hover:bg-burgundy rounded transition-all duration-200 border border-brass/30 shadow-sm hover:shadow"
              >
                <CalendarCheck className="w-3.5 h-3.5 mr-2 text-brass" />
                Make an Enquiry
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md text-walnut hover:text-oxblood hover:bg-parchment focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-cream border-b border-brass/20 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-3 py-2.5 rounded text-sm uppercase tracking-wider font-medium transition-colors ${
                      active
                        ? "bg-oxblood text-cream font-semibold"
                        : "text-walnut hover:bg-parchment hover:text-oxblood"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        active ? "text-brass" : "text-walnut/40"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-brass/20 flex flex-col space-y-3">
              <Link
                href="/book"
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold uppercase tracking-wider text-cream bg-oxblood hover:bg-burgundy rounded border border-brass/40 shadow text-center"
              >
                <CalendarCheck className="w-4 h-4 mr-2 text-brass" />
                Make a Booking Enquiry
              </Link>

              <div className="text-center text-xs text-walnut/80 space-y-1 pt-1 font-serif">
                <p>ድብ አንበሳ ሆቴል — A3 Highway, Bahir Dar</p>
                <p className="font-sans font-medium text-oxblood">
                  Tel: +251 58 220 1436 / +251 946 456 212
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
