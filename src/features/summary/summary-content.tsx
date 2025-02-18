import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { Badge, BadgeProps } from "./badge";
import { LargeBadge, LargeBadgeProps } from "./large-badge";
import { Stat, StatProps } from "./stat";

const stats: StatProps[] = [
  {
    amount: 17,
    label: "Designer",
  },
  {
    amount: 5,
    label: "Developer",
  },
  {
    amount: 3,
    label: "Project Manager",
  },
  {
    amount: 5,
    label: "Years in Business",
    plus: true,
  },
];

export const SummaryContent = () => {
  return (
    <div className="flex w-full flex-col font-manrope">
      <p className="font-manrope text-[32px] font-medium leading-[51.2px] text-white">
        As a full-service UX design agency, we work closely with our clients{" "}
        <br /> to define, design and develop transformative user experiences{" "}
        <br /> across all platforms and brand’s touchpoints.
      </p>
      <div className="mt-[65px] flex items-center gap-x-10">
        <Button
          size="medium"
          variant="outline"
          className="bg-white px-[64px] py-4"
          asChild
        >
          <Link href="/the-team">About us</Link>
        </Button>
        <div className="flex justify-between gap-x-4">
          <Image
            src="/clutch-icon-black.png"
            width={56}
            height={56}
            alt="Clutch Icon"
          />

          <div className="flex flex-col gap-y-[7px]">
            <p className="text-lg text-white">
              <span className="font-bold leading-6">4.9</span>
              <span className="font-light"> Rating on clutch</span>
            </p>
            <p className="leading-[22px] text-[#808a9e]">
              Top Design Agencies in Indonesia
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[65px] flex w-full items-stretch justify-between">
        {/* Left Side */}
        <div className="grid w-1/2 grid-cols-4 gap-4">
          {Array<BadgeProps>(4)
            .fill({
              imageSrc:
                "https://shareables-prod-static.clutch.co/badges/top_clutch.co_web_design_company_information_technology_indonesia.svg",
              link: "https://clutch.co/profile/dipa-inhouse?utm_source=clutch_top_company_badge&utm_medium=image_embed",
            })
            .map((badge, index) => (
              <Badge key={index} {...badge} />
            ))}
          {/* Second Row: 2 Large Grids */}
          {Array<LargeBadgeProps>(2)
            .fill({
              imageSrc:
                "https://shareables-prod-static.clutch.co/badges/top_clutch.co_company_indonesia_2022_award.svg",
              link: "https://clutch.co/profile/dipa-inhouse?utm_source=clutch_award_badge&utm_medium=image_embed",
              text: "Top Company in Indonesia 2022",
            })
            .map((badge, index) => (
              <div className="col-span-2" key={index}>
                <LargeBadge {...badge} />
              </div>
            ))}
        </div>

        {/* Right Side */}
        <div className="flex w-1/2 flex-col justify-center">
          <div className="mx-20 h-full">
            <div className="grid h-full grid-cols-2 grid-rows-2 gap-x-8 gap-y-[81px]">
              {stats.map((stat, index) => (
                <Stat key={index} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
