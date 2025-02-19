import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export interface ProjectCardProps {
  imgSrc: string;
  link: string;
  title: string;
  content: React.ReactNode;
  width: number;
  height: number;
  index?: number;
}

export const ProjectCard = ({
  imgSrc,
  width,
  height,
  title,
  content,
  link,
  index,
}: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 * (index ?? 1) }}
      className="mb-[46px]"
    >
      <Link
        href={link}
        className="relative block w-full overflow-hidden bg-[#f8f8fa]"
      >
        <Image
          src={imgSrc}
          alt="Example Image"
          width={width}
          height={height}
          className={`transform transition-transform duration-300 ease-in-out hover:scale-[1.075] ${title === "The Swag Academy Platform" ? "hover:-rotate-[4.5deg]" : ""}`}
        />
      </Link>
      <Link href={link}>
        <p className="mt-10 text-2xl font-extrabold leading-[33px]">{title}</p>
      </Link>
      <div className="mt-3 pb-[38px] lg:w-[433px] lg:pb-0">{content}</div>
    </motion.div>
  );
};
