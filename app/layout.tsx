import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://biyodeniz.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BiyoDeniz — Denizden Gelen, Denizi Koruyan Ambalaj",
  description:
    "Kırmızı deniz yosunlarından elde edilen %100 biyobozunur ambalajlarla plastik kirliliğine sürdürülebilir çözüm. YTÜ Ar-Ge · İstanbul.",
  keywords: [
    "biyobozunur ambalaj",
    "deniz yosunu",
    "biyoplastik",
    "sürdürülebilir ambalaj",
    "BiyoDeniz",
    "agar",
    "plastik kirliliği",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "BiyoDeniz",
    title: "BiyoDeniz — Denizden Gelen, Denizi Koruyan Ambalaj",
    description:
      "Kırmızı deniz yosunlarından %100 biyobozunur ambalajlar. Plastik kirliliğine sürdürülebilir çözüm.",
    images: [{ url: "/logo2.jpeg", width: 1200, height: 630, alt: "BiyoDeniz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BiyoDeniz — Denizden Gelen, Denizi Koruyan Ambalaj",
    description:
      "Kırmızı deniz yosunlarından %100 biyobozunur ambalajlar. Plastik kirliliğine sürdürülebilir çözüm.",
    images: ["/logo2.jpeg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
