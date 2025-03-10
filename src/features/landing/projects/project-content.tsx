"use client";
import { Button } from "@/components/button";
import { ProjectCard, type ProjectCardProps } from "./project-card";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const projectList: ProjectCardProps[] = [
  {
    imgSrc:
      "https://www.dipainhouse.com/_next/image?url=%2Fassets%2Fproject%2Fbilly.webp&w=1920&q=75",
    title: "Billy - Insurance Platform",
    content: (
      <p className="text-secondary">
        <span className="font-semibold">Billy</span> - Insurance and risk
        management platform built for construction and real estate.
      </p>
    ),
    width: 520,
    height: 500,
    link: "https://www.dipainhouse.com/work/billy",
  },
  {
    imgSrc:
      "https://www.dipainhouse.com/_next/image?url=%2Fassets%2Fproject%2Fmaster-pos.webp&w=1920&q=75",
    title: "MasterPos - Retail Management",
    content: (
      <p className="text-secondary">
        <span className="font-semibold">MasterPos</span> USA is a global name in
        development and the integration of retail management solutions.
      </p>
    ),
    width: 520,
    height: 500,
    link: "https://www.dipainhouse.com/work/master-pos",
  },
  {
    imgSrc:
      "https://www.dipainhouse.com/_next/image?url=%2Fassets%2Fproject%2Fhubdeck.webp&w=1920&q=75",
    title: "Hubdeck - CRM Platform",
    content: (
      <p className="text-secondary">
        <span className="font-semibold">Hubdeck</span> is a CRM platform that
        makes it easy for your entire company to work together.
      </p>
    ),
    width: 520,
    height: 700,
    link: "https://www.dipainhouse.com/work/hubdeck",
  },
  {
    imgSrc:
      "https://www.dipainhouse.com/_next/image?url=%2Fassets%2Fproject%2Fthe-swag.webp&w=1920&q=75",
    title: "The Swag Academy Platform",
    content: (
      <p className="text-secondary">
        <span className="font-semibold">The Swag Academy</span> was created to
        help educate others on the Forex market and entrepreneurship as a whole.
      </p>
    ),
    width: 520,
    height: 500,
    link: "https://www.dipainhouse.com/work/the-swag",
  },
];

export const ProjectsContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="font-manrope" ref={ref}>
      <div className="flex w-full flex-col gap-y-10 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm uppercase tracking-[1.4px] text-secondary">
            Our Projects
          </p>
          <p className="mt-3 text-[32px] font-[900] leading-[44px] text-primary">
            Our latest cool projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            variant="outline"
            size="small"
            className="block border-transparent bg-white text-base lg:w-fit"
            asChild
          >
            <Link href="/work">Check our work</Link>
          </Button>
        </motion.div>
      </div>
      <div className="colums-1 mt-20 w-full gap-x-20 lg:columns-2">
        {projectList.map((project, i) => (
          <ProjectCard {...project} key={i} index={i} />
        ))}
      </div>
    </div>
  );
};
