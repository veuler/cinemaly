/**
 * Cinemaly — Privacy Policy (English).
 * Review with qualified counsel before store submission; update "lastUpdated" when you change practices.
 */

export const PRIVACY_POLICY_LAST_UPDATED = "April 3, 2026";

export type PrivacyPolicySection = {
  title: string;
  paragraphs: string[];
};

export const privacyPolicySectionsEn: PrivacyPolicySection[] = [
  {
    title: "Introduction",
    paragraphs: [
      'Cinemaly ("we", "us", "our") provides a mobile application (the "App") for creating and viewing cinematic travel capsules on your device. This Privacy Policy explains how information is handled when you use the App. By using the App, you agree to this policy.',
      "We do not operate user accounts or logins in the App. We do not run our own backend that stores your capsule content, photos, or journals for you.",
    ],
  },
  {
    title: "Information stored on your device",
    paragraphs: [
      "Capsules, images, notes, and related files you create are processed and stored locally on your device, unless you explicitly export or share them using your device’s share sheet, files, messaging apps, or other services you choose.",
      "We do not upload your capsule media or personal creative content to Cinemaly-operated servers for storage or backup. You are responsible for keeping your own backups if you need them.",
    ],
  },
  {
    title: "We do not use the App for user tracking or profiling",
    paragraphs: [
      "The App is not designed to track you across other companies’ apps or websites for advertising. We do not sell your personal information.",
      "If we introduce optional analytics or similar tools in the future, we will update this policy and, where required, obtain appropriate consent before enabling them.",
    ],
  },
  {
    title: "Location and place search (internet request)",
    paragraphs: [
      "When you search for a place or city name to position a scene on the map, the App sends that search text over the internet to a public geocoding service (OpenStreetMap’s Nominatim API) to retrieve coordinates. That request is handled by the operator of that service and may be subject to their own logging and privacy practices.",
      "We do not tie those requests to a Cinemaly user account (the App has no accounts). The query reflects what you type in the search field.",
    ],
  },
  {
    title: "Optional Pro purchase (Apple / Google)",
    paragraphs: [
      "If you purchase optional Pro access, payment is processed by Apple (App Store) or Google (Google Play) through their in-app purchase systems. We do not receive your full payment card number.",
      "Apple or Google may process purchase-related information according to their privacy policies. You should review their terms and privacy notices for your platform.",
      "To validate purchases and unlock Pro features, the App may use subscription infrastructure such as RevenueCat (or comparable services). Those providers may process technical identifiers related to the transaction and device in line with their own privacy policies. We use this only to deliver the features you paid for, not to build advertising profiles.",
    ],
  },
  {
    title: "Support contact",
    paragraphs: [
      "If you email us for support (e.g. at contact@cinemaly.app), we receive the information you include in your message (such as your email address and the contents of your email). We use that only to respond and improve support, unless a longer retention period is required by law.",
    ],
  },
  {
    title: "Children and families",
    paragraphs: [
      "The App is not specifically designed as a product for young children. We do not knowingly collect personal information from children through the App for our own marketing or profiling.",
      "If you are a parent or guardian and you believe your child has contacted us (for example by email) in a way that raises a privacy concern, please write to contact@cinemaly.app and we will respond appropriately.",
    ],
  },
  {
    title: "International users",
    paragraphs: [
      "If you use the App from the European Economic Area, United Kingdom, or other regions with local privacy laws, you may have rights to access, correct, delete, or restrict certain processing, depending on applicable law. Because we do not maintain user accounts or a central profile of your capsule content on our servers, much of your data exists only on your device under your control.",
      "To exercise rights or ask questions, contact us at contact@cinemaly.app. You may also lodge a complaint with your local data protection authority.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "We may update this Privacy Policy from time to time. We will post the updated version in the App (e.g. under Help) and revise the “Last updated” date. Continued use of the App after changes means you accept the updated policy, except where applicable law requires additional steps.",
    ],
  },
  {
    title: "Contact",
    paragraphs: ["Questions about this Privacy Policy: contact@cinemaly.app"],
  },
];
