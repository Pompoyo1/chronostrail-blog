import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import EmailCapture from "@/components/EmailCapture";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.meta_description,
    openGraph: {
      title: post.title,
      description: post.meta_description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description,
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Chronos Trail",
      url: "https://chronostrail.com",
    },
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mb-8">
        <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">
          {post.category}
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mt-2 mb-3">{post.title}</h1>
        <p className="text-slate-500 text-sm">{post.date}</p>
      </div>

      <div
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="mt-12">
        <EmailCapture variant="inline" />
      </div>
    </article>
  );
}
