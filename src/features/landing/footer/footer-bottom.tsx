import Image from "next/image";
import Link from "next/link";

export interface SocialLink {
  name: string;
  link: string;
}

export const FooterBottom = ({ social }: { social: SocialLink[] }) => {
  return (
    <div>
      <div className="border-t border-[#f5f7f9] font-manrope">
        <div className="flex items-center justify-between py-10">
          <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
            <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 lg:gap-y-0">
              <Image src="/logo.png" width={40} height={40} alt="Logo" />
              <ul className="flex gap-x-14">
                {social.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="min-w-5 text-sm font-bold text-primary hover:text-accent"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-secondary">
              © Dipa 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
