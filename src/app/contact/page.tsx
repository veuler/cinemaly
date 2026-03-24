import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact - Cinemaly",
    description: "Get in touch with us.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cinemaly - Cinematic Travel Documentation",
      },
    ],
  },
};

export default function Contact() {
  return <ContactClient />;
}
