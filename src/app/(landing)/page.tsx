import { ConnectContent } from "@/features/connect/connect-content";
import { FooterContent } from "@/features/footer/footer-content";
import { HeroContent } from "@/features/hero/hero-content";
import { ProjectsContent } from "@/features/projects/project-content";
import { SummaryContent } from "@/features/summary/summary-content";

export default function Home() {
  return (
    <>
      <main>
        <section id="hero">
          <div className="custom-container container pb-[86px] pt-40">
            <HeroContent />
          </div>
        </section>

        <section id="projects" className="relative h-full pt-[180px]">
          {/* Bg colors */}
          <div className="absolute left-0 top-0 z-0 h-1/3 w-full bg-[#fafbfc]"></div>
          <div className="absolute left-0 top-1/3 z-0 h-1/3 w-full bg-white"></div>
          <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full bg-[#fafbfc]"></div>

          <div className="custom-container container relative z-10 pb-[86px]">
            <ProjectsContent />
          </div>
        </section>

        <section id="summary" className="bg-[#15141b]">
          <div className="custom-container container py-[120px]">
            <SummaryContent />
          </div>
        </section>

        <section id="connect" className="bg-[#fafbfc] py-[124px]">
          <div className="container w-full max-w-[926px] px-3">
            <ConnectContent />
          </div>
        </section>
      </main>
      <footer className="custom-container container">
        <FooterContent />
      </footer>
    </>
  );
}
