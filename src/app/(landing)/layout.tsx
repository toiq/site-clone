import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import { SideButtonLink } from "@/features/side-button/side-button";
import { Navbar } from "@/features/navbar/navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home |  Dipa Inhouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} relative min-h-screen antialiased`}>
        <header className="fixed top-0 z-10 w-full backdrop-blur-[48px]">
          <Navbar />
        </header>
        {children}
        <div className="fixed right-0 top-1/2 z-20 w-fit -translate-y-1/2 transform">
          <SideButtonLink />
        </div>
      </body>
    </html>
  );
}
