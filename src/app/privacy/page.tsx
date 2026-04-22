import { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import {
  PRIVACY_POLICY_LAST_UPDATED,
  privacyPolicySectionsEn,
} from "../../../legal/privacyPolicyEn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Cinemaly collects, uses, and protects information when you use the browser-based travel map editor, including local processing, optional analytics, and your choices regarding data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Cinemaly",
    description:
      "How Cinemaly handles data when you build cinematic travel maps: what runs in your browser, what we may receive, and how you can control your privacy.",
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
