import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://anand-mohan-dubey.vercel.app/#person",
        name: "Anand Mohan Dubey",
        jobTitle: "Full Stack Developer",
        url: "https://anand-mohan-dubey.vercel.app",
        sameAs: [
          "https://github.com/Smartanandmohan",
          "https://www.linkedin.com/in/anandmohandubey/",
          "https://twitter.com/anandmohandubey"
        ],
        image: "https://anand-mohan-dubey.vercel.app/brand-logo.png",
      },
      {
        "@type": "WebSite",
        "@id": "https://anand-mohan-dubey.vercel.app/#website",
        url: "https://anand-mohan-dubey.vercel.app",
        name: "Anand Mohan Dubey | Full Stack Developer Portfolio",
        publisher: {
          "@id": "https://anand-mohan-dubey.vercel.app/#person"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
