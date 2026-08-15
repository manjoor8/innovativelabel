"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Award,
  Zap,
  Target,
  Users,
  Settings,
  ChevronRight,
  FileText,
  Eye,
  CheckCircle,
  Factory
} from "lucide-react";
import StatsCounter from "@/components/StatsCounter";
import Lightbox from "@/components/Lightbox";
import { galleryData } from "@/data/gallery";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const homeStats = [
    { target: 20, suffix: "+ Years", label: "Industry Experience" },
    { target: 25000, suffix: " Sq. Ft.", label: "Manufacturing Facility" },
    { target: 75, suffix: "+", label: "Employees" },
    { target: 150, suffix: "+", label: "Customers" },
    { target: 10, suffix: "M+", label: "Labels / Day Capacity" },
    { target: 15, suffix: "+", label: "Specialty Products" }
  ];

  const categories = [
    {
      name: "Pressure Sensitive Labels",
      desc: "High-speed automated packaging labels requiring only light pressure.",
      href: "/products/pressure-sensitive-labels"
    },
    {
      name: "Self Adhesive Labels",
      desc: "Traditional adhesive labels supplied in roll and sheet layouts.",
      href: "/products/self-adhesive-labels"
    },
    {
      name: "Shrink Sleeves",
      desc: "Full-body 360-degree graphics contour labels with neck seal options.",
      href: "/products/shrink-sleeves"
    },
    {
      name: "Security Labels",
      desc: "Anti-counterfeiting seals using holograms and coin-reactive inks.",
      href: "/products/security-labels"
    },
    {
      name: "Specialty Labels",
      desc: "Complex designs including Braille, Dome, multi-layer booklet formats.",
      href: "/products/specialty-labels"
    },
    {
      name: "Cartons",
      desc: "Premium folding paperboard cartons, Metpet and window boxes.",
      href: "/products/cartons"
    }
  ];

  const benefits = [
    {
      title: "Experienced Professionals",
      desc: "Managed by packaging industry leaders with over 20 years of experience."
    },
    {
      title: "Advanced Flexographic Print",
      desc: "Fleet of state-of-the-art Japanese Taiyo, Alliance, and Mark Andy presses."
    },
    {
      title: "Specialty Capabilities",
      desc: "Manufacturing over 15 specialty product finishes and complex booklet labels."
    },
    {
      title: "Quality-Focused Plant",
      desc: "Class 100,000 clean rooms and Re Italy 100% optical inspection systems."
    },
    {
      title: "High Daily Output",
      desc: "Reliable B2B supply lines outputting up to 10 million printed labels daily."
    },
    {
      title: "On-Time Completion",
      desc: "Achieving a verified 95% on-time project completion and delivery rate."
    }
  ];

  const industries = [
    { name: "Pharmaceuticals", href: "/industries/pharmaceuticals" },
    { name: "Cosmetics", href: "/industries/cosmetics" },
    { name: "Perfumery", href: "/industries/perfumery" },
    { name: "Food & Beverages", href: "/industries/food-beverages" },
    { name: "Chemicals", href: "/industries/chemicals" },
    { name: "Wine & Liquor", href: "/industries/wine-liquor" }
  ];

  const specialtyShowcase = [
    "Braille", "Dome", "Embossed", "Foil Stamping", "Security", "Tamper Proof",
    "Temperature Sensitive", "Glow in the Dark", "Multi Layer", "Metallized", "Textured"
  ];

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  // Limit home page gallery preview to 6 items
  const homeGallery = galleryData.slice(0, 6);

  return (
    <div className="flex flex-col w-full font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Innovative Label Solutions Pvt. Ltd.",
            "image": "https://labelsolutions.in/assets/images/logo.jpg",
            "@id": "https://labelsolutions.in/#localbusiness",
            "url": "https://labelsolutions.in",
            "telephone": "+91-7738223544",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No W-2, Phase II, MIDC, Dombivli East",
              "addressLocality": "Kalyan",
              "addressRegion": "Maharashtra",
              "postalCode": "421203",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.2184,
              "longitude": 73.0868
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          })
        }}
      />
      {/* 1. Hero Section */}
      <section className="relative bg-primary-blue text-white overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-accent-blue text-xs font-bold px-3 py-1 rounded-full w-max uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-primary-red" />
              ISO 9001:2015 & cGMP Certified company
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-heading">
              Complete Packaging & <span className="text-primary-red">Label Solutions</span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              Pressure-sensitive labels, self-adhesive labels, shrink sleeves, cartons and specialty packaging solutions engineered for automated commercial lines.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href="/request-a-quote"
                className="bg-primary-red hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-md transition-all shadow-lg hover:scale-[1.02] flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="bg-white/10 hover:bg-white/15 border border-white/25 text-white font-bold py-3.5 px-8 rounded-md transition-all flex items-center gap-1.5"
              >
                Explore Products
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/assets/images/machinery-hero.jpg"
              alt="High-speed flexographic printing press at our Dombivli plant"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-4 rounded border border-white/10 text-xs flex justify-between items-center">
              <div>
                <p className="font-bold text-white">Featured Machinery</p>
                <p className="text-white/60">Taiyo STF 340 (10-Color)</p>
              </div>
              <Link href="/about/infrastructure" className="text-primary-red font-bold hover:underline">
                View Infrastructure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-neutral-light border-y border-gray-150 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {homeStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <StatsCounter target={stat.target} suffix={stat.suffix} />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Innovative Portfolio
          </span>
          <h2 className="text-3xl font-extrabold text-primary-blue mt-2 mb-4 font-heading">
            Primary Product Solutions
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed">
            We manufacture structural folding boxes and custom adhesive labels engineered to bond with glass, metal, and plastic containers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white border border-gray-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <h3 className="text-base font-bold text-primary-blue group-hover:text-primary-red transition-colors font-heading">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <Link
                  href={cat.href}
                  className="mt-6 text-xs font-bold text-primary-blue hover:text-primary-red flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  Configure Specifications
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Innovative Label Solutions */}
      <section className="py-20 bg-neutral-light border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
              Why Partner With Us
            </span>
            <h2 className="text-3xl font-extrabold text-primary-blue mt-2 font-heading">
              A Quality-First Label Manufacturer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg border border-gray-150/50 flex gap-4">
                <div className="flex-shrink-0 bg-red-50 text-primary-red p-2.5 rounded-lg h-max">
                  {idx === 0 && <Users className="w-5 h-5" />}
                  {idx === 1 && <Settings className="w-5 h-5" />}
                  {idx === 2 && <Target className="w-5 h-5" />}
                  {idx === 3 && <Shield className="w-5 h-5" />}
                  {idx === 4 && <Zap className="w-5 h-5" />}
                  {idx === 5 && <CheckCircle className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary-blue font-heading">{benefit.title}</h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Manufacturing Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
              Technical Infrastructure
            </span>
            <h2 className="text-3xl font-extrabold text-primary-blue font-heading leading-tight">
              Advanced Flexographic Fleet & Class 100,000 Clean Rooms
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              We operate three modern UV flexographic printing presses—including the Japanese Taiyo STF 340 (10 colour), Alliance A3, and Mark Andy 2200. To serve high-integrity markets like pharmaceuticals and medical packaging, our production occurs in positive-pressure Class 100,000 clean rooms, preventing airborne dust contamination.
            </p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs text-gray-700 font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-red" />
                Taiyo STF 340 - 10 Colour
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-red" />
                Alliance A3 - 8 Colour
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-red" />
                Mark Andy 2200 - 8 Colour
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-red" />
                Class 100,000 Clean Rooms
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/capabilities"
                className="bg-primary-blue hover:bg-blue-900 text-white font-bold py-3 px-6 rounded text-xs transition-all shadow"
              >
                Explore Manufacturing Capabilities
              </Link>
            </div>
          </div>
          <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src="/assets/images/gallery/production-2.jpg"
              alt="Re Italy automated quality check system"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>
        </div>
      </section>

      {/* 6. Industries Served */}
      <section className="py-20 bg-neutral-light border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Markets We Serve
          </span>
          <h2 className="text-3xl font-extrabold text-primary-blue mt-2 mb-12 font-heading">
            Tailored Industry Solutions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href={ind.href}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow hover:shadow-lg hover:border-primary-red/30 transition-all flex flex-col items-center justify-center text-center gap-3 group"
              >
                <div className="w-10 h-10 bg-red-50 text-primary-red rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Factory className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-primary-blue group-hover:text-primary-red transition-colors font-heading leading-tight">
                  {ind.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Specialty Label Finishes */}
      <section className="bg-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-red-400">
            Functional Substrates
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-2 mb-8 font-heading">
            Specialty Finishes Available
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {specialtyShowcase.map((spec) => (
              <span
                key={spec}
                className="bg-white/10 border border-white/15 hover:bg-white/20 px-5 py-2.5 rounded-full text-xs font-semibold select-none transition-all duration-200 cursor-default"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Quality Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative h-[380px] w-full rounded-xl overflow-hidden shadow-lg border border-gray-150">
            <Image
              src="/assets/images/quality/iso-certificate.jpg"
              alt="ISO 9001:2015 Certificate for Innovative Label Solutions"
              fill
              className="object-contain bg-gray-50 p-6"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
              Total Quality Management
            </span>
            <h2 className="text-3xl font-extrabold text-primary-blue font-heading leading-tight">
              Quality Built Into Every Printed Web
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Quality isn't a final check at our plant—it is integrated into every stage of production. From testing incoming substrates, validating register alignments, to scanning rolls under Re Italy digital lenses, we enforce rigorous testing gates.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-100 p-4 rounded-lg bg-neutral-light/50">
                <h4 className="text-xs font-bold text-primary-blue font-heading">ISO 9001:2015 Facility</h4>
                <p className="text-[11px] text-gray-500 mt-1">Documented processes tracking raw inputs to dispatch boxes.</p>
              </div>
              <div className="border border-gray-100 p-4 rounded-lg bg-neutral-light/50">
                <h4 className="text-xs font-bold text-primary-blue font-heading">Defect Scanning System</h4>
                <p className="text-[11px] text-gray-500 mt-1">High-speed Re Italy digital scanners ensuring a 100% success rate.</p>
              </div>
              <div className="border border-gray-100 p-4 rounded-lg bg-neutral-light/50">
                <h4 className="text-xs font-bold text-primary-blue font-heading">Clean Room Environment</h4>
                <p className="text-[11px] text-gray-500 mt-1">Positive air locks guarding printed pharmaceutical rolls.</p>
              </div>
              <div className="border border-gray-100 p-4 rounded-lg bg-neutral-light/50">
                <h4 className="text-xs font-bold text-primary-blue font-heading">Raw Substrate Validation</h4>
                <p className="text-[11px] text-gray-500 mt-1">Partnering exclusively with certified global paper and adhesive suppliers.</p>
              </div>
            </div>
            <div className="mt-2">
              <Link
                href="/quality"
                className="text-xs font-bold text-primary-red hover:underline flex items-center gap-1"
              >
                View Our Complete Quality Framework
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Factory Gallery Grid Preview */}
      <section className="py-20 bg-neutral-light border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Visual Tour
          </span>
          <h2 className="text-3xl font-extrabold text-primary-blue mt-2 mb-4 font-heading">
            Dombivli Facility Gallery
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-12 leading-relaxed">
            Take a look inside our 25,000 sq. ft. plant, machinery assets, and finished label samples.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeGallery.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(idx)}
                className="relative h-60 rounded-xl overflow-hidden group cursor-pointer shadow border border-gray-100"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-left">
                  <span className="text-[9px] font-bold text-primary-red uppercase tracking-widest">
                    {photo.category}
                  </span>
                  <h4 className="text-xs font-bold text-white mt-1">{photo.title}</h4>
                  <p className="text-[10px] text-white/70 line-clamp-1 mt-1 font-sans">{photo.description}</p>
                </div>
                <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm p-1.5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/gallery"
              className="bg-primary-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded text-xs transition-all shadow"
            >
              View Factory Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final CTA Conversion Panel */}
      <section className="py-24 bg-primary-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading leading-tight max-w-2xl">
            Looking for a Reliable B2B Label & Packaging Partner?
          </h2>
          <p className="text-sm text-white/80 leading-relaxed max-w-xl">
            Share your container layouts, substrate specifications, or order size. Our printing engineers can help you configure the right label structure.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/request-a-quote"
              className="bg-primary-red hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-md transition-all shadow-lg hover:scale-102"
            >
              Request a Technical Quote
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-red-400 font-bold text-sm py-2 px-4 transition-all"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Viewer */}
      {lightboxOpen && (
        <Lightbox
          images={homeGallery}
          currentIndex={photoIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setPhotoIndex((prev) => (prev === 0 ? homeGallery.length - 1 : prev - 1))}
          onNext={() => setPhotoIndex((prev) => (prev === homeGallery.length - 1 ? 0 : prev + 1))}
        />
      )}
    </div>
  );
}
