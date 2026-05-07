export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  keywords: string[];
  /** ISO date; falls back to `date` in sitemap / JSON-LD when omitted */
  lastModified?: string;
};

const postsUnsorted: PostMeta[] = [
  {
    slug: "interactive-travel-map-free",
    title: "Create a Free Interactive Travel Map With Your Photos",
    description:
      "Want to share your trip as more than a photo dump? Here's how to turn your photos and route into an interactive map — free, no account, runs entirely in your browser.",
    date: "2026-03-22",
    readTime: "5 min read",
    keywords: [
      "free interactive travel map",
      "travel photo map maker",
      "create travel map with photos",
      "offline travel map generator",
      "browser-based travel map",
    ],
  },
  {
    slug: "polarsteps-vs-cinemaly",
    title:
      "Polarsteps vs Cinemaly: Which Should You Use to Document Your Travels?",
    description:
      "Polarsteps tracks you live. Cinemaly compiles after you're home. Both are free — but they make very different trade-offs about where your data lives.",
    date: "2026-03-22",
    readTime: "6 min read",
    keywords: [
      "Polarsteps vs Cinemaly",
      "Polarsteps alternative",
      "travel documentation comparison",
      "private travel journal",
      "map-based trip diary",
    ],
  },
  {
    slug: "private-travel-documentation",
    title: "7 Ways to Document Your Travels Without Uploading to the Cloud",
    description:
      "Seven honest ways to document a trip without uploading your photos to someone else's server — from encrypted apps to browser-based tools.",
    date: "2026-03-23",
    readTime: "5 min read",
    keywords: [
      "document travels without cloud",
      "private travel documentation",
      "offline travel journal",
      "local-first travel diary",
      "browser-based travel map",
    ],
  },
  {
    slug: "amsterdam-belgium-travel",
    title:
      "How I Finally Documented My Amsterdam-Belgium Trip the Way It Actually Felt",
    description:
      "Eight days in Amsterdam and Belgium, 600 photos, and no good way to share what it actually felt like — until I tried something different.",
    date: "2026-03-23",
    readTime: "5 min read",
    keywords: [
      "Amsterdam Belgium travel story",
      "cinematic travel documentation",
      "interactive travel map",
      "photo route map",
      "share trip memories",
    ],
  },
  {
    slug: "europe-istanbul-trip",
    title: "From Europe to Istanbul — Documenting the experience with Cinemaly",
    description:
      "A multi-country route from Paris to Istanbul, 1,400 phone photos, and how mapping the journey in Cinemaly made the whole trip feel shareable again—without another grid of thumbnails or a cloud upload.",
    date: "2026-04-02",
    readTime: "6 min read",
    keywords: [
      "Europe to Istanbul trip",
      "multi-country travel map",
      "cinematic trip documentation",
      "travel photo map",
      "Cinemaly travel story",
    ],
  },
  {
    slug: "cinemaly-android-travel-capsule-app",
    title:
      "Cinemaly for Android: Native Travel Capsules, Sharing, and the .cnmly Format",
    description:
      "Shipping Cinemaly on Android—scoped storage, native photo pipelines, share sheets, and why mobile exports a self-contained .cnmly capsule while the browser still compiles to .html.",
    date: "2026-04-18",
    readTime: "7 min read",
    keywords: [
      "Cinemaly Android app",
      "travel capsule app",
      "cnmly format",
      "offline travel sharing",
      "scoped storage travel photos",
    ],
  },
  {
    slug: "cinemaly-ios-travel-capsule-app",
    title:
      "Cinemaly for iOS: Travel Capsules, App Store Review, and the Cnmly Format",
    description:
      "Shipping Cinemaly on iPhone—what App Store review taught us about explaining capsule exports, privacy on iOS, and why mobile uses the self-contained .cnmly package while the web still compiles to .html.",
    date: "2026-05-07",
    readTime: "8 min read",
    keywords: [
      "Cinemaly iOS app",
      "travel capsule iPhone",
      "App Store travel app",
      "cnmly export",
      "privacy-first travel documentation",
    ],
  },
  {
    slug: "solo-backpacking-southeast-asia",
    title:
      "How I Documented My Solo Backpacking Trip Without the Cloud",
    description:
      "Three months backpacking Southeast Asia, 3,000 photos, and how I finally documented the trip with a browser-based tool — no uploads, no accounts.",
    date: "2026-05-07",
    readTime: "7 min read",
    keywords: [
      "document backpacking trip",
      "travel map offline",
      "solo travel memories",
      "share trip photos privately",
      "backpacker travel journal",
    ],
  },
];

export const posts = [...postsUnsorted].sort((a, b) => {
  const byDate = b.date.localeCompare(a.date);
  if (byDate !== 0) return byDate;
  return a.slug.localeCompare(b.slug);
});
