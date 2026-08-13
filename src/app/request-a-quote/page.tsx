import React from "react";
import QuoteForm from "@/components/QuoteForm";
import { FileText, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Request a Technical Quote | Custom Specifications",
  description: "Configure your label dimensions, substrates, unwind directions, and finishing options to request a commercial quote.",
};

export default function RequestQuotePage() {
  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Commercial Request
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading">
            Submit Packaging Specifications
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
            Provide your dimensional constraints, substrate requirements, roll formats, and artwork status. Our technical staff will compile a commercial proposal.
          </p>
        </div>

        {/* Embedded Quote Form */}
        <div className="max-w-4xl mx-auto">
          <QuoteForm />
        </div>

        {/* Guarantee Banner */}
        <div className="max-w-4xl mx-auto mt-8 bg-neutral-light border border-gray-150 rounded-xl p-5 text-left flex gap-4">
          <div className="bg-blue-50 text-primary-blue p-2.5 rounded-lg h-max flex-shrink-0">
            <LandmarkIcon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-primary-blue font-heading">B2B NDA & Custody Guarantee</h4>
            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
              We treat all client designs, print dimensions, and chemical packaging formulas under strict confidentiality guidelines. Uploaded vector files are transferred securely and used solely for estimating production layouts.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

// Inline fallback icon for convenience
function LandmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}
