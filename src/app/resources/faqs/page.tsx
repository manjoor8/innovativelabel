"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ChevronUp, FileText, ArrowLeft } from "lucide-react";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is your Minimum Order Quantity (MOQ) for custom labels?",
      a: "Our Minimum Order Quantity (MOQ) depends on the substrate type, label size, and printing setup. As a flexographic manufacturer running high-speed machinery, our systems are optimized for medium to high volume runs. Please contact our commercial sales team at our Dombivli facility with your specifications for a custom evaluation. [MOQ specifics to be confirmed by company]"
    },
    {
      q: "What is your standard production lead time?",
      a: "Our typical production lead time is calculated from the date of final digital artwork proof approval and deposit payment clearance. For repeat orders utilizing existing dies and plates, lead times are shorter. [Lead time parameters to be confirmed by company]"
    },
    {
      q: "What artwork file formats do you accept for prepress?",
      a: "We accept print-ready vector formats including Adobe Illustrator (.AI), Editable PDF, and Encapsulated PostScript (.EPS). All text should be converted to outlines, and images embedded at a resolution of at least 300 DPI. Spot colors must be specified as Pantone (PMS) codes."
    },
    {
      q: "Do you supply material samples for test application?",
      a: "Yes, we can supply blank material rolls or sample label sheets of clear PP, metallized paper, and permanent adhesives so that you can verify adhesion on your containers and test performance on your automated labeling lines."
    },
    {
      q: "Can you match specific color targets for branding?",
      a: "Yes, our flexographic presses run Pantone color matches verified using electronic spectrophotometers to keep print output consistent across multiple manufacturing batches."
    },
    {
      q: "Are your facilities certified for quality and sanitation?",
      a: "Yes, Innovative Label Solutions is ISO 9001:2015 certified, and our primary manufacturing is conducted under Class 100,000 positive-pressure clean-room standards, making it compliant with pharmaceutical outer packaging requirements."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

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
          <div className="flex items-center gap-2 text-primary-red">
            <HelpCircle className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider">Common Inquiries</span>
          </div>
          <h1 className="text-3xl font-extrabold text-primary-blue mt-2 font-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Answers regarding MOQ specifications, artwork prep files, printing technology, and lead times.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-150 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left text-sm font-bold text-primary-blue hover:text-primary-red hover:bg-neutral-light/30 transition-all font-heading"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/50 bg-neutral-light/10">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Technical Notice Banner */}
        <div className="bg-yellow-50 border border-yellow-150 rounded-lg p-4 text-xs text-yellow-800 leading-relaxed mt-10">
          <strong>B2B Operations Note:</strong> Custom terms, MOQs, and lead times vary per substrate and volume. Parameters marked as <em>Content to be confirmed by company</em> are subjects of mutual contract alignment.
        </div>

        {/* CTA Conversion Box */}
        <div className="bg-primary-blue text-white rounded-xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow mt-10">
          <div className="text-left">
            <h4 className="text-base font-bold font-heading">Have a specific question not listed here?</h4>
            <p className="text-xs text-white/70 mt-1 max-w-md leading-relaxed">
              Connect with our business development team for a direct response regarding custom contract agreements.
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
