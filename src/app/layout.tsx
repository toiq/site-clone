import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/features/landing/navbar/navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
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
      </body>
    </html>
  );
}
