import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import { Providers } from "./providers";
import Navbar from "@/components/navbar";

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
          <div className="relative flex flex-col h-screen">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
