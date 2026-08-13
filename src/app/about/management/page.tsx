import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GitBranch, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Management Structure & Leadership",
  description: "Learn about the management tiers and operational leadership guiding Innovative Label Solutions.",
};

export default function Management() {
  const tiers = [
    {
      level: "L1 - Board & Executive Directors",
      desc: "Sets the corporate strategy, international partnership directions, and capital investments."
    },
    {
      level: "L2 - General Management & Quality Heads",
      desc: "Responsible for ISO 9001 compliance, clean-room parameters, and capital machine operations."
    },
    {
      level: "L3 - Departmental Managers",
      desc: "Heads prepress, print production, quality inspection, raw material supply, and logistics lines."
    },
    {
      level: "L4 - Production Supervisors",
      desc: "Directs shifts on Taiyo, Alliance, and Mark Andy presses, and oversees slitting/inspections."
    },
    {
      level: "L5 - Technical Line operators",
      desc: "Highly trained professionals running the flexo cylinder setups, inks mixing, and defect reviews."
    }
  ];

  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
          Operational Leadership
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary-blue mt-1 font-heading">
          Management Structure
        </h1>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Nuanced leadership across clear management tiers to support high-efficiency B2B customer deliverables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Our company specializes in providing tailored expertise across management levels spanning L3 to L5, ensuring clients receive high-quality solutions crafted by experienced professionals. 
          </p>
          <p className="text-xs text-gray-600 leading-relaxed mt-4">
            Our commitment to excellence is supported by structured delegation, ensuring immediate responses to client requests, strict artwork custody controls, and rapid turnaround times.
          </p>
        </div>
        <div className="relative h-60 w-full rounded-xl overflow-hidden shadow border border-gray-150 bg-gray-50">
          <Image
            src="/assets/images/charts/on-time-completion.jpg"
            alt="Operational execution chart"
            fill
            className="object-contain p-4"
            sizes="(max-width: 1024px) 100vw, 350px"
          />
        </div>
      </div>

      {/* Tiers List */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <GitBranch className="w-5 h-5 text-primary-red" />
          <h3 className="text-sm font-bold text-primary-blue font-heading">Leadership & Tiers</h3>
        </div>
        <div className="space-y-4">
          {tiers.map((tier) => (
            <div key={tier.level} className="bg-neutral-light/50 border border-gray-150 p-4 rounded-lg">
              <h4 className="text-xs font-bold text-primary-blue font-heading">{tier.level}</h4>
              <p className="text-xs text-gray-500 mt-1">{tier.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6 flex justify-end">
        <Link
          href="/about/team"
          className="bg-primary-blue hover:bg-blue-900 text-white font-bold py-2.5 px-6 rounded text-xs transition-all shadow"
        >
          Meet the Team
        </Link>
      </div>
    </div>
  );
}
