import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavLogo from "@/components/NavLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cinemaly — Turn Your Travel Into a Cinematic Documentary",
    template: "%s | Cinemaly",
  },
  description:
    "Create animated 3D travel routes and map your photos with Cinemaly. A free, interactive travel map generator. No login, no server, 100% private.",
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
    title: "Cinemaly — Turn Your Travel Into a Cinematic Documentary",
    description:
      "Upload your photos and travel route. Get a stunning, interactive cinematic map — compiled entirely in your browser.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cinemaly — Cinematic Travel Documentary",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cinemaly — Turn Your Travel Into a Cinematic Documentary",
    description:
      "Upload your photos and travel route. Get a stunning, interactive cinematic map — compiled entirely in your browser.",
    images: ["/og-image.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Cinemaly",
              url: "https://cinemaly.app",
              description:
                "Transform your travel photos and route into an interactive cinematic map documentary. No login, no server, zero data stored.",
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
                "Zero data stored",
                "Offline capable",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NavLogo />
        {children} <Footer />
      </body>
    </html>
  );
}
