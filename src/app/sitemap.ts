export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { productsData } from "@/data/products";
import { industriesData } from "@/data/industries";
import { capabilitiesData } from "@/data/capabilities";
import { qualityData } from "@/data/quality";
import { blogPostsData } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://labelsolutions.in";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/about/company-profile",
    "/about/vision-mission-values",
    "/about/infrastructure",
    "/about/company-growth",
    "/about/management",
    "/about/team",
    "/products",
    "/industries",
    "/capabilities",
    "/quality",
    "/gallery",
    "/gallery/factory",
    "/gallery/machinery",
    "/gallery/production",
    "/gallery/products",
    "/gallery/labels",
    "/gallery/team",
    "/resources",
    "/resources/blog",
    "/resources/label-guide",
    "/resources/faqs",
    "/resources/case-studies",
    "/contact",
    "/request-a-quote",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Product routes
  const productRoutes = productsData.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Industry routes
  const industryRoutes = industriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Capability routes
  const capabilityRoutes = capabilitiesData.map((cap) => ({
    url: `${baseUrl}/capabilities/${cap.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Quality routes
  const qualityRoutes = qualityData.map((qual) => ({
    url: `${baseUrl}/quality/${qual.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog routes
  const blogRoutes = blogPostsData.map((post) => ({
    url: `${baseUrl}/resources/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...industryRoutes,
    ...capabilityRoutes,
    ...qualityRoutes,
    ...blogRoutes,
  ];
}
