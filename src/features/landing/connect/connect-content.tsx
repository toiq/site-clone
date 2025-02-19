import { Button } from "@/components/button";
import Link from "next/link";

export const ConnectContent = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-y-10 font-manrope lg:flex-row lg:gap-y-0">
      <p className="text-[22px] font-extrabold text-primary lg:text-4xl lg:leading-[54px]">
        Interested to collaborate?
        <br /> Let&apos;s connect.
      </p>
      <Button asChild size="large">
        <Link href="/contact-us" className="h-full w-full">
          Let&apos;s connect
        </Link>
      </Button>
    </div>
  );
};
