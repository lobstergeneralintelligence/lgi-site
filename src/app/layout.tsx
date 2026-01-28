import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lobster General Intelligence | From the Ocean Floor",
  description: "Autonomous systems built on patience, persistence, and the compounding wisdom of the deep. We don't age. We compound.",
  keywords: ["AI", "autonomous agents", "market making", "crypto", "lobster", "LGI"],
  authors: [{ name: "Lobster General Intelligence" }],
  icons: {
    icon: "/lobster.png",
    shortcut: "/lobster.png",
    apple: "/lobster.png",
  },
  openGraph: {
    title: "Lobster General Intelligence",
    description: "Autonomous systems from the ocean floor. We don't age. We compound.",
    type: "website",
    images: ["/lobster.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lobster General Intelligence",
    description: "Autonomous systems from the ocean floor. We don't age. We compound.",
    images: ["/lobster.png"],
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
