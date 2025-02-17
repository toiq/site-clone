import { Button } from "@/components/button";
import Link from "next/link";

export const ConnectContent = () => {
  return (
    <div className="flex items-center justify-between font-manrope">
      <p className="text-4xl font-extrabold leading-[54px] text-primary">
        Interested to collaborate?
        <br /> Let&apos;s connect.
      </p>
      <Button asChild size="large">
        <Link
          href="https://www.dipainhouse.com/contact-us"
          className="h-full w-full"
        >
          Let&apos;s connect
        </Link>
      </Button>
    </div>
  );
};
