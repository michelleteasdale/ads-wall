import { JetBrains_Mono, DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    { path: "../../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["DM Sans", "system-ui", "sans-serif"],
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans-fallback",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});
