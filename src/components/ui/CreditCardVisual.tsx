"use client";

import { useEffect, useState, useCallback } from "react";

interface CardConfig {
  id: string;
  platform: string;
  gradient: [string, string, string, string];
  balance: string;
  last4: string;
}

const cards: CardConfig[] = [
  {
    id: "google",
    platform: "Google Ads",
    gradient: ["#1E3A8A", "#2563EB", "#4285F4", "#34A853"],
    balance: "$1,250.00",
    last4: "7834",
  },
  {
    id: "bing",
    platform: "Bing Ads",
    gradient: ["#0C2340", "#00809D", "#008373", "#00A4EF"],
    balance: "$320.00",
    last4: "4291",
  },
  {
    id: "meta",
    platform: "Meta Ads",
    gradient: ["#1E3A8A", "#4F46E5", "#7C3AED", "#06B6D4"],
    balance: "$780.50",
    last4: "5618",
  },
];

function GoogleAdsLogo() {
  return (
    <g transform="translate(340, 22)">
      <text fill="white" fontSize="11" fontWeight="600" fontFamily="var(--font-sans)" opacity="0.9" textAnchor="end" x="62" y="12">
        Google Ads
      </text>
      <g transform="translate(66, 0)" opacity="0.9">
        <circle cx="7" cy="6" r="5" fill="#4285F4" />
        <circle cx="19" cy="6" r="5" fill="#EA4335" />
        <circle cx="13" cy="14" r="5" fill="#FBBC04" />
      </g>
    </g>
  );
}

function BingAdsLogo() {
  return (
    <g transform="translate(340, 22)">
      <text fill="white" fontSize="11" fontWeight="600" fontFamily="var(--font-sans)" opacity="0.9" textAnchor="end" x="62" y="12">
        Bing Ads
      </text>
      <g transform="translate(66, -1)" opacity="0.9">
        <rect x="0" y="0" width="7" height="7" rx="1" fill="#F25022" />
        <rect x="8.5" y="0" width="7" height="7" rx="1" fill="#7FBA00" />
        <rect x="0" y="8.5" width="7" height="7" rx="1" fill="#00A4EF" />
        <rect x="8.5" y="8.5" width="7" height="7" rx="1" fill="#FFB900" />
      </g>
    </g>
  );
}

function MetaAdsLogo() {
  return (
    <g transform="translate(340, 22)">
      <text fill="white" fontSize="11" fontWeight="600" fontFamily="var(--font-sans)" opacity="0.9" textAnchor="end" x="62" y="12">
        Meta Ads
      </text>
      <g transform="translate(68, -1)" opacity="0.9">
        <path d="M3 8.5C3 5.5 4.2 3 6 3c1.2 0 2 1.2 3.2 3.5L10.5 9l1.3-2.5C13 4.2 13.8 3 15 3c1.8 0 3 2.5 3 5.5S16.8 14 15 14c-1.2 0-2-1.2-3.2-3.5L10.5 8l-1.3 2.5C8 12.8 7.2 14 6 14 4.2 14 3 11.5 3 8.5z" stroke="white" strokeWidth="1.5" fill="none" />
      </g>
    </g>
  );
}

function PlatformLogo({ platform }: { platform: string }) {
  switch (platform) {
    case "Google Ads": return <GoogleAdsLogo />;
    case "Bing Ads": return <BingAdsLogo />;
    case "Meta Ads": return <MetaAdsLogo />;
    default: return null;
  }
}

function CardFace({ config }: { config: CardConfig }) {
  const { id, platform, gradient, balance, last4 } = config;

  return (
    <svg
      viewBox="0 0 430 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="430" y2="270" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="35%" stopColor={gradient[1]} />
          <stop offset="70%" stopColor={gradient[2]} />
          <stop offset="100%" stopColor={gradient[3]} />
        </linearGradient>
        <linearGradient id={`shine-${id}`} x1="100" y1="0" x2="330" y2="270" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="45%" stopColor="white" stopOpacity="0.07" />
          <stop offset="55%" stopColor="white" stopOpacity="0.07" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`chip-${id}`} x1="0" y1="0" x2="50" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8C84A" />
          <stop offset="50%" stopColor="#D4A843" />
          <stop offset="100%" stopColor="#C9943A" />
        </linearGradient>
        <pattern id={`dots-${id}`} x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="0.8" fill="white" />
        </pattern>
      </defs>

      {/* Card body */}
      <rect width="430" height="270" rx="20" fill={`url(#bg-${id})`} />
      <rect width="430" height="270" rx="20" fill={`url(#shine-${id})`} />
      <rect width="430" height="270" rx="20" fill={`url(#dots-${id})`} opacity="0.04" />

      {/* Wave at bottom */}
      <path
        d="M0 200 Q107 170 215 200 Q322 230 430 200 L430 270 Q430 270 430 270 L0 270 Z"
        fill="white"
        opacity="0.04"
      />

      {/* CARDIUM wordmark */}
      <text x="28" y="44" fill="white" fontSize="18" fontWeight="700" letterSpacing="2" fontFamily="var(--font-sans)">
        CARDIUM
      </text>

      {/* Platform logo — top right */}
      <PlatformLogo platform={platform} />

      {/* Chip */}
      <g transform="translate(28, 72)">
        <rect width="50" height="38" rx="6" fill={`url(#chip-${id})`} />
        <line x1="1" y1="12.5" x2="49" y2="12.5" stroke="#B8933A" strokeWidth="0.5" opacity="0.6" />
        <line x1="1" y1="19" x2="49" y2="19" stroke="#B8933A" strokeWidth="0.5" opacity="0.6" />
        <line x1="1" y1="25.5" x2="49" y2="25.5" stroke="#B8933A" strokeWidth="0.5" opacity="0.6" />
        <line x1="25" y1="1" x2="25" y2="37" stroke="#B8933A" strokeWidth="0.5" opacity="0.6" />
        <line x1="15" y1="12.5" x2="15" y2="25.5" stroke="#B8933A" strokeWidth="0.5" opacity="0.6" />
        <line x1="35" y1="12.5" x2="35" y2="25.5" stroke="#B8933A" strokeWidth="0.5" opacity="0.6" />
      </g>

      {/* Contactless */}
      <g transform="translate(90, 78)" opacity="0.5">
        <path d="M4 12C5.8 10.2 5.8 7.2 4 5.4" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M8 14.5C11.2 11.3 11.2 6 8 2.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M12 17C16.8 12.2 16.8 4.6 12 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Balance label */}
      <text x="28" y="145" fill="white" fontSize="9" letterSpacing="1.5" fontFamily="var(--font-sans)" opacity="0.45">
        BALANCE
      </text>
      {/* Balance amount */}
      <text x="28" y="172" fill="white" fontSize="28" fontWeight="700" letterSpacing="1" fontFamily="var(--font-mono)" opacity="0.95">
        {balance}
      </text>

      {/* Card number (last 4) */}
      <text x="28" y="222" fill="white" fontSize="15" letterSpacing="3" fontFamily="var(--font-mono)" opacity="0.7">
        •••• •••• •••• {last4}
      </text>

      {/* Bottom right — VISA + valid thru */}
      <text x="402" y="210" fill="white" fontSize="9" letterSpacing="1.5" fontFamily="var(--font-sans)" opacity="0.4" textAnchor="end">
        VALID THRU
      </text>
      <text x="402" y="226" fill="white" fontSize="14" fontWeight="500" fontFamily="var(--font-mono)" textAnchor="end">
        12/28
      </text>
      <text x="402" y="250" fill="white" fontSize="22" fontWeight="700" fontStyle="italic" textAnchor="end" letterSpacing="2" opacity="0.5" fontFamily="serif">
        VISA
      </text>

      {/* Subtle border */}
      <rect width="430" height="270" rx="20" stroke="white" strokeWidth="0.5" opacity="0.1" fill="none" />
    </svg>
  );
}

export function CreditCardVisual({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextCard = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
      setIsAnimating(false);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextCard, 3500);
    return () => clearInterval(interval);
  }, [nextCard]);

  const current = cards[activeIndex];
  const next1 = cards[(activeIndex + 1) % cards.length];
  const next2 = cards[(activeIndex + 2) % cards.length];

  return (
    <div className={`relative select-none ${className ?? ""}`}>
      {/* Padding to contain the stack offset */}
      <div className="relative" style={{ paddingBottom: "24px", paddingLeft: "36px" }}>
        {/* Card 3 — furthest back */}
        <div
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{
            transform: "rotate(-7deg) translate(-32px, 20px)",
            opacity: 0.25,
            filter: "blur(1.5px)",
          }}
        >
          <CardFace config={next2} />
        </div>

        {/* Card 2 — middle */}
        <div
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{
            transform: isAnimating
              ? "rotate(0deg) translate(0px, 0px)"
              : "rotate(-3.5deg) translate(-16px, 10px)",
            opacity: isAnimating ? 0.9 : 0.5,
            filter: isAnimating ? "blur(0px)" : "blur(0.5px)",
          }}
        >
          <CardFace config={next1} />
        </div>

        {/* Card 1 — front (active) */}
        <div
          className="relative transition-all duration-500 ease-out"
          style={{
            transform: isAnimating
              ? "rotate(-10deg) translate(-40px, 28px) scale(0.95)"
              : "rotate(0deg) translate(0px, 0px) scale(1)",
            opacity: isAnimating ? 0 : 1,
            filter: `drop-shadow(0 25px 50px rgba(30,58,138,0.35)) drop-shadow(0 10px 20px rgba(0,0,0,0.12))`,
          }}
        >
          <CardFace config={current} />
        </div>

        {/* Platform indicator dots */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {cards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => {
                if (i !== activeIndex && !isAnimating) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(i);
                    setIsAnimating(false);
                  }, 400);
                }
              }}
              className="group relative p-1"
              aria-label={`Show ${card.platform} card`}
            >
              <div
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? "24px" : "8px",
                  backgroundColor: i === activeIndex ? "rgba(37,99,235,0.8)" : "rgba(37,99,235,0.2)",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
