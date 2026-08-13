import React from "react";
import Link from "next/link";
import { BookOpen, FileText, HelpCircle, Briefcase, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Resources Hub | Labeling & Packaging Guidelines",
  description: "Browse B2B label guides, FAQ sheets, industry insights, and case studies at Innovative Label Solutions.",
};

export default function ResourcesIndex() {
  const links = [
    {
      name: "Blog & Guides",
      desc: "Stay updated on pressure-sensitive labels, shrink sleeves, and anti-counterfeit packaging tech.",
      href: "/resources/blog",
      icon: BookOpen
    },
    {
      name: "Label Guide",
      desc: "Key guidelines on choosing paper versus synthetic PP substrates and automated labeling calibration.",
      href: "/resources/label-guide",
      icon: FileText
    },
    {
      name: "FAQs Sheet",
      desc: "Answers to common queries regarding core unwinds, rolls spacing, minimum order sizes, and lead times.",
      href: "/resources/faqs",
      icon: HelpCircle
    },
    {
      name: "Case Studies",
      desc: "Explore details of B2B production challenges, material switches, and print setups we have executed.",
      href: "/resources/case-studies",
      icon: Briefcase
    }
  ];

  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Knowledge Center
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading">
            B2B Packaging Resources
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
            Everything you need to plan your label specifications, select substrate materials, and prepare artwork for high-speed printing.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.name}
                className="bg-white border border-gray-150 p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex gap-5 text-left group"
              >
                <div className="bg-red-50 text-primary-red p-3 rounded-xl h-max flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-base font-bold text-primary-blue group-hover:text-primary-red transition-colors font-heading">
                      {link.name}
                    </h2>
                    <p className="text-xs text-gray-500 mt-2.5 leading-relaxed">
                      {link.desc}
                    </p>
                  </div>
                  <Link
                    href={link.href}
                    className="mt-6 text-xs font-bold text-primary-blue hover:text-primary-red flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    Explore Resource
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
