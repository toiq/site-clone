import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";

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

        <div className="mt-[65px]"></div>
      </div>
    </div>
  );
};
