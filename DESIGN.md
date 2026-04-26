# DESIGN PROMPT — Cardium Homepage (Light Theme, Premium Fintech)

> **Context**: The project structure, i18n, MongoDB, and architecture are already built (see PROJECT_PROMPT.md). This prompt is **purely about visual design** — colors, typography, layout composition, component styling, card design, illustrations, and overall aesthetic direction. Apply these design decisions across all existing components.

---

## 1. BRAND IDENTITY

**Name**: Cardium
**Tagline**: "Your cards. Your rules."
**Industry**: Virtual card issuing for media buyers (Google Ads, Bing Ads, Meta Ads, TikTok Ads, Snapchat Ads, Pinterest Ads)
**Personality**: Trustworthy, modern, clean, professional yet approachable — like a premium bank that speaks the language of digital marketers.

---

## 2. THEME DIRECTION — LIGHT & VIBRANT

This is a **light-mode-first** website. No dark backgrounds. Think Stripe's clarity meets Linear's polish meets Mercury's trustworthiness.

### 2.1 Color Palette

```
── BACKGROUNDS ──────────────────────────────────────
Page Background:        #FFFFFF (pure white)
Section Alt Background: #F6F8FC (ice blue tint — alternating sections)
Card Background:        #FFFFFF (white with subtle shadow)
Card Background Hover:  #F0F4FF (soft blue wash on hover)
Elevated Surface:       #FFFFFF (with shadow, not color change)

── PRIMARY BRAND ────────────────────────────────────
Primary 500:            #2563EB (royal blue — main brand color)
Primary 600:            #1D4ED8 (hover state)
Primary 700:            #1E40AF (active/pressed state)
Primary 100:            #DBEAFE (light blue tint for badges, tags)
Primary 50:             #EFF6FF (very subtle blue wash backgrounds)

── SECONDARY / ACCENT ──────────────────────────────
Accent Violet:          #7C3AED (for gradient pairings, premium feel)
Accent Cyan:            #06B6D4 (for data visualizations, secondary CTAs)
Accent Emerald:         #10B981 (success states, positive metrics)
Accent Amber:           #F59E0B (warnings, highlights)
Accent Rose:            #F43F5E (error states, urgent badges)

── GRADIENTS (hero, CTAs, card designs) ─────────────
Hero Gradient:          linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%)
Card Shine Gradient:    linear-gradient(135deg, #3B82F6 0%, #8B5CF6 40%, #06B6D4 100%)
CTA Button Gradient:    linear-gradient(90deg, #2563EB 0%, #7C3AED 100%)
Mesh Background:        Soft blurred blobs of #DBEAFE, #EDE9FE, #CFFAFE overlapping on white

── TEXT ─────────────────────────────────────────────
Text Primary:           #0F172A (slate-900 — near-black, warm)
Text Secondary:         #475569 (slate-600)
Text Tertiary:          #94A3B8 (slate-400 — captions, footnotes)
Text On Primary:        #FFFFFF (white text on blue buttons)
Text Link:              #2563EB (primary blue, underline on hover)

── BORDERS & DIVIDERS ──────────────────────────────
Border Default:         #E2E8F0 (slate-200)
Border Subtle:          #F1F5F9 (slate-100)
Border Focus Ring:      #2563EB with 3px offset (accessibility)
```

### 2.2 Gradient Mesh Background (Hero / CTA sections)
Instead of flat color, use **soft blurred gradient blobs** positioned absolutely behind content:
- Blob 1: `#DBEAFE` (blue-100), 600px circle, top-left, blur 120px, opacity 0.6
- Blob 2: `#EDE9FE` (violet-100), 500px circle, top-right, blur 100px, opacity 0.5
- Blob 3: `#CFFAFE` (cyan-100), 400px circle, bottom-center, blur 80px, opacity 0.4

This creates a subtle, living, premium feel without being distracting.

---

## 3. TYPOGRAPHY

### 3.1 Font Stack
Use **one premium font family** with excellent weight range:

- **Primary Font**: `"Satoshi"` from Fontshare (https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,800,900&display=swap)
    - If Satoshi unavailable, fallback: `"General Sans"` from Fontshare, or `"DM Sans"` from Google Fonts
- **Monospace** (for stats, pricing numbers, code): `"JetBrains Mono"` from Google Fonts (weights 400, 500, 600)

> **WHY Satoshi**: It has geometric clarity like Inter but with more personality — slightly rounded terminals, wider letterforms, distinctive "a" and "g". It looks premium without being generic.

### 3.2 Type Scale
```
Hero H1:          64px / 68px line-height / weight 800 / letter-spacing -0.03em   (mobile: 40px)
Section H2:       48px / 54px / weight 700 / letter-spacing -0.025em              (mobile: 32px)
Card H3:          24px / 32px / weight 600 / letter-spacing -0.01em               (mobile: 20px)
Body Large:       18px / 28px / weight 400                                        (mobile: 16px)
Body:             16px / 26px / weight 400
Body Small:       14px / 22px / weight 400
Caption:          12px / 18px / weight 500 / letter-spacing 0.05em / uppercase
Stat Number:      56px / 60px / weight 700 / font: JetBrains Mono                (mobile: 36px)
Price:            40px / 44px / weight 700 / font: JetBrains Mono
```

### 3.3 Typography Rules
- Headlines: `text-slate-900` (#0F172A) — strong contrast on white
- Body: `text-slate-600` (#475569) — softer, easy to read
- Section tags / labels: `text-primary-500 uppercase tracking-widest text-xs font-semibold` — small blue pill or label above every section title
- Stat numbers: Use `JetBrains Mono` for a technical, precise feel
- Max line width for body text: `max-w-2xl` (672px) for readability

---

## 4. UI COMPONENT LIBRARY — HeroUI (NextUI v2)

Use **HeroUI** (https://heroui.com, formerly NextUI) as the base component library. Import and customize these components:

### 4.1 Setup
```bash
npm install @heroui/react framer-motion
```

Configure the HeroUI provider in `[locale]/layout.tsx` and add the plugin to `tailwind.config.ts`:
```ts
// tailwind.config.ts
const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    // ...
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: { DEFAULT: "#2563EB", 50: "#EFF6FF", 100: "#DBEAFE", 500: "#2563EB", 600: "#1D4ED8", 700: "#1E40AF" },
            secondary: { DEFAULT: "#7C3AED" },
            success: { DEFAULT: "#10B981" },
          }
        }
      }
    })
  ],
};
```

### 4.2 Components to Use from HeroUI
| Component | Where Used | Customization |
|---|---|---|
| `Button` | CTAs, forms | Gradient variant for primary CTA, outlined for secondary |
| `Card, CardBody, CardHeader` | Feature cards, pricing cards, testimonials | Override with custom shadows, rounded-2xl |
| `Input` | Contact form, newsletter | Custom focus ring color (primary-500) |
| `Tabs` | Rates page (monthly/yearly toggle) | Pill-style tabs with primary color |
| `Accordion, AccordionItem` | FAQ section | Clean borders, smooth animation |
| `Badge` | Section labels, pricing tier badges | Primary-100 bg with primary-600 text |
| `Dropdown` | Locale switcher | Compact, with flag icons |
| `Modal` | Waitlist signup, video player | Backdrop blur |
| `Tooltip` | Feature explanations, info icons | Dark tooltip on light theme |
| `Navbar, NavbarContent, NavbarItem` | Header | Transparent → white with shadow on scroll |
| `Divider` | Section separators | Subtle slate-200 |
| `Chip` | Tags, status indicators | Colored variants per category |
| `Skeleton` | Loading states for 3D content | Match card dimensions |
| `Link` | Navigation, footer | Primary blue, no underline default, underline on hover |

### 4.3 HeroUI Customization Principles
- **Radius**: Override default to `rounded-2xl` (16px) for cards, `rounded-xl` (12px) for buttons, `rounded-full` for badges/chips
- **Shadows**: Use custom shadows instead of HeroUI defaults: `shadow-[0_4px_24px_rgba(37,99,235,0.08)]` for blue-tinted shadows
- **Transitions**: All hover states should use `transition-all duration-300 ease-out`
- **Focus states**: Visible focus ring using `ring-2 ring-primary-500 ring-offset-2`

---

## 5. VIRTUAL CARD DESIGN

The hero section features a **realistic virtual card** that visually represents what Cardium issues. This card is rendered both as a **3D element** (Three.js) and as a **CSS card** (fallback on mobile).

### 5.1 Card Visual Design (CSS version + reference for 3D texture)
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   CARDIUM                               ∞               │
│                                                         │
│                                                         │
│                                                         │
│   ● ● ● ●                                              │
│                                                         │
│   4562  ••••  ••••  7834                                │
│                                                         │
│   CARDHOLDER NAME                   VALID THRU          │
│   Media Buyer Pro                   12/28               │
│                                                         │
│                                          VISA           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 5.2 Card Styling
- **Dimensions**: 430px × 270px (standard card ratio 85.6mm × 53.98mm = ~1.586:1)
- **Background**: `linear-gradient(135deg, #1E3A8A 0%, #3B82F6 40%, #7C3AED 80%, #06B6D4 100%)` — deep blue to violet to cyan
- **Card surface**: Add subtle holographic shimmer effect (CSS animation or Three.js shader)
- **Chip icon**: Small golden rounded rectangle (EMV chip)
- **NFC icon**: Contactless payment waves in top-right (white, opacity 0.4)
- **Card number**: `font-family: "JetBrains Mono"; font-size: 20px; letter-spacing: 0.15em; color: white`
- **Labels** (cardholder, valid thru): `font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.5)`
- **Values** (name, date): `font-size: 14px; color: white; font-weight: 500`
- **Visa logo**: Bottom-right, white, semi-transparent
- **Cardium logo**: Top-left, white, `font-weight: 700; font-size: 18px; letter-spacing: 0.05em`
- **Border-radius**: `20px`
- **Shadow**: `0 25px 60px rgba(30, 58, 138, 0.3), 0 10px 20px rgba(0,0,0,0.1)` — dramatic blue-tinted shadow

### 5.3 Card Holographic Effect (CSS)
```css
.card-holo::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    125deg,
    transparent 0%,
    rgba(255,255,255,0.05) 30%,
    rgba(255,255,255,0.15) 50%,
    rgba(255,255,255,0.05) 70%,
    transparent 100%
  );
  animation: holo-shift 6s ease-in-out infinite;
}

@keyframes holo-shift {
  0%, 100% { transform: translateX(-100%) rotate(15deg); }
  50% { transform: translateX(100%) rotate(15deg); }
}
```

### 5.4 Three.js 3D Card
- Model the card as a rounded `BoxGeometry` with the gradient texture mapped to the front face
- Add subtle environment reflection (drei's `<Environment>` with "city" preset)
- Card floats and rotates gently: `rotation.y` oscillates ±15° over 6s, `position.y` floats ±10px over 4s
- Mouse parallax: card tilts slightly toward cursor position
- On mobile (< 768px): disable Three.js, show the CSS card with a subtle CSS `perspective` tilt on device orientation or touch

### 5.5 Multiple Card Stack
Behind the main card, show 2-3 additional cards at slight offsets to suggest "unlimited cards":
- Card 2: rotated -5°, translated 20px left + 10px down, opacity 0.7, slightly blurred
- Card 3: rotated -10°, translated 40px left + 20px down, opacity 0.4, more blurred
- Creates a "deck of cards" layering effect

---

## 6. PAGE LAYOUT — SECTION-BY-SECTION DESIGN

### 6.1 HEADER / NAVBAR
- **Height**: 72px
- **Background**: transparent initially → `bg-white/80 backdrop-blur-xl shadow-sm` after 50px scroll
- **Logo**: "Cardium" wordmark in `Satoshi` bold 700, 22px, `text-slate-900`. Consider a small geometric icon (abstract "C" made of card shapes) to the left in primary blue
- **Nav Links**: `text-slate-600 hover:text-primary-500`, font-weight 500, 15px
- **Locale Switcher**: Small dropdown with country flag + language code (EN ▼)
- **CTA Buttons**: "Sign In" as ghost/text button, "Get Started" as solid primary gradient button with `rounded-xl px-6 py-2.5`
- **Mobile**: Hamburger icon → full-screen overlay with staggered GSAP link reveals
- **Separator**: 1px `border-b border-slate-100` when scrolled

### 6.2 HERO SECTION
**Layout**: Split — text content left (55%), 3D card scene right (45%)
**Min-height**: `min-h-[90vh]`
**Background**: White with gradient mesh blobs (see Section 2.2)

**Left Side (top to bottom)**:
1. **Badge/Chip**: Small pill — `bg-primary-50 text-primary-600 border border-primary-200 rounded-full px-4 py-1.5 text-sm font-medium` — text: "🎉 Trusted by 10,000+ media buyers"
2. **Headline H1**: Two lines:
    - Line 1: "Your Ad Spend," in `text-slate-900`
    - Line 2: "**Supercharged**" in gradient text (`bg-gradient-to-r from-primary-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent`)
    - 64px, weight 800, tight leading
3. **Subtitle**: "Issue unlimited virtual Visa cards in seconds. Built for Google Ads, Meta, TikTok, and every ad platform. Fund with crypto, pay everywhere." — `text-slate-500 text-lg max-w-lg`
4. **CTA Row**: Two buttons side by side:
    - Primary: "Start Free →" — gradient button (`bg-gradient-to-r from-primary-500 to-violet-500`), white text, `rounded-xl px-8 py-3.5 text-base font-semibold shadow-lg shadow-primary-500/20`
    - Secondary: "View Pricing" — `border border-slate-200 text-slate-700 rounded-xl px-8 py-3.5 hover:bg-slate-50`
5. **Social Proof Row**: Small avatars overlapping (4-5 circles) + "Join 10,000+ buyers" + star rating ★★★★★ 4.9

**Right Side**:
- Three.js 3D card scene with card stack (see Section 5)
- Floating micro-elements around the card: small icons of Google Ads, Meta, TikTok logos as semi-transparent pills orbiting gently (GSAP float animation)

**GSAP Animation on Load** (timeline):
1. Badge fades up (0.3s delay)
2. Headline words reveal one by one (stagger 0.05s per word)
3. Subtitle fades up (0.2s after headline)
4. CTA buttons slide up (stagger 0.1s)
5. Social proof row fades up
6. 3D card scene fades in with scale from 0.8 → 1 (0.8s, ease: power3.out)

### 6.3 LOGO CAROUSEL (Trusted By)
- **Background**: `bg-slate-50/50` or transparent
- **Label**: "Trusted by teams at" — centered, `text-slate-400 text-sm uppercase tracking-widest`
- **Logos**: Google Ads, Meta Ads, TikTok Ads, Amazon Ads, Bing Ads, Snapchat Ads, Pinterest Ads, Twitter Ads — rendered as **grayscale SVG icons**, opacity 0.4, `hover:opacity-1 hover:grayscale-0` transition
- **Animation**: Infinite horizontal scroll (CSS `@keyframes` or GSAP), pauses on hover
- **Height**: ~100px section, compact

### 6.4 FEATURES SECTION
- **Background**: White
- **Section Tag**: Blue chip — "✦ Features"
- **Title**: "Everything you need to scale" — `text-slate-900 text-4xl font-bold text-center`
- **Subtitle**: "A complete card infrastructure for modern marketing teams" — `text-slate-500 text-center max-w-2xl mx-auto`

**Layout**: 3-column grid on desktop, 1-column on mobile. 6 feature cards total.

**Feature Card Design**:
- `bg-white rounded-2xl border border-slate-100 p-8 hover:border-primary-200 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-300`
- **Icon**: 48px, inside a `w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center` — icon color `text-primary-500`
- **Title**: `text-slate-900 text-xl font-semibold mt-5`
- **Description**: `text-slate-500 text-base mt-3 leading-relaxed`
- Use Lucide icons: `CreditCard`, `Coins`, `Users`, `Code2`, `BarChart3`, `ShieldCheck`

**GSAP**: Cards stagger-reveal on scroll (fade up + translateY 30px → 0), 0.15s between each card.

### 6.5 HOW IT WORKS
- **Background**: `bg-gradient-to-b from-slate-50 to-white`
- **Section Tag**: "How It Works"
- **Title**: "Get started in minutes"

**Layout**: 3 steps in a horizontal row (desktop), vertical stack (mobile), connected by a dashed line or gradient line between step numbers.

**Step Card**:
- Step number: large `text-6xl font-bold text-primary-100` (watermark behind)
- Icon circle: `w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-violet-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/20`
- Title: `text-slate-900 text-xl font-semibold`
- Description: `text-slate-500 text-base`

**Connecting line**: A horizontal dashed line (`border-dashed border-primary-200`) connecting the three steps, with small gradient dots at each junction.

**GSAP**: Steps reveal sequentially left-to-right with the connecting line drawing itself (SVG stroke animation or width expansion).

### 6.6 RATES / PRICING PREVIEW
- **Background**: White
- **Section Tag**: "Pricing"
- **Title**: "Simple, transparent pricing"
- **Subtitle**: "No hidden fees. No surprises."

**Layout**: 3 pricing cards side by side.

**Card Design**:
- Standard cards: `bg-white rounded-2xl border border-slate-200 p-8`
- **Featured card (Pro)**: `bg-gradient-to-br from-primary-500 to-violet-600 text-white rounded-2xl p-8 scale-105 shadow-2xl shadow-primary-500/25` — with a "Most Popular" badge on top
- Tier name: `font-semibold text-lg`
- Price: `text-5xl font-bold font-mono` (JetBrains Mono) + "/mo" suffix in small text
- Feature list: checkmarks in `text-emerald-500` (or white for featured card), features in regular text
- CTA button at bottom of each card

**Tiers**:
1. **Starter** — $0/mo — 5 cards, basic analytics, email support
2. **Pro** — $49/mo — Unlimited cards, advanced analytics, priority support, API access, team seats (FEATURED)
3. **Enterprise** — Custom — Unlimited everything, dedicated manager, custom BINs, SLA

### 6.7 SECURITY / TRUST SECTION
- **Background**: `bg-slate-50`
- Large centered illustration or icon composition showing security elements
- **Title**: "Enterprise-grade security"
- **Trust items** in a 4-column grid: PCI DSS Compliant, 3DS Authentication, 256-bit Encryption, SOC 2 Type II
- Each item: icon + label, clean and minimal
- Optional: a large shield/lock illustration (SVG) in the center background, very subtle opacity

### 6.8 TESTIMONIALS
- **Background**: White
- **Section Tag**: "What buyers say"
- **Title**: "Trusted by performance marketers"

**Design**: Horizontal carousel (3 visible on desktop, 1 on mobile) with navigation arrows and dots.

**Testimonial Card**:
- `bg-white rounded-2xl border border-slate-100 p-8 shadow-sm`
- Quote text: `text-slate-700 text-base italic leading-relaxed` — with a large `"` decorative quote mark in `text-primary-100` behind
- Avatar: `w-12 h-12 rounded-full`
- Name: `text-slate-900 font-semibold`
- Role: `text-slate-400 text-sm`
- Company logo or name
- Star rating: ★★★★★ in `text-amber-400`

### 6.9 FAQ SECTION
- **Background**: White or `bg-slate-50`
- **Layout**: Centered column, `max-w-3xl mx-auto`
- **Section Tag**: "FAQ"
- **Title**: "Got questions?"

**Accordion Item (HeroUI Accordion)**:
- Clean border-bottom dividers
- Question: `text-slate-900 font-semibold text-lg`
- Answer: `text-slate-500 text-base leading-relaxed`
- Toggle icon: `ChevronDown` that rotates 180° on open
- Smooth height animation (built into HeroUI)

### 6.10 CTA SECTION (Final)
- **Background**: Full-width gradient — `bg-gradient-to-r from-primary-600 via-violet-600 to-primary-700` with subtle dot-grid pattern overlay (white dots, opacity 0.05)
- **Content**: Centered
- **Title**: "Ready to supercharge your ad spend?" — white, `text-4xl font-bold`
- **Subtitle**: "Join thousands of media buyers scaling with Cardium." — `text-white/80`
- **CTA Button**: White button on gradient background — `bg-white text-primary-600 font-semibold rounded-xl px-10 py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all`
- **Floating elements**: Semi-transparent card shapes floating/rotating in the background (GSAP)
- **GSAP**: Section fades in with slight parallax on the background gradient

### 6.11 FOOTER
- **Background**: `bg-slate-900` (dark contrast footer — this is the ONE dark element)
- **Text**: `text-slate-400` for body, `text-white` for headings
- **Layout**: 4-column grid — About / Products / Company / Newsletter
- **Logo**: "Cardium" in white
- **Newsletter input**: `bg-slate-800 border-slate-700 text-white` with blue submit button
- **Social icons**: GitHub, Twitter/X, LinkedIn, Discord — `text-slate-500 hover:text-white`
- **Bottom bar**: Copyright + legal links, separated by `border-t border-slate-800`
- **Accent**: Small gradient line at the very top of the footer (2px, primary gradient)

---

## 7. SHADOWS & ELEVATION SYSTEM

```
shadow-card:     0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)
shadow-card-hover: 0 8px 30px rgba(37, 99, 235, 0.08), 0 2px 8px rgba(0,0,0,0.04)
shadow-button:   0 4px 14px rgba(37, 99, 235, 0.25)
shadow-card-3d:  0 25px 60px rgba(30, 58, 138, 0.3), 0 10px 20px rgba(0,0,0,0.1)
shadow-navbar:   0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)
```

All shadows have a slight **blue tint** (using primary color at low opacity) to maintain color consistency.

---

## 8. RESPONSIVE BREAKPOINTS (Tailwind defaults)

| Breakpoint | Width | Layout Changes |
|---|---|---|
| Base (mobile) | < 640px | Single column, stacked everything, hamburger menu, CSS card (no 3D) |
| `sm` | 640px | Minor spacing adjustments |
| `md` | 768px | 2-column grids, 3D scene enabled, side-by-side hero |
| `lg` | 1024px | Full desktop layout, 3-column grids |
| `xl` | 1280px | Max container width, generous whitespace |
| `2xl` | 1536px | Constrained center content, extra breathing room |

**Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Mobile-Specific Rules:
- Hero: Stack vertically — text on top, card below (smaller, CSS-only)
- Feature cards: Single column with slightly reduced padding
- Pricing cards: Horizontal scroll or stack vertically with featured card on top
- Testimonials: Single card visible, swipe to navigate
- All text sizes reduce by ~20-30% (see type scale mobile values)
- Touch targets minimum 44px × 44px
- No hover effects on mobile — rely on tap states

---

## 9. MICRO-INTERACTIONS & MOTION

### 9.1 GSAP Guidelines
- **Easing**: Use `power3.out` for enters, `power2.inOut` for state changes, `elastic.out(1, 0.5)` for playful bounces (e.g., badge pop-in)
- **Duration**: 0.5–0.8s for reveals, 0.3s for hover states, 2s for counting animations
- **ScrollTrigger start**: `"top 85%"` for most elements (trigger when 85% from viewport top)
- **Stagger**: 0.1–0.15s between sibling elements

### 9.2 Hover Effects
- **Cards**: translateY -4px + shadow expansion + border color change — `transition-all duration-300`
- **Buttons (primary)**: Scale 1.02 + shadow increase — `hover:scale-[1.02] hover:shadow-lg`
- **Buttons (secondary)**: Background fill from transparent to slate-50
- **Links**: Color change + underline slides in from left (`::after` pseudo-element)
- **Nav items**: Color change to primary-500 with subtle weight change

### 9.3 Scroll-Based
- **Parallax**: Hero gradient blobs move at 0.5x scroll speed (GSAP ScrollTrigger with `scrub: true`)
- **Counter animation**: Stats count from 0 to value over 2s when scrolled into view
- **Section reveals**: Each section fades up 30px with 0.7s duration as it enters viewport
- **Card stack in hero**: Cards spread slightly as user scrolls past hero (subtle, 50px max)

### 9.4 Loading & Transitions
- **Page load**: Smooth fade-in of entire page (0.3s)
- **3D scene**: Skeleton placeholder → fade in when loaded
- **Images**: Blur-up placeholder technique (Next.js built-in with `placeholder="blur"`)
- **Route transitions**: Subtle fade between pages (use `framer-motion` AnimatePresence, since it's already a HeroUI dependency)

---

## 10. ILLUSTRATIONS & VISUAL ASSETS

### 10.1 Icon Style
- Use **Lucide React** consistently — `strokeWidth={1.5}` for a refined, lighter feel
- Icon color inside feature cards: `text-primary-500` on `bg-primary-50` backgrounds
- Size: 24px for inline, 28-32px for card headers, 20px for navigation

### 10.2 Decorative Elements
- **Dot grid pattern**: `radial-gradient(circle, #E2E8F0 1px, transparent 1px)` — size 24px — for CTA section background
- **Gradient orbs**: Soft blurred circles of primary/violet/cyan colors — for hero and CTA backgrounds
- **Abstract card shapes**: Semi-transparent, rotated card outlines floating in backgrounds — GSAP animated
- **Geometric shapes**: Small circles, rounded squares, and lines in `primary-200` scattered decoratively near section titles

### 10.3 Platform Icons (Logo Carousel)
- Google Ads, Meta (Facebook), TikTok, Bing/Microsoft Ads, Amazon Ads, Snapchat, Pinterest, X/Twitter
- Render as clean SVG, monochrome (slate-400), `hover:` full color
- Height: 28-32px, maintaining original proportions

### 10.4 No Stock Photos
- Do NOT use stock photography anywhere
- All visual interest comes from: 3D card scene, gradient meshes, geometric patterns, icons, typography, and whitespace
- This keeps the site fast, unique, and professional

---

## 11. TAILWIND CONFIG EXTENSIONS

Add these to `tailwind.config.ts` `extend` block:

```ts
extend: {
  colors: {
    primary: { 50: "#EFF6FF", 100: "#DBEAFE", 200: "#BFDBFE", 300: "#93C5FD", 400: "#60A5FA", 500: "#2563EB", 600: "#1D4ED8", 700: "#1E40AF", 800: "#1E3A8A", 900: "#172554" },
    // ... HeroUI handles the rest
  },
  fontFamily: {
    sans: ["Satoshi", "system-ui", "sans-serif"],
    mono: ["JetBrains Mono", "monospace"],
  },
  boxShadow: {
    card: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
    "card-hover": "0 8px 30px rgba(37,99,235,0.08), 0 2px 8px rgba(0,0,0,0.04)",
    "card-3d": "0 25px 60px rgba(30,58,138,0.3), 0 10px 20px rgba(0,0,0,0.1)",
    button: "0 4px 14px rgba(37,99,235,0.25)",
    navbar: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
  },
  animation: {
    "holo-shift": "holo-shift 6s ease-in-out infinite",
    "gradient-shift": "gradient-shift 8s ease infinite",
    "float": "float 6s ease-in-out infinite",
    "float-delayed": "float 6s ease-in-out 2s infinite",
    "ticker": "ticker 30s linear infinite",
  },
  keyframes: {
    "holo-shift": { "0%,100%": { transform: "translateX(-100%) rotate(15deg)" }, "50%": { transform: "translateX(100%) rotate(15deg)" } },
    "gradient-shift": { "0%,100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
    "float": { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
    "ticker": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
  },
}
```

---

## 12. DESIGN CHECKLIST (QA)

Before considering the design complete, verify:

- [ ] All text comes from i18n translation files (no hardcoded strings)
- [ ] Light theme throughout (only footer is dark)
- [ ] Primary blue (#2563EB) is the dominant accent color
- [ ] Gradient text used on hero headline keyword
- [ ] 3D card renders on desktop, CSS card on mobile
- [ ] All interactive elements have visible hover AND focus states
- [ ] Blue-tinted shadows used consistently (not gray/black shadows)
- [ ] Satoshi font loaded and rendering for all text
- [ ] JetBrains Mono used for all numbers/stats/prices
- [ ] GSAP scroll animations fire correctly on all sections
- [ ] Mobile layout is clean, readable, touch-friendly
- [ ] Section spacing is generous: `py-24 lg:py-32` between sections
- [ ] Maximum content width constrained to ~1280px
- [ ] Gradient mesh blobs visible but subtle in hero
- [ ] Logo carousel auto-scrolls, pauses on hover
- [ ] All HeroUI components styled to match the design system
- [ ] No layout shift (CLS) — reserve space for async content
- [ ] Color contrast passes WCAG AA for all text
- [ ] Page feels premium, clean, and trustworthy — not generic

---

**END OF DESIGN PROMPT — Apply these specifications to the existing project structure from PROJECT_PROMPT.md.**