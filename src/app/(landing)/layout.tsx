import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import { SideButtonLink } from "@/features/landing/side-button/side-button";
import { Navbar } from "@/features/landing/navbar/navbar";
import { FooterContent } from "@/features/landing/footer/footer-content";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home |  Dipa Inhouse",
  description:
    "Help find solutions that are intuitive and in accordance with client business goals. We provide a high-quality service in UI/UX Design, Graphic Design, Motion Design, Branding & Development.",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} relative min-h-screen antialiased`}>
        <header className="fixed top-0 z-50 w-full backdrop-blur-[48px]">
          <Navbar />
        </header>
        {children}
        <footer className="custom-container container">
          <FooterContent />
        </footer>
        <div className="fixed right-0 top-1/2 z-20 w-fit -translate-y-1/2 transform">
          <SideButtonLink />
        </div>
      </body>
    </html>
  );
}
