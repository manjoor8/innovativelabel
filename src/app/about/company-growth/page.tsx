import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Globe, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Company Growth & Revenue Split",
  description: "Learn about the annual growth, domestic sales, and global reach of Innovative Label Solutions.",
};

export default function CompanyGrowth() {
  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
          Financial & Market Health
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary-blue mt-1 font-heading">
          Company Growth & Market Reach
        </h1>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Sustained expansion supported by robust domestic partnerships and increasing international ventures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-100 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary-red" />
            <h3 className="text-sm font-bold text-primary-blue font-heading">Annual Growth Rate (18% - 20%)</h3>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Since our founding in 2015, Innovative Label Solutions has recorded consistent year-on-year business growth rates of 18% to 20%. This expansion is driven by repeat orders, capacity increases in flexography, and technology investments.
          </p>
        </div>
        <div className="relative h-48 w-full rounded-xl overflow-hidden shadow border border-gray-150 bg-gray-50">
          <Image
            src="/assets/images/charts/company-growth-1.jpg"
            alt="Innovative Label Solutions annual growth chart"
            fill
            className="object-contain p-4"
            sizes="(max-width: 1024px) 100vw, 350px"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-100 pb-8">
        <div className="order-2 md:order-1 relative h-48 w-full rounded-xl overflow-hidden shadow border border-gray-150 bg-gray-50">
          <Image
            src="/assets/images/charts/domestic-international.jpg"
            alt="Revenue distribution chart: 82% domestic, 18% international"
            fill
            className="object-contain p-4"
            sizes="(max-width: 1024px) 100vw, 350px"
          />
        </div>
        <div className="order-1 md:order-2">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-primary-red" />
            <h3 className="text-sm font-bold text-primary-blue font-heading">Market Split (82% / 18%)</h3>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Our company maintains a balanced sales profile. 82% of revenue originates from domestic operations within the Indian subcontinent (partnering with major national FMCG, agrochemical, and pharmaceutical brands), while 18% comes from international export ventures.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-primary-blue mb-4 font-heading">Growth Strategy & Product Diversification</h3>
        <p className="text-xs text-gray-600 leading-relaxed mb-4">
          To sustain our growth, we continue to explore product diversification within our current packaging markets. We focus heavily on:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-semibold">
          <li className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-primary-red" />
            Expanding anti-counterfeit security label features
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-primary-red" />
            Optimizing multi-layer booklet configurations
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-primary-red" />
            Increasing high-adhesion labels for raw chemical drums
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-primary-red" />
            Integrating window-patch configurations on folding cartons
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-100 pt-6 flex justify-end">
        <Link
          href="/about/management"
          className="bg-primary-blue hover:bg-blue-900 text-white font-bold py-2.5 px-6 rounded text-xs transition-all shadow"
        >
          View Management Structure
        </Link>
      </div>
    </div>
  );
}
