import { type Review } from "./review-card";
import Link from "next/link";
import Image from "next/image";

interface MoreReviewsButtonProps {
  reviews: Review[];
}

export const MoreReviewsButton = ({ reviews }: MoreReviewsButtonProps) => {
  return (
    <Link href="https://clutch.co/profile/dipa-inhouse">
      <div className="flex items-center gap-x-4 rounded-full border border-[#e8eef7] px-[13px] py-[10px] pr-10 hover:border-accent">
        <div className="relative flex items-center">
          {reviews.map((review, index) => (
            <Image
              key={index}
              src={review.user.image}
              alt={`${review.user.name}'s avatar`}
              width={40}
              height={40}
              className={`rounded-full border-2 border-white shadow ${
                index > 0 ? "-ml-4" : ""
              }`}
            />
          ))}
        </div>
        {/* Text label */}
        <div>
          <p className="font-bold text-primary">
            Show <span className="text-accent">{reviews.length}+</span>
          </p>
          <p className="font-medium text-secondary">more reviews &#8595;</p>
        </div>
      </div>
    </Link>
  );
};
