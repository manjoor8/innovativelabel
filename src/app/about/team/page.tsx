import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Our Team & Workforce",
  description: "Meet the printing engineers and packaging specialists at Innovative Label Solutions.",
};

export default function Team() {
  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
          Dedicated Workforce
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary-blue mt-1 font-heading">
          Our Team
        </h1>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          A skilled team of 75+ professionals operating across shift schedules to keep production running smoothly.
        </p>
      </div>

      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow border border-gray-150">
        <Image
          src="/assets/images/team/team-group.jpg"
          alt="Innovative Label Solutions team and print staff photo"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 700px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs font-bold uppercase text-primary-red tracking-wider">Production Staff</p>
          <h4 className="text-base font-bold font-heading">Our Skilled Print & Quality Team</h4>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-600 leading-relaxed">
        <p>
          At Innovative Label Solutions, we value every employee's contribution. Our diverse and talented workforce is the key driver of our efficiency and precision. We maintain an inclusive work environment that encourages cooperation and provides regular opportunities for professional growth.
        </p>
        <p>
          Our team comprises packaging structural engineers, pre-press graphic designers, flexo operators with over 20 years of printing experience, and certified quality control inspectors. Through their collective expertise, we successfully output up to 10 million high-precision labels daily, catering to demanding sectors.
        </p>
      </div>

      {/* Workforce highlights */}
      <div className="border-t border-gray-100 pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-primary-red" />
          <h3 className="text-sm font-bold text-primary-blue font-heading">Workforce Highlights</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-500">
          <div className="p-4 rounded-lg bg-neutral-light/50 border border-gray-100">
            <span className="block font-bold text-primary-blue text-sm">20+ Years</span>
            <span className="block mt-1">Average experience of printing line managers.</span>
          </div>
          <div className="p-4 rounded-lg bg-neutral-light/50 border border-gray-100">
            <span className="block font-bold text-primary-blue text-sm">Continuous Training</span>
            <span className="block mt-1">Regular sessions covering material choices and ISO guidelines.</span>
          </div>
          <div className="p-4 rounded-lg bg-neutral-light/50 border border-gray-100">
            <span className="block font-bold text-primary-blue text-sm">Zero-Defect Culture</span>
            <span className="block mt-1">Enforcing quality gates in both pre-press design and finishing.</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6 flex justify-end">
        <Link
          href="/products"
          className="bg-primary-red hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded text-xs transition-all shadow"
        >
          Explore Our Products
        </Link>
      </div>
    </div>
  );
}
