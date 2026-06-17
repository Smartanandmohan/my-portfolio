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
        "name": "Anand Mohan Dubey",
        "alternateName": ["Anand Mohan", "Anand Dubey"],
        "jobTitle": "Full Stack Developer",
        "url": "https://anand-mohan-dubey.vercel.app",
        "email": "dubeyanand7255@gmail.com",
        "telephone": "+917255943294",
        "gender": "Male",
        "image": "https://anand-mohan-dubey.vercel.app/brand-logo.png",
        "sameAs": [
          "https://github.com/Smartanandmohan",
          "https://www.linkedin.com/in/anandmohandubey/",
          "https://twitter.com/anandmohandubey",
          "https://www.instagram.com/smart_anand_mohan",
          "https://www.facebook.com/share/1EFmE2h4A1/"
        ],
        "knowsAbout": [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "Software Development",
          "Web Development",
          "App Development",
          "UI/UX Design",
          "SaaS Development",
          "Frontend Engineering",
          "Robotics",
          "Artificial Intelligence"
        ],
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "IIT Bombay",
            "sameAs": "https://en.wikipedia.org/wiki/IIT_Bombay"
          },
          {
            "@type": "EducationalOrganization",
            "name": "IIT Patna",
            "sameAs": "https://en.wikipedia.org/wiki/IIT_Patna"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://anand-mohan-dubey.vercel.app/#website",
        "url": "https://anand-mohan-dubey.vercel.app",
        "name": "Anand Mohan Dubey | Full Stack Developer Portfolio",
        "description": "Anand Mohan Dubey is a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my portfolio of premium web applications.",
        "publisher": {
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
