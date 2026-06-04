import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "AI Tools Reviews & Comparisons",
  description: "Browse all AI tool reviews, head-to-head comparisons, and buyer guides on Chronos Trail.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">All Articles</h1>
      <p className="text-slate-600 mb-8">
        Reviews, comparisons, and guides for AI tools that actually matter.
      </p>

      {posts.length === 0 ? (
        <p className="text-slate-500">Articles coming soon.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-slate-200 rounded-xl p-5 hover:border-slate-400 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                    {post.category}
                  </span>
                  <h2 className="font-bold text-slate-900 mt-1 mb-1">{post.title}</h2>
                  <p className="text-slate-600 text-sm">{post.meta_description}</p>
                </div>
                <span className="text-sm text-slate-400 shrink-0">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
