import React from "react";
import Link from "next/link";
import { capabilitiesData } from "@/data/capabilities";
import { ChevronRight, Settings } from "lucide-react";

export const metadata = {
  title: "Manufacturing & Print Capabilities",
  description: "Explore our flexographic machinery fleet, Class 100,000 clean rooms, artwork plates, and automated inspection lines.",
};

export default function CapabilitiesIndex() {
  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Industrial Fleet
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading">
            Our Manufacturing Capabilities
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
            We run high-precision rotary flexographic presses backed by climate-controlled tool warehouses, sterile clean rooms, and automated inspection.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesData.map((cap) => (
            <div
              key={cap.slug}
              className="bg-white border border-gray-150 p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-12 h-12 bg-red-50 text-primary-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-base font-bold text-primary-blue group-hover:text-primary-red transition-colors font-heading">
                  {cap.name}
                </h2>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  {cap.description}
                </p>
              </div>
              <Link
                href={`/capabilities/${cap.slug}`}
                className="mt-6 text-xs font-bold text-primary-blue hover:text-primary-red flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                View Technical Parameters
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
