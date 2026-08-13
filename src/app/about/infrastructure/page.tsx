import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Hammer, CheckCircle, Shield } from "lucide-react";

export const metadata = {
  title: "Infrastructure & Plant Machinery",
  description: "Learn about the high-speed printing presses, clean rooms, and pre-press technology at our Dombivli MIDC facility.",
};

export default function Infrastructure() {
  const machineryList = [
    {
      name: "Taiyo STF 340 (10 Colour)",
      type: "High-Speed Japanese Flexo Press",
      features: [
        "10 UV print stations for complex chemical ink patterns",
        "Configured for double-sided back-side printing in a single pass",
        "Booklet and multi-layer label assembly capabilities",
        "Die-cutting rotary stations with pin alignment"
      ]
    },
    {
      name: "Alliance A3 (8 Colour)",
      type: "Precision Web Press",
      features: [
        "8 color printing units with UV dry curing systems",
        "Special chill rollers for thin packaging films like PE/PP and shrink PVC/PET-G",
        "Vibrant ink layout control and consistent registration"
      ]
    },
    {
      name: "Mark Andy 2200 (8 Colour)",
      type: "Industrial Self-Adhesive Workhorse",
      features: [
        "8 printing stations with dual drying modules (UV and hot air)",
        "Winding tension controls designed for clean slitting core cuts",
        "High performance output for standard adhesive paper rolls"
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
          Production Power
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary-blue mt-1 font-heading">
          Plant Infrastructure
        </h1>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Operating a 25,000 sq. ft. plant built around sterilization, speed, and printing precision.
        </p>
      </div>

      <div className="relative h-60 md:h-72 rounded-xl overflow-hidden shadow border border-gray-100">
        <Image
          src="/assets/images/gallery/machinery-2.jpg"
          alt="Machinery fleet at our manufacturing site"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 700px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs font-bold uppercase text-primary-red tracking-wider">Alliance A3 Fleet</p>
          <h4 className="text-base font-bold font-heading">Rotary Flexographic Production Line</h4>
        </div>
      </div>

      {/* Clean Room Environment */}
      <div className="border border-gray-150 p-6 rounded-xl bg-neutral-light/50 flex gap-4">
        <div className="bg-red-50 text-primary-red p-3 rounded-xl h-max flex-shrink-0">
          <Shield className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-primary-blue font-heading">Class 100,000 Clean Room standards</h3>
          <p className="text-xs text-gray-600 mt-2 leading-relaxed">
            To prevent visual defects and maintain sterility for pharmaceutical and cosmetic components, we operate a dedicated Class 100,000 clean-room manufacturing floor. The space features dust filtration locks, positive air pressure, and gowned workforce regulations.
          </p>
        </div>
      </div>

      {/* Machinery Details */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Hammer className="w-5 h-5 text-primary-red" />
          <h3 className="text-sm font-bold text-primary-blue font-heading">Advanced Flexo Machinery Fleet</h3>
        </div>
        <div className="flex flex-col gap-6">
          {machineryList.map((machine) => (
            <div key={machine.name} className="border-l-4 border-primary-red pl-5 py-1">
              <h4 className="text-sm font-bold text-primary-blue font-heading">{machine.name}</h4>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mt-0.5">{machine.type}</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs text-gray-600">
                {machine.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-1.5 leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-primary-red flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-Press and Tooling Storage */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-sm font-bold text-primary-blue mb-2 font-heading">Pre-Press & Tool Custody Management</h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          Artwork prep, digital flexo plates, magnetic print cylinders, and solid steel die cuts represent major assets. We store customer tooling in a climate-controlled warehouse under active CCTV monitoring, ensuring zero polymer warping and immediate availability for repeat orders.
        </p>
      </div>

      <div className="border-t border-gray-100 pt-6 flex justify-end">
        <Link
          href="/about/company-growth"
          className="bg-primary-blue hover:bg-blue-900 text-white font-bold py-2.5 px-6 rounded text-xs transition-all shadow"
        >
          Company Growth & Markets
        </Link>
      </div>
    </div>
  );
}
