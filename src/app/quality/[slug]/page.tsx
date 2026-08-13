import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle, FileText, ShieldCheck, ArrowLeft } from "lucide-react";
import { qualityData, getQualityBySlug } from "@/data/quality";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return qualityData.map((qual) => ({
    slug: qual.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const qual = getQualityBySlug(resolvedParams.slug);

  if (!qual) {
    return {
      title: "Quality Standard",
    };
  }

  return {
    title: `${qual.name} | Innovative Label Solutions`,
    description: `${qual.title}. Explore how we enforce B2B print accuracy, material checks, and calibration standards.`,
    alternates: {
      canonical: `/quality/${qual.slug}`,
    },
  };
}

export default async function QualityDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const qual = getQualityBySlug(resolvedParams.slug);

  if (!qual) {
    notFound();
  }

  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/quality"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary-red mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Quality Overview</span>
        </Link>

        {/* Header Block */}
        <div className="text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Quality Gate
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading leading-tight">
            {qual.title}
          </h1>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            {qual.intro}
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-10">
          
          {/* Certificate Image (If supported) */}
          {qual.certificateImg && (
            <div className="relative h-[500px] w-full border border-gray-150 rounded-xl overflow-hidden shadow bg-gray-50 flex items-center justify-center p-4">
              <Image
                src={qual.certificateImg}
                alt="ISO 9001:2015 B2B Certificate image"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>
          )}

          {/* Points list */}
          <div>
            <h3 className="text-sm font-bold text-primary-blue font-heading mb-4">Core Specifications & Workflow</h3>
            <ul className="space-y-3.5 text-xs text-gray-600">
              {qual.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          {qual.details && (
            <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-6">
              {qual.details}
            </p>
          )}

          {/* B2B Quote CTA Banner */}
          <div className="bg-primary-blue text-white rounded-xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow">
            <div className="text-left">
              <h4 className="text-base font-bold font-heading">Require quality check compliance reports?</h4>
              <p className="text-xs text-white/70 mt-1 max-w-md leading-relaxed">
                Connect with our QA department at Dombivli to check clean-room standards, raw material specs, and testing procedures.
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
