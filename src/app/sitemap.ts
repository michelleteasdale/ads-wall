import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ads-wall.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/rates", "/about", "/contact", "/blog",
    "/terms", "/privacy", "/register", "/login",
    "/virtual-card-terms", "/payment-policy", "/refund-policy",
    "/acceptable-use", "/kyc-aml-policy", "/cookie-policy", "/complaints",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
