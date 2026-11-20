import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dibanbessahotel.com"),
  title: {
    default: "Dib Anbessa Hotel | ድብ አንበሳ ሆቴል — Classic Hospitality in Bahir Dar, Ethiopia",
    template: "%s | Dib Anbessa Hotel Bahir Dar",
  },
  description:
    "Experience classic Ethiopian hospitality at Dib Anbessa Hotel in Bahir Dar, Ethiopia. Established comfort, traditional dining at Galleria Restaurant, comfortable rooms, and warm hospitality near the shores of Lake Tana.",
  keywords: [
    "Dib Anbessa Hotel",
    "ድብ አንበሳ ሆቴል",
    "Deb Anbessa Hotel",
    "Bear Lion Hotel",
    "Bahir Dar Hotel",
    "Hotels in Bahir Dar",
    "Lake Tana Accommodation",
    "Ethiopia Hotel",
    "Galleria Restaurant Bahir Dar",
    "Blue Nile Falls Hotel",
  ],
  authors: [{ name: "Dib Anbessa Hotel Management" }],
  creator: "Dib Anbessa Hotel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dibanbessahotel.com",
    title: "Dib Anbessa Hotel — Classic Hospitality in Bahir Dar",
    description:
      "A timeless welcome in Bahir Dar, Ethiopia. Established hospitality, traditional dining, and comfortable accommodation near Lake Tana.",
    siteName: "Dib Anbessa Hotel",
    images: [
      {
        url: "/images/hotel/exterior-palms-facade.webp",
        width: 1200,
        height: 800,
        alt: "Dib Anbessa Hotel curved architecture and towering palm trees in Bahir Dar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dib Anbessa Hotel | Bahir Dar, Ethiopia",
    description: "Classic Ethiopian Hospitality near the shores of Lake Tana.",
    images: ["/images/hotel/exterior-palms-facade.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Dib Anbessa Hotel",
  "alternateName": ["ድብ አንበሳ ሆቴል", "Deb Anbessa Hotel", "Bear Lion Hotel"],
  "image": "https://dibanbessahotel.com/images/hotel/exterior-palms-facade.webp",
  "telephone": "+251582201436",
  "email": "info@dibanbessahotel.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "A3 Highway / Lake Street",
    "addressLocality": "Bahir Dar",
    "addressRegion": "Amhara",
    "addressCountry": "ET"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.5945,
    "longitude": 37.3905
  },
  "url": "https://dibanbessahotel.com",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "3"
  },
  "numberOfRooms": 60,
  "checkinTime": "14:00",
  "checkoutTime": "11:00",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Galleria Restaurant & Bar",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Courtyard Garden & Fountain",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free Wi-Fi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Airport Shuttle",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "4x4 Safari Excursions",
      "value": true
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-cream text-walnut antialiased selection:bg-oxblood selection:text-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
