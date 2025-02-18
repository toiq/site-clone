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

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 w-full border border-transparent border-b-[#e8eef7] bg-white/50 py-[21px] font-manrope backdrop-blur-[48px]"
    >
      <div className="container max-w-screen-xl">
        <div className="flex items-center justify-between px-4">
          <Link href="/">
            <Image src="/logo.png" width={44} height={44} alt="Logo" />
          </Link>

          <div className="flex items-center gap-x-10">
            <ul className="-mt-0.5 flex items-center justify-between gap-x-10">
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

            <Button asChild size="small">
              <Link href="/contact-us" className="h-full w-full">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
