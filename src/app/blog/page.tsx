import Link from "next/link";
import type { Metadata } from "next";

import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, comparisons, and travel stories about building cinematic, map-based trip documentation in your browser—no account, no Cinemaly server photo upload, and practical ideas for sharing routes and memories with Cinemaly.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog - Cinemaly",
    description:
      "Guides, comparisons, and travel stories about building cinematic, map-based trip documentation in your browser—no account, no Cinemaly server photo upload, and practical ideas for sharing routes and memories with Cinemaly.",
    url: "/blog",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cinemaly - Cinematic Travel Documentation",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans antialiased">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 md:pt-36 pb-20">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Blog
          </h1>
          <p className="text-stone-400 text-sm md:text-base">
            Guides and stories about cinematic travel documentation.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-stone-900/30 border border-stone-800/60 hover:border-stone-700/80 rounded-2xl p-6 transition-all duration-200 hover:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-widest">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="text-stone-700">·</span>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-widest">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-base md:text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-200 mb-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
