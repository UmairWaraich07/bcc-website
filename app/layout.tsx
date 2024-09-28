import type { Metadata } from "next";
import { Raleway, Irish_Grover as IrishGrover } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const irishGrover = IrishGrover({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-irish-grover",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloggers Chamber of Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${irishGrover.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}

          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}
