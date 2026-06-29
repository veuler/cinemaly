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
    title: "Free Interactive Travel Map: Turn Photos Into a Route Story",
    description:
      "Create a free interactive travel map with photos, stops, notes, and a cinematic route story using Cinemaly.",
    date: "2026-03-22",
    readTime: "5 min read",
    keywords: [
      "free interactive travel map",
      "travel photo map maker",
      "create travel map with photos",
      "offline travel map generator",
      "browser-based travel map",
    ],
    lastModified: "2026-06-29",
  },
  {
    slug: "polarsteps-vs-cinemaly",
    title:
      "Polarsteps vs Cinemaly: Cinematic Private Trip Memories",
    description:
      "See why Cinemaly is a better fit when you want private post-trip capsules, photos, notes, and map videos instead of live travel tracking.",
    date: "2026-03-22",
    readTime: "6 min read",
    keywords: [
      "Polarsteps vs Cinemaly",
      "Polarsteps alternative",
      "travel documentation comparison",
      "private travel journal",
      "map-based trip diary",
    ],
    lastModified: "2026-06-29",
  },
  {
    slug: "private-travel-documentation",
    title: "Private Travel Documentation: 7 Ways to Keep Photos Off the Cloud",
    description:
      "Seven practical ways to document travel privately, including Cinemaly capsules that keep photos, notes, and routes under your control.",
    date: "2026-03-23",
    readTime: "5 min read",
    keywords: [
      "document travels without cloud",
      "private travel documentation",
      "offline travel journal",
      "local-first travel diary",
      "browser-based travel map",
    ],
    lastModified: "2026-06-29",
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
    slug: "italy-road-trip-travel-map",
    title: "How I Mapped My Italy Road Trip Into Something Worth Sharing",
    description:
      "Fourteen days driving from Milan to Sicily, 1,800 photos, and how one free tool turned them into an Italy road trip map worth sharing.",
    date: "2026-05-07",
    readTime: "6 min read",
    keywords: [
      "Italy road trip map",
      "document road trip photos",
      "cinematic travel map",
      "travel route map free",
      "share trip photos privately",
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
  {
    slug: "how-to-create-animated-travel-map",
    title: "How to Create an Animated Travel Map From Your Photos",
    description:
      "A practical guide to turning trip photos, ordered stops, and notes into a cinematic animated travel map with Cinemaly.",
    date: "2026-06-13",
    readTime: "5 min read",
    keywords: [
      "how to create animated travel map",
      "animated travel map from photos",
      "travel route animation",
      "cinematic travel map",
      "travel map app",
    ],
  },
  {
    slug: "best-polarsteps-alternatives",
    title: "Best Polarsteps Alternatives for Private Travel Memories",
    description:
      "Looking for Polarsteps alternatives? Compare live travel tracking with private cinematic trip capsules, travel maps, and route videos.",
    date: "2026-06-13",
    readTime: "5 min read",
    keywords: [
      "best Polarsteps alternatives",
      "Polarsteps alternative",
      "private travel app",
      "travel tracker alternative",
      "cinematic travel map app",
    ],
  },
  {
    slug: "turn-vacation-photos-into-travel-video",
    title: "How to Turn Vacation Photos Into a Cinematic Travel Video",
    description:
      "Learn how a route-first travel map video can turn vacation photos, stops, and notes into a cinematic trip recap without manual editing.",
    date: "2026-06-13",
    readTime: "5 min read",
    keywords: [
      "turn vacation photos into travel video",
      "travel map video maker",
      "automatic travel video maker",
      "Instagram travel reel generator",
      "route map video",
    ],
  },
  {
    slug: "private-travel-journal-no-cloud",
    title: "Private Travel Journal Apps That Do Not Upload Your Photos",
    description:
      "What a private no-cloud travel journal should mean, and how Cinemaly keeps capsules, photos, notes, and route memories under your control.",
    date: "2026-06-13",
    readTime: "5 min read",
    keywords: [
      "private travel journal no cloud",
      "private travel journal app",
      "no cloud travel app",
      "local-first travel app",
      "private photo map app",
    ],
  },
  {
    slug: "what-is-cnmly-file",
    title: "What Is a .cnmly Travel Capsule File?",
    description:
      "Learn what a .cnmly file is, how Cinemaly travel capsules work, and why route, photos, notes, and memories belong in one portable file.",
    date: "2026-06-13",
    readTime: "5 min read",
    keywords: [
      "what is cnmly file",
      ".cnmly file",
      "Cinemaly travel capsule",
      "travel capsule file",
      "share travel capsule",
    ],
  },
  {
    slug: "how-to-make-visited-countries-map",
    title: "Countries Visited Map Generator: Make a Map on Your Phone",
    description:
      "Make a map of countries visited with Cinemaly's World tab. Add cities, mark countries, and track visual travel stats on your phone.",
    date: "2026-06-14",
    readTime: "5 min read",
    keywords: [
      "visited countries map",
      "visited cities map",
      "countries visited map app",
      "world travel map app",
      "travel stats app",
      "countries visited map generator",
      "make a map of countries visited",
    ],
    lastModified: "2026-06-29",
  },
  {
    slug: "best-travel-map-animation-apps",
    title: "Best Travel Map Animation Apps in 2026: Why Cinemaly Stands Out",
    description:
      "See why Cinemaly stands out among travel map animation apps by keeping routes, photos, notes, private capsules, and cinematic videos together.",
    date: "2026-06-18",
    readTime: "9 min read",
    keywords: [
      "best travel map animation apps",
      "travel map animation app",
      "animated travel map app",
      "travel route animation",
      "travel map video maker",
      "TravelAnimator alternative",
      "anim8map alternative",
    ],
    lastModified: "2026-06-29",
  },
  {
    slug: "travelanimator-vs-cinemaly",
    title: "TravelAnimator vs Cinemaly: Why Cinemaly Keeps More of Your Trip",
    description:
      "Compare TravelAnimator and Cinemaly, and see why Cinemaly is the stronger choice for private routes, photos, notes, capsules, and lasting trip memories.",
    date: "2026-06-18",
    readTime: "7 min read",
    keywords: [
      "TravelAnimator vs Cinemaly",
      "TravelAnimator alternative",
      "Journey Route alternative",
      "travel route video app",
      "private travel map app",
    ],
    lastModified: "2026-06-29",
  },
  {
    slug: "best-apps-to-map-travel-photos",
    title: "Best Apps to Map Travel Photos: Why Cinemaly Stands Out",
    description:
      "See why Cinemaly is a better way to map meaningful travel photos with ordered stops, notes, private capsules, and cinematic route stories.",
    date: "2026-06-18",
    readTime: "7 min read",
    keywords: [
      "best app to map travel photos",
      "travel photo map app",
      "map photos by location",
      "PhotoRoute alternative",
      "trip photos on map",
      "photo route map",
    ],
    lastModified: "2026-06-29",
  },
  {
    slug: "anim8map-vs-cinemaly",
    title: "anim8map vs Cinemaly: Why Cinemaly Preserves the Complete Trip",
    description:
      "Compare anim8map and Cinemaly, and see why Cinemaly offers more lasting value through private capsules, photos, notes, and mobile trip stories.",
    date: "2026-06-18",
    readTime: "7 min read",
    keywords: [
      "anim8map vs Cinemaly",
      "anim8map alternative",
      "animated travel map comparison",
      "3D travel route video",
      "private travel map app",
    ],
    lastModified: "2026-06-29",
  },
  {
    slug: "how-to-create-visited-places-map",
    title: "How to Create a Map of Places You Have Visited",
    description:
      "Create a visited places map with cities, countries, photos, notes, and private Cinemaly travel capsules.",
    date: "2026-06-29",
    readTime: "5 min read",
    keywords: [
      "create map of places visited",
      "visited places map",
      "visited cities map generator",
      "mark cities visited on map",
      "countries visited map generator",
    ],
    lastModified: "2026-06-29",
  },
  {
    slug: "animatemytravel-vs-cinemaly",
    title: "AnimateMyTravel vs Cinemaly: Which Keeps More of Your Trip?",
    description:
      "Compare AnimateMyTravel and Cinemaly, and see why Cinemaly is built for complete private trip memories rather than a single route export.",
    date: "2026-06-18",
    readTime: "7 min read",
    keywords: [
      "AnimateMyTravel vs Cinemaly",
      "AnimateMyTravel alternative",
      "free travel map animation",
      "4K travel route animation",
      "travel capsule app",
    ],
    lastModified: "2026-06-29",
  },
  {
    slug: "travel-map-replay-vs-cinemaly",
    title: "Travel Map Replay vs Cinemaly: Why Cinemaly Goes Beyond Replay",
    description:
      "Compare Travel Map Replay and Cinemaly, and see why Cinemaly offers more with photos, notes, private capsules, and iPhone and Android support.",
    date: "2026-06-18",
    readTime: "6 min read",
    keywords: [
      "Travel Map Replay vs Cinemaly",
      "Travel Map Replay alternative",
      "travel route replay app",
      "animated route video iPhone",
      "travel map app Android",
    ],
    lastModified: "2026-06-29",
  },
];

export const posts = [...postsUnsorted].sort((a, b) => {
  const byDate = b.date.localeCompare(a.date);
  if (byDate !== 0) return byDate;
  return a.slug.localeCompare(b.slug);
});
