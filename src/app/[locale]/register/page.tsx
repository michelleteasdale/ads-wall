"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GradientText } from "@/components/ui/GradientText";
import { COUNTRIES } from "@/lib/utils/countries";
import { useAuth } from "@/lib/contexts/AuthContext";
import { HiArrowRight, HiArrowLeft, HiCheck } from "react-icons/hi2";

const STEPS = ["personal", "address", "security"] as const;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const t = useTranslations("auth.register");
  const router = useRouter();
  const { refresh } = useAuth();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    street: "",
    city: "",
    country: "",
    postalCode: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance() {
    if (step === 0) {
      return form.firstName && form.lastName && form.email && form.phone && form.dateOfBirth;
    }
    if (step === 1) {
      return form.street && form.city && form.country && form.postalCode;
    }
    if (step === 2) {
      return form.password && form.confirmPassword && form.password === form.confirmPassword && form.password.length >= 8;
    }
    return false;
  }

  async function handleSubmit() {
    if (!canAdvance()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        await refresh();
        router.push("/account");
        return;
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-24 min-h-screen flex items-center">
      <Container>
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <GradientText>{t("title")}</GradientText>
            </h1>
            <p className="text-text-secondary">{t("subtitle")}</p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <button
                  onClick={() => i < step && setStep(i)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    i < step
                      ? "bg-accent-emerald text-white cursor-pointer"
                      : i === step
                        ? "bg-primary-500 text-white"
                        : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {i < step ? <HiCheck className="h-4 w-4" /> : i + 1}
                </button>
                <span className={`text-xs font-medium hidden sm:block ${i === step ? "text-primary-500" : "text-slate-400"}`}>
                  {t(`steps.${s}`)}
                </span>
                {i < STEPS.length - 1 && (
                  <div className={`w-8 h-0.5 ${i < step ? "bg-accent-emerald" : "bg-slate-200"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card">
            {/* Step 1: Personal info */}
            {step === 0 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label={t("fields.firstName")}
                    id="firstName"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    required
                  />
                  <Input
                    label={t("fields.lastName")}
                    id="lastName"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    required
                  />
                </div>
                <Input
                  label={t("fields.email")}
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                />
                <Input
                  label={t("fields.phone")}
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  required
                />
                <Input
                  label={t("fields.dateOfBirth")}
                  id="dateOfBirth"
                  type="date"
                  value={form.dateOfBirth}
                  onChange={(e) => update("dateOfBirth", e.target.value)}
                  required
                />
              </div>
            )}

            {/* Step 2: Address */}
            {step === 1 && (
              <div className="space-y-4">
                <Input
                  label={t("fields.street")}
                  id="street"
                  value={form.street}
                  onChange={(e) => update("street", e.target.value)}
                  required
                />
                <Input
                  label={t("fields.city")}
                  id="city"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  required
                />
                <div className="relative">
                  <select
                    id="country"
                    value={form.country}
                    onChange={(e) => update("country", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-text-primary outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">{t("selectCountry")}</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <Input
                  label={t("fields.postalCode")}
                  id="postalCode"
                  value={form.postalCode}
                  onChange={(e) => update("postalCode", e.target.value)}
                  required
                />
              </div>
            )}

            {/* Step 3: Security */}
            {step === 2 && (
              <div className="space-y-4">
                <Input
                  label={t("fields.password")}
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                  required
                />
                <Input
                  label={t("fields.confirmPassword")}
                  id="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) => update("confirmPassword", e.target.value)}
                  required
                />
                <p className="text-xs text-text-tertiary">{t("passwordRequirements")}</p>
                {form.password && form.confirmPassword && form.password !== form.confirmPassword && (
                  <p className="text-xs text-accent-rose">Passwords do not match</p>
                )}
                <p className="text-xs text-text-tertiary mt-4">
                  {t("termsAgreement")}{" "}
                  <Link href="/terms" className="text-primary-500 hover:underline">{t("termsLink")}</Link>
                  {" "}{t("and")}{" "}
                  <Link href="/privacy" className="text-primary-500 hover:underline">{t("privacyLink")}</Link>.
                </p>
              </div>
            )}

            {status === "error" && (
              <p className="text-sm text-accent-rose text-center mt-4">Something went wrong. Please try again.</p>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {step > 0 ? (
                <Button variant="ghost" onClick={() => setStep(step - 1)}>
                  <HiArrowLeft className="h-4 w-4" />
                  {t("back")}
                </Button>
              ) : (
                <div />
              )}
              {step < STEPS.length - 1 ? (
                <Button
                  onClick={() => canAdvance() && setStep(step + 1)}
                  disabled={!canAdvance()}
                >
                  {t("next")}
                  <HiArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canAdvance() || status === "loading"}
                >
                  {status === "loading" ? (
                    <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    t("submit")
                  )}
                </Button>
              )}
            </div>
          </div>

          <p className="text-center text-sm text-text-secondary mt-6">
            {t("hasAccount")}{" "}
            <Link href="/login" className="text-primary-500 font-medium hover:underline">
              {t("signIn")}
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
