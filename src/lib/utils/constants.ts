export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "AdsWall";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ads-wall.com";

export const COMPANY = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "HEADPAY LTD",
  number: process.env.NEXT_PUBLIC_COMPANY_NUMBER || "17206399",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "Dept 6789, 196 High Road, Wood Green, London, United Kingdom, N22 8HH",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+44 7863 773171",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@head-pay.com",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "info@head-pay.com",
} as const;

export const NAV_LINKS = [
  { key: "virtualCards", href: "/" },
  { key: "rates", href: "/rates" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
  { key: "blog", href: "/blog" },
] as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/adswall",
  linkedin: "https://linkedin.com/company/adswall",
} as const;
