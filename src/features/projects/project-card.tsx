import Image from "next/image";

interface ProjectCardProps {
  imgSrc: string;
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
}: ProjectCardProps) => {
  return (
    <div className="mb-[46px]">
      <Image src={imgSrc} alt="Example Image" width={width} height={height} />
      <p className="mt-10 text-2xl font-extrabold leading-[33px]">{title}</p>
      <div className="mt-3 w-[433px]">{content}</div>
    </div>
  );
};
