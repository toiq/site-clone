"use client";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { MoreReviewsButton } from "./more-reviews-button";
import { ReviewCard, type Review } from "./review-card";
import { useRef } from "react";

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

const brandLogos = [
  "https://www.dipainhouse.com/assets/svg/our-partners/starlinks.png",
  "https://www.dipainhouse.com/assets/svg/our-partners/chargeflow.svg",
  "https://www.dipainhouse.com/assets/svg/our-partners/Xrecruiter.png",
  "https://www.dipainhouse.com/assets/svg/our-partners/Alquraisi.png",
  "https://www.dipainhouse.com/assets/svg/our-partners/billy.svg",
  "https://www.dipainhouse.com/assets/svg/our-partners/swag.png",
  "https://www.dipainhouse.com/assets/svg/our-partners/buzzbassador.svg",
  "https://www.dipainhouse.com/assets/svg/our-partners/gymdesk.svg",
  "https://www.dipainhouse.com/assets/svg/our-partners/masterpos.svg",
  "https://www.dipainhouse.com/assets/svg/our-partners/BMKG.png",
  "https://www.dipainhouse.com/assets/svg/our-partners/wenodo.png",
  "https://www.dipainhouse.com/assets/svg/our-partners/Icoms.png",
];

export const ReviewsContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-col items-center font-manrope" ref={ref}>
      <div className="pb-20 text-center">
        <motion.p
          className="text-sm uppercase tracking-[1.4px] text-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Happy Clients
        </motion.p>
        <motion.p
          className="mt-3 text-[22px] font-[900] leading-[30px] text-primary lg:text-[32px] lg:leading-[44px]"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Some of our partners and clients
        </motion.p>
      </div>

      <motion.div className="grid grid-cols-3 gap-y-16 pb-24 md:grid-cols-4 lg:grid-cols-6">
        {brandLogos.slice(0, 6).map((brandLogoLink, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, y: 50 } : {}}
            transition={{
              duration: 0.6,
              delay: 2 / (brandLogos.slice(6).length - index + 1),
            }}
          >
            <Image
              src={brandLogoLink}
              width={187}
              height={64}
              alt="Brand Logo"
              className="grayscale transition-all duration-200 hover:scale-110 hover:grayscale-0"
            />
          </motion.div>
        ))}
        {brandLogos.slice(6).map((brandLogoLink, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, y: 50 } : {}}
            transition={{
              duration: 0.6,
              delay: 2 / (brandLogos.slice(6).length - index + 1),
            }}
          >
            <Image
              src={brandLogoLink}
              width={187}
              height={64}
              alt="Brand Logo"
              className="grayscale transition-all duration-200 hover:scale-110 hover:grayscale-0"
            />
          </motion.div>
        ))}
      </motion.div>

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
