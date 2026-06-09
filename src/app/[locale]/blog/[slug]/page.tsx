import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "@/i18n/navigation";
import { HiArrowLeft } from "react-icons/hi2";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readTime: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = t.raw("posts") as BlogPost[];
  const post = posts.find((p) => p.slug === slug);

  if (!post) return { title: "Post Not Found — AdsWall" };

  return {
    title: `${post.title} — AdsWall`,
    description: post.excerpt.slice(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = t.raw("posts") as BlogPost[];
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="pt-24">
      <section className="py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600 mb-8 transition-colors"
            >
              <HiArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                {post.tag}
              </span>
              <span className="text-xs text-text-tertiary">{post.readTime}</span>
              <span className="text-xs text-text-tertiary font-mono">{post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-[-0.025em]">
              <GradientText>{post.title}</GradientText>
            </h1>

            <div className="text-text-secondary leading-relaxed space-y-4">
              <p>{post.excerpt}</p>
              <p>This is a preview of the full article. The complete version with detailed analysis, code examples, and actionable insights is coming soon. Stay tuned for updates from the AdsWall team.</p>
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </div>
  );
}
