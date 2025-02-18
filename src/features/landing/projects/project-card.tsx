import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  imgSrc: string;
  link: string;
  title: string;
  content: React.ReactNode;
  width: number;
  height: number;
}

export const ProjectCard = ({
  imgSrc,
  width,
  height,
  title,
  content,
  link,
}: ProjectCardProps) => {
  return (
    <div className="mb-[46px]">
      <Link href={link} className="relative block overflow-hidden">
        <Image
          src={imgSrc}
          alt="Example Image"
          width={width}
          height={height}
          className="transform transition-transform duration-300 ease-in-out hover:scale-[1.05]"
        />
      </Link>
      <Link href={link}>
        <p className="mt-10 text-2xl font-extrabold leading-[33px]">{title}</p>
      </Link>
      <div className="mt-3 w-[433px]">{content}</div>
    </div>
  );
};
