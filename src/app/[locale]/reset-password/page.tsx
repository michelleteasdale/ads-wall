"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GradientText } from "@/components/ui/GradientText";
import { HiCheck } from "react-icons/hi2";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) return;
    if (password.length < 8) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (!token) {
    return (
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-3">Invalid Link</h1>
        <p className="text-text-secondary mb-6">This password reset link is invalid or has expired.</p>
        <Link href="/forgot-password">
          <Button>Request New Link</Button>
        </Link>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-accent-emerald/10 flex items-center justify-center mx-auto mb-6">
          <HiCheck className="h-8 w-8 text-accent-emerald" />
        </div>
        <h1 className="text-2xl font-bold text-text-primary mb-3">Password Updated</h1>
        <p className="text-text-secondary mb-6">Your password has been successfully reset. You can now sign in.</p>
        <Link href="/login">
          <Button size="lg">Sign In</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          <GradientText>New Password</GradientText>
        </h1>
        <p className="text-text-secondary">Choose a strong password for your account.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="New Password"
            id="new-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            label="Confirm New Password"
            id="confirm-new-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <p className="text-xs text-text-tertiary">At least 8 characters with uppercase, lowercase, and a number</p>

          {password && confirmPassword && password !== confirmPassword && (
            <p className="text-xs text-accent-rose">Passwords do not match</p>
          )}

          {status === "error" && (
            <p className="text-sm text-accent-rose text-center">{errorMsg}</p>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={status === "loading" || password !== confirmPassword || password.length < 8}
          >
            {status === "loading" ? (
              <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            ) : (
              "Reset Password"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="pt-24 min-h-screen flex items-center">
      <Container>
        <Suspense fallback={
          <div className="flex justify-center">
            <div className="h-8 w-8 rounded-full border-2 border-primary-500/30 border-t-primary-500 animate-spin" />
          </div>
        }>
          <ResetPasswordForm />
        </Suspense>
      </Container>
    </div>
  );
}
