import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Features",
    items: [
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
        link: "https://www.dipainhouse.com/contact-us",
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
    name: "Dribble",
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
    <div className="pt-[67px]">
      <div className="flex min-h-[256px] w-full justify-between">
        {/* Left Side */}
        <div className="w-1/2 px-3 font-manrope">
          <p className="mb-5 text-[28px] font-extrabold leading-[45px] text-primary">
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
            <p className="text-xl leading-9 text-accent">hi@dipainhouse.com</p>
          </Link>
        </div>
        {/* Right side */}
        <div className="grid w-1/2 grid-cols-3 px-3 font-manrope">
          {links.map((footerLink, i) => (
            <div key={i} className="col-span-1 text-sm text-secondary">
              <p className="pb-[22px]">{footerLink.name}</p>
              <ul>
                {footerLink.items.map((footerLinkItem, i) => (
                  <li key={i} className="mb-5">
                    {footerLinkItem.link ? (
                      <Link
                        href={footerLinkItem.link}
                        className="font-bold text-primary"
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
      <div className="border-t border-[#f5f7f9] font-manrope">
        <div className="flex items-center justify-between px-3 py-10">
          <div className="flex items-center gap-12">
            <Image src="/logo.png" width={40} height={40} alt="Logo" />
            <ul className="flex justify-between gap-x-14">
              {social.map((item, i) => (
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
          </div>
          <p className="text-sm text-secondary">
            © Dipa 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
