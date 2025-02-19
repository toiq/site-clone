import Image from "next/image";

export interface Review {
  comment: string;
  image: string;
  user: {
    image: string;
    name: string;
    company: {
      position: string;
      image: string;
    };
  };
}
export const ReviewCard = ({ image, user, comment }: Review) => {
  return (
    <div className="flex w-full flex-col justify-between gap-x-14 border border-[rgb(248,250,255)] bg-accent-secondary p-10 hover:border-[rgb(232,238,247)] lg:flex-row">
      <div>
        <p className="text-[22px] font-semibold leading-[35px] text-primary">
          &ldquo;{comment}&rdquo;
        </p>

        <div className="mt-8 flex items-center gap-x-3">
          <Image
            src={user.image}
            width={32}
            height={32}
            alt={`${user.name}'s image`}
          />
          <div className="flex flex-col gap-x-3 lg:flex-row">
            <p className="text-lg font-bold">{user.name}</p>
            <Image
              src={"/circle.svg"}
              width={5}
              height={6}
              className="hidden lg:block"
              alt={`Seperator dot`}
            />

            <div className="flex">
              <Image
                src={user.company.image}
                width={100}
                height={0}
                className="mr-3 h-5 w-auto"
                alt={`Company logo`}
              />
              <p className="text-secondary">{user.company.position}</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        className="mt-8 h-auto w-full lg:mt-0 lg:w-[239px]"
        alt={`${user.name}'s review`}
      />
    </div>
  );
};
