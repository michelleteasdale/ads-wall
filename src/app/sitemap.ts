import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ads-wall.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/rates", "/about", "/contact", "/blog",
    "/terms", "/privacy", "/register", "/login",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
