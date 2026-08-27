import { SiteUIProvider } from "@/components/ui-provider";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Leadership } from "@/components/leadership";
import { Work } from "@/components/work";
import { Research } from "@/components/research";
import { Education } from "@/components/education";
import { Capabilities } from "@/components/capabilities";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ResumeModal } from "@/components/resume-modal";
import { CursorCat } from "@/components/cursor-cat";

export default function Home() {
  return (
    <SiteUIProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Leadership />
        <Work />
        <Research />
        <Education />
        <Capabilities />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ResumeModal />
      <CursorCat />
      <div className="noise-overlay" aria-hidden="true" />
    </SiteUIProvider>
  );
}