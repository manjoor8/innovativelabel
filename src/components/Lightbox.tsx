"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; title: string; description: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // disable background scrolling

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // enable scrolling again
    };
  }, [onClose, onPrev, onNext]);

  if (!currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-between p-4 md:p-8 font-sans">
      {/* Top bar control segment */}
      <div className="flex justify-between items-center text-white/80 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-red">
            Innovative Media Gallery
          </span>
          <h4 className="text-sm font-bold text-white mt-0.5">{currentImage.title}</h4>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-white/50">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="hover:text-white bg-white/5 border border-white/10 p-2 rounded-full transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Slider Area */}
      <div className="flex-1 flex justify-between items-center gap-4 relative py-8">
        <button
          onClick={onPrev}
          className="absolute left-0 md:left-4 z-10 text-white hover:text-primary-red bg-white/5 border border-white/10 hover:bg-white/10 p-3 rounded-full transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative max-w-full max-h-full w-[900px] h-[550px] aspect-video">
            <Image
              src={currentImage.src}
              alt={currentImage.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              priority
            />
          </div>
        </div>

        <button
          onClick={onNext}
          className="absolute right-0 md:right-4 z-10 text-white hover:text-primary-red bg-white/5 border border-white/10 hover:bg-white/10 p-3 rounded-full transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Description Strip */}
      <div className="text-center text-white/80 border-t border-white/10 pt-4 pb-2">
        <p className="text-xs leading-relaxed max-w-2xl mx-auto">{currentImage.description}</p>
      </div>
    </div>
  );
}
