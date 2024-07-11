import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ResumeJake",
  description: "Jake will generate your resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            {children}
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
