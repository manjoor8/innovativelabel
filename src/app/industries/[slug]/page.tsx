import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle, FileText, Factory, ShieldCheck, HelpCircle, ArrowLeft } from "lucide-react";
import { industriesData, getIndustryBySlug } from "@/data/industries";
import { getProductBySlug } from "@/data/products";
import { getCustomerCategoryBySlug } from "@/data/customers";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const industry = getIndustryBySlug(resolvedParams.slug);

  if (!industry) {
    return {
      title: "Industry Solutions",
    };
  }

  return {
    title: `${industry.name} Packaging Label Solutions`,
    description: `Custom label printing and packaging specifications for the ${industry.name} industry. ISO 9001:2015 certified.`,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const industry = getIndustryBySlug(resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  // Resolve relevant products
  const relevantProducts = industry.relevantProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  // Resolve customer logos
  const customerCategory = getCustomerCategoryBySlug(industry.slug);

  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/industries"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary-red mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Industries</span>
        </Link>

        {/* Header Block */}
        <div className="text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Market Sector
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading leading-tight">
            {industry.name} Label Solutions
          </h1>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            {industry.introduction}
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-12">
          
          {/* Packaging Requirements */}
          <div>
            <h3 className="text-sm font-bold text-primary-blue font-heading mb-4 border-b border-gray-100 pb-2">
              Packaging & Label Requirements
            </h3>
            <ul className="space-y-3 text-xs text-gray-600">
              {industry.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications & Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
            <div>
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-4">Core Applications</h3>
              <ul className="space-y-2.5 text-xs text-gray-600">
                {industry.applications.map((app) => (
                  <li key={app} className="flex items-start gap-1.5">
                    <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-4">Production Capabilities</h3>
              <ul className="space-y-2.5 text-xs text-gray-600">
                {industry.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-1.5">
                    <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quality considerations */}
          <div className="border-t border-gray-100 pt-8">
            <h3 className="text-sm font-bold text-primary-blue font-heading mb-3">Quality & Compliance</h3>
            <div className="bg-neutral-light border border-gray-150 p-5 rounded-xl flex gap-4">
              <div className="bg-red-50 text-primary-red p-2 rounded h-max">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <ul className="space-y-2 text-xs text-gray-600 text-left">
                {industry.qualityConsiderations.map((item) => (
                  <li key={item} className="list-disc list-inside leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Relevant Products Slider */}
          <div className="border-t border-gray-100 pt-8">
            <h3 className="text-sm font-bold text-primary-blue font-heading mb-6">Recommended Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relevantProducts.map((prod) => (
                <div
                  key={prod.slug}
                  className="border border-gray-150 p-5 rounded-lg bg-white hover:border-primary-red/35 hover:shadow-sm transition-all flex flex-col justify-between text-left group"
                >
                  <div>
                    <h4 className="text-xs font-bold text-primary-blue group-hover:text-primary-red transition-colors font-heading">
                      {prod.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="mt-4 text-[10px] font-bold text-primary-red hover:underline flex items-center gap-0.5"
                  >
                    View Specs <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Logos / Industry served Experience */}
          {customerCategory && customerCategory.logoPaths.length > 0 && (
            <div className="border-t border-gray-100 pt-10">
              <div className="text-left mb-6">
                <h3 className="text-sm font-bold text-primary-blue font-heading">Selected Companies Served</h3>
                <p className="text-[11px] text-gray-500 mt-1">Logo designs of B2B brands we have manufactured packages or labels for.</p>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 bg-neutral-light border border-gray-150 p-6 rounded-xl">
                {customerCategory.logoPaths.map((logo, idx) => (
                  <div
                    key={idx}
                    className="relative h-12 bg-white rounded border border-gray-100 overflow-hidden p-1.5 flex items-center justify-center shadow-sm"
                  >
                    <Image
                      src={logo}
                      alt={`${industry.name} Customer logo served`}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 640px) 30vw, 80px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          <div className="border-t border-gray-100 pt-10">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-primary-red" />
              <h3 className="text-sm font-bold text-primary-blue font-heading">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {industry.faqs.map((faq) => (
                <div key={faq.q} className="border border-gray-150 rounded-lg p-4 bg-neutral-light/20">
                  <h4 className="text-xs font-bold text-primary-blue font-heading">{faq.q}</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Conversion Box */}
          <div className="bg-primary-blue text-white rounded-xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow">
            <div className="text-left">
              <h4 className="text-base font-bold font-heading">Looking for a label manufacturer for {industry.name}?</h4>
              <p className="text-xs text-white/70 mt-1 max-w-md leading-relaxed">
                Connect with our commercial coordinators to request material samples and quote estimates.
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
