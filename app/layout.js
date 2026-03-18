// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shri Kipra - Digital Marketing & Branding Agency",
  description:
    "Transform your brand with Shri Kipra - Expert digital marketing, SEO, branding, and business growth solutions. Results-driven strategies for modern businesses.",
  keywords:
    "digital marketing agency, SEO services, performance marketing, branding agency, social media marketing",
  authors: [{ name: "Shri Kipra" }],
  openGraph: {
    title: "Shri Kipra - Digital Marketing & Branding Agency",
    description:
      "Transform your brand with expert digital marketing, SEO, and branding solutions.",
    url: "https://shrikipra.com",
    siteName: "Shri Kipra",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Kipra - Digital Marketing & Branding Agency",
    description:
      "Transform your brand with expert digital marketing, SEO, and branding solutions.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
