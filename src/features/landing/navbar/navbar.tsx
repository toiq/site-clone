"use client";
import { Button } from "@/components/button";
import { useScroll, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Team",
    link: "/the-team",
  },
  {
    name: "Insight",
    link: "/insight",
  },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  useEffect(() => {
    return scrollY.onChange((current) => {
      if (current > lastScrollY && current > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(current);
    });
  }, [scrollY, lastScrollY, isVisible]);

  useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenu]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 w-full overflow-x-hidden border border-transparent border-b-[#e8eef7] bg-white/50 py-[21px] font-manrope backdrop-blur-[48px]"
    >
      <div className="container max-w-screen-xl">
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-4">
          <Link href="/">
            <Image src="/logo.png" width={44} height={44} alt="Logo" />
          </Link>

          <div className="flex items-center gap-x-10">
            <ul className="-mt-0.5 hidden items-center justify-between gap-x-10 lg:flex">
              {links.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="min-w-5 text-sm font-bold text-primary hover:text-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {!isMobileMenu && (
              <Button asChild size="small" className="self-end">
                <Link href="/contact-us" className="h-full w-full">
                  Contact Us
                </Link>
              </Button>
            )}

            <Image
              src={"https://www.dipainhouse.com/assets/svg/ic-bars.svg"}
              width={24}
              height={24}
              alt="Menu"
              className="block py-[14px] lg:hidden"
              onClick={() => setIsMobileMenu((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      {isMobileMenu && (
        <div className="z-[99] h-screen w-full overflow-x-hidden bg-white text-center">
          <ul className="mt-6 flex h-full flex-col items-center">
            {links.map((item, i) => (
              <li key={i} className="mb-5">
                <Link
                  href={item.link}
                  className="min-w-5 text-[22px] font-bold text-primary hover:text-accent"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <Button asChild size="small" className="mt-10">
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};
