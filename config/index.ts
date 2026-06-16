import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://anand-mohan-dubey.vercel.app"),
  title: {
    default: "Anand Mohan Dubey | Full Stack Developer Portfolio",
    template: "%s | Anand Mohan Dubey"
  },
  description: "Anand Mohan Dubey is a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my portfolio of premium web applications.",
  keywords: [
    "Anand Mohan Dubey",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Software Engineer",
    "Frontend Engineer",
    "UI/UX Design",
    "Web Development",
    "React.js",
    "Node.js",
    "TypeScript",
  ],
  authors: [
    {
      name: "Anand Mohan Dubey",
      url: "https://github.com/Smartanandmohan",
    }
  ],
  creator: "Anand Mohan Dubey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anand-mohan-dubey.vercel.app",
    title: "Anand Mohan Dubey | Full Stack Developer Portfolio",
    description: "Anand Mohan Dubey is a Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio of premium web applications.",
    siteName: "Anand Mohan Dubey Portfolio",
    images: [
      {
        url: "/brand-logo.png",
        width: 1200,
        height: 630,
        alt: "Anand Mohan Dubey Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Mohan Dubey | Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/brand-logo.png"],
    creator: "@anandmohandubey",
  },
  verification: {
    google: "odbBZqp6YKVIJWL7Cgh3Sa4cybumuw0F2S9dxhtg1Vw",
  },
  alternates: {
    canonical: "https://anand-mohan-dubey.vercel.app",
  },
};
