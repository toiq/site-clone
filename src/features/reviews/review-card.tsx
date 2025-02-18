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
    <div className="flex w-full justify-between gap-x-14 border border-[rgb(248,250,255)] bg-accent-secondary p-10 hover:border-[rgb(232,238,247)]">
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
          <p className="text-lg font-bold">{user.name}</p>
          <Image
            src={"/circle.svg"}
            width={5}
            height={6}
            alt={`Seperator dot`}
          />

          <Image
            src={user.company.image}
            width={100}
            height={0}
            className="h-5 w-auto"
            alt={`Company logo`}
          />
          <p className="text-secondary">{user.company.position}</p>
        </div>
      </div>
      <Image
        src={image}
        width={239}
        height={133}
        alt={`${user.name}'s review`}
      />
    </div>
  );
};
