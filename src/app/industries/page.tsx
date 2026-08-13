import React from "react";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { ChevronRight, Factory } from "lucide-react";

export const metadata = {
  title: "Industries Served | Custom Packaging Applications",
  description: "Explore label and packaging configurations tailored for Pharmaceuticals, Cosmetics, Perfumery, Food & Beverages, Chemicals, and spirits.",
};

export default function IndustriesIndex() {
  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Segment */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Market Verticals
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading">
            Industries We Serve
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
            Every industry has unique label requirements. We formulate custom packaging solutions to support GHS regulations, bathroom moisture, or pharmaceutical clean room standards.
          </p>
        </div>

        {/* Grid Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind) => (
            <div
              key={ind.slug}
              className="bg-white border border-gray-150 p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-12 h-12 bg-red-50 text-primary-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Factory className="w-6 h-6" />
                </div>
                <h2 className="text-base font-bold text-primary-blue group-hover:text-primary-red transition-colors font-heading">
                  {ind.name} Solutions
                </h2>
                {ind.share && ind.share !== "Served" && (
                  <span className="inline-block bg-blue-50 text-primary-blue text-[10px] font-bold px-2 py-0.5 rounded mt-1.5 uppercase tracking-wide">
                    {ind.share} Market Share
                  </span>
                )}
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  {ind.description}
                </p>
              </div>
              <Link
                href={`/industries/${ind.slug}`}
                className="mt-6 text-xs font-bold text-primary-blue hover:text-primary-red flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                Industrial Requirements
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
