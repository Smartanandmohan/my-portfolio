import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  { skill_name: "HTML5", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS3", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "React.js", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "GSAP", image: "gsap.svg", width: 60, height: 60 },
  { skill_name: "Three.js", image: "threedotjs.svg", width: 60, height: 60 },
  { skill_name: "React Three Fiber", image: "react.png", width: 80, height: 80 },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/smart_anand_mohan",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/share/1EFmE2h4A1/",
  },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "Responsive Design", image: "responsive.svg", width: 70, height: 70 },
  { skill_name: "Landing Pages", image: "landing.svg", width: 70, height: 70 },
  { skill_name: "Dashboard Design", image: "dashboard.svg", width: 70, height: 70 },
  { skill_name: "SaaS Design", image: "saas.svg", width: 70, height: 70 },
  { skill_name: "Wireframing", image: "wireframe.svg", width: 70, height: 70 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Git", image: "git.svg", width: 60, height: 60 },
  { skill_name: "GitHub", image: "github.svg", width: 60, height: 60 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
  { skill_name: "VS Code", image: "visualstudiocode.svg", width: 60, height: 60 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Vercel", image: "vercel.svg", width: 60, height: 60 },
] as const;

export const PROJECTS = [
  {
    title: "Aether AI Infrastructure",
    description:
      "A premium AI SaaS platform concept focused on enterprise automation, analytics, workflow management, and intelligent business operations. Features a glassmorphism dashboard, interactive control panels, and smooth micro interactions.",
    image: "/projects/aether_screenshot.jpg",
    link: "https://aether-ai-core.vercel.app",
  },
  {
    title: "Funngro Platform Clone",
    description:
      "A highly responsive platform inspired by opportunity and project marketplaces, helping users discover opportunities and build real-world skills. Features an interactive dashboard and optimized UX flows.",
    image: "/projects/funngro_screenshot.jpg",
    link: "https://fungrow-five.vercel.app",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub (Smartanandmohan)",
        icon: RxGithubLogo,
        link: "https://github.com/Smartanandmohan",
      },
      {
        name: "India",
        icon: RxDiscordLogo,
        link: "#",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/smart_anand_mohan",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/share/1EFmE2h4A1/",
      },
    ],
  },
  {
    title: "About",
    data: [

      {
        name: "dubeyanand7255@gmail.com",
        icon: null,
        link: "mailto:dubeyanand7255@gmail.com",
      },
      {
        name: "+91 7255943294",
        icon: null,
        link: "tel:+917255943294",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/anandmohandubey",
};
