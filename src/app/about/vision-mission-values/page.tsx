import React from "react";
import Link from "next/link";
import { Compass, Target, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Vision, Mission & Values",
  description: "Learn about the mission, vision, and core corporate values that guide Innovative Label Solutions.",
};

export default function VisionMissionValues() {
  const values = [
    {
      title: "Customer Prime Focus",
      desc: "Delivering satisfaction and building long-term B2B partnerships is our primary corporate metric."
    },
    {
      title: "First-Time-Right approach",
      desc: "Enforcing quality gates in pre-press and printing to minimize production wastage and delay."
    },
    {
      title: "Workforce empowerment",
      desc: "Regular training and skill-development workshops to facilitate our employees' professional growth."
    },
    {
      title: "Honest Communication",
      desc: "Open, clear, and direct communication with clients and suppliers regarding specifications and timelines."
    }
  ];

  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
          Corporate Philosophy
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary-blue mt-1 font-heading">
          Vision, Mission & Values
        </h1>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          The core guidelines defining our commitment to client satisfaction, packaging quality, and operational excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-150 p-6 rounded-xl bg-neutral-light/50 flex gap-4">
          <div className="bg-red-50 text-primary-red p-3 rounded-xl h-max">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-primary-blue font-heading">Our Vision</h3>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">
              To become a world-class packaging and label manufacturing company with a dominant presence in the Indian subcontinent and global reach, recognized for outstanding product innovation.
            </p>
          </div>
        </div>

        <div className="border border-gray-150 p-6 rounded-xl bg-neutral-light/50 flex gap-4">
          <div className="bg-blue-50 text-primary-blue p-3 rounded-xl h-max">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-primary-blue font-heading">Our Mission</h3>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">
              To provide our clients with the highest quality label and carton products at competitive commercial rates, emphasizing production efficiency, short lead times, and swift turnarounds on new product developments.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheck className="w-5 h-5 text-primary-red" />
          <h3 className="text-sm font-bold text-primary-blue font-heading">Our Core Values</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val) => (
            <div key={val.title} className="bg-neutral-light/30 border border-gray-100 p-5 rounded-lg text-left">
              <h4 className="text-xs font-bold text-primary-blue font-heading">{val.title}</h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6 flex justify-end">
        <Link
          href="/about/infrastructure"
          className="bg-primary-blue hover:bg-blue-900 text-white font-bold py-2.5 px-6 rounded text-xs transition-all shadow"
        >
          View Infrastructure
        </Link>
      </div>
    </div>
  );
}
