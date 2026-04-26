# PROJECT PROMPT — NovaPay Premium Fintech Landing Page

> **Purpose**: This prompt defines the complete architecture, design system, and implementation plan for a premium fintech virtual-card platform website. Hand this file to Claude Code (or any AI coding agent) and it should be able to scaffold and build the entire MVP.

---

## 1. PROJECT OVERVIEW

Build a **production-grade, SEO-optimized landing website** for "NovaPay" — a virtual card issuing and online payments platform (similar to spendge.com). The site must feel **premium, modern, and visually striking** — comparable to top-tier fintech websites like Stripe, Mercury, or Ramp.

### Core Requirements
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 3+ with a custom design-system config
- **3D & Illustrations**: Three.js (react-three-fiber + drei) for hero 3D scenes
- **Animations**: GSAP (with ScrollTrigger) for scroll-based reveals, parallax, and micro-interactions
- **Database**: MongoDB (via Mongoose ODM) — for contact forms, waitlist, blog posts, FAQ
- **i18n**: next-intl for full internationalization (default: English)
- **SEO**: Full metadata, JSON-LD structured data, sitemap.xml, robots.txt, Open Graph
- **Responsive**: Mobile-first, pixel-perfect on all breakpoints (320px → 2560px)
- **Performance**: Target Lighthouse 95+ on all metrics; lazy-load 3D, code-split per route

---

## 2. FOLDER STRUCTURE

```
novapay/
├── public/
│   ├── images/                    # Static images (logos, og-image, favicons)
│   │   ├── logo.svg
│   │   ├── logo-dark.svg
│   │   ├── og-image.png           # 1200x630 Open Graph image
│   │   └── favicon.ico
│   ├── fonts/                     # Self-hosted font files (woff2)
│   ├── models/                    # 3D model files (.glb/.gltf) for Three.js
│   │   └── credit-card.glb
│   ├── sitemap.xml                # Auto-generated or static
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── [locale]/              # i18n dynamic segment (en, uk, es, etc.)
│   │   │   ├── layout.tsx         # Root layout with locale provider, fonts, metadata
│   │   │   ├── page.tsx           # Homepage — assembles all landing sections
│   │   │   ├── rates/
│   │   │   │   └── page.tsx       # Pricing / Rates page
│   │   │   ├── about/
│   │   │   │   └── page.tsx       # About page
│   │   │   ├── contact/
│   │   │   │   └── page.tsx       # Contact page with form → MongoDB
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx       # Blog listing
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx   # Individual blog post
│   │   │   └── not-found.tsx      # Custom 404
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts       # POST /api/contact → save to MongoDB
│   │   │   ├── waitlist/
│   │   │   │   └── route.ts       # POST /api/waitlist → save email to MongoDB
│   │   │   └── blog/
│   │   │       └── route.ts       # GET /api/blog → fetch posts from MongoDB
│   │   ├── layout.tsx             # Top-level layout (redirects to /en by default)
│   │   └── globals.css            # Tailwind directives + custom CSS variables
│   │
│   ├── components/
│   │   ├── layout/                # Structural components
│   │   │   ├── Header.tsx         # Sticky header with glassmorphism, locale switcher
│   │   │   ├── Footer.tsx         # Footer with links, social, newsletter
│   │   │   ├── MobileMenu.tsx     # Slide-out mobile navigation
│   │   │   └── Container.tsx      # Max-width wrapper component
│   │   │
│   │   ├── sections/              # Landing page sections (each = full viewport block)
│   │   │   ├── HeroSection.tsx        # 3D card scene + headline + CTA
│   │   │   ├── LogoCarousel.tsx       # Trusted-by logo ticker (Facebook, Google, TikTok)
│   │   │   ├── FeaturesSection.tsx    # Bento-grid feature cards with icons
│   │   │   ├── HowItWorks.tsx         # 3-step process with animated connectors
│   │   │   ├── RatesPreview.tsx       # Pricing cards preview
│   │   │   ├── SecuritySection.tsx    # Trust & security badges
│   │   │   ├── TestimonialsSection.tsx# Client testimonials carousel
│   │   │   ├── CTASection.tsx         # Final call-to-action banner
│   │   │   └── FAQSection.tsx         # Accordion FAQ
│   │   │
│   │   ├── ui/                    # Reusable UI primitives
│   │   │   ├── Button.tsx         # Variants: primary, secondary, outline, ghost
│   │   │   ├── Badge.tsx          # Status/label badges
│   │   │   ├── Card.tsx           # Glass-morphism card wrapper
│   │   │   ├── Input.tsx          # Form input with floating label
│   │   │   ├── Accordion.tsx      # Expandable FAQ item
│   │   │   ├── Tabs.tsx           # Tab switcher component
│   │   │   ├── Modal.tsx          # Dialog/modal component
│   │   │   ├── Tooltip.tsx        # Hover tooltip
│   │   │   ├── AnimatedCounter.tsx# Number counter animation (for stats)
│   │   │   ├── GradientText.tsx   # Text with animated gradient fill
│   │   │   └── Skeleton.tsx       # Loading skeleton placeholder
│   │   │
│   │   ├── three/                 # Three.js / R3F components
│   │   │   ├── CreditCard3D.tsx   # Animated 3D credit card model
│   │   │   ├── ParticleField.tsx  # Floating particle background
│   │   │   ├── GlobeScene.tsx     # Interactive 3D globe (global payments)
│   │   │   └── SceneWrapper.tsx   # Canvas + Suspense + lazy-load wrapper
│   │   │
│   │   └── animations/           # GSAP animation utilities
│   │       ├── ScrollReveal.tsx   # Wrapper: fade-in on scroll (up/left/right/scale)
│   │       ├── TextReveal.tsx     # Split-text character/word reveal animation
│   │       ├── ParallaxLayer.tsx  # Parallax scroll movement wrapper
│   │       ├── MagneticButton.tsx # Magnetic hover effect for CTAs
│   │       └── CountUp.tsx        # Animated number counting on scroll
│   │
│   ├── lib/                       # Utilities and configurations
│   │   ├── db/
│   │   │   ├── mongoose.ts        # MongoDB connection singleton
│   │   │   └── models/
│   │   │       ├── Contact.ts     # Contact form submission model
│   │   │       ├── Waitlist.ts    # Waitlist email model
│   │   │       └── BlogPost.ts   # Blog post model
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts              # clsx + twMerge utility
│   │   │   ├── constants.ts       # Site-wide constants (links, social URLs)
│   │   │   └── metadata.ts        # SEO metadata generator helper
│   │   │
│   │   └── hooks/
│   │       ├── useGsap.ts         # Custom hook for GSAP with cleanup
│   │       ├── useMediaQuery.ts   # Responsive breakpoint hook
│   │       └── useInView.ts       # Intersection Observer hook
│   │
│   ├── i18n/                      # Internationalization
│   │   ├── config.ts              # Supported locales list, default locale
│   │   ├── request.ts             # next-intl request configuration
│   │   └── routing.ts             # next-intl routing configuration
│   │
│   ├── messages/                  # Translation files (1 JSON per locale)
│   │   ├── en.json                # English (default / reference)
│   │   ├── uk.json                # Ukrainian
│   │   └── es.json                # Spanish (example additional lang)
│   │
│   └── styles/
│       └── fonts.ts               # Next.js font loader config (local fonts)
│
├── .env.local                     # MONGODB_URI, NEXT_PUBLIC_SITE_URL
├── .env.example                   # Template for env vars
├── next.config.ts                 # Next.js config with next-intl plugin
├── tailwind.config.ts             # Extended Tailwind theme (colors, fonts, animations)
├── tsconfig.json
├── package.json
└── README.md                      # Setup instructions, architecture overview
```

---

## 3. i18n ARCHITECTURE (next-intl)

### 3.1 Config — `src/i18n/config.ts`
```ts
export const locales = ["en", "uk", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Display names for the locale switcher UI
export const localeNames: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  es: "Español",
};
```

### 3.2 Translation File Format — `src/messages/en.json`
Translations are organized by **section → key** for maintainability:

```json
{
  "metadata": {
    "title": "NovaPay — Next-Gen Virtual Cards & Payments",
    "description": "Issue unlimited virtual Visa cards instantly. Optimized for media buying, advertising, and business payments."
  },
  "nav": {
    "virtualCards": "Virtual Cards",
    "rates": "Rates",
    "about": "About",
    "contact": "Contact",
    "blog": "Blog",
    "signIn": "Sign In",
    "signUp": "Sign Up"
  },
  "hero": {
    "badge": "Trusted by 10,000+ media buyers worldwide",
    "title": "Revolutionize Your Spending Power",
    "subtitle": "The ultimate virtual card platform for media buying teams and marketing agencies. Issue unlimited cards, pay with crypto, scale without limits.",
    "cta": "Get Started Free",
    "ctaSecondary": "View Rates",
    "stats": {
      "cards": "Cards Issued",
      "volume": "Monthly Volume",
      "uptime": "Uptime",
      "countries": "Countries"
    }
  },
  "features": {
    "sectionTag": "Ecosystem",
    "title": "Everything You Need to Scale",
    "subtitle": "A complete financial infrastructure built for modern digital teams",
    "items": {
      "instantCards": {
        "title": "Instant Card Issuing",
        "description": "Create unlimited virtual Visa cards in seconds. Each card gets its own BIN, balance, and spending controls."
      },
      "cryptoTopUp": {
        "title": "Crypto Top-Up",
        "description": "Fund your account with 30+ cryptocurrencies. Instant conversion, competitive rates, no hidden fees."
      },
      "teamAccounts": {
        "title": "Team Management",
        "description": "Distribute cards and budgets across your team. Role-based access, spending limits, real-time monitoring."
      },
      "api": {
        "title": "Powerful API",
        "description": "Full REST API for card management, balance operations, transaction history, and webhook notifications."
      },
      "analytics": {
        "title": "Advanced Analytics",
        "description": "Track spend patterns, monitor ROI per campaign, and export detailed reports in real-time."
      },
      "security": {
        "title": "3DS Security",
        "description": "Every transaction protected with 3D Secure authentication. PCI DSS compliant infrastructure."
      }
    }
  },
  "howItWorks": {
    "sectionTag": "How It Works",
    "title": "Start in 3 Simple Steps",
    "steps": {
      "register": {
        "title": "Create Account",
        "description": "Sign up in under 2 minutes. No paperwork, no waiting."
      },
      "fund": {
        "title": "Fund Your Balance",
        "description": "Top up via crypto or wire transfer. Funds available instantly."
      },
      "spend": {
        "title": "Issue Cards & Spend",
        "description": "Create unlimited cards and start spending on any platform worldwide."
      }
    }
  },
  "rates": {
    "sectionTag": "Transparent Pricing",
    "title": "Simple, Fair Rates",
    "subtitle": "No hidden fees. No surprises. Just clear pricing that scales with you.",
    "cardIssue": "Card Issue",
    "monthlyFee": "Monthly Fee",
    "cryptoTopUp": "Crypto Top-Up",
    "wireTransfer": "Wire Transfer",
    "cta": "See Full Pricing"
  },
  "testimonials": {
    "sectionTag": "Testimonials",
    "title": "Loved by Teams Worldwide"
  },
  "faq": {
    "sectionTag": "FAQ",
    "title": "Frequently Asked Questions",
    "items": {
      "q1": {
        "question": "How quickly can I issue a virtual card?",
        "answer": "Instantly. Once your account is funded, you can create unlimited virtual cards in just a few clicks."
      },
      "q2": {
        "question": "Which cryptocurrencies do you support?",
        "answer": "We support 30+ cryptocurrencies including BTC, ETH, USDT, USDC, and all major stablecoins."
      },
      "q3": {
        "question": "Is there a spending limit?",
        "answer": "No. NovaPay offers unlimited cards and unrestricted spending power for verified accounts."
      }
    }
  },
  "cta": {
    "title": "Ready to Scale Your Ad Spend?",
    "subtitle": "Join thousands of media buyers who trust NovaPay for their payment infrastructure.",
    "button": "Create Free Account"
  },
  "footer": {
    "description": "The next-generation virtual card platform for modern businesses.",
    "products": "Products",
    "company": "Company",
    "legal": "Legal",
    "terms": "Terms & Conditions",
    "privacy": "Privacy Policy",
    "newsletter": "Stay Updated",
    "emailPlaceholder": "Enter your email",
    "subscribe": "Subscribe",
    "rights": "All rights reserved."
  }
}
```

### 3.3 Adding a New Language
To add a new language (e.g., French):
1. Create `src/messages/fr.json` — copy `en.json` and translate all values
2. Add `"fr"` to the `locales` array in `src/i18n/config.ts`
3. Add the display name: `fr: "Français"` in `localeNames`
4. Done — next-intl auto-detects the new file and routing works automatically

---

## 4. DESIGN SYSTEM

### 4.1 Color Palette (Tailwind config extension)
```
Background:       #06060E (near-black with blue undertone)
Surface:          #0C0C1D (cards, elevated elements)
Surface Hover:    #12122A
Border:           rgba(255,255,255, 0.06)
Text Primary:     #F0F0F8
Text Secondary:   rgba(255,255,255, 0.6)
Text Dim:         rgba(255,255,255, 0.35)

Accent Primary:   #6C5CE7 (vivid purple)
Accent Secondary: #A78BFA (soft lavender)
Accent Tertiary:  #818CF8 (periwinkle)
Gradient:         linear-gradient(135deg, #6C5CE7, #A78BFA, #818CF8)

Success:          #34D399 (emerald)
Warning:          #FBBF24 (amber)
Error:            #F87171 (rose)
Gold:             #F0C27A (premium accent for pricing)
```

### 4.2 Typography
- **Display / Headings**: `"Plus Jakarta Sans"` — weights 600, 700, 800
- **Monospace / Labels**: `"Space Mono"` — for stats, badges, code-like accents
- **Body**: `"Plus Jakarta Sans"` — weight 400, 500
- Load via `next/font/google` for automatic optimization

### 4.3 Design Tokens for Tailwind
Extend `tailwind.config.ts` with:
- Custom colors (above palette)
- Custom `fontFamily` entries
- Custom `animation` keyframes: `float`, `glow-pulse`, `gradient-shift`, `fade-up`, `slide-in`
- Custom `backgroundImage` for mesh gradients
- Custom `boxShadow` for glow effects: `glow-sm`, `glow-md`, `glow-lg`
- Custom `screens` breakpoints if needed (default Tailwind breakpoints are fine)

### 4.4 Visual Style Guide
- **Glass-morphism cards**: `bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl`
- **Glow effects**: Subtle purple glow behind CTAs and hero elements
- **Grain overlay**: CSS noise texture on background for premium feel
- **Gradient borders**: Use `background-clip` trick for gradient-bordered cards
- **Micro-interactions**: Every interactive element has a hover/focus state with smooth transition
- **Spacing rhythm**: Use 8px grid (Tailwind's default scale)

---

## 5. ANIMATIONS SPECIFICATION

### 5.1 GSAP + ScrollTrigger
All scroll-based animations use the `ScrollReveal.tsx` wrapper component.

| Element | Animation | Trigger | Duration |
|---|---|---|---|
| Section titles | Fade up + slight Y translate | `top 85%` | 0.8s |
| Feature cards | Staggered fade-up (0.15s between) | `top 80%` | 0.6s each |
| Stats numbers | CountUp from 0 to value | `top 75%` | 2s |
| How-it-works steps | Sequential reveal left-to-right | `top 80%` | 0.5s each |
| Pricing cards | Scale from 0.9 + fade | `top 80%` | 0.7s |
| FAQ items | Fade up staggered | `top 85%` | 0.4s each |
| CTA section | Parallax background + fade-in text | `top 90%` | 1s |

### 5.2 GSAP Micro-interactions (non-scroll)
- **Magnetic buttons**: CTA buttons subtly follow cursor within 30px radius
- **Text reveal**: Hero headline uses split-text with per-character staggered reveal on page load
- **Gradient shift**: Hero background gradient slowly animates position infinitely
- **Logo carousel**: Infinite horizontal scroll ticker, pauses on hover
- **Navbar**: Shrinks + gains backdrop-blur on scroll past 100px

### 5.3 Three.js (react-three-fiber)
- **Hero scene**: Floating 3D credit card that rotates gently, follows mouse parallax
- **Particle field**: Subtle floating particles in hero background (low count ~200 for perf)
- **Globe** (optional, for a "global payments" section): Interactive 3D globe with connection arcs

**Performance rules for Three.js**:
- Wrap in `<Suspense>` with a skeleton fallback
- Use `React.lazy()` to code-split the Canvas
- Disable on mobile (< 768px) — show a static illustration instead
- Use `frameloop="demand"` where possible to save GPU cycles
- Keep polygon counts low (< 10k triangles per scene)

---

## 6. SEO IMPLEMENTATION

### 6.1 Metadata (per page)
Every page must export a `generateMetadata()` function that returns:
```ts
{
  title: "Page Title — NovaPay",
  description: "...",
  keywords: ["virtual cards", "media buying", "crypto payments", ...],
  openGraph: {
    title, description, url, siteName: "NovaPay",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    locale: currentLocale,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title, description,
    images: ["/images/og-image.png"]
  },
  alternates: {
    canonical: `https://novapay.com/${locale}`,
    languages: { en: "/en", uk: "/uk", es: "/es" }
  }
}
```

### 6.2 JSON-LD Structured Data
Add to the homepage `layout.tsx`:
- `Organization` schema
- `WebSite` schema with `SearchAction`
- `FAQPage` schema (from FAQ section data)

### 6.3 Technical SEO
- `sitemap.xml` — auto-generated via `next-sitemap` or App Router's `sitemap.ts`
- `robots.txt` — allow all, reference sitemap
- Semantic HTML: proper heading hierarchy (single `<h1>` per page), `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- All images have descriptive `alt` text
- All links have descriptive text (no "click here")
- `<html lang={locale}>` set dynamically

---

## 7. MONGODB MODELS

### 7.1 Connection — `src/lib/db/mongoose.ts`
Standard cached connection pattern for Next.js serverless:
```ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
```

### 7.2 Models

**Contact** — `src/lib/db/models/Contact.ts`
```
{ name: String, email: String, message: String, locale: String, createdAt: Date }
```

**Waitlist** — `src/lib/db/models/Waitlist.ts`
```
{ email: String (unique), source: String, locale: String, createdAt: Date }
```

**BlogPost** — `src/lib/db/models/BlogPost.ts`
```
{ slug: String (unique), locale: String, title: String, excerpt: String, content: String, coverImage: String, author: String, tags: [String], published: Boolean, publishedAt: Date, createdAt: Date }
```

---

## 8. COMPONENT IMPLEMENTATION NOTES

### 8.1 Header
- Sticky, transparent initially → glassmorphism on scroll (GSAP scroll listener)
- Logo left, nav center, locale switcher + Sign In / Sign Up right
- Locale switcher: dropdown with flag icons and language names
- Mobile: hamburger → slide-out drawer with GSAP animation
- Active link indicator: gradient underline

### 8.2 HeroSection
- Full viewport height
- Left side: badge → h1 → subtitle → two CTAs → stats row
- Right side: Three.js 3D credit card scene (lazy-loaded)
- Background: dark with subtle animated gradient blobs + particle field
- GSAP timeline on mount: staggered reveal of all left-side elements

### 8.3 FeaturesSection
- Section tag (pill badge) + title + subtitle
- 6 cards in a responsive bento-grid layout (2x3 on desktop, 1 col mobile)
- Each card: icon (Lucide or custom SVG) + title + description
- Cards have glassmorphism style with gradient border on hover
- GSAP ScrollTrigger staggered reveal

### 8.4 RatesPreview
- 3 pricing tiers: Starter, Pro, Enterprise
- Each tier in a glass card with feature list
- Middle card (Pro) emphasized — slightly larger, gradient border, "Popular" badge
- GSAP scale-in animation on scroll

### 8.5 FAQSection
- Accordion pattern with smooth height animation (GSAP or CSS)
- Plus/minus icon rotates on toggle
- Only one item open at a time

---

## 9. DEPENDENCIES

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "next-intl": "^3.20.0",
    "mongoose": "^8.5.0",
    "@react-three/fiber": "^8.16.0",
    "@react-three/drei": "^9.105.0",
    "three": "^0.164.0",
    "gsap": "^3.12.5",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/react": "^18.3.0",
    "@types/three": "^0.164.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0"
  }
}
```

---

## 10. IMPLEMENTATION ORDER (MVP)

Execute in this exact order to build incrementally:

### Phase 1 — Scaffold
1. `npx create-next-app@latest novapay --typescript --tailwind --eslint --app --src-dir`
2. Install all dependencies from Section 9
3. Set up folder structure from Section 2 (create all directories and placeholder files)
4. Configure `tailwind.config.ts` with the design system from Section 4
5. Configure `next.config.ts` with next-intl plugin
6. Set up i18n: `config.ts`, `request.ts`, `routing.ts`, `middleware.ts`
7. Create `en.json` translation file (full content from Section 3.2)

### Phase 2 — Layout & Navigation
8. Build `globals.css` with Tailwind directives, CSS custom properties, grain overlay
9. Build `Container.tsx`, `Button.tsx`, `Badge.tsx`, `GradientText.tsx`
10. Build `Header.tsx` with nav, locale switcher, mobile menu
11. Build `Footer.tsx` with links grid, newsletter form, socials
12. Build `[locale]/layout.tsx` with fonts, metadata, Header + Footer wrapping children

### Phase 3 — Animation System
13. Build `useGsap.ts` custom hook (registers ScrollTrigger, handles cleanup)
14. Build `ScrollReveal.tsx` — reusable GSAP scroll-triggered wrapper
15. Build `TextReveal.tsx` — split-text animation component
16. Build `CountUp.tsx` — animated number counter
17. Build `MagneticButton.tsx` — magnetic hover effect

### Phase 4 — Three.js Components
18. Build `SceneWrapper.tsx` — Canvas + Suspense + mobile fallback
19. Build `CreditCard3D.tsx` — animated card model with mouse-follow
20. Build `ParticleField.tsx` — background particles

### Phase 5 — Landing Sections
21. Build `HeroSection.tsx` — integrate 3D scene + GSAP text reveal + stats
22. Build `LogoCarousel.tsx` — infinite scroll ticker
23. Build `FeaturesSection.tsx` — bento grid with ScrollReveal
24. Build `HowItWorks.tsx` — 3-step process
25. Build `RatesPreview.tsx` — pricing cards
26. Build `TestimonialsSection.tsx` — carousel
27. Build `FAQSection.tsx` — accordion
28. Build `CTASection.tsx` — final CTA with parallax background
29. Assemble all sections in `[locale]/page.tsx`

### Phase 6 — Backend & Forms
30. Set up MongoDB connection (`mongoose.ts`)
31. Create Mongoose models (Contact, Waitlist, BlogPost)
32. Build API routes (`/api/contact`, `/api/waitlist`)
33. Wire contact form and newsletter form to API routes

### Phase 7 — SEO & Polish
34. Add `generateMetadata()` to all pages
35. Add JSON-LD structured data to layout
36. Create `sitemap.ts` and `robots.ts` in app root
37. Performance audit: optimize images, lazy-load below-fold, check Lighthouse
38. Cross-browser testing and responsive QA

---

## 11. KEY IMPLEMENTATION RULES

1. **Every text string** visible to the user must come from the translation JSON via `useTranslations()` — never hardcode strings in components.
2. **"use client"** directive only on components that need it (Three.js, GSAP, interactive UI). Keep page-level components as Server Components when possible.
3. **Three.js scenes** must be wrapped in `dynamic(() => import(...), { ssr: false })` to prevent SSR errors.
4. **GSAP** — always clean up in `useEffect` return / `useGsap` hook cleanup. Use `gsap.context()` for scope.
5. **Images** — use `next/image` with explicit `width`/`height` or `fill` + `sizes`. Always add `alt`.
6. **Links** — use `next-intl`'s `Link` component for locale-aware routing.
7. **Mobile-first** — write Tailwind classes mobile-first, then add `md:` and `lg:` variants.
8. **Accessibility** — all interactive elements have focus states, proper `aria-` labels, keyboard navigation support.
9. **Performance** — no layout shift (CLS). Reserve space for async-loaded content. Use `font-display: swap`.
10. **Git** — commit after each phase. Use conventional commits: `feat:`, `fix:`, `chore:`, `style:`.

---

## 12. EXAMPLE: HOMEPAGE ASSEMBLY

```tsx
// src/app/[locale]/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RatesPreview } from "@/components/sections/RatesPreview";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LogoCarousel />
      <FeaturesSection />
      <HowItWorks />
      <RatesPreview />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
```

---

**END OF PROMPT — Hand this entire document to an AI coding agent to scaffold and build the complete project.**