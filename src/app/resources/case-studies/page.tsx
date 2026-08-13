import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Briefcase, FileText } from "lucide-react";

export const metadata = {
  title: "B2B Case Studies | Print Packaging Performance",
  description: "Read case studies detailing label material switches, anti-counterfeit implementations, and multi-layer leaflet labels.",
};

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Material Switch for Cosmetic Shower Gel Line",
      challenge: "A leading cosmetic client experienced label edge-lifting and wrinkling on squeezable HDPE shower gel bottles stored in humid bathrooms.",
      solution: "Switched face stock from semi-gloss paper to high-flexibility white Polypropylene (PP) film. Configured with a special high-shear water-resistant permanent acrylic adhesive.",
      result: "100% elimination of label lifting. Graphics remained intact after 60+ days of moisture exposure."
    },
    {
      title: "Leaflet Label Integration for Multi-lingual Pharma Pack",
      challenge: "A pharmaceutical exporter needed to fit 4 different language instructions onto a tiny 50ml cough syrup bottle to comply with regional regulatory standards.",
      solution: "Designed and manufactured a 3-layer peel-and-reveal booklet label on the Taiyo 10-color flexo line, providing 5 pages of readable area on a single bottle spot.",
      result: "Fulfilled exporting rules without requiring large box repackagings, cutting distribution packaging cost by 25%."
    },
    {
      title: "Anti-Counterfeiting Hologram Seal for Crop Chemicals",
      challenge: "An agrochemical manufacturer suffered brand dilution and revenue loss due to counterfeit chemical dilutes sold in regional markets.",
      solution: "Created custom destructible security label seals integrating unique registered holographic foils and coin-reactive inks.",
      result: "Retailers verified product authenticity instantly by scratching the seal with a coin, reducing counterfeit product sales by 90% in 6 months."
    }
  ];

  return (
    <div className="bg-white py-16 font-sans text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary-red mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Resources</span>
        </Link>

        {/* Header Block */}
        <div className="mb-10 border-b border-gray-100 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Operational Proofs
          </span>
          <h1 className="text-3xl font-extrabold text-primary-blue mt-1 font-heading">
            Packaging Case Studies
          </h1>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Real B2B packaging challenges solved by our engineers at Dombivli MIDC.
          </p>
        </div>

        {/* Case Studies list */}
        <div className="space-y-10">
          {cases.map((cs) => (
            <div key={cs.title} className="border border-gray-150 rounded-xl p-6 md:p-8 bg-neutral-light/20 flex gap-4 text-left">
              <div className="bg-red-50 text-primary-red p-2.5 rounded-xl h-max flex-shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-bold text-primary-blue font-heading">{cs.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                  <div>
                    <h4 className="font-bold text-gray-700 uppercase tracking-wide">The Challenge</h4>
                    <p className="text-gray-500 mt-1.5 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 uppercase tracking-wide">The Solution</h4>
                    <p className="text-gray-500 mt-1.5 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 uppercase tracking-wide">The Result</h4>
                    <p className="text-gray-500 mt-1.5 leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Conversion Box */}
        <div className="bg-primary-blue text-white rounded-xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow mt-12">
          <div className="text-left">
            <h4 className="text-base font-bold font-heading">Have a unique packaging challenge?</h4>
            <p className="text-xs text-white/70 mt-1 max-w-md leading-relaxed">
              We design custom die configurations, test adhesive shears, and coordinate with machinery developers to solve line problems.
            </p>
          </div>
          <Link
            href="/request-a-quote"
            className="bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded text-xs transition-all shadow-md flex-shrink-0 flex items-center gap-2 hover:scale-[1.02]"
          >
            <FileText className="w-3.5 h-3.5" />
            Request Quote
          </Link>
        </div>

      </div>
    </div>
  );
}
