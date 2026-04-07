import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pachinko & Pachislot Quick Guide",
  description: "Multilingual beginner guide for pachinko and pachislot in Japan. Learn how to play, the rules, prizes, and common trouble tips.",
  openGraph: {
    title: "Pachinko & Pachislot Quick Guide",
    description:
      "Multilingual beginner guide for first-time players in Japan.",
    url: "https://quickref-pwa.vercel.app",
    siteName: "Pachinko & Pachislot Quick Guide",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}