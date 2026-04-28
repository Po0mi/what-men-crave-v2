import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import "@/styles/global.scss";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

// 1. Headlines: Newsreader (Serif) - Elegant, Editorial, Trustworthy
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, SemiBold
  style: ["normal", "italic"], // Important for emotional emphasis
  display: "swap",
});

// 2. Body: Inter (Sans-Serif) - Clean, Highly Legible, Modern
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, SemiBold
  display: "swap",
});

export const metadata: Metadata = {
  title: "What Men Crave (But Will Never Ask For) | Mat Shaffer",
  description:
    "Discover the 7 Unspoken Cravings that turn physical intimacy into deep emotional connection. The complete guide for women who want to be truly wanted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
