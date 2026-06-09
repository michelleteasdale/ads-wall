"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { HiBars3, HiXMark, HiChevronDown } from "react-icons/hi2";
import { cn } from "@/lib/utils/cn";
import { NAV_LINKS } from "@/lib/utils/constants";
import { useCurrency } from "@/lib/contexts/CurrencyContext";
import { useAuth } from "@/lib/contexts/AuthContext";
import { HiUserCircle } from "react-icons/hi2";

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const { currency, setCurrency, currencies } = useCurrency();
  const { user } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-navbar border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/images/logo.svg" alt="AdsWall" className="h-9 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors hover:text-primary-500",
                  pathname === link.href
                    ? "text-primary-500"
                    : "text-slate-600"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-text-primary transition-colors px-3 py-2 rounded-lg hover:bg-slate-50 cursor-pointer"
              >
                {currencies.find((c) => c.code === currency)?.symbol}{" "}
                {currency}
                <HiChevronDown className={cn("h-3.5 w-3.5 transition-transform", currencyOpen && "rotate-180")} />
              </button>
              {currencyOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => { setCurrency(c.code); setCurrencyOpen(false); }}
                      className={cn(
                        "w-full text-left px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer",
                        c.code === currency
                          ? "text-primary-500 bg-primary-50"
                          : "text-slate-600 hover:text-text-primary hover:bg-slate-50"
                      )}
                    >
                      {c.symbol} {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {user ? (
              <Link href="/account">
                <Button variant="primary" size="sm">
                  <HiUserCircle className="h-4 w-4" />
                  {user.firstName}
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    {t("signIn")}
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" size="sm">
                    {t("signUp")}
                  </Button>
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-text-primary cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-lg">
          <Container className="py-6">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "text-base font-medium py-2 transition-colors",
                    pathname === link.href
                      ? "text-primary-500"
                      : "text-slate-600"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="flex gap-2 pt-4 border-t border-slate-100">
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setCurrency(c.code)}
                    className={cn(
                      "px-3 py-1.5 text-sm rounded-lg transition-colors cursor-pointer",
                      c.code === currency
                        ? "bg-primary-50 text-primary-500"
                        : "text-slate-400 hover:text-text-primary"
                    )}
                  >
                    {c.symbol} {c.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 pt-4">
                {user ? (
                  <Link href="/account" className="flex-1">
                    <Button variant="primary" size="sm" className="w-full">
                      <HiUserCircle className="h-4 w-4" />
                      {user.firstName}
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link href="/login" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        {t("signIn")}
                      </Button>
                    </Link>
                    <Link href="/register" className="flex-1">
                      <Button variant="primary" size="sm" className="w-full">
                        {t("signUp")}
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
