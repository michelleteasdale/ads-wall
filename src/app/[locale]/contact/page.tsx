"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HiEnvelope, HiMapPin, HiPhone, HiPaperAirplane, HiCheckCircle } from "react-icons/hi2";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const helpTopics = t.raw("helpTopics.items") as { title: string; description: string }[];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-24">
      <section className="py-24 lg:py-32">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-[-0.03em]">
                <GradientText>{t("title")}</GradientText>
              </h1>
              <p className="text-text-secondary text-lg">{t("subtitle")}</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input label={t("form.name")} name="name" id="name" required />
                <Input label={t("form.email")} name="email" id="email" type="email" required />
                <Textarea label={t("form.message")} name="message" id="message" required />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : status === "success" ? (
                    <>
                      <HiCheckCircle className="h-5 w-5" />
                      {t("form.success")}
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="h-4 w-4" />
                      {t("form.submit")}
                    </>
                  )}
                </Button>
                {status === "error" && (
                  <p className="text-sm text-accent-rose text-center">{t("form.error")}</p>
                )}
              </form>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <Card hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <HiEnvelope className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">Email</h3>
                      <p className="text-sm text-text-secondary">{t("info.email")}</p>
                    </div>
                  </div>
                </Card>
                <Card hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <HiPhone className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">Support</h3>
                      <p className="text-sm text-text-secondary">{t("info.support")}</p>
                    </div>
                  </div>
                </Card>
                <Card hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <HiMapPin className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">Address</h3>
                      <p className="text-sm text-text-secondary">{t("info.address")}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>

          {/* Help Topics */}
          <ScrollReveal>
            <div className="max-w-5xl mx-auto mt-24">
              <h2 className="text-2xl font-bold text-text-primary text-center mb-8">{t("helpTopics.title")}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {helpTopics.map((topic) => (
                  <Card key={topic.title} hover={false}>
                    <h3 className="font-semibold text-text-primary mb-1">{topic.title}</h3>
                    <p className="text-sm text-text-secondary">{topic.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
