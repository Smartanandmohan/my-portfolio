import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { About } from "@/components/main/about";
import { Services } from "@/components/main/services";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { AdBanner } from "@/components/sub/ad-banner";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 md:gap-20">
        <Hero />
        <About />
        <AdBanner dataAdSlot="1111111111" />
        <Skills />
        <Encryption />
        <AdBanner dataAdSlot="2222222222" />
        <Projects />
        <Services />
        <AdBanner dataAdSlot="3333333333" />
      </div>
    </main>
  );
}
