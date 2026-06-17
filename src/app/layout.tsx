import type { Metadata, Viewport } from "next";
import { Figtree, Caveat } from "next/font/google";
import { Providers } from "@/components/Providers";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { MetaPixel } from "@/components/MetaPixel";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, ogImageUrl, siteConfig } from "@/lib/seo";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  applicationName: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: ogImageUrl(),
        width: 1200,
        height: 630,
        alt: siteConfig.title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: ogImageUrl(),
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon",
    apple: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${caveat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-foreground antialiased">
        <JsonLd />
        <GoogleAnalytics />
        <MetaPixel />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
