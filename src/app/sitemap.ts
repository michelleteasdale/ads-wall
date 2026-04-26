import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novapay.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/rates", "/about", "/contact", "/blog"];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
