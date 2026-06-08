import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-semibold text-slate-900 leading-tight tracking-tight mb-4">
          The AI tools worth paying for.<br />And the ones that aren&apos;t.
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
          Honest reviews, head-to-head comparisons, and buyer guides for freelancers,
          entrepreneurs, and operators who need real answers.
        </p>
      </section>

      {/* Recent Articles */}
      {posts.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Latest Reviews</h2>
          <div className="divide-y divide-slate-100">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-start justify-between gap-6 py-5 group"
              >
                <div className="min-w-0">
                  <span className="text-xs text-slate-400 uppercase tracking-wide font-medium">
                    {post.category}
                  </span>
                  <h3 className="font-medium text-slate-900 mt-1 mb-1 group-hover:text-slate-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-1">{post.meta_description}</p>
                </div>
                <span className="text-sm text-slate-300 shrink-0 mt-1">{post.date}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/blog"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              View all articles →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
