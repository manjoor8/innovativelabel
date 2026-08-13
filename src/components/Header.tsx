"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, FileText } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      children: [
        { name: "Company Profile", href: "/about/company-profile" },
        { name: "Vision, Mission & Values", href: "/about/vision-mission-values" },
        { name: "Infrastructure", href: "/about/infrastructure" },
        { name: "Company Growth", href: "/about/company-growth" },
        { name: "Management Structure", href: "/about/management" },
        { name: "Our Team", href: "/about/team" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      mega: true,
      children: [
        { name: "Pressure Sensitive Labels", href: "/products/pressure-sensitive-labels" },
        { name: "Self Adhesive Labels", href: "/products/self-adhesive-labels" },
        { name: "Shrink Sleeves", href: "/products/shrink-sleeves" },
        { name: "Security Labels", href: "/products/security-labels" },
        { name: "Specialty Labels", href: "/products/specialty-labels" },
        { name: "Cartons", href: "/products/cartons" },
        { name: "Barcode Labels", href: "/products/barcode-labels" },
        { name: "Thermal Labels", href: "/products/thermal-labels" },
        { name: "Innovative Cartons", href: "/products/innovative-cartons" },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      children: [
        { name: "Pharmaceuticals", href: "/industries/pharmaceuticals" },
        { name: "Cosmetics", href: "/industries/cosmetics" },
        { name: "Perfumery", href: "/industries/perfumery" },
        { name: "Food & Beverages", href: "/industries/food-beverages" },
        { name: "Chemicals & Agrochemicals", href: "/industries/chemicals" },
        { name: "Wine & Liquor", href: "/industries/wine-liquor" },
      ],
    },
    {
      name: "Capabilities",
      href: "/capabilities",
      children: [
        { name: "Flexographic Printing", href: "/capabilities/flexographic-printing" },
        { name: "Clean Room Manufacturing", href: "/capabilities/clean-room-manufacturing" },
        { name: "Quality Inspection", href: "/capabilities/quality-inspection" },
        { name: "Roll Label Printing", href: "/capabilities/roll-label-printing" },
        { name: "Sheet Label Printing", href: "/capabilities/sheet-label-printing" },
        { name: "Pre-Press & Die Management", href: "/capabilities/artwork-plate-die-management" },
      ],
    },
    {
      name: "Quality",
      href: "/quality",
      children: [
        { name: "Quality Policy", href: "/quality/quality-policy" },
        { name: "ISO 9001:2015 Certification", href: "/quality/iso-9001-certification" },
        { name: "Quality Control Process", href: "/quality/quality-control-process" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    {
      name: "Resources",
      href: "/resources",
      children: [
        { name: "Blog & Guides", href: "/resources/blog" },
        { name: "Label Guide", href: "/resources/label-guide" },
        { name: "FAQs", href: "/resources/faqs" },
        { name: "Case Studies", href: "/resources/case-studies" },
      ],
    },
  ];

  return (
    <header className="w-full z-50">
      {/* Top Banner Info bar */}
      <div className="bg-primary-blue text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/10 font-sans">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-accent-blue" />
            <a href="mailto:info@labelsolutions.in" className="hover:text-accent-blue transition-colors">
              info@labelsolutions.in
            </a>
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-accent-blue" />
            <span>[OFFICIAL PHONE NUMBER REQUIRED]</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-primary-red text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
            ISO 9001:2015 Certified
          </span>
          <span className="hidden md:inline text-white/70">Dombivli MIDC, MMR, India</span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-4 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 select-none group">
            <div className="bg-red-50 text-primary-red p-2 rounded-lg border border-primary-red/10 group-hover:scale-105 transition-transform flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Stylized label scroll icon */}
                <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                <path d="M6 12h12" className="text-primary-blue" />
                <path d="M6 16h8" className="text-primary-blue" />
                <path d="M14 6h4v4h-4z" className="text-primary-blue fill-current" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm md:text-base font-black tracking-tight text-primary-blue font-heading leading-tight whitespace-nowrap">
                INNOVATIVE <span className="text-primary-red">LABEL SOLUTIONS</span>
              </span>
              <span className="text-[9px] font-bold text-gray-500 tracking-[0.22em] uppercase -mt-0.5 whitespace-nowrap">
                Complete Packaging Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center xl:gap-1 lg:gap-0.5">
            {navLinks.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");

              if (hasChildren) {
                return (
                  <div
                    key={link.name}
                    className="relative group py-2"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`xl:px-3 lg:px-2 py-1.5 xl:text-sm lg:text-xs font-semibold rounded-md flex items-center gap-1 whitespace-nowrap transition-all ${
                        isActive
                          ? "text-primary-red bg-red-50/50"
                          : "text-gray-700 hover:text-primary-blue hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Standard Dropdown */}
                    {!link.mega ? (
                      <div className="absolute top-full left-0 w-60 mt-1 bg-white border border-gray-100 shadow-xl rounded-lg py-2 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0">
                        {link.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block px-4 py-2 text-xs font-medium text-gray-700 hover:text-primary-red hover:bg-red-50/30 transition-all ${
                              pathname === child.href ? "text-primary-red bg-red-50/45 font-semibold" : ""
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      /* Mega Menu (For Products) */
                      <div className="absolute top-full left-1/2 -translate-x-[40%] w-[680px] mt-1 bg-white border border-gray-100 shadow-xl rounded-xl p-6 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 grid grid-cols-3 gap-6">
                        <div className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-2">
                          <h4 className="col-span-2 text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                            Our Products & Finishes
                          </h4>
                          {link.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`px-3 py-1.5 text-xs font-semibold text-gray-700 rounded-md hover:text-primary-red hover:bg-red-50/30 transition-all ${
                                pathname === child.href ? "text-primary-red bg-red-50/45 font-bold" : ""
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50/70 p-4 rounded-lg flex flex-col justify-between border border-gray-100/50">
                          <div>
                            <span className="text-[10px] font-bold text-primary-red uppercase tracking-wider">
                              Custom Manufacturing
                            </span>
                            <h5 className="text-xs font-bold text-primary-blue mt-1">
                              Need a custom solution?
                            </h5>
                            <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                              We build security, multi-layered booklet, and custom finish labels for retail packaging.
                            </p>
                          </div>
                          <Link
                            href="/request-a-quote"
                            className="mt-4 bg-primary-red hover:bg-red-700 text-white text-[11px] font-bold py-2 px-3 rounded text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            Request Quote
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`xl:px-3 lg:px-2 py-1.5 xl:text-sm lg:text-xs font-semibold rounded-md whitespace-nowrap transition-all ${
                    pathname === link.href
                      ? "text-primary-red bg-red-50/50 font-bold"
                      : "text-gray-700 hover:text-primary-blue hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href="/request-a-quote"
              className="xl:ml-4 lg:ml-2 bg-primary-red hover:bg-red-700 text-white xl:text-sm lg:text-xs font-bold py-2 xl:px-4 lg:px-3 rounded-md whitespace-nowrap transition-all shadow-sm flex items-center gap-2 hover:scale-[1.02]"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/request-a-quote"
              className="bg-primary-red text-white text-xs font-bold py-1.5 px-3 rounded shadow-sm"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-blue p-1 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
              <span className="font-extrabold text-lg text-primary-blue font-heading">
                INNOVATIVE <span className="text-primary-red">LABELS</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const hasChildren = link.children && link.children.length > 0;
                const isDropdownOpen = activeDropdown === link.name;

                if (hasChildren) {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex justify-between items-center py-2 px-3 text-sm font-bold text-gray-800 rounded-md hover:bg-gray-50 transition-all text-left"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`flex flex-col border-l border-gray-100 pl-4 ml-3 overflow-hidden transition-all duration-300 ${
                          isDropdownOpen ? "max-h-[400px] py-1 gap-1" : "max-h-0"
                        }`}
                      >
                        {link.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="py-1.5 text-xs font-semibold text-gray-600 hover:text-primary-red transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="py-2 px-3 text-sm font-bold text-gray-800 rounded-md hover:bg-gray-50 transition-all"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 mt-6 flex flex-col gap-4">
            <div className="text-xs text-gray-500 flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-blue" />
                info@labelsolutions.in
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-blue" />
                [OFFICIAL PHONE NUMBER REQUIRED]
              </span>
            </div>
            <Link
              href="/request-a-quote"
              className="bg-primary-red hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded text-center transition-all shadow"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
