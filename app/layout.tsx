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
  title: "Empire Sports Agency | Premier Football Management",
  description: "Empire Sports Agency is a premier global football agency dedicated to elite soccer player representation, transfer negotiation, marketing, and brand development for professional footballers worldwide.",
  keywords: "football agency, soccer agency, player management, football marketing, player representation, transfer negotiations, professional soccer, talent management, FIFA agent",
  authors: [{ name: "Empire Sports Agency" }],
  openGraph: {
    title: "Empire Sports Agency | Premier Football Management",
    description: "Dedicated to enhancing both the on-pitch performance and brand stature of our esteemed football client-partners worldwide.",
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
