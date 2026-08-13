import React from "react";
import Link from "next/link";
import { qualityData } from "@/data/quality";
import { ChevronRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Quality Standards & Certifications",
  description: "Learn about the ISO 9001:2015 certification, Quality Policy, and stage-wise QC gates at Innovative Label Solutions.",
};

export default function QualityIndex() {
  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Quality Assurance
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading">
            Quality Built Into Every Label
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
            ISO 9001:2015 certified processes, positive-pressure clean rooms, and automated optical scanning support our commitment to B2B excellence.
          </p>
        </div>

        {/* Quality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualityData.map((qual) => (
            <div
              key={qual.slug}
              className="bg-white border border-gray-150 p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-12 h-12 bg-red-50 text-primary-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-base font-bold text-primary-blue group-hover:text-primary-red transition-colors font-heading">
                  {qual.name}
                </h2>
                <p className="text-xs text-gray-500 mt-3 line-clamp-3 leading-relaxed">
                  {qual.intro}
                </p>
              </div>
              <Link
                href={`/quality/${qual.slug}`}
                className="mt-6 text-xs font-bold text-primary-blue hover:text-primary-red flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                Read Quality Guidelines
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
