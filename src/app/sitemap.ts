import { MetadataRoute } from "next";

import { posts } from "@/data/posts";
import { seoLandingPageList } from "@/data/seoLandingPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: "https://cinemaly.app",
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cinemaly.app/guide",
      lastModified: new Date("2026-05-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cinemaly.app/download",
      lastModified: new Date("2026-06-14"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: "https://cinemaly.app/contact",
      lastModified: new Date("2026-04-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://cinemaly.app/privacy",
      lastModified: new Date("2026-04-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://cinemaly.app/terms",
      lastModified: new Date("2026-04-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://cinemaly.app/blog",
      lastModified: new Date("2026-07-07"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://cinemaly.app/blog/${post.slug}`,
    lastModified: new Date(post.lastModified ?? post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const landingEntries: MetadataRoute.Sitemap = seoLandingPageList.map(
    (page) => ({
      url: `https://cinemaly.app/${page.slug}`,
      lastModified: new Date(page.lastModified ?? "2026-06-18"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }),
  );

  return [...staticEntries, ...landingEntries, ...blogEntries];
}
