import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const runtime = "edge";

const postsMeta: Record<
  string,
  { title: string; description: string; date: string; readTime: string }
> = {
  "interactive-travel-map-free": {
    title: "Create a Free Interactive Travel Map With Your Photos",
    description:
      "Want to share your trip as more than a photo dump? Here's how to turn your photos and route into an interactive map — free, no account, runs entirely in your browser.",
    date: "2026-03-22",
    readTime: "5 min read",
  },
  "polarsteps-vs-cinemaly": {
    title:
      "Polarsteps vs Cinemaly: Which Should You Use to Document Your Travels?",
    description:
      "Polarsteps tracks you live. Cinemaly compiles after you're home. Both are free — but they make very different trade-offs about where your data lives.",
    date: "2026-03-22",
    readTime: "6 min read",
  },
  "private-travel-documentation": {
    title: "7 Ways to Document Your Travels Without Uploading to the Cloud",
    description:
      "Seven honest ways to document a trip without uploading your photos to someone else's server — from encrypted apps to browser-based tools.",
    date: "2026-03-23",
    readTime: "5 min read",
  },
  "amsterdam-belgium-travel": {
    title:
      "How I Finally Documented My Amsterdam-Belgium Trip the Way It Actually Felt",
    description:
      "Eight days in Amsterdam and Belgium, 600 photos, and no good way to share what it actually felt like — until I tried something different.",
    date: "2026-03-23",
    readTime: "5 min read",
  },
};

const postModules: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  "interactive-travel-map-free": () =>
    import("../posts/interactive-travel-map-free.mdx"),
  "polarsteps-vs-cinemaly": () => import("../posts/polarsteps-vs-cinemaly.mdx"),
  "private-travel-documentation": () =>
    import("../posts/private-travel-documentation.mdx"),
  "amsterdam-belgium-travel": () =>
    import("../posts/amsterdam-belgium-travel.mdx"),
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postsMeta[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://cinemaly.app/blog/${slug}`,
      siteName: "Cinemaly",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postsMeta[slug];
  const loader = postModules[slug];
  if (!post || !loader) notFound();

  const { default: Content } = await loader();

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans antialiased">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-28 md:pt-36 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[10px] font-bold text-stone-500 hover:text-amber-400 transition-colors mb-10 uppercase tracking-widest"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All Posts
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-700" />
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-[2rem] font-extrabold text-white tracking-tight leading-tight mb-5">
            {post.title}
          </h1>

          <p className="text-base text-stone-400 leading-relaxed border-l-2 border-amber-500/40 pl-4">
            {post.description}
          </p>

          <div className="mt-8 h-px bg-linear-to-r from-amber-500/30 via-stone-800/40 to-transparent" />
        </header>

        <article
          className="
            [&>p]:text-[0.9375rem] [&>p]:text-stone-300 [&>p]:leading-[1.85] [&>p]:mb-5
            [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:pb-3 [&>h2]:border-b [&>h2]:border-stone-800/60
            [&>h3]:text-base [&>h3]:font-bold [&>h3]:text-stone-100 [&>h3]:mt-7 [&>h3]:mb-3
            [&>ul]:my-4 [&>ol]:my-4
            [&>hr]:my-10 [&>hr]:border-stone-800/60
          "
        >
          <Content />
        </article>

        <div className="mt-16 p-6 md:p-8 bg-stone-900/40 border border-amber-500/15 rounded-2xl relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-amber-300 to-orange-500 rounded-l-2xl" />
          <p className="text-sm font-bold text-white mb-1 ml-2">
            Ready to try it?
          </p>
          <p className="text-xs text-stone-500 mb-5 leading-relaxed ml-2">
            No account. No subscription. Runs entirely in your browser.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-3 px-6 bg-linear-to-r from-amber-500 to-orange-500 text-stone-950 font-black text-xs rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all hover:-translate-y-0.5 uppercase tracking-wide shadow-[0_0_20px_-8px_rgba(245,158,11,0.5)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
            Create Your Capsule Free
          </Link>
        </div>
      </main>
    </div>
  );
}
