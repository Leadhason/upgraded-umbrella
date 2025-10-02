import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./scrollbar-hide.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Empire Sports Agency | Premier Athletic Management",
  description: "Empire Sports Agency is a premier global sports management firm dedicated to elite athlete representation, contract negotiation, marketing, and brand development for professional athletes worldwide.",
  keywords: "sports agency, athlete management, sports marketing, athlete representation, sports contracts, professional sports, talent management",
  authors: [{ name: "Empire Sports Agency" }],
  openGraph: {
    title: "Empire Sports Agency | Premier Athletic Management",
    description: "Dedicated to enhancing both the athletic performance and brand stature of our esteemed client-partners worldwide.",
    url: "https://empiresportsagency.com",
    siteName: "Empire Sports Agency",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
