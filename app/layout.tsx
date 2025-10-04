import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./scrollbar-hide.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
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
        className={`${roboto.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
