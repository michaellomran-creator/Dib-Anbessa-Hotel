"use client";

import { useState } from "react";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Compass,
  Layers,
  ZoomIn,
  ZoomOut,
  Info,
} from "lucide-react";
import { HOTEL_INFO } from "@/data/hotelInfo";

export default function InteractiveMap() {
  const [zoomLevel, setZoomLevel] = useState(15);
  const [mapType, setMapType] = useState<"standard" | "cycle">("standard");
  const { lat, lng } = HOTEL_INFO.contact.coordinates;

  // OpenStreetMap embed URL with precise marker coordinates
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    lng - 0.012 * (16 / zoomLevel)
  }%2C${lat - 0.009 * (16 / zoomLevel)}%2C${lng + 0.012 * (16 / zoomLevel)}%2C${
    lat + 0.009 * (16 / zoomLevel)
  }&layer=${mapType === "standard" ? "mapnik" : "cyclemap"}&marker=${lat}%2C${lng}`;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  const googleMapsViewUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  const landmarks = [
    { name: "Lake Tana Shore & Jetty", distance: "1.2 km", time: "3 min drive / 15 min walk" },
    { name: "Blue Nile Bridge", distance: "1.5 km", time: "4 min drive" },
    { name: "Bahir Dar Central Market", distance: "800 m", time: "10 min walk" },
    { name: "Bahir Dar Airport (BJR)", distance: "8.5 km", time: "15 min transfer" },
  ];

  return (
    <div className="relative rounded-lg overflow-hidden border-2 border-brass/40 shadow-xl bg-parchment">
      {/* Map Control Bar */}
      <div className="bg-oxblood text-cream px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-brass/30">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-brass" />
          <div>
            <h3 className="font-serif font-bold text-base tracking-wide">
              Dib Anbessa Hotel — Location Map
            </h3>
            <p className="text-xs text-parchment/80">
              Coordinates: {lat}° N, {lng}° E · Bahir Dar, Ethiopia
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(18, z + 1))}
            className="p-1.5 rounded bg-burgundy hover:bg-brass hover:text-oxblood transition-colors text-cream text-xs flex items-center"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(12, z - 1))}
            className="p-1.5 rounded bg-burgundy hover:bg-brass hover:text-oxblood transition-colors text-cream text-xs flex items-center"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 bg-brass hover:bg-brass-light text-oxblood font-semibold text-xs rounded transition-colors shadow-sm uppercase tracking-wider"
          >
            <Navigation className="w-3.5 h-3.5 mr-1.5" />
            Get Directions
          </a>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-[420px] md:h-[480px] bg-parchment">
        <iframe
          title="Dib Anbessa Hotel Location Map"
          src={osmEmbedUrl}
          className="w-full h-full border-0"
          loading="lazy"
        />

        {/* Floating Hotel Location Card */}
        <div className="absolute top-4 left-4 z-10 max-w-xs bg-cream/95 backdrop-blur-md p-4 rounded-md border border-brass/40 shadow-lg text-walnut">
          <div className="flex items-center space-x-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <h4 className="font-serif font-bold text-sm text-oxblood">
              Dib Anbessa Hotel (ድብ አንበሳ)
            </h4>
          </div>
          <p className="text-xs text-walnut/80 mb-2 leading-relaxed">
            A3 Highway / Lake Street, near St. George Church, Bahir Dar.
          </p>
          <div className="text-[11px] text-tobacco space-y-0.5 border-t border-brass/20 pt-2">
            <p>• Tel: +251 58 220 1436</p>
            <p>• Mobile: +251 946 456 212</p>
          </div>
          <div className="mt-2 pt-2 border-t border-brass/20 flex items-center justify-between">
            <a
              href={googleMapsViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-oxblood hover:text-burgundy flex items-center underline"
            >
              Open in Google Maps
              <ExternalLink className="w-3 h-3 ml-1 text-brass" />
            </a>
          </div>
        </div>
      </div>

      {/* Proximity & Landmark Distances */}
      <div className="bg-parchment p-4 border-t border-brass/30">
        <div className="flex items-center space-x-2 mb-3">
          <Compass className="w-4 h-4 text-oxblood" />
          <h4 className="font-serif font-semibold text-sm text-walnut uppercase tracking-wider">
            Proximity to Bahir Dar Destinations
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {landmarks.map((l) => (
            <div
              key={l.name}
              className="bg-cream p-2.5 rounded border border-brass/20 text-xs"
            >
              <p className="font-medium text-oxblood">{l.name}</p>
              <p className="text-walnut/70 mt-0.5 font-sans">
                <span className="font-bold text-tobacco">{l.distance}</span> · {l.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
