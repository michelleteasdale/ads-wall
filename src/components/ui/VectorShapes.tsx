export function GradientOrb({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="orb-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#orb-grad)" />
    </svg>
  );
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#2563EB" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#grid)" />
    </svg>
  );
}

export function HexGrid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3, 4, 5].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = col * 70 + (row % 2 === 0 ? 0 : 35);
          const y = row * 42;
          return (
            <polygon
              key={`${row}-${col}`}
              points={`${x + 20},${y} ${x + 35},${y + 10} ${x + 35},${y + 28} ${x + 20},${y + 38} ${x + 5},${y + 28} ${x + 5},${y + 10}`}
              stroke="#2563EB"
              strokeWidth="0.5"
              opacity="0.12"
              fill="none"
            />
          );
        })
      )}
    </svg>
  );
}

export function WaveLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 50 Q100 20 200 50 Q300 80 400 50 Q500 20 600 50 Q700 80 800 50"
        stroke="url(#wave-grad)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="wave-grad" x1="0" y1="0" x2="800" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FloatingRings({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" stroke="#2563EB" strokeWidth="0.8" opacity="0.15" />
      <circle cx="100" cy="100" r="55" stroke="#7C3AED" strokeWidth="0.6" opacity="0.1" />
      <circle cx="100" cy="100" r="30" stroke="#06B6D4" strokeWidth="0.5" opacity="0.08" />
    </svg>
  );
}

export function CrossPattern({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = col * 40 + 10;
          const y = row * 40 + 10;
          return (
            <g key={`${row}-${col}`} opacity="0.15">
              <line x1={x - 4} y1={y} x2={x + 4} y2={y} stroke="#2563EB" strokeWidth="1" />
              <line x1={x} y1={y - 4} x2={x} y2={y + 4} stroke="#2563EB" strokeWidth="1" />
            </g>
          );
        })
      )}
    </svg>
  );
}

export function DiamondGrid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4].map((col) => {
          const x = col * 40 + 20;
          const y = row * 40 + 20;
          return (
            <rect
              key={`${row}-${col}`}
              x={x - 6}
              y={y - 6}
              width="12"
              height="12"
              transform={`rotate(45 ${x} ${y})`}
              stroke="#7C3AED"
              strokeWidth="0.6"
              opacity="0.1"
              fill="none"
            />
          );
        })
      )}
    </svg>
  );
}

export function ChipSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="49" height="39" rx="4" fill="url(#chip-grad)" stroke="#B8933A" strokeWidth="0.5" />
      <line x1="1" y1="13" x2="49" y2="13" stroke="#B8933A" strokeWidth="0.6" opacity="0.5" />
      <line x1="1" y1="20" x2="49" y2="20" stroke="#B8933A" strokeWidth="0.6" opacity="0.5" />
      <line x1="1" y1="27" x2="49" y2="27" stroke="#B8933A" strokeWidth="0.6" opacity="0.5" />
      <line x1="25" y1="1" x2="25" y2="39" stroke="#B8933A" strokeWidth="0.6" opacity="0.5" />
      <line x1="16" y1="13" x2="16" y2="27" stroke="#B8933A" strokeWidth="0.6" opacity="0.5" />
      <line x1="34" y1="13" x2="34" y2="27" stroke="#B8933A" strokeWidth="0.6" opacity="0.5" />
      <defs>
        <linearGradient id="chip-grad" x1="0" y1="0" x2="50" y2="40">
          <stop offset="0%" stopColor="#E8C84A" />
          <stop offset="50%" stopColor="#D4A843" />
          <stop offset="100%" stopColor="#C9943A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ContactlessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 8.5C13.83 9.83 13.83 12 12.5 13.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15.5 5.5C18.17 8.17 18.17 12.5 15.5 15.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18.5 2.5C22.5 6.5 22.5 13 18.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function VisaLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="16" fontFamily="serif" fontWeight="700" fontStyle="italic" fontSize="18" fill="currentColor" letterSpacing="1">
        VISA
      </text>
    </svg>
  );
}
