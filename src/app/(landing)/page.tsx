import { ConnectContent } from "@/features/connect/connect-content";
import { FooterContent } from "@/features/footer/footer-content";
import { HeroContent } from "@/features/hero/hero-content";

export default function Home() {
  return (
    <>
      <main>
        <section id="hero">
          <div className="custom-container container pb-[86px] pt-40">
            <HeroContent />
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
