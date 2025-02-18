import Image from "next/image";
import Link from "next/link";

export interface BadgeProps {
  imageSrc: string;
  link: string;
}
export const Badge = ({ imageSrc, link }: BadgeProps) => {
  return (
    <div className="flex items-center justify-center rounded-md bg-[#1e1d24] px-[22px] py-7">
      <Link href={link}>
        <Image alt="Badge" width={56} height={60} src={imageSrc} />
      </Link>
    </div>
  );
};
