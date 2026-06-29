export type LandingFaq = {
  question: string;
  answer: string;
};

export type LandingLink = {
  href: string;
  label: string;
};

export type LandingFeature = {
  title: string;
  description: string;
};

export type SeoLandingPageData = {
  slug: string;
  lastModified?: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  accent: string;
  intro: string;
  proofTitle: string;
  proofIntro: string;
  features: LandingFeature[];
  faq: LandingFaq[];
  internalLinks: LandingLink[];
  ctaDescription?: string;
  ctaTiles?: string[];
  disclaimer?: string;
};

export const seoLandingPages = {
  "animated-travel-map": {
    slug: "animated-travel-map",
    lastModified: "2026-06-29",
    title: "Create an Animated Travel Map From Your Trip Photos",
    description:
      "Create an animated travel map with Cinemaly. Add trip photos, ordered stops, and notes, then watch your journey unfold as a cinematic route story.",
    eyebrow: "Animated travel map app",
    h1: "Create an Animated Travel Map From Your Trip Photos",
    accent: "animated travel map",
    intro:
      "Cinemaly turns a camera roll and a route into a cinematic map story. Add your stops in order, attach memories, and watch the trip move city by city instead of sitting inside another static album.",
    proofTitle: "A route that feels like the trip",
    proofIntro:
      "Photo albums show moments. Cinemaly shows the path between them, with map playback, stop order, photos, and notes working together.",
    features: [
      {
        title: "Ordered stops",
        description:
          "Build the journey in the order it happened so the map plays like a documentary.",
      },
      {
        title: "Photos at each place",
        description:
          "Attach memories to the cities and regions where they belong.",
      },
      {
        title: "Cinematic playback",
        description:
          "Use map movement and route context to make the trip feel alive.",
      },
    ],
    faq: [
      {
        question: "Can I make an animated travel map from photos?",
        answer:
          "Yes. Cinemaly lets you add trip stops, photos, and notes, then turns them into a cinematic map story.",
      },
      {
        question: "Do I need to edit a video manually?",
        answer:
          "No. Cinemaly is built around ordered stops and map playback, so the route story is generated from the trip structure you create.",
      },
      {
        question: "Is Cinemaly available on mobile?",
        answer:
          "Yes. Cinemaly is available for iPhone and Android from the App Store and Google Play.",
      },
    ],
    internalLinks: [
      { href: "/travel-map-video-maker", label: "Travel map video maker" },
      {
        href: "/travelanimator-alternative",
        label: "TravelAnimator alternative",
      },
      {
        href: "/blog/best-travel-map-animation-apps",
        label: "Best travel map animation apps",
      },
      { href: "/road-trip-map-app", label: "Road trip map app" },
      { href: "/visited-places-map", label: "Visited places map" },
      { href: "/visited-countries-map", label: "Visited countries map" },
      { href: "/download", label: "Download Cinemaly" },
    ],
  },
  "travel-map-video-maker": {
    slug: "travel-map-video-maker",
    lastModified: "2026-06-29",
    title: "Make a Cinematic Travel Map Video Without Editing",
    description:
      "Use Cinemaly as a travel map video maker for trip recaps, reels, and route stories. Add stops, photos, and notes, then create a cinematic travel video.",
    eyebrow: "Travel map video maker",
    h1: "Make a Cinematic Travel Map Video Without Editing",
    accent: "travel map video",
    intro:
      "Cinemaly is for travelers who want a trip recap without learning a full video editor. Build the route, add photos and notes, then let the map story become the structure of the video.",
    proofTitle: "Made for trip recaps",
    proofIntro:
      "The app is not a generic editor. It starts from the journey itself: stops, photos, notes, and map motion.",
    features: [
      {
        title: "Route-first storytelling",
        description:
          "The video follows the path of your trip instead of starting from a blank timeline.",
      },
      {
        title: "Social-ready output",
        description:
          "Create a cinematic route recap you can save and share through your device.",
      },
      {
        title: "No account required",
        description:
          "Build travel memories without creating a social profile inside Cinemaly.",
      },
    ],
    faq: [
      {
        question: "Is Cinemaly a manual video editor?",
        answer:
          "No. Cinemaly uses your route, stops, photos, and notes to create a cinematic travel map story.",
      },
      {
        question: "Can I use it for Instagram or TikTok travel recaps?",
        answer:
          "Yes. Cinemaly can create social-ready travel map videos that you can save and share from your device.",
      },
      {
        question: "Do my photos go to a Cinemaly server?",
        answer:
          "No. Cinemaly does not upload your capsule, photos, notes, or videos to a Cinemaly server. Your personal travel content is created and kept on your device unless you choose to export or share it.",
      },
    ],
    internalLinks: [
      { href: "/animated-travel-map", label: "Animated travel map" },
      {
        href: "/travelanimator-alternative",
        label: "TravelAnimator alternative",
      },
      {
        href: "/blog/best-travel-map-animation-apps",
        label: "Compare travel map animation apps",
      },
      { href: "/anim8map-alternative", label: "anim8map alternative" },
      {
        href: "/animatemytravel-alternative",
        label: "AnimateMyTravel alternative",
      },
      {
        href: "/travel-map-replay-alternative",
        label: "Travel Map Replay alternative",
      },
      { href: "/private-travel-journal-app", label: "Private travel journal" },
      { href: "/visited-places-map", label: "Visited places map" },
      { href: "/visited-countries-map", label: "Visited countries map" },
      { href: "/download", label: "Download Cinemaly" },
    ],
  },
  "private-travel-journal-app": {
    slug: "private-travel-journal-app",
    lastModified: "2026-06-29",
    title: "A Private Travel Journal App for Photos, Routes, and Notes",
    description:
      "Cinemaly is a private travel journal app for cinematic map memories. Keep capsules, photos, notes, and videos on your device with no account required.",
    eyebrow: "Private travel journal app",
    h1: "A Private Travel Journal App That Keeps Your Memories on Your Device",
    accent: "private travel journal",
    intro:
      "Cinemaly is built for people who want to remember trips without turning every memory into a social feed. Create capsules with photos, routes, and notes while keeping your personal travel archive under your control.",
    proofTitle: "Private by default",
    proofIntro:
      "Cinemaly focuses on local-first travel memories. The app has no backend account system or server-side capsule storage; only limited external requests, such as Nominatim/OpenStreetMap place search, leave the device.",
    features: [
      {
        title: "No account",
        description:
          "Create travel memories without a Cinemaly login or social profile.",
      },
      {
        title: "Portable capsules",
        description:
          "Save trips as private travel capsules you can keep or share yourself.",
      },
      {
        title: "Clear privacy claim",
        description:
          "Photos, notes, capsules, and videos are not uploaded to a Cinemaly server.",
      },
    ],
    faq: [
      {
        question: "Does Cinemaly upload my photos?",
        answer:
          "No. Cinemaly does not upload your capsules, photos, notes, or videos to a Cinemaly server. Your personal travel content is created and kept on your device unless you export or share it yourself.",
      },
      {
        question: "Does Cinemaly require an account?",
        answer:
          "No. Cinemaly does not require an account, email, login, or social profile to create travel capsules.",
      },
      {
        question: "Does Cinemaly use the internet?",
        answer:
          "Inside the app, the limited external request is map/place search. Place search may send the location query to Nominatim/OpenStreetMap.",
      },
    ],
    internalLinks: [
      { href: "/travel-capsule-file", label: "What is a travel capsule?" },
      { href: "/polarsteps-alternative", label: "Polarsteps alternative" },
      { href: "/visited-places-map", label: "Visited places map" },
      { href: "/visited-countries-map", label: "Visited countries map" },
      { href: "/download", label: "Download Cinemaly" },
    ],
  },
  "polarsteps-alternative": {
    slug: "polarsteps-alternative",
    lastModified: "2026-06-29",
    title: "A Cinematic Polarsteps Alternative for Private Travel Memories",
    description:
      "Looking for a Polarsteps alternative? Cinemaly is a cinematic travel map app for private post-trip memories, capsules, and travel videos.",
    eyebrow: "Polarsteps alternative",
    h1: "A Cinematic Polarsteps Alternative for Private Travel Memories",
    accent: "Polarsteps alternative",
    intro:
      "Cinemaly is not trying to be a live travel tracker. It is built for a different moment: after or during a trip, when you want to turn photos, ordered stops, and notes into a private cinematic memory.",
    proofTitle: "Different job, different output",
    proofIntro:
      "Travel trackers are useful for live logging. Cinemaly is strongest when you want a polished recap, a portable capsule, or a travel map video.",
    features: [
      {
        title: "Post-trip cinematic memory",
        description:
          "Shape the journey after you know what mattered, not only while you are moving.",
      },
      {
        title: "Capsules and videos",
        description:
          "Create portable .cnmly capsules and cinematic map-based recaps.",
      },
      {
        title: "Local-first privacy angle",
        description:
          "Cinemaly has no backend that stores your personal capsule content.",
      },
    ],
    faq: [
      {
        question: "Is Cinemaly affiliated with Polarsteps?",
        answer:
          "No. Cinemaly is not affiliated with, endorsed by, or connected to Polarsteps.",
      },
      {
        question: "When should I choose Cinemaly?",
        answer:
          "Choose Cinemaly when you want a cinematic trip recap, private capsule, or travel map video rather than live trip tracking.",
      },
      {
        question: "Can Cinemaly track my trip live?",
        answer:
          "Cinemaly is focused on creating cinematic travel memories from stops, photos, and notes. It is not positioned as a live tracking social network.",
      },
    ],
    internalLinks: [
      { href: "/private-travel-journal-app", label: "Private travel journal" },
      { href: "/animated-travel-map", label: "Animated travel map" },
      { href: "/visited-places-map", label: "Visited places map" },
      { href: "/visited-countries-map", label: "Visited countries map" },
      { href: "/download", label: "Download Cinemaly" },
    ],
    disclaimer:
      "Cinemaly is not affiliated with, endorsed by, or connected to Polarsteps.",
  },
  "travelanimator-alternative": {
    slug: "travelanimator-alternative",
    lastModified: "2026-06-18",
    title: "A TravelAnimator Alternative for Photos, Notes, and Private Trips",
    description:
      "Looking for a TravelAnimator alternative? Cinemaly turns routes, photos, stops, and notes into private cinematic travel capsules and social-ready videos.",
    eyebrow: "TravelAnimator alternative",
    h1: "A TravelAnimator Alternative for the Whole Trip Story",
    accent: "TravelAnimator alternative",
    intro:
      "A route animation shows where you traveled. Cinemaly preserves much more: the route, selected photos, notes, stop order, and memory of the trip together in one private cinematic story.",
    proofTitle: "More than a vehicle moving across a map",
    proofIntro:
      "Choose Cinemaly when the route matters, but the photos and meaning attached to each stop matter just as much. Build a private capsule for yourself, then export a social-ready map video when you want to share it.",
    features: [
      {
        title: "Photos and notes at each stop",
        description:
          "Keep the places, images, and context of the journey together instead of producing only a route clip.",
      },
      {
        title: "Private, local-first creation",
        description:
          "Cinemaly does not require an account and does not upload personal capsule content to a Cinemaly server.",
      },
      {
        title: "Capsule plus video",
        description:
          "Create a portable travel memory for keeping and a cinematic map video for sharing.",
      },
    ],
    faq: [
      {
        question: "Is Cinemaly the same type of app as TravelAnimator?",
        answer:
          "They both visualize routes, but Cinemaly preserves a much more complete trip story built from ordered stops, photos, notes, a portable capsule, and a cinematic video.",
      },
      {
        question: "Why choose Cinemaly instead of TravelAnimator?",
        answer:
          "Choose Cinemaly when you want more than a route clip: private personal content, meaningful photos and notes at each stop, a reusable capsule, and a story that remains useful after sharing.",
      },
      {
        question: "When is Cinemaly the better choice?",
        answer:
          "Choose Cinemaly when you want the route, photos, notes, and stop order to remain together as a private travel memory, not only as a finished animation.",
      },
      {
        question: "Does Cinemaly require an account?",
        answer:
          "No. Cinemaly does not require an account, email address, or social profile to create travel capsules.",
      },
    ],
    internalLinks: [
      {
        href: "/blog/travelanimator-vs-cinemaly",
        label: "TravelAnimator vs Cinemaly",
      },
      {
        href: "/blog/best-travel-map-animation-apps",
        label: "Best travel map animation apps",
      },
      { href: "/travel-map-video-maker", label: "Travel map video maker" },
      { href: "/animated-travel-map", label: "Animated travel map" },
      { href: "/private-travel-journal-app", label: "Private travel journal" },
      { href: "/download", label: "Download Cinemaly" },
    ],
    ctaDescription:
      "Download Cinemaly for iPhone or Android and turn your route, photos, notes, and stops into a private cinematic trip story.",
    ctaTiles: ["Photos", "Route", "Capsule"],
    disclaimer:
      "Cinemaly is not affiliated with, endorsed by, or connected to TravelAnimator or Lascade LLC. Product details were checked against official public pages on June 18, 2026 and may change.",
  },
  "anim8map-alternative": {
    slug: "anim8map-alternative",
    lastModified: "2026-06-18",
    title: "An anim8map Alternative for Private Travel Stories",
    description:
      "Looking for an anim8map alternative? Cinemaly keeps routes, photos, notes, and stops together as a private travel capsule and social-ready video.",
    eyebrow: "anim8map alternative",
    h1: "An anim8map Alternative That Preserves the Whole Trip",
    accent: "anim8map alternative",
    intro:
      "A rendered route video is only one version of a journey. Cinemaly keeps the route, selected photos, notes, and stop order together as a private travel capsule before and after the video is shared.",
    proofTitle: "A lasting travel memory, not only a rendered video",
    proofIntro:
      "Use Cinemaly to shape the journey as a private capsule first. The same route story can then become a social-ready video without reducing the entire trip to one final export.",
    features: [
      {
        title: "Portable trip capsule",
        description:
          "Keep the route, photos, notes, and stop order together as a reusable travel memory.",
      },
      {
        title: "Local-first personal content",
        description:
          "Cinemaly does not upload personal capsule content to a Cinemaly server and does not require an account.",
      },
      {
        title: "Mobile creation and sharing",
        description:
          "Build and share cinematic travel stories from Cinemaly on iPhone or Android.",
      },
    ],
    faq: [
      {
        question: "How is Cinemaly different from anim8map?",
        answer:
          "Cinemaly preserves a complete travel memory made from ordered stops, photos, notes, a portable capsule, and a social-ready map video instead of ending with one rendered route file.",
      },
      {
        question: "Why choose Cinemaly instead of anim8map?",
        answer:
          "Choose Cinemaly when you want a complete, reusable trip memory on iPhone or Android, with local-first personal content and photos and notes that remain attached to the route.",
      },
      {
        question: "When is Cinemaly the better choice?",
        answer:
          "Choose Cinemaly when you want the trip to remain organized and reusable after export, especially when privacy, notes, photo context, and a portable capsule matter.",
      },
      {
        question: "Does Cinemaly require an account?",
        answer:
          "No. Cinemaly does not require an account, email address, or social profile to create travel capsules.",
      },
    ],
    internalLinks: [
      {
        href: "/blog/anim8map-vs-cinemaly",
        label: "anim8map vs Cinemaly",
      },
      {
        href: "/blog/best-travel-map-animation-apps",
        label: "Best travel map animation apps",
      },
      { href: "/travel-map-video-maker", label: "Travel map video maker" },
      { href: "/animated-travel-map", label: "Animated travel map" },
      { href: "/private-travel-journal-app", label: "Private travel journal" },
      { href: "/download", label: "Download Cinemaly" },
    ],
    ctaDescription:
      "Download Cinemaly and turn your route, photos, notes, and ordered stops into a private capsule and cinematic map video.",
    ctaTiles: ["Route", "Photos", "Notes"],
    disclaimer:
      "Cinemaly is not affiliated with, endorsed by, or connected to anim8map. Product details were checked against anim8map's official public pages on June 18, 2026 and may change.",
  },
  "animatemytravel-alternative": {
    slug: "animatemytravel-alternative",
    lastModified: "2026-06-18",
    title: "An AnimateMyTravel Alternative for Complete Trip Memories",
    description:
      "Looking for an AnimateMyTravel alternative? Cinemaly adds photos, notes, private capsules, and lasting trip structure to cinematic route videos.",
    eyebrow: "AnimateMyTravel alternative",
    h1: "A Complete-Trip Alternative to AnimateMyTravel",
    accent: "AnimateMyTravel alternative",
    intro:
      "Video resolution does not preserve the meaning of a trip. Cinemaly keeps the route as a complete personal story with photos, notes, ordered stops, and a portable capsule you control.",
    proofTitle: "Keep the meaning behind the map animation",
    proofIntro:
      "A high-resolution route clip is useful for social media. A Cinemaly capsule keeps the material that made the journey personal, then lets you create a cinematic video from the same story.",
    features: [
      {
        title: "Photos and notes in context",
        description:
          "Attach selected memories to the stops where they happened instead of keeping them outside the route.",
      },
      {
        title: "Capsule ownership",
        description:
          "Keep the trip as a portable .cnmly capsule that you control and can share yourself.",
      },
      {
        title: "iPhone and Android apps",
        description:
          "Create cinematic travel memories through a dedicated mobile experience on both major platforms.",
      },
    ],
    faq: [
      {
        question: "Is AnimateMyTravel really free?",
        answer:
          "Its official website currently describes the service as free. Pricing and product claims can change; Cinemaly's key difference is not an export claim but a complete private capsule that preserves the trip beyond one video.",
      },
      {
        question: "How is Cinemaly different from AnimateMyTravel?",
        answer:
          "Cinemaly preserves a complete trip story with ordered stops, photos, notes, a portable capsule, and a social-ready video instead of treating the route export as the whole memory.",
      },
      {
        question: "When should I choose Cinemaly?",
        answer:
          "Choose Cinemaly when the memories attached to each stop matter as much as the animation, or when you want a reusable private capsule rather than only a finished video.",
      },
      {
        question: "Does Cinemaly upload my capsule to a server?",
        answer:
          "No. Cinemaly does not upload personal capsule content, photos, notes, or exported videos to a Cinemaly server.",
      },
    ],
    internalLinks: [
      {
        href: "/blog/animatemytravel-vs-cinemaly",
        label: "AnimateMyTravel vs Cinemaly",
      },
      {
        href: "/blog/best-travel-map-animation-apps",
        label: "Best travel map animation apps",
      },
      { href: "/travel-map-video-maker", label: "Travel map video maker" },
      { href: "/travel-capsule-file", label: "Travel capsule files" },
      { href: "/private-travel-journal-app", label: "Private travel journal" },
      { href: "/download", label: "Download Cinemaly" },
    ],
    ctaDescription:
      "Download Cinemaly for iPhone or Android and preserve the route, photos, notes, and meaning of your trip in one cinematic capsule.",
    ctaTiles: ["Capsule", "Video", "Private"],
    disclaimer:
      "Cinemaly is not affiliated with, endorsed by, or connected to AnimateMyTravel. Product details were checked against AnimateMyTravel's official public pages on June 18, 2026 and may change.",
  },
  "travel-map-replay-alternative": {
    slug: "travel-map-replay-alternative",
    lastModified: "2026-06-18",
    title: "A Travel Map Replay Alternative for Photos, Notes, and Android",
    description:
      "Looking for a Travel Map Replay alternative? Cinemaly creates cinematic routes with photos, notes, private capsules, and support for iPhone and Android.",
    eyebrow: "Travel Map Replay alternative",
    h1: "A Travel Map Replay Alternative That Keeps the Trip Alive",
    accent: "Travel Map Replay alternative",
    intro:
      "A route replay can be watched once and forgotten. Cinemaly turns the journey into a complete travel memory with photos, notes, ordered stops, portable capsules, and support for both iPhone and Android.",
    proofTitle: "From a quick replay to a complete memory",
    proofIntro:
      "Choose Cinemaly when you want to share a cinematic route but also keep a structured version of the journey that can be reopened, backed up, and shared as a capsule.",
    features: [
      {
        title: "Photos and notes at every stop",
        description:
          "Give the route personal context with the memories and details that belong to each place.",
      },
      {
        title: "iPhone and Android",
        description:
          "Create Cinemaly capsules on either major mobile platform instead of relying on an iPhone-only app.",
      },
      {
        title: "Capsule plus video",
        description:
          "Keep a portable trip archive and create a social-ready cinematic map recap from it.",
      },
    ],
    faq: [
      {
        question: "Is Travel Map Replay available on Android?",
        answer:
          "Its current US App Store listing describes Travel Map Replay as an iPhone-only app. Cinemaly is available for both iPhone and Android.",
      },
      {
        question: "What does Travel Map Replay focus on?",
        answer:
          "Its official listing centers on route-video replay. Cinemaly adds the missing travel context: photos, notes, ordered stops, capsules, privacy, and Android support.",
      },
      {
        question: "How is Cinemaly different?",
        answer:
          "Cinemaly keeps photos, notes, route order, and stops together as a private travel capsule, with cinematic video as one shareable output.",
      },
      {
        question: "Does Cinemaly require an account?",
        answer:
          "No. Cinemaly does not require an account, email address, or social profile to create travel capsules.",
      },
    ],
    internalLinks: [
      {
        href: "/blog/travel-map-replay-vs-cinemaly",
        label: "Travel Map Replay vs Cinemaly",
      },
      {
        href: "/blog/best-travel-map-animation-apps",
        label: "Best travel map animation apps",
      },
      { href: "/travel-map-video-maker", label: "Travel map video maker" },
      { href: "/animated-travel-map", label: "Animated travel map" },
      { href: "/travel-capsule-file", label: "Travel capsule files" },
      { href: "/download", label: "Download Cinemaly" },
    ],
    ctaDescription:
      "Download Cinemaly for iPhone or Android and turn your stops, photos, notes, and route into a private capsule and shareable map video.",
    ctaTiles: ["iOS", "Android", "Capsule"],
    disclaimer:
      "Cinemaly is not affiliated with, endorsed by, or connected to Travel Map Replay, TripAnimations.com, or ZephyrLabs. Product details were checked against the official US App Store listing on June 18, 2026 and may change.",
  },
  "visited-countries-map": {
    slug: "visited-countries-map",
    lastModified: "2026-06-29",
    title: "Countries Visited Map Generator With Cities and Travel Stats",
    description:
      "Make a map of countries visited with Cinemaly. Add cities or countries, color your world map, and track travel stats without creating an account.",
    eyebrow: "Visited countries map",
    h1: "Make a Countries Visited Map With Cities and Travel Stats",
    accent: "countries visited map",
    intro:
      "Cinemaly's World tab works as a countries visited map generator for travelers who want more than a plain checklist. Add the places you have been, mark countries on a visual world map, and keep simple travel stats as your map fills in.",
    proofTitle: "A cleaner way to see where you have been",
    proofIntro:
      "Some trips deserve a cinematic capsule. Others deserve a clean overview of everywhere you have already been. Cinemaly gives you both the country-level map and the personal trip memories behind it.",
    features: [
      {
        title: "Visited cities and countries",
        description:
          "Add places you have been and keep them organized as a personal travel record.",
      },
      {
        title: "Highlighted world map",
        description:
          "Visited areas are colored on the map, with point fallbacks when a boundary is not available.",
      },
      {
        title: "Travel stats by country",
        description:
          "See country-level progress and a world travel percentage as your visited list grows.",
      },
    ],
    faq: [
      {
        question: "Can I make a map of countries visited?",
        answer:
          "Yes. Cinemaly's World tab lets you add visited cities or countries and shows them visually on a world map.",
      },
      {
        question: "Is Cinemaly a countries visited map generator?",
        answer:
          "Yes. Use Cinemaly to add places you have visited, highlight countries where available, and track simple country-level travel progress.",
      },
      {
        question: "Does Cinemaly show travel statistics?",
        answer:
          "Yes. The World tab summarizes visited places and countries, including country-level progress and an overall world percentage.",
      },
      {
        question: "Does adding a place require a Cinemaly account?",
        answer:
          "No. Cinemaly does not require an account, login, or backend profile. Place search may send the location query to Nominatim/OpenStreetMap.",
      },
    ],
    internalLinks: [
      { href: "/visited-places-map", label: "Visited places map" },
      { href: "/visited-cities-map", label: "Visited cities map" },
      {
        href: "/blog/how-to-create-visited-places-map",
        label: "Create a map of places visited",
      },
      { href: "/animated-travel-map", label: "Animated travel map" },
      { href: "/road-trip-map-app", label: "Road trip map app" },
      { href: "/private-travel-journal-app", label: "Private travel journal" },
      { href: "/download", label: "Download Cinemaly" },
    ],
    ctaDescription:
      "Download Cinemaly and use the World tab to color the cities and countries you have visited on a personal travel map.",
    ctaTiles: ["Cities", "Countries", "Stats"],
  },
  "visited-places-map": {
    slug: "visited-places-map",
    lastModified: "2026-06-29",
    title: "Visited Places Map Generator for Cities and Countries",
    description:
      "Create a visited places map with Cinemaly. Mark cities, countries, and stops you have visited, see travel stats, and keep memories in private capsules.",
    eyebrow: "Visited places map",
    h1: "Create a Visited Places Map for Cities and Countries",
    accent: "visited places map",
    intro:
      "If you want to create a map of places visited, Cinemaly gives you a simple place to start. Mark cities, countries, and meaningful stops, then keep the bigger picture of your travels alongside private cinematic trip capsules.",
    proofTitle: "One map for the places that shaped your travels",
    proofIntro:
      "A visited places map should be more than a list of pins. Cinemaly helps you see where you have been, remember why those places mattered, and turn special journeys into route stories when they deserve more detail.",
    features: [
      {
        title: "Mark cities and countries",
        description:
          "Add the places you have visited and build a visual record of your travel history.",
      },
      {
        title: "Keep stats and context",
        description:
          "Use the World tab for travel progress and capsules for the photos, notes, and route behind individual trips.",
      },
      {
        title: "Private by default",
        description:
          "Cinemaly does not require an account and does not upload personal capsule content to a Cinemaly server.",
      },
    ],
    faq: [
      {
        question: "How do I create a map of places visited?",
        answer:
          "Open Cinemaly, add the cities or countries you have visited in the World tab, and use capsules when a specific trip needs photos, notes, and a cinematic route story.",
      },
      {
        question: "Can I mark cities visited on a map?",
        answer:
          "Yes. Cinemaly lets you add visited cities and keep them as part of your broader travel map.",
      },
      {
        question: "Is this also a countries visited map generator?",
        answer:
          "Yes. Cinemaly can help you track visited countries, visited cities, and meaningful places from the same travel-memory system.",
      },
      {
        question: "Do I need a Cinemaly account?",
        answer:
          "No. Cinemaly does not require an account, email address, or social profile to create travel memories.",
      },
    ],
    internalLinks: [
      { href: "/visited-countries-map", label: "Countries visited map" },
      { href: "/visited-cities-map", label: "Visited cities map" },
      {
        href: "/blog/how-to-create-visited-places-map",
        label: "How to create a visited places map",
      },
      { href: "/private-travel-journal-app", label: "Private travel journal" },
      { href: "/animated-travel-map", label: "Animated travel map" },
      { href: "/download", label: "Download Cinemaly" },
    ],
    ctaDescription:
      "Download Cinemaly and start building a private visual map of the cities, countries, and places you have visited.",
    ctaTiles: ["Places", "Cities", "Stats"],
  },
  "visited-cities-map": {
    slug: "visited-cities-map",
    lastModified: "2026-06-29",
    title: "Visited Cities Map Generator for Your Travel Memories",
    description:
      "Use Cinemaly as a visited cities map generator. Mark cities visited, connect them into trips, add photos and notes, and build private travel capsules.",
    eyebrow: "Visited cities map",
    h1: "Create a Visited Cities Map With Photos, Routes, and Stats",
    accent: "visited cities map",
    intro:
      "A visited cities map gives your travel history more texture than a country count alone. Add cities you have visited, connect important stops into cinematic trip capsules, and keep your travel memories organized without a social profile.",
    proofTitle: "Cities make the map feel personal",
    proofIntro:
      "Countries show scale. Cities hold the actual memories. Cinemaly brings both together so your map can show progress while your capsules preserve the stories behind the stops.",
    features: [
      {
        title: "City-level travel record",
        description:
          "Mark cities visited on a map and keep them organized as part of your long-term travel history.",
      },
      {
        title: "Routes for special trips",
        description:
          "Turn a set of city stops into a cinematic travel capsule with route order, photos, and notes.",
      },
      {
        title: "No live tracking required",
        description:
          "Add places manually when you want control, privacy, and a cleaner post-trip memory.",
      },
    ],
    faq: [
      {
        question: "What is a visited cities map generator?",
        answer:
          "It is a tool for marking cities you have visited on a map. Cinemaly also lets you connect selected cities into private route-based travel capsules.",
      },
      {
        question: "Can I mark cities visited without live tracking?",
        answer:
          "Yes. Cinemaly is built around intentional place entry and post-trip memory creation, not mandatory background GPS tracking.",
      },
      {
        question: "Can I turn visited cities into a travel video?",
        answer:
          "Yes. For a specific journey, you can add ordered stops, photos, and notes, then create a cinematic map-based trip story.",
      },
    ],
    internalLinks: [
      { href: "/visited-places-map", label: "Visited places map" },
      { href: "/visited-countries-map", label: "Countries visited map" },
      {
        href: "/blog/how-to-create-visited-places-map",
        label: "Create a map of places visited",
      },
      { href: "/road-trip-map-app", label: "Road trip map app" },
      { href: "/travel-map-video-maker", label: "Travel map video maker" },
      { href: "/download", label: "Download Cinemaly" },
    ],
    ctaDescription:
      "Download Cinemaly and mark the cities you have visited, then turn your best routes into cinematic travel memories.",
    ctaTiles: ["Cities", "Routes", "Photos"],
  },
  "road-trip-map-app": {
    slug: "road-trip-map-app",
    lastModified: "2026-06-29",
    title: "Create a Cinematic Road Trip Map With Photos and Stops",
    description:
      "Use Cinemaly as a road trip map app to turn routes, stops, photos, and notes into cinematic travel map capsules and videos.",
    eyebrow: "Road trip map app",
    h1: "Create a Cinematic Road Trip Map With Photos, Stops, and Distance",
    accent: "road trip map",
    intro:
      "Road trips are about the path as much as the destination. Cinemaly helps you keep that sequence visible by turning stops, photos, and notes into a map-based trip story.",
    proofTitle: "Built for journeys with shape",
    proofIntro:
      "A road trip loses meaning when it becomes a folder of random photos. Cinemaly keeps the order, geography, and pacing together.",
    features: [
      {
        title: "Stop order matters",
        description:
          "Build the route in the same order you traveled so the story has momentum.",
      },
      {
        title: "Photos in context",
        description:
          "Attach images to the places that make them meaningful.",
      },
      {
        title: "Shareable recap",
        description:
          "Turn the route into a capsule or travel map video for friends and family.",
      },
    ],
    faq: [
      {
        question: "Can I use Cinemaly for a multi-stop road trip?",
        answer:
          "Yes. Cinemaly is designed for ordered stops, route stories, photos, and notes.",
      },
      {
        question: "Can I add photos to each stop?",
        answer:
          "Yes. You can attach photos and notes to the places in your trip.",
      },
      {
        question: "Is Cinemaly available on iPhone and Android?",
        answer:
          "Yes. Cinemaly is available from the App Store and Google Play.",
      },
    ],
    internalLinks: [
      { href: "/animated-travel-map", label: "Animated travel map" },
      { href: "/travel-map-video-maker", label: "Travel map video maker" },
      { href: "/visited-places-map", label: "Visited places map" },
      { href: "/visited-cities-map", label: "Visited cities map" },
      { href: "/visited-countries-map", label: "Visited countries map" },
      { href: "/download", label: "Download Cinemaly" },
    ],
  },
  "travel-capsule-file": {
    slug: "travel-capsule-file",
    lastModified: "2026-06-29",
    title: "What Is a Cinemaly Travel Capsule?",
    description:
      "Learn what a Cinemaly travel capsule is, how .cnmly files work, and how they keep your route, photos, notes, and memories portable.",
    eyebrow: "Travel capsule file",
    h1: "What Is a Cinemaly Travel Capsule?",
    accent: "travel capsule",
    intro:
      "A Cinemaly travel capsule is a portable trip archive. It brings together your route, ordered stops, notes, photos, and director settings so the journey can be kept or shared as one private memory file.",
    proofTitle: "One trip, one portable archive",
    proofIntro:
      "The .cnmly format is designed for mobile sharing and opening inside Cinemaly. It is not just a photo album; it is the trip structure and the memories together.",
    features: [
      {
        title: "Route and stops",
        description:
          "Keep the order of the journey inside the capsule, not just the photos.",
      },
      {
        title: "Photos and notes",
        description:
          "Store the media and context that make each stop meaningful.",
      },
      {
        title: "Open in Cinemaly",
        description:
          "Friends can open a shared capsule with Cinemaly on their device.",
      },
    ],
    faq: [
      {
        question: "What is a .cnmly file?",
        answer:
          "A .cnmly file is a Cinemaly travel capsule that packages route, stops, notes, photos, and related trip data for opening in Cinemaly.",
      },
      {
        question: "Can any browser open a .cnmly capsule?",
        answer:
          "No. The mobile .cnmly capsule format is intended to open with Cinemaly.",
      },
      {
        question: "Why use a capsule instead of a photo album?",
        answer:
          "A capsule keeps the route, order, notes, and photos together so the trip still feels like a journey.",
      },
    ],
    internalLinks: [
      { href: "/private-travel-journal-app", label: "Private travel journal" },
      { href: "/animated-travel-map", label: "Animated travel map" },
      { href: "/visited-places-map", label: "Visited places map" },
      { href: "/visited-countries-map", label: "Visited countries map" },
      { href: "/download", label: "Download Cinemaly" },
    ],
  },
  "director-mode": {
    slug: "director-mode",
    title: "Cinemaly Director Mode for Cinematic Travel Stories",
    description:
      "Explore Cinemaly Director Mode for cinematic map themes, camera styles, aura colors, and richer travel capsule creation.",
    eyebrow: "Director Mode",
    h1: "Unlock More Cinematic Control With Director Mode",
    accent: "Director Mode",
    intro:
      "Director Mode is for travelers who want more creative control over how their trip feels. It expands the cinematic side of Cinemaly with richer map styling and presentation options.",
    proofTitle: "More control over the mood",
    proofIntro:
      "Use Director Mode when the default capsule is not enough and you want the travel story to feel more personal, polished, or dramatic.",
    features: [
      {
        title: "Cinematic themes",
        description:
          "Choose a stronger visual mood for the map journey and memory archive.",
      },
      {
        title: "Camera styles",
        description:
          "Use more expressive movement styles for map-based playback.",
      },
      {
        title: "Expanded creation",
        description:
          "Build richer capsules for longer or more carefully framed trips.",
      },
    ],
    faq: [
      {
        question: "What is Director Mode?",
        answer:
          "Director Mode is Cinemaly's expanded creative mode for richer cinematic travel capsule creation.",
      },
      {
        question: "Do I need Director Mode to start?",
        answer:
          "No. You can start creating Cinemaly travel capsules before deciding whether you want expanded creative controls.",
      },
      {
        question: "Is Director Mode available on mobile?",
        answer:
          "Director Mode is part of the Cinemaly mobile app experience for supported iPhone and Android versions.",
      },
    ],
    internalLinks: [
      { href: "/travel-map-video-maker", label: "Travel map video maker" },
      { href: "/travel-capsule-file", label: "Travel capsule files" },
      { href: "/download", label: "Download Cinemaly" },
    ],
  },
} satisfies Record<string, SeoLandingPageData>;

export const seoLandingPageList: SeoLandingPageData[] =
  Object.values(seoLandingPages);
