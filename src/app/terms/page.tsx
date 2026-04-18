import { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import {
  TERMS_LAST_UPDATED,
  termsOfUseSectionsEn,
} from "../../../legal/termsOfUseEn";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Cinemaly Terms of Use.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use — Cinemaly",
    description: "Cinemaly Terms of Use.",
    url: "/terms",
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

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Use"
      lastUpdated={TERMS_LAST_UPDATED}
      sections={termsOfUseSectionsEn}
    />
  );
}
