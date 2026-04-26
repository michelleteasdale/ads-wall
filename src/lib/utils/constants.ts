export const SITE_NAME = "Cardium";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cardium.io";

export const NAV_LINKS = [
  { key: "virtualCards", href: "/" },
  { key: "rates", href: "/rates" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
  { key: "blog", href: "/blog" },
] as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/cardium",
  linkedin: "https://linkedin.com/company/cardium",
  github: "https://github.com/cardium",
  discord: "https://discord.gg/cardium",
} as const;
