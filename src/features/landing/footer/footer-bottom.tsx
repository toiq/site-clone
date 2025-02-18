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
          <div className="flex items-center gap-12">
            <Image src="/logo.png" width={40} height={40} alt="Logo" />
            <ul className="flex justify-between gap-x-14">
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
  );
};
