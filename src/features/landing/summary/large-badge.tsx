import Image from "next/image";
import Link from "next/link";

export interface LargeBadgeProps {
  imageSrc: string;
  link: string;
  text: string;
}
export const LargeBadge = ({ imageSrc, link, text }: LargeBadgeProps) => {
  return (
    <div className="flex w-full items-center justify-center rounded-md bg-[#1e1d24] px-[22px] py-7">
      <Link
        href={link}
        className="flex w-full items-center justify-center gap-x-6"
      >
        <Image alt="Badge" width={56} height={60} src={imageSrc} />
        <p className="w-fit max-w-24 text-xs font-semibold text-white">
          {text}
        </p>
      </Link>
    </div>
  );
};
