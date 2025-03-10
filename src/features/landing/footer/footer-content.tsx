import Image from "next/image";
import Link from "next/link";
import { FooterBottom } from "./footer-bottom";

const links = [
  {
    name: "Features",
    items: [
      {
        name: "Work",
        link: "/work",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Team",
        link: "/the-team",
      },
      {
        name: "Insight",
        link: "/insight",
      },
    ],
  },
  {
    name: "General",
    items: [
      {
        name: "Clutch Reviews",
        link: "https://clutch.co/profile/dipa-inhouse",
      },
      {
        name: "Contact us",
        link: "/contact-us",
      },
    ],
  },
  {
    name: "Find Us",
    items: [
      {
        name: "Malang, Indonesia",
        link: "",
      },
      {
        name: "View On Map",
        link: "https://goo.gl/maps/tA8K887b2uAQFjGA9",
      },
    ],
  },
];

const social = [
  {
    name: "Dribbble",
    link: "https://dribbble.com/dipainhouse",
  },
  {
    name: "Clutch",
    link: "https://clutch.co/profile/dipa-inhouse",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dipa.inhouse/",
  },
  {
    name: "Medium",
    link: "https://medium.com/dipa-inhouse",
  },
];

export const FooterContent = () => {
  return (
    <div className="pt-10 lg:pt-[70px]">
      <div className="flex min-h-[256px] w-full flex-col justify-between lg:flex-row">
        {/* Left Side */}
        <div className="w-1/2 font-manrope">
          <p className="mb-5 text-[22px] font-extrabold text-primary lg:text-[28px] lg:leading-[45px]">
            Crafting user friendly <br /> products aesthetically
          </p>
          <Link
            href="mailto:hi@dipainhouse.com"
            className="inline-flex items-center gap-3"
          >
            <Image
              src={"/ic-mail.svg"}
              alt="Mail Icon"
              width={24}
              height={24}
            />
            <p className="leading-9 text-accent lg:text-xl">
              hi@dipainhouse.com
            </p>
          </Link>
        </div>
        {/* Right side */}
        <div className="mt-8 grid w-full grid-cols-2 px-3 font-manrope lg:mt-0 lg:w-1/2 lg:grid-cols-3">
          {links.map((footerLink, i) => (
            <div key={i} className="col-span-1 text-sm text-secondary">
              <p className="mb-[22px]">{footerLink.name}</p>
              <ul>
                {footerLink.items.map((footerLinkItem, i) => (
                  <li key={i} className="mb-[19px]">
                    {footerLinkItem.link ? (
                      <Link
                        href={footerLinkItem.link}
                        className="font-bold text-primary hover:text-accent"
                        target={`${footerLinkItem.name === "View On Map" ? "_blank" : "_self"}`}
                      >
                        {footerLinkItem.name}
                      </Link>
                    ) : (
                      <p className="font-medium text-primary">
                        {footerLinkItem.name}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Social and Copyright */}
      <FooterBottom social={social} />
    </div>
  );
};
