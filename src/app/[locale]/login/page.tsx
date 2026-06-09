"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GradientText } from "@/components/ui/GradientText";
import { useAuth } from "@/lib/contexts/AuthContext";
import { HiArrowRight } from "react-icons/hi2";

export default function LoginPage() {
  const t = useTranslations("auth.login");
  const router = useRouter();
  const { refresh } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
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
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <GradientText>{t("title")}</GradientText>
            </h1>
            <p className="text-text-secondary">{t("subtitle")}</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label={t("fields.email")}
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                label={t("fields.password")}
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="text-right">
                <Link href="/forgot-password" className="text-xs text-primary-500 hover:underline">
                  {t("forgotPassword")}
                </Link>
              </div>

              {status === "error" && (
                <p className="text-sm text-accent-rose text-center">Invalid email or password. Please try again.</p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? (
                  <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    {t("submit")}
                    <HiArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <p className="text-center text-sm text-text-secondary mt-6">
            {t("noAccount")}{" "}
            <Link href="/register" className="text-primary-500 font-medium hover:underline">
              {t("signUp")}
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
