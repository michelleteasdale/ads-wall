<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js" alt="Three.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
</p>

<h1 align="center">Cardium</h1>

<p align="center">
  <strong>Your cards. Your rules.</strong><br/>
  A premium fintech landing page for a virtual card issuing platform built for media buyers and digital marketers.
</p>

<p align="center">
  <a href="#features">Features</a> &bull;
  <a href="#tech-stack">Tech Stack</a> &bull;
  <a href="#getting-started">Getting Started</a> &bull;
  <a href="#project-structure">Project Structure</a> &bull;
  <a href="#internationalization">i18n</a> &bull;
  <a href="#license">License</a>
</p>

---

## Features

- **3D Interactive Credit Card** — Realistic floating card rendered with Three.js (react-three-fiber + drei), with mouse parallax and holographic shimmer effect
- **GSAP-Powered Animations** — Scroll-triggered reveals, text split animations, parallax layers, magnetic buttons, and animated counters
- **13 Landing Sections** — Hero, Logo Carousel, Features, How It Works, Stats, Benefits, Integrations, Comparison, Rates/Pricing, Security, Testimonials, FAQ, and CTA
- **Internationalization** — Full i18n support via next-intl with English, Ukrainian, and Spanish translations
- **Premium Design System** — Light theme with Satoshi + JetBrains Mono typography, gradient mesh backgrounds, blue-tinted shadows, and HeroUI-inspired components
- **Mobile-First Responsive** — Pixel-perfect across all breakpoints (320px to 2560px) with CSS card fallback on mobile
- **SEO Optimized** — Dynamic metadata, JSON-LD structured data, sitemap, robots.txt, and Open Graph tags
- **MongoDB Backend** — Contact form and waitlist API routes with Mongoose ODM

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| 3D Graphics | Three.js, @react-three/fiber, @react-three/drei |
| Animations | GSAP 3 with ScrollTrigger |
| i18n | next-intl 4 |
| Database | MongoDB with Mongoose 9 |
| Icons | Lucide React, React Icons |
| Fonts | Satoshi (self-hosted), JetBrains Mono |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- MongoDB instance (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/yaroslav-tsarenko/cardium.git
cd cardium

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your MONGODB_URI and NEXT_PUBLIC_SITE_URL
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en` by default.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # i18n dynamic routes (en, uk, es)
│   │   ├── layout.tsx     # Root layout with fonts, metadata, providers
│   │   ├── page.tsx       # Homepage — assembles all sections
│   │   ├── rates/         # Pricing page
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact form page
│   │   └── blog/          # Blog listing + [slug] pages
│   ├── api/               # API routes (contact, waitlist, blog)
│   └── globals.css        # Tailwind directives + custom properties
│
├── components/
│   ├── sections/          # 13 landing page sections
│   ├── layout/            # Header, Footer, MobileMenu, Container
│   ├── three/             # CreditCard3D, ParticleField, SceneWrapper
│   ├── animations/        # ScrollReveal, TextReveal, CountUp, etc.
│   └── ui/                # Button, Badge, Card, Input, Modal, etc.
│
├── i18n/                  # next-intl configuration
├── messages/              # Translation JSON files (en, uk, es)
├── lib/                   # DB connection, models, utilities, hooks
└── styles/                # Font loader configuration
```

## Internationalization

Cardium supports three languages out of the box:

| Language | Code | URL |
|---|---|---|
| English | `en` | `/en` |
| Ukrainian | `uk` | `/uk` |
| Spanish | `es` | `/es` |

To add a new language, create a translation file in `src/messages/`, add the locale code to `src/i18n/config.ts`, and it will be automatically available.

## Design Highlights

- **Color Palette** — Royal blue (#2563EB) primary with violet and cyan accents on a clean white background
- **Typography** — Satoshi for headings and body, JetBrains Mono for stats and pricing numbers
- **Shadows** — Blue-tinted elevation system for a cohesive premium feel
- **Gradients** — Hero mesh backgrounds with soft blurred blobs, gradient CTAs, and holographic card effects
- **Motion** — Every section reveals on scroll with GSAP; the 3D card responds to mouse movement

## Deploy on Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yaroslav-tsarenko/cardium)

## License

This project is proprietary. All rights reserved.

---

<p align="center">
  Built with Next.js, Three.js, and GSAP
</p>
