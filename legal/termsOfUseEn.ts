/**
 * Cinemaly — Terms of Use (English).
 * Have counsel review before relying on this for store or disputes; update TERMS_LAST_UPDATED when you change terms.
 */

export const TERMS_LAST_UPDATED = "April 3, 2026";

export type TermsSection = {
  title: string;
  paragraphs: string[];
};

export const termsOfUseSectionsEn: TermsSection[] = [
  {
    title: "Agreement",
    paragraphs: [
      'These Terms of Use ("Terms") govern your use of the Cinemaly mobile application (the "App") and related materials we make available. By downloading, accessing, or using the App, you agree to these Terms. If you do not agree, do not use the App.',
      "We may update these Terms from time to time. The “Last updated” date at the top will change when we do. Continued use after an update means you accept the revised Terms, except where applicable law requires a different process (for example, additional notice or consent).",
    ],
  },
  {
    title: "The service",
    paragraphs: [
      "Cinemaly lets you create, view, and organize cinematic travel “capsules” on your device using maps, photos, notes, and related features described in the App.",
      "The App does not require a Cinemaly user account. Your capsule content is processed and stored locally on your device unless you choose to export or share it through your device’s share sheet, files, cloud providers, messaging apps, or other third-party services.",
      "We do not operate a Cinemaly-hosted cloud backup of your capsule library. You are responsible for your own backups and for any copies you share outside the App.",
    ],
  },
  {
    title: "Eligibility",
    paragraphs: [
      "You must be legally able to enter a binding contract in your place of residence to use the App. If you use the App on behalf of an organization, you represent that you have authority to bind that organization.",
    ],
  },
  {
    title: "Optional Pro features and payments",
    paragraphs: [
      "Some features may be offered as optional paid “Pro” access. Purchases are processed by Apple (App Store) or Google (Google Play) through their in-app purchase systems. Prices, taxes, and renewal rules (if any) are shown at the time of purchase and are subject to the store’s terms.",
      "Refunds and billing disputes for digital purchases are handled according to Apple’s or Google’s policies, not by Cinemaly directly. We may use subscription tooling (such as RevenueCat) solely to validate purchases and unlock features in the App.",
    ],
  },
  {
    title: "License to use the App",
    paragraphs: [
      "Subject to these Terms, we grant you a personal, limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, in line with the platform rules of Apple and Google.",
      "You may not copy, modify, distribute, sell, lease, or reverse engineer the App or attempt to extract its source code, except to the extent applicable law expressly allows despite this limitation.",
    ],
  },
  {
    title: "Your content and conduct",
    paragraphs: [
      "You retain your rights in the photos, text, and other material you add to capsules. You are responsible for that content and for ensuring you have the rights and permissions needed to use it in the App.",
      "You agree not to use the App for unlawful purposes, to infringe others’ rights, to upload malware, to harass others, or to interfere with the App’s operation or security.",
      "When the App sends a place-name search over the internet (for example to a public geocoding service), you are responsible for what you type and for complying with that third party’s acceptable use rules.",
    ],
  },
  {
    title: "Third-party services and maps",
    paragraphs: [
      "The App may rely on third-party services (including map data, geocoding, and platform services). Those services have their own terms and privacy practices. Your use of them through the App is also subject to their rules where applicable.",
    ],
  },
  {
    title: "Disclaimer of warranties",
    paragraphs: [
      'To the fullest extent permitted by applicable law, the App is provided "as is" and "as available" without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      "We do not warrant that the App will be uninterrupted, error-free, or free of harmful components, or that map or location data will always be accurate or complete.",
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, Cinemaly and its owners, contractors, and suppliers will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, goodwill, or business opportunities, arising out of or related to your use of the App.",
      "To the fullest extent permitted by applicable law, our total liability for any claim arising out of or relating to the App or these Terms is limited to the greater of (a) the amount you paid to unlock Pro features in the twelve (12) months before the claim, or (b) twenty-five euros (€25), if you paid nothing.",
      "Some jurisdictions do not allow certain limitations; in those cases, our liability is limited to the minimum extent permitted by law.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "You may stop using the App at any time by uninstalling it. We may suspend or discontinue the App or any part of it, or stop supporting an old version, where reasonably necessary (for example for security or legal compliance).",
    ],
  },
  {
    title: "Governing law and disputes",
    paragraphs: [
      "These Terms are governed by the laws of Turkey, without regard to conflict-of-law principles, except that mandatory consumer protection rules in your country of residence may apply where they cannot be waived by contract.",
      "Subject to those mandatory rules, you agree that the courts of Istanbul, Turkey shall have exclusive jurisdiction over disputes arising from these Terms or the App, unless applicable law requires a different venue for consumers.",
    ],
  },
  {
    title: "Miscellaneous",
    paragraphs: [
      "If any provision of these Terms is held invalid, the remaining provisions remain in effect. Our failure to enforce a provision is not a waiver.",
      "These Terms, together with our Privacy Policy (shown in the App), are the entire agreement between you and Cinemaly regarding the App.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these Terms: contact@cinemaly.app",
    ],
  },
];
