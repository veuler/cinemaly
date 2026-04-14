import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cinemaly.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cinemaly.app/guide",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cinemaly.app/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://cinemaly.app/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://cinemaly.app/blog/interactive-travel-map-free",
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://cinemaly.app/blog/polarsteps-vs-cinemaly",
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://cinemaly.app/blog/private-travel-documentation",
      lastModified: new Date("2026-03-23"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://cinemaly.app/blog/amsterdam-belgium-travel",
      lastModified: new Date("2026-03-23"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://cinemaly.app/blog/europe-istanbul-trip",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
