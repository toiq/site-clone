import { MoreReviewsButton } from "./more-reviews-button";
import { ReviewCard, type Review } from "./review-card";

const reviews: Review[] = [
  {
    comment:
      "The fact that they did so many revisions and didn't care how long it took to meet the desired outcome or goal.",
    image:
      "https://www.dipainhouse.com/assets/testimoni/illustration-swag.webp",
    user: {
      name: "Chris Williams",
      image: "https://www.dipainhouse.com/assets/testimoni/chris-williams.svg",
      company: {
        position: "CEO of Swaggy Inc",
        image: "https://www.dipainhouse.com/assets/testimoni/logo-swaggy.png",
      },
    },
  },
  {
    comment:
      "Dipa has provided UI/ UX design for an insurance platform. They are easy to work with and understand our needs very well.",
    image:
      "https://www.dipainhouse.com/assets/testimoni/illustration-billy.webp", // Assuming there's an illustration for Billy Insurance
    user: {
      name: "Nyasha-Harmony Gutsa",
      image: "https://www.dipainhouse.com/assets/testimoni/nyasha.svg", // Replace with actual image path if available
      company: {
        position: "CEO at Billy Insurance",
        image: "https://www.dipainhouse.com/assets/testimoni/logo-billy.png", // Replace with actual logo path if available
      },
    },
  },
  {
    comment:
      "Great customer service, will not stop until client is satisfied, very efficient, always going above and beyond to deliver client expectations, really appreciate the speed and deli ver on all update.",
    image:
      "https://www.dipainhouse.com/assets/testimoni/illustration-synflow.webp", // Assuming there's an illustration for Synflo
    user: {
      name: "James Kuzmanovski",
      image:
        "https://www.dipainhouse.com/assets/testimoni/james-kuzmanovski.svg", // Replace with actual image path if available
      company: {
        position: "Founder of Synflo",
        image: "https://www.dipainhouse.com/assets/testimoni/logo-synflow.png", // Replace with actual logo path if available
      },
    },
  },
  // Extra reviews
  {
    comment:
      "The fact that they did so many revisions and didn't care how long it took to meet the desired outcome or goal.",
    image:
      "https://www.dipainhouse.com/assets/testimoni/illustration-swag.webp",
    user: {
      name: "Chris Williams",
      image: "https://www.dipainhouse.com/assets/testimoni/chris-williams.svg",
      company: {
        position: "CEO of Swaggy Inc",
        image: "https://www.dipainhouse.com/assets/testimoni/logo-swaggy.png",
      },
    },
  },
  {
    comment:
      "Dipa has provided UI/ UX design for an insurance platform. They are easy to work with and understand our needs very well.",
    image:
      "https://www.dipainhouse.com/assets/testimoni/illustration-billy.webp", // Assuming there's an illustration for Billy Insurance
    user: {
      name: "Nyasha-Harmony Gutsa",
      image: "https://www.dipainhouse.com/assets/testimoni/nyasha.svg", // Replace with actual image path if available
      company: {
        position: "CEO at Billy Insurance",
        image: "https://www.dipainhouse.com/assets/testimoni/logo-billy.png", // Replace with actual logo path if available
      },
    },
  },
  {
    comment:
      "Great customer service, will not stop until client is satisfied, very efficient, always going above and beyond to deliver client expectations, really appreciate the speed and deli ver on all update.",
    image:
      "https://www.dipainhouse.com/assets/testimoni/illustration-synflow.webp", // Assuming there's an illustration for Synflo
    user: {
      name: "James Kuzmanovski",
      image:
        "https://www.dipainhouse.com/assets/testimoni/james-kuzmanovski.svg", // Replace with actual image path if available
      company: {
        position: "Founder of Synflo",
        image: "https://www.dipainhouse.com/assets/testimoni/logo-synflow.png", // Replace with actual logo path if available
      },
    },
  },
];

export const ReviewsContent = () => {
  return (
    <div className="flex flex-col items-center font-manrope">
      <div className="pb-[240px] text-center">
        <p className="text-sm uppercase tracking-[1.4px] text-secondary">
          Our Happy Clients
        </p>
        <p className="mt-3 text-[32px] font-[900] leading-[44px] text-primary">
          Some of our partners and clients
        </p>
      </div>

      <div className="w-full">
        {reviews.slice(0, 3).map((review, i) => (
          <div key={i} className="mb-6">
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <MoreReviewsButton reviews={reviews.slice(3)} />
      </div>
    </div>
  );
};
