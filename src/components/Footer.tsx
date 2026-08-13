import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Company Profile", href: "/about/company-profile" },
      { name: "Vision & Mission", href: "/about/vision-mission-values" },
      { name: "Infrastructure", href: "/about/infrastructure" },
      { name: "Management Structure", href: "/about/management" },
      { name: "Our Team", href: "/about/team" },
    ],
    products: [
      { name: "Pressure Sensitive Labels", href: "/products/pressure-sensitive-labels" },
      { name: "Self Adhesive Labels", href: "/products/self-adhesive-labels" },
      { name: "Shrink Sleeves", href: "/products/shrink-sleeves" },
      { name: "Security Labels", href: "/products/security-labels" },
      { name: "Specialty Labels", href: "/products/specialty-labels" },
      { name: "Cartons", href: "/products/cartons" },
    ],
    industries: [
      { name: "Pharmaceuticals", href: "/industries/pharmaceuticals" },
      { name: "Cosmetics", href: "/industries/cosmetics" },
      { name: "Perfumery", href: "/industries/perfumery" },
      { name: "Food & Beverages", href: "/industries/food-beverages" },
      { name: "Chemicals & Agro", href: "/industries/chemicals" },
      { name: "Wine & Liquor", href: "/industries/wine-liquor" },
    ],
    resources: [
      { name: "Blog & Insights", href: "/resources/blog" },
      { name: "Label Guide", href: "/resources/label-guide" },
      { name: "FAQs", href: "/resources/faqs" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Gallery", href: "/gallery" },
    ],
  };

  return (
    <footer className="bg-primary-blue text-white font-sans mt-auto">
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10">
        
        {/* Column 1: Company Profile Description */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex flex-col select-none">
            <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
              INNOVATIVE <span className="text-primary-red">LABEL SOLUTIONS</span>
            </span>
            <span className="text-[10px] font-bold text-white/50 tracking-[0.25em] uppercase mt-0.5">
              Complete Packaging Solution Providers
            </span>
          </Link>
          <p className="text-sm text-white/70 leading-relaxed max-w-sm">
            ISO 9001:2015 certified manufacturer of high-quality pressure-sensitive labels, self-adhesive labels, shrink sleeves, and cartons. Operating a 25,000 sq. ft. facility in Dombivli MIDC.
          </p>
          <div className="flex items-center gap-3">
            <span className="bg-white/5 border border-white/10 rounded-md p-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary-red" />
              <span className="text-[11px] font-bold tracking-wide uppercase">ISO 9001:2015 Certified</span>
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-primary-red text-white/60 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-primary-red text-white/60 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Products Links */}
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-6 font-heading">
            Products
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            {footerLinks.products.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary-red hover:underline transition-all">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Industries Links */}
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-6 font-heading">
            Industries
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            {footerLinks.industries.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary-red hover:underline transition-all">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-6 font-heading">
            Company
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary-red hover:underline transition-all">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Middle Footer Segment: Contact Info Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-white/70 border-b border-white/10">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary-red flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-bold text-white mb-1">Factory Location</h5>
            <p className="leading-relaxed">
              25,000 sq. ft. Plant, Dombivli MIDC, Mumbai Metropolitan Region, Maharashtra, India.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-primary-red flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-bold text-white mb-1">Email Contacts</h5>
            <p className="flex flex-col">
              <a href="mailto:info@labelsolutions.in" className="hover:text-primary-red hover:underline">
                info@labelsolutions.in
              </a>
              <a href="mailto:sales@labelsolutions.in" className="hover:text-primary-red hover:underline">
                sales@labelsolutions.in
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-primary-red flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-bold text-white mb-1">Phone Enquiries</h5>
            <p className="flex flex-col">
              <span>[OFFICIAL PHONE NUMBER REQUIRED]</span>
              <span className="text-xs text-white/50">Mon - Sat: 9:00 AM - 6:00 PM</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright segment */}
      <div className="bg-primary-blue/80 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <div>
            &copy; {currentYear} Innovative Label Solutions Pvt. Ltd. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            <span className="text-white/40">|</span>
            <span>Developed by SPARS Creation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
