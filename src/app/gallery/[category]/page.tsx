import React from "react";
import { notFound } from "next/navigation";
import { galleryCategories } from "@/data/gallery";
import GalleryCategoryClient from "./GalleryCategoryClient";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return [
    { category: "factory" },
    { category: "machinery" },
    { category: "production" },
    { category: "products" },
    { category: "labels" },
    { category: "team" }
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const categoryName = galleryCategories.find(c => c.slug === resolvedParams.category)?.name || resolvedParams.category;

  return {
    title: `${categoryName} Media Gallery`,
    description: `Browse photographs and machinery in the ${categoryName} category.`,
    alternates: {
      canonical: `/gallery/${resolvedParams.category}`,
    },
  };
}

export default async function GalleryCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { category } = resolvedParams;

  const validCategories = ["factory", "machinery", "production", "products", "labels", "team"];
  if (!validCategories.includes(category)) {
    notFound();
  }

  return <GalleryCategoryClient category={category} />;
}
