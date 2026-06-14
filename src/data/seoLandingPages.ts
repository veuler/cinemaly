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
  disclaimer?: string;
};

export const seoLandingPages = {
  "animated-travel-map": {
    slug: "animated-travel-map",
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
      { href: "/road-trip-map-app", label: "Road trip map app" },
      { href: "/download", label: "Download Cinemaly" },
    ],
  },
  "travel-map-video-maker": {
    slug: "travel-map-video-maker",
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
      { href: "/private-travel-journal-app", label: "Private travel journal" },
      { href: "/download", label: "Download Cinemaly" },
    ],
  },
  "private-travel-journal-app": {
    slug: "private-travel-journal-app",
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
      { href: "/download", label: "Download Cinemaly" },
    ],
  },
  "polarsteps-alternative": {
    slug: "polarsteps-alternative",
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
      { href: "/download", label: "Download Cinemaly" },
    ],
    disclaimer:
      "Cinemaly is not affiliated with, endorsed by, or connected to Polarsteps.",
  },
  "road-trip-map-app": {
    slug: "road-trip-map-app",
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
      { href: "/download", label: "Download Cinemaly" },
    ],
  },
  "travel-capsule-file": {
    slug: "travel-capsule-file",
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

export const seoLandingPageList = Object.values(seoLandingPages);
