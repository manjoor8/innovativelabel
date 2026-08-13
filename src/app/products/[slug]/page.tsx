import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle, FileText, HelpCircle, Layers, ArrowLeft } from "lucide-react";
import { productsData, getProductBySlug } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} Manufacturer in India`,
    description: `${product.description} Explore technical specifications, substrates, and B2B ordering options.`,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Related products query
  const relatedProducts = product.relatedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary-red mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Products</span>
        </Link>

        {/* Header Segment */}
        <div className="text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            {product.category} Segment
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading leading-tight">
            {product.name}
          </h1>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            {product.shortIntro}
          </p>
        </div>

        {/* Spec blocks */}
        <div className="space-y-10">
          
          {/* Applications & Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-150 p-6 rounded-xl bg-neutral-light/30">
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-4">Common Applications</h3>
              <ul className="space-y-2.5 text-xs text-gray-600">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-start gap-1.5">
                    <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-150 p-6 rounded-xl bg-neutral-light/30">
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-4">Key Advantages</h3>
              <ul className="space-y-2.5 text-xs text-gray-600">
                {product.advantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-1.5">
                    <CheckCircle className="w-4 h-4 text-primary-red flex-shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Substrate & Finishes (If supported by PDF/data) */}
          {((product.materials && product.materials[0] !== "Content to be confirmed by company") ||
            (product.finishes && product.finishes[0] !== "Content to be confirmed by company")) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              {product.materials && product.materials[0] !== "Content to be confirmed by company" && (
                <div>
                  <h3 className="text-sm font-bold text-primary-blue font-heading mb-3">Materials & Substrates</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((mat) => (
                      <span key={mat} className="bg-neutral-light border border-gray-150 text-[11px] font-semibold text-gray-700 px-3 py-1 rounded-full">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {product.finishes && product.finishes[0] !== "Content to be confirmed by company" && (
                <div>
                  <h3 className="text-sm font-bold text-primary-blue font-heading mb-3">Available Finishes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map((fin) => (
                      <span key={fin} className="bg-neutral-light border border-gray-150 text-[11px] font-semibold text-gray-700 px-3 py-1 rounded-full">
                        {fin}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Print Capabilities and QC */}
          <div className="border-t border-gray-100 pt-8 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-2">Printing Capability</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {product.printingCapabilities} Production is executed under documented standard operating protocols.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-2">Quality & Inspection</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {product.qualityConsiderations} Finished webs are verified for register accuracy, scan readability, and material count.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-2">Suitable Industries</h3>
              <div className="flex flex-wrap gap-2">
                {product.suitableIndustries.map((ind) => (
                  <span key={ind} className="bg-red-50/50 text-primary-red border border-primary-red/10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Flag placeholder content if required by prompt guidelines */}
          {(product.materials?.[0] === "Content to be confirmed by company" || 
            product.finishes?.[0] === "Content to be confirmed by company") && (
            <div className="bg-yellow-50 border border-yellow-150 rounded-lg p-4 text-xs text-yellow-800 leading-relaxed">
              <strong>Technical Note:</strong> Substrate availability and finish configurations for this variant are currently marked as <em>Content to be confirmed by company</em>. Please coordinate directly with our tech team at Dombivli to check options.
            </div>
          )}

          {/* FAQs Accordion */}
          <div className="border-t border-gray-100 pt-10">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-primary-red" />
              <h3 className="text-sm font-bold text-primary-blue font-heading">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {product.faqs.map((faq) => (
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
              <h4 className="text-base font-bold font-heading">Need specifications for {product.name}?</h4>
              <p className="text-xs text-white/70 mt-1 max-w-md leading-relaxed">
                Connect with our packaging engineers to verify roll parameters, custom sizes, and quantity estimates.
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

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-gray-100 pt-10">
              <h3 className="text-sm font-bold text-primary-blue font-heading mb-6">Related Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/products/${rel.slug}`}
                    className="border border-gray-150 p-4 rounded-lg bg-white hover:border-primary-red/35 hover:shadow-sm transition-all text-left flex flex-col justify-between group"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-primary-blue group-hover:text-primary-red transition-colors font-heading">
                        {rel.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                        {rel.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-primary-red mt-3 flex items-center gap-0.5">
                      Configure <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
