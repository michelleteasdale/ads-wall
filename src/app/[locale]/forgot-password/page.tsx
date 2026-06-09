"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GradientText } from "@/components/ui/GradientText";
import { HiArrowLeft, HiEnvelope } from "react-icons/hi2";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="pt-24 min-h-screen flex items-center">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
              <HiEnvelope className="h-8 w-8 text-primary-500" />
            </div>
            <h1 className="text-2xl font-bold text-text-primary mb-3">Check your email</h1>
            <p className="text-text-secondary mb-6">
              If an account exists for <strong>{email}</strong>, we&apos;ve sent a password reset link. Check your inbox and spam folder.
            </p>
            <Link href="/login">
              <Button variant="outline">Back to Sign In</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen flex items-center">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <GradientText>Reset Password</GradientText>
            </h1>
            <p className="text-text-secondary">Enter your email and we&apos;ll send you a reset link.</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email Address"
                id="forgot-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {status === "error" && (
                <p className="text-sm text-accent-rose text-center">Something went wrong. Please try again.</p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? (
                  <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  "Send Reset Link"
                )}
              </Button>
            </form>
          </div>

          <p className="text-center text-sm text-text-secondary mt-6">
            <Link href="/login" className="text-primary-500 font-medium hover:underline inline-flex items-center gap-1">
              <HiArrowLeft className="h-3 w-3" />
              Back to Sign In
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
