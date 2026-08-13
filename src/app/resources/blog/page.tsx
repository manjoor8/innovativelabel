import React from "react";
import Link from "next/link";
import { blogPostsData } from "@/data/blog";
import { ChevronRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog & Guides | Packaging Industry Insights",
  description: "Read our articles and guides covering pressure sensitive labels, shrink sleeves, and anti-counterfeiting seals.",
};

export default function BlogIndex() {
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
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Articles & Insights
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading">
            Packaging Blog & Guides
          </h1>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Technical guides, material selection comparisons, and anti-counterfeit packaging information compiled by our engineers.
          </p>
        </div>

        {/* Blog Posts list */}
        <div className="space-y-8">
          {blogPostsData.map((post) => (
            <div
              key={post.slug}
              className="border border-gray-150 p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-50 text-primary-red border border-primary-red/10 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-gray-400 font-semibold">{post.date}</span>
                </div>
                <h2 className="text-base font-bold text-primary-blue group-hover:text-primary-red transition-colors font-heading mt-3">
                  {post.title}
                </h2>
                <p className="text-xs text-gray-500 mt-2.5 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-semibold">{post.readTime}</span>
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="text-xs font-bold text-primary-blue hover:text-primary-red flex items-center gap-0.5 group-hover:translate-x-1 transition-all"
                >
                  Read Article
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
