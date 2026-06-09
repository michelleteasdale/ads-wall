import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: `${t("title")} — AdsWall`,
    description: t("subtitle"),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = t.raw("posts") as {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    tag: string;
    readTime: string;
  }[];

  return (
    <div className="pt-24">
      <section className="py-24 lg:py-32">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-[-0.03em]">
              <GradientText>{t("title")}</GradientText>
            </h1>
            <p className="text-text-secondary text-lg">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                      {post.tag}
                    </span>
                    <span className="text-xs text-text-tertiary">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2 flex-1">{post.title}</h3>
                  <p className="text-sm text-text-secondary mb-4 line-clamp-3">{post.excerpt}</p>
                  <p className="text-xs text-text-tertiary font-mono">{post.date}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </div>
  );
}
