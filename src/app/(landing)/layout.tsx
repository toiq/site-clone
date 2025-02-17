import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";

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
      <body className={`${manrope.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
