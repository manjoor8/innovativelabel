"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData, galleryCategories } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";
import { Eye, Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Filter gallery items
  const filteredItems = activeCategory === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white py-16 font-sans min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Facility Tour
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading">
            Dombivli Facility Media Gallery
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
            Take a visual tour inside our 25,000 sq. ft. plant, machinery assets, and finished label configurations.
          </p>
        </div>

        {/* Category Buttons List */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => {
                setActiveCategory(cat.slug);
                setLightboxOpen(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.slug
                  ? "bg-primary-red text-white shadow-sm"
                  : "bg-neutral-light text-gray-600 hover:bg-gray-150/50 hover:text-primary-blue"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gray-200 rounded-xl bg-neutral-light/20 flex flex-col items-center gap-2 text-gray-400">
            <ImageIcon className="w-12 h-12" />
            <p className="text-sm font-semibold">No media matches this filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow border border-gray-100"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-95 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-left">
                  <span className="text-[9px] font-bold text-primary-red uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1 leading-tight">{item.title}</h3>
                  <p className="text-[11px] text-white/70 line-clamp-2 mt-1.5 font-sans leading-relaxed">{item.description}</p>
                </div>
                <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Component */}
      {lightboxOpen && (
        <Lightbox
          images={filteredItems}
          currentIndex={photoIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setPhotoIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1))}
          onNext={() => setPhotoIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1))}
        />
      )}
    </div>
  );
}
