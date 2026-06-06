import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          The AI tools worth paying for. And the ones that aren&apos;t.
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Honest reviews, head-to-head comparisons, and buyer guides for freelancers,
          entrepreneurs, and operators who need real answers.
        </p>
        <EmailCapture variant="hero" />
      </section>

      {/* Recent Articles */}
      {posts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Latest Reviews</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="border border-slate-200 rounded-xl p-5 hover:border-slate-400 transition-colors"
              >
                <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                  {post.category}
                </span>
                <h3 className="font-bold text-slate-900 mt-1 mb-2">{post.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-2">{post.meta_description}</p>
                <span className="text-sm text-slate-400 mt-3 block">{post.date}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-block border border-slate-300 rounded-lg px-6 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              View all articles →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
