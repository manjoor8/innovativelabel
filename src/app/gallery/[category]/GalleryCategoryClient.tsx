"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryData, galleryCategories } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";
import { Eye, ArrowLeft, Image as ImageIcon } from "lucide-react";

interface GalleryCategoryClientProps {
  category: string;
}

export default function GalleryCategoryClient({ category }: GalleryCategoryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Filter gallery items based on prop
  const filteredItems = category === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === category);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const categoryName = galleryCategories.find(c => c.slug === category)?.name || category;

  return (
    <div className="bg-white py-16 font-sans min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/gallery"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary-red mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Main Gallery</span>
        </Link>

        {/* Header Block */}
        <div className="text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Category Specific Views
          </span>
          <h1 className="text-3xl font-extrabold text-primary-blue mt-1 font-heading capitalize">
            {categoryName} Gallery
          </h1>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Viewing print asset photographs categorized under the {categoryName} segment.
          </p>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gray-200 rounded-xl bg-neutral-light/25 flex flex-col items-center gap-2 text-gray-400">
            <ImageIcon className="w-12 h-12" />
            <p className="text-sm font-semibold">No media matches this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow border border-gray-150"
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

      {/* Lightbox Viewer */}
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
