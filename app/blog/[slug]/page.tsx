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
    <article className="max-w-2xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mb-10">
        <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">
          {post.category}
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 mt-3 mb-3 leading-tight tracking-tight">{post.title}</h1>
        <p className="text-slate-400 text-sm">{post.date}</p>
      </div>

      <div
        className="prose prose-slate prose-p:leading-relaxed prose-p:text-slate-600 prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-slate-900 prose-a:underline-offset-2 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="mt-14">
        <EmailCapture variant="inline" />
      </div>
    </article>
  );
}
