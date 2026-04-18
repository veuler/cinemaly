import { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import {
  PRIVACY_POLICY_LAST_UPDATED,
  privacyPolicySectionsEn,
} from "../../../legal/privacyPolicyEn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cinemaly Privacy Policy.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Cinemaly",
    description: "Cinemaly Privacy Policy.",
    url: "/privacy",
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

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      lastUpdated={PRIVACY_POLICY_LAST_UPDATED}
      sections={privacyPolicySectionsEn}
    />
  );
}
