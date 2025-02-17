import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Work",
    link: "https://www.dipainhouse.com/work",
  },
  {
    name: "Services",
    link: "https://www.dipainhouse.com/services",
  },
  {
    name: "Team",
    link: "https://www.dipainhouse.com/the-team",
  },
  {
    name: "Insight",
    link: "https://www.dipainhouse.com/insight",
  },
];

export const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full border border-transparent border-b-[#e8eef7] bg-white/50 py-[21px] font-manrope">
      <div className="container max-w-screen-xl">
        <div className="flex items-center justify-between px-4">
          <Link href="/">
            <Image src="/logo.png" width={44} height={44} alt="Logo" />
          </Link>

          <div className="flex items-center gap-x-10">
            <ul className="-mt-0.5 flex items-center justify-between gap-x-10">
              {links.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="min-w-5 text-sm font-bold text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Button asChild size="small">
              <Link
                href="https://www.dipainhouse.com/contact-us"
                className="h-full w-full"
              >
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
