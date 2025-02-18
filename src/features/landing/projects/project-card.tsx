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
      <Link href={link}>
        <Image src={imgSrc} alt="Example Image" width={width} height={height} />
      </Link>
      <Link href={link}>
        <p className="mt-10 text-2xl font-extrabold leading-[33px]">{title}</p>
      </Link>
      <div className="mt-3 w-[433px]">{content}</div>
    </div>
  );
};
