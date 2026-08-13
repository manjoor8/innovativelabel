import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle, FileText, Settings, ArrowLeft } from "lucide-react";
import { capabilitiesData, getCapabilityBySlug } from "@/data/capabilities";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return capabilitiesData.map((cap) => ({
    slug: cap.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const cap = getCapabilityBySlug(resolvedParams.slug);

  if (!cap) {
    return {
      title: "Capability",
    };
  }

  return {
    title: `${cap.name} | Packaging Manufacturing`,
    description: `${cap.description} Learn about machinery specs, print technology, and tolerances.`,
    alternates: {
      canonical: `/capabilities/${cap.slug}`,
    },
  };
}

export default async function CapabilityDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const cap = getCapabilityBySlug(resolvedParams.slug);

  if (!cap) {
    notFound();
  }

  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/capabilities"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary-red mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Capabilities</span>
        </Link>

        {/* Header Block */}
        <div className="text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Production Asset
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading leading-tight">
            {cap.name}
          </h1>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            {cap.details}
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-12">
          
          {/* Machine spec details list */}
          {cap.machines && cap.machines.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-6 border-b border-gray-100 pb-2">
                Production Machinery Fleet Specs
              </h3>
              <div className="space-y-6">
                {cap.machines.map((mac) => (
                  <div key={mac.name} className="border border-gray-150 p-6 rounded-xl bg-neutral-light/35 text-left">
                    <h4 className="text-base font-bold text-primary-blue font-heading">{mac.name}</h4>
                    <span className="inline-block bg-red-50 text-primary-red text-[10px] font-bold px-2 py-0.5 rounded mt-1.5 uppercase tracking-wide">
                      {mac.colors} Colors | Width: {mac.width}
                    </span>
                    <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                      {mac.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs text-gray-700 font-semibold">
                      {mac.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights List */}
          {cap.highlights && cap.highlights.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-4">Core Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cap.highlights.map((high) => (
                  <div key={high} className="border border-gray-150 p-4 rounded-lg flex items-start gap-2.5 bg-neutral-light/20">
                    <CheckCircle className="w-4.5 h-4.5 text-primary-red flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600 leading-relaxed font-semibold">{high}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications list */}
          {cap.specifications && cap.specifications.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-4">Technical Parameters</h3>
              <ul className="space-y-3 text-xs text-gray-600">
                {cap.specifications.map((spec) => (
                  <li key={spec} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Conversion Panel */}
          <div className="bg-primary-blue text-white rounded-xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow">
            <div className="text-left">
              <h4 className="text-base font-bold font-heading">Require custom parameters?</h4>
              <p className="text-xs text-white/70 mt-1 max-w-md leading-relaxed">
                Connect with our prepress and production staff at Dombivli to check layout limits and tooling setups.
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
