import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Lexend_Giga, Lexend_Tera } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import NavLogo from "@/components/NavLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexendGiga = Lexend_Giga({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend-giga", // Tailwind için variable ismi
});

const lexendTera = Lexend_Tera({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend-tera",
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Cinemaly - Cinematic Travel Maps for iPhone and Android",
    template: "%s | Cinemaly",
  },
  description:
    "Create cinematic travel map capsules and social-ready travel videos with Cinemaly for iPhone and Android. Add trip photos, routes, stops, and notes.",
  keywords: [
    "create animated travel map",
    "how to map travel photos",
    "interactive travel route generator",
    "3d travel map animation maker",
    "cinematic travel map generator",
    "travel photo tracking map",
    "travel vlog map animation free",
    "indiana jones travel map maker",
    "travel documentary",
    "animate travel route for video",
    "free travel map visualizer",
    "interactive travel map",
    "cinematic travel photos",
    "offline travel map generator",
    "personal travel gallery",
    "private travel journal map",
    "offline photo map",
    "travel route visualizer",
    "travel memory capsule",
    "visited countries map",
    "visited cities map",
    "world travel map app",
    "no login photo app",
    "privacy first travel app",
    "maplibre travel",
  ],

  authors: [{ name: "Cinemaly", url: "https://cinemaly.app" }],
  creator: "Cinemaly",
  publisher: "Cinemaly",

  manifest: "/site.webmanifest",

  metadataBase: new URL("https://cinemaly.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cinemaly.app",
    siteName: "Cinemaly",
    title: "Cinemaly - Cinematic Travel Maps for iPhone and Android",
    description:
      "Create private cinematic travel map capsules and social-ready travel videos from your trip photos, routes, stops, and notes.",
    images: [
      {
        url: "https://cinemaly.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cinemaly - Cinematic Travel Maps",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cinemaly - Cinematic Travel Maps for iPhone and Android",
    description:
      "Create private cinematic travel map capsules and social-ready travel videos from your trip photos, routes, stops, and notes.",
    images: ["/opengraph-image.png"],
  },

  applicationName: "Cinemaly",
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexendGiga.variable} ${lexendTera.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Cinemaly Blog"
          href="/feed.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Cinemaly",
              url: "https://cinemaly.app",
              description:
                "Transform your travel photos, routes, stops, and notes into cinematic travel map capsules and videos.",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Interactive travel map",
                "Cinematic photo gallery",
                "No login required",
                "No Cinemaly backend for personal capsule content",
                "iPhone and Android app",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Cinemaly",
              operatingSystem: "Android, iOS",
              applicationCategory: "TravelApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              downloadUrl: [
                "https://apps.apple.com/us/app/cinemaly/id6763919834",
                "https://play.google.com/store/apps/details?id=com.veulerv.cinemaly",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NavLogo />
        {children} <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
