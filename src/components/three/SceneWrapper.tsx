"use client";

import dynamic from "next/dynamic";
import { Suspense, type ReactNode } from "react";
import { CreditCardVisual } from "@/components/ui/CreditCardVisual";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

export function SceneWrapper({
  children,
  className,
  fallback,
}: {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
}) {
  return (
    <div className={className}>
      <div className="hidden md:block h-full w-full">
        <Suspense
          fallback={
            fallback || (
              <div className="h-full w-full flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border-2 border-primary-200 border-t-primary-500 animate-spin" />
              </div>
            )
          }
        >
          <Canvas
            camera={{ position: [0, 0, 6], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            {children}
          </Canvas>
        </Suspense>
      </div>

      {/* Mobile CSS card fallback */}
      <div className="md:hidden h-full w-full flex items-center justify-center py-4">
        <div className="relative">
          <div className="absolute -left-3 top-3 w-[420px] h-[265px] rounded-[20px] bg-gradient-to-br from-primary-800/30 via-primary-500/20 to-accent-violet/10 blur-[2px] -rotate-[6deg] opacity-40 scale-[0.85]" />
          <div className="absolute -left-1.5 top-1.5 w-[420px] h-[265px] rounded-[20px] bg-gradient-to-br from-primary-800/40 via-primary-500/30 to-accent-violet/20 blur-[1px] -rotate-[3deg] opacity-60 scale-[0.85]" />
          <div className="scale-[0.85] origin-center">
            <CreditCardVisual />
          </div>
        </div>
      </div>
    </div>
  );
}
