
import type { Metadata } from "next";

import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReserveSeatProvider } from "@/components/ReserveSeatModal";

export const metadata: Metadata = {
  metadataBase: new URL("https://thinkydna.in"),

  title: {
    default: "thinkydna | Event Studio & Brand Experiences",
    template: "%s | thinkydna",
  },

  description:
    "thinkydna is an event studio creating events, brand experiences, live gatherings, and memorable experiences from first idea to last encore.",

  keywords: [
    "thinkydna",
    "event studio",
    "event production",
    "brand experiences",
    "events",
    "live events",
    "event management",
    "event production company",
    "brand activations",
    "live experiences",
  ],

  authors: [
    {
      name: "thinkydna",
      url: "https://thinkydna.in",
    },
  ],

  creator: "thinkydna",
  publisher: "thinkydna",

  alternates: {
    canonical: "https://thinkydna.in",
  },

  icons: {
    icon: [
      {
        url: "/images/thinkydna.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/thinkydna.png",
    apple: "/images/thinkydna.png",
  },

  // WhatsApp, Facebook, LinkedIn and other social previews
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thinkydna.in",
    siteName: "thinkydna",

    title: "thinkydna | Event Studio & Brand Experiences",

    description:
      "We design, produce, and run events, brand experiences, and live gatherings from first idea to last encore.",

    images: [
      {
        url: "/images/thinkydna.png",
        width: 1200,
        height: 630,
        alt: "thinkydna — Event Studio & Brand Experiences",
      },
    ],
  },

  // Twitter / X social preview
  twitter: {
    card: "summary_large_image",

    title: "thinkydna | Event Studio & Brand Experiences",

    description:
      "Creating events, brand experiences, and live gatherings from first idea to last encore.",

    images: ["/images/thinkydna.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body>
        <ReserveSeatProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </ReserveSeatProvider>
      </body>
    </html>
  );
}

