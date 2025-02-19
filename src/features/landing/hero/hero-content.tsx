"use client";
import { Button } from "@/components/button";
import Link from "next/link";
import { motion } from "motion/react";

export const HeroContent = () => {
  return (
    <div className="font-manrope">
      <motion.p
        className="text-[40px] font-[900] leading-[52px] tracking-[-1px] text-primary lg:w-[920px] lg:text-[78px] lg:leading-[101px] lg:tracking-[-3.12px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Crafting user friendly products aesthetically
      </motion.p>

      <motion.p
        className="mt-8 text-base font-light leading-[29px] tracking-[0.24px] text-secondary lg:text-2xl lg:font-medium lg:leading-[43px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Help find solutions that are intuitive and in accordance with client
        business goals. We provide a high-quality service in UI/UX Design,
        Graphic Design, Motion Design, Branding & Development.
      </motion.p>

      <motion.div
        className="mt-[88px] flex items-center justify-between lg:mt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex w-full flex-col items-center justify-between gap-y-4 lg:flex-row lg:justify-start lg:gap-x-4 lg:gap-y-0">
          <Button
            asChild
            size="medium"
            className="hover:bg-white hover:text-accent"
          >
            <Link href="/contact-us" className="h-full w-full lg:w-fit">
              Let&apos;s connect
            </Link>
          </Button>
          <Button asChild size="medium" variant="outline">
            <Link href="/contact-us" className="h-full w-full lg:w-fit">
              Check our work
            </Link>
          </Button>
        </div>
        <div className="hidden overflow-hidden lg:block">
          <div
            className="clutch-widget overflow-hidden"
            data-url="https://widget.clutch.co"
            data-widget-type={2}
            data-height={45}
            data-nofollow="true"
            data-expandifr="true"
            data-scale={100}
            data-clutchcompany-id={1635914}
            style={{ outline: "none" }}
          >
            <iframe
              id="iframe-0.13104677396236974"
              width="100%"
              src="https://widget.clutch.co/widgets/get/2?ref_domain=www.dipainhouse.com&uid=1635914&rel_nofollow=true&ref_path=/"
              height="45px"
              style={{
                border: "none",
                overflow: "hidden",
                display: "block",
                height: "44px",
                outline: "none",
              }}
              title="Clutch Review"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
