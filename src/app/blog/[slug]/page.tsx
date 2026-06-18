import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { posts, type PostMeta } from "@/data/posts";
import StoreButtons from "@/components/StoreButtons";

export const dynamicParams = false;

function getPostBySlug(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

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
  "europe-istanbul-trip": () => import("../posts/europe-istanbul-trip.mdx"),
  "cinemaly-android-travel-capsule-app": () =>
    import("../posts/cinemaly-android-travel-capsule-app.mdx"),
  "cinemaly-ios-travel-capsule-app": () =>
    import("../posts/cinemaly-ios-travel-capsule-app.mdx"),
  "italy-road-trip-travel-map": () =>
    import("../posts/italy-road-trip-travel-map.mdx"),
  "solo-backpacking-southeast-asia": () =>
    import("../posts/solo-backpacking-southeast-asia.mdx"),
  "how-to-create-animated-travel-map": () =>
    import("../posts/how-to-create-animated-travel-map.mdx"),
  "best-polarsteps-alternatives": () =>
    import("../posts/best-polarsteps-alternatives.mdx"),
  "turn-vacation-photos-into-travel-video": () =>
    import("../posts/turn-vacation-photos-into-travel-video.mdx"),
  "private-travel-journal-no-cloud": () =>
    import("../posts/private-travel-journal-no-cloud.mdx"),
  "what-is-cnmly-file": () => import("../posts/what-is-cnmly-file.mdx"),
  "how-to-make-visited-countries-map": () =>
    import("../posts/how-to-make-visited-countries-map.mdx"),
  "best-travel-map-animation-apps": () =>
    import("../posts/best-travel-map-animation-apps.mdx"),
  "travelanimator-vs-cinemaly": () =>
    import("../posts/travelanimator-vs-cinemaly.mdx"),
  "best-apps-to-map-travel-photos": () =>
    import("../posts/best-apps-to-map-travel-photos.mdx"),
  "anim8map-vs-cinemaly": () =>
    import("../posts/anim8map-vs-cinemaly.mdx"),
  "animatemytravel-vs-cinemaly": () =>
    import("../posts/animatemytravel-vs-cinemaly.mdx"),
  "travel-map-replay-vs-cinemaly": () =>
    import("../posts/travel-map-replay-vs-cinemaly.mdx"),
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
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
          url: "/opengraph-image.png",
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
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const loader = postModules[slug];
  if (!post || !loader) notFound();

  const { default: Content } = await loader();

  const pageUrl = `https://cinemaly.app/blog/${slug}`;
  const dateModified = post.lastModified ?? post.date;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Cinemaly",
      url: "https://cinemaly.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Cinemaly",
      url: "https://cinemaly.app",
      logo: {
        "@type": "ImageObject",
        url: "https://cinemaly.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    image: "https://cinemaly.app/opengraph-image.png",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cinemaly.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://cinemaly.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
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

          <div className="mt-7 rounded-2xl border border-amber-500/15 bg-stone-900/35 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400/90">
              Download Cinemaly
            </p>
            <p className="mt-1 mb-4 text-xs leading-relaxed text-stone-500">
              Create cinematic travel map capsules and videos from your own
              photos, routes, stops, and notes.
            </p>
            <StoreButtons
              campaign="blog"
              ctaPosition={`header_${slug}`}
              size="compact"
            />
          </div>
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
            Ready to build your own travel capsule?
          </p>
          <p className="text-xs text-stone-500 mb-5 leading-relaxed ml-2">
            Download Cinemaly for iPhone or Android and turn trip photos,
            routes, stops, and notes into cinematic map stories.
          </p>
          <StoreButtons
            campaign="blog"
            ctaPosition={`footer_${slug}`}
            size="default"
          />
          <Link
            href="/download"
            className="mt-4 inline-flex text-xs font-bold text-amber-400 transition-colors hover:text-amber-300"
          >
            Compare iPhone and Android download options
          </Link>
        </div>
      </main>
    </div>
  );
}
