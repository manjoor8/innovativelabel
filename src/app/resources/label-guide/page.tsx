import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Table, FileText } from "lucide-react";

export const metadata = {
  title: "B2B Label Guide | Material Selection Parameters",
  description: "Learn how to choose raw label materials, compare PET versus PP films, clear versus opaque, and roll versus sheet layouts.",
};

export default function LabelGuidePage() {
  const comparisons = [
    {
      title: "PET (Polyester) vs PP (Polypropylene)",
      desc: "PET offers extreme tensile strength and heat resistance, making it perfect for thin liners and high-speed bottling. PP is highly flexible, cost-effective, and ideal for squeezable cosmetics tubes."
    },
    {
      title: "Clear-on-Clear vs Opaque Labels",
      desc: "Clear labels create an elegant 'no-label' look on glass/plastic bottles. Opaque labels provide maximum color opacity, ensuring brand graphics pop on dark or colored containers."
    },
    {
      title: "Roll Labels vs Sheet Labels",
      desc: "Roll form configuration is required for high-speed automatic packaging lines (calibrated with unwind direction codes). Sheet layouts are designed for manual bench application."
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
            Calibration Guide
          </span>
          <h1 className="text-3xl font-extrabold text-primary-blue mt-1 font-heading">
            Substrate & Labeling Material Guide
          </h1>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Technical guidelines compiled by our Dombivli engineering staff to assist procurement managers in choosing substrates.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-10">
          
          <div className="flex flex-col gap-4 text-sm text-gray-600 leading-relaxed">
            <p>
              In industrial packaging lines, selecting the correct adhesive and face-stock combination is critical to prevent peeling, print fading, or machine blockages. The selection depends on the container surface (HDPE, glass, metal), the storage environment (refrigerator moisture, outdoor UV), and labeling line speed.
            </p>
          </div>

          {/* Substrate comparisons */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Table className="w-5 h-5 text-primary-red" />
              <h3 className="text-sm font-bold text-primary-blue font-heading">Substrate Comparisons</h3>
            </div>
            <div className="space-y-6">
              {comparisons.map((comp) => (
                <div key={comp.title} className="border-l-4 border-primary-red pl-5 py-1">
                  <h4 className="text-sm font-bold text-primary-blue font-heading">{comp.title}</h4>
                  <p className="text-xs text-gray-500 mt-2.5 leading-relaxed">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines checklist */}
          <div className="border-t border-gray-100 pt-8">
            <h3 className="text-sm font-bold text-primary-blue mb-4 font-heading">Automated Labeling Roll Checklist</h3>
            <ul className="space-y-3 text-xs text-gray-600">
              <li className="flex items-start gap-1.5 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                <span>Verify core diameter matching label dispenser cylinder (standard: 3 inch / 76mm).</span>
              </li>
              <li className="flex items-start gap-1.5 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                <span>Specify standard unwind direction (codes 1 through 8) to align with applicator wipers.</span>
              </li>
              <li className="flex items-start gap-1.5 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                <span>Ensure proper matrix waste removal on rolls to prevent dispensers catching edges.</span>
              </li>
              <li className="flex items-start gap-1.5 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                <span>Validate print density codes (barcodes/QR) for scanning read rates.</span>
              </li>
            </ul>
          </div>

          {/* CTA Conversion Box */}
          <div className="bg-primary-blue text-white rounded-xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow mt-10">
            <div className="text-left">
              <h4 className="text-base font-bold font-heading">Need technical data sheets (TDS)?</h4>
              <p className="text-xs text-white/70 mt-1 max-w-md leading-relaxed">
                We supply technical reports detailing chemical resistance, adhesive shear strength, and shelf-life metrics.
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
    </div>
  );
}
