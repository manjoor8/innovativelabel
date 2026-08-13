import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Clock, FileText } from "lucide-react";
import { blogPostsData, getBlogPostBySlug } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | B2B Packaging Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/resources/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white py-16 font-sans text-left">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/resources/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary-red mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Blog List</span>
        </Link>

        {/* Header Block */}
        <div className="border-b border-gray-100 pb-6 mb-8">
          <div className="flex items-center gap-3 text-xs text-gray-400 font-semibold">
            <span className="bg-red-50 text-primary-red border border-primary-red/10 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>Published: {post.date}</span>
          </div>
          <h1 className="text-2xl md:text-3.5xl font-extrabold text-primary-blue mt-4 font-heading leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mt-3 italic leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Markdown-style Body Text */}
        <article className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6 text-xs sm:text-sm">
          {post.content.split("\n\n").map((para, idx) => {
            // Very basic custom rendering for headings/lists to prevent adding markdown parser dependencies
            if (para.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-lg font-bold text-primary-blue font-heading pt-4 border-b border-gray-100 pb-1">
                  {para.replace("## ", "")}
                </h2>
              );
            }
            if (para.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-base font-bold text-primary-blue font-heading pt-2">
                  {para.replace("### ", "")}
                </h3>
              );
            }
            if (para.startsWith("- ")) {
              return (
                <ul key={idx} className="list-disc list-inside space-y-1.5 pl-2 text-xs">
                  {para.split("\n").map((li, liIdx) => (
                    <li key={liIdx}>{li.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{para}</p>;
          })}
        </article>

        {/* Technical placeholder warning if text includes confirmed by company block */}
        {post.content.includes("confirmed by company") && (
          <div className="mt-8 bg-yellow-50 border border-yellow-150 rounded-lg p-4 text-xs text-yellow-800 leading-relaxed">
            <strong>Technical Note:</strong> Certain specifications in this article are marked as <em>Content to be confirmed by company</em>. Please coordinate directly with our production facility at Dombivli for exact options.
          </div>
        )}

        {/* Bottom CTA Block */}
        <div className="bg-neutral-light border border-gray-150 rounded-xl p-6 md:p-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
          <div>
            <h4 className="text-sm font-bold text-primary-blue font-heading">Have packaging challenges?</h4>
            <p className="text-xs text-gray-500 mt-1 max-w-sm">
              Connect with our technical staff to discuss substrate combinations, artwork prep, and lead times.
            </p>
          </div>
          <Link
            href="/request-a-quote"
            className="bg-primary-red hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded text-xs transition-all shadow flex items-center gap-2 hover:scale-[1.02]"
          >
            <FileText className="w-3.5 h-3.5" />
            Request Quote
          </Link>
        </div>

      </div>
    </div>
  );
}
