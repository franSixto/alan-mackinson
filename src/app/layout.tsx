import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import GlobalPlayer from "@/components/layout/GlobalPlayer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Mackinson | Composer",
  description: "Official portfolio of composer Alan Mackinson.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <GlobalPlayer />
      </body>
    </html>
  );
}
