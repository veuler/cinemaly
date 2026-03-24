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
  },
};

export default function Contact() {
  return <ContactClient />;
}
