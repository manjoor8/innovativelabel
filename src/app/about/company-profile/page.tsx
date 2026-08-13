import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Company Profile",
  description: "Learn about Innovative Label Solutions, a premier packaging and label manufacturer in Dombivli MIDC since 2015.",
};

export default function CompanyProfile() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "25,000", label: "Sq. Ft. Facility" },
    { value: "75+", label: "Professionals" },
    { value: "10M", label: "Daily Label Capacity" },
  ];

  const servicesList = [
    "Shrink Sleeve Manufacturing",
    "Pressure Sensitive / Self Adhesive Labels (Roll & Sheet formats)",
    "Folding Packaging Cartons",
    "Anti-Counterfeit Security Label Printing",
    "Class 100,000 Clean Room standards production",
    "Advanced automated quality rewind inspection"
  ];

  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
          Established in 2015
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary-blue mt-1 font-heading">
          Company Profile
        </h1>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Innovative Label Solutions Pvt. Ltd. is a complete B2B packaging solution provider based in Dombivli MIDC, Maharashtra.
        </p>
      </div>

      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow border border-gray-100">
        <Image
          src="/assets/images/facility-hero.jpg"
          alt="Innovative Label Solutions manufacturing facility"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 700px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs font-bold uppercase text-primary-red tracking-wider">Manufacturing Plant</p>
          <h4 className="text-base font-bold font-heading">Dombivli MIDC, Mumbai Suburbs</h4>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-neutral-light border border-gray-150 p-6 rounded-xl">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="block text-2xl font-extrabold text-primary-red font-heading">{stat.value}</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1 block">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-600 leading-relaxed">
        <p>
          Innovative Label Solutions is managed by a dedicated team of printing professionals with more than two decades of industrial expertise. We specialize in producing packaging labels suitable for high-speed automatic or semi-automatic B2B labeling lines, as well as manual sheet configurations.
        </p>
        <p>
          Our manufacturing plant is located in the Dombivli MIDC Industrial Zone, a key logistical hub in the Mumbai Metropolitan Region. The plant features positive-pressure air filtration conforming to Class 100,000 clean-room standards, ensuring complete sterility and protection against dust contamination.
        </p>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-sm font-bold text-primary-blue mb-4 font-heading">Core Business Scope</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-700 font-semibold">
          {servicesList.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="bg-red-50 p-1 rounded text-primary-red">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6 flex justify-end">
        <Link
          href="/about/vision-mission-values"
          className="bg-primary-blue hover:bg-blue-900 text-white font-bold py-2.5 px-6 rounded text-xs transition-all shadow"
        >
          Our Vision & Mission
        </Link>
      </div>
    </div>
  );
}
