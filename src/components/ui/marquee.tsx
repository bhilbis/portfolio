"use client"
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "https://avatar.vercel.sh/jack",
  },
  {
    img: "https://avatar.vercel.sh/jill",
  },
  {
    img: "https://avatar.vercel.sh/john",
  },
  {
    img: "https://avatar.vercel.sh/jane",
  },
  {
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image alt="avatar" className="rounded-full" width="64" height="64" src={img} />
      </div>
    </figure>
  );
};

export function AMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:5s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:5s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}