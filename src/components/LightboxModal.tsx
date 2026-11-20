"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Tag, Camera } from "lucide-react";
import { PhotoItem } from "@/data/photography";

interface LightboxModalProps {
  photos: PhotoItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scrolling while open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-walnut/95 backdrop-blur-md p-4 sm:p-6 transition-all">
      {/* Top Bar with Counter and Close Button */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-cream z-20">
        <div className="flex items-center space-x-3 text-xs tracking-wider">
          <span className="font-serif italic text-brass text-sm">
            Dib Anbessa Hotel Archive
          </span>
          <span className="text-parchment/40">|</span>
          <span className="bg-oxblood/80 px-2.5 py-1 rounded text-brass text-xs font-mono">
            {currentIndex + 1} of {photos.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-cream/10 hover:bg-brass hover:text-oxblood transition-colors text-cream focus:outline-none"
          aria-label="Close photo viewer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-oxblood/70 hover:bg-brass hover:text-oxblood text-cream transition-colors z-20 border border-brass/30 focus:outline-none"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-oxblood/70 hover:bg-brass hover:text-oxblood text-cream transition-colors z-20 border border-brass/30 focus:outline-none"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] w-full h-[70vh] flex items-center justify-center my-auto">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain drop-shadow-2xl rounded-sm"
            priority
          />
        </div>
      </div>

      {/* Bottom Caption Bar */}
      <div className="absolute bottom-4 left-4 right-4 max-w-3xl mx-auto bg-oxblood/90 border border-brass/30 text-cream p-4 rounded-md shadow-2xl backdrop-blur-sm text-center">
        <div className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-brass mb-1 font-serif">
          <Tag className="w-3.5 h-3.5" />
          <span>Category: {currentPhoto.category}</span>
          {currentPhoto.amharicTitle && (
            <>
              <span>·</span>
              <span>{currentPhoto.amharicTitle}</span>
            </>
          )}
        </div>
        <h3 className="font-serif text-lg font-bold text-cream mb-1">
          {currentPhoto.title}
        </h3>
        <p className="text-xs text-parchment/80 leading-relaxed font-light">
          {currentPhoto.caption}
        </p>
      </div>
    </div>
  );
}
