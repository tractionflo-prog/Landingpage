import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import { Providers } from "@/components/Providers";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TractionFlo — Intelligent workflows for business growth",
  description:
    "Turn comments, DMs and followers into leads, follow-ups and customers — without complex builders or setup headaches.",
  openGraph: {
    title: "TractionFlo — Intelligent workflows for business growth",
    description:
      "Same outcomes. 10× simpler. Help businesses grow with intelligent workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-foreground antialiased">
        <GoogleAnalytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
