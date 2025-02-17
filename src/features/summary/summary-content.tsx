import { Button } from "@/components/button";
import Link from "next/link";

export const SummaryContent = () => {
  return (
    <div className="flex w-full flex-col">
      <p className="font-manrope text-[32px] font-medium leading-[52.2px] text-white">
        As a full-service UX design agency, we work closely with our clients to
        define, design and develop transformative user experiences <br /> across
        all platforms and brand’s touchpoints.
      </p>
      <div className="mt-[65px] w-full">
        <Button size="medium" variant="outline" className="bg-white">
          <Link href="/the-team">About Us</Link>
        </Button>
      </div>
    </div>
  );
};
