import { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import {
  TERMS_LAST_UPDATED,
  termsOfUseSectionsEn,
} from "../../../legal/termsOfUseEn";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing your use of Cinemaly’s free, browser-based travel documentation tools, including acceptable use, disclaimers, limitations of liability, and how the service is provided without requiring an account.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use — Cinemaly",
    description:
      "Read the terms for using Cinemaly: rules for the editor and shared content, intellectual property, disclaimer of warranties, and limitation of liability.",
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
