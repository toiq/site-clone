"use client";
import { Button } from "@/components/button";
import Link from "next/link";
import { motion } from "motion/react";

export const HeroContent = () => {
  return (
    <div className="font-manrope">
      <motion.p
        className="text-[78px] font-[900] leading-[101px] tracking-[-3.12px] text-primary"
        initial={{ opacity: 0, y: -20 }} // Start from above
        animate={{ opacity: 1, y: 0 }} // Animate to original position
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Crafting user friendly <br /> products aesthetically
      </motion.p>

      <motion.p
        className="mt-8 text-2xl font-medium leading-[43px] tracking-[0.24px] text-secondary"
        initial={{ opacity: 0, y: -20 }} // Start from above
        animate={{ opacity: 1, y: 0 }} // Animate to original position
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Help find solutions that are intuitive and in accordance with client
        business goals. We provide a high-quality service in UI/UX Design,
        Graphic Design, Motion Design, Branding & Development.
      </motion.p>

      <motion.div
        className="mt-12 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }} // Start from above
        animate={{ opacity: 1, y: 0 }} // Animate to original position
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex items-center justify-between gap-x-4">
          <Button
            asChild
            size="medium"
            className="hover:bg-white hover:text-accent"
          >
            <Link href="/contact-us" className="h-full w-full">
              Let&apos;s connect
            </Link>
          </Button>
          <Button asChild size="medium" variant="outline">
            <Link href="/contact-us" className="h-full w-full">
              Check our work
            </Link>
          </Button>
        </div>
        <div className="h-[50px] w-[210px] overflow-hidden">
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
