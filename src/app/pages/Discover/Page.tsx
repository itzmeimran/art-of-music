"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Unleash Your Musical Potential: Explore Infinite Creativity",
      description: "Discover boundless opportunities to express yourself through music",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Unleash Your Potential
        </div>
      ),
    },
    {
      title: "Harmonize in Real Time",
      description:
        "Experience the magic of collaboration with our platform. Work seamlessly with fellow musicians, producers, and artists from anywhere in the world. Witness your musical vision come to life in real time, as you harmonize and create together effortlessly.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/jamming.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="musicians jamming"
          />
        </div>
      ),
    },
    {
      title: "Synchronize Your Sound",
      description:
        "Ensure your music is always in perfect rhythm with our synchronization tools. From beat matching to tempo adjustment, our platform offers everything you need to synchronize your sound seamlessly. Let your music flow effortlessly, without missing a beat.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Synchronize Your Sound
        </div>
      ),
    },
    {
      title: "Unlock Musical Inspiration",
      description:
        "Never run dry on creativity again. Dive into a vast ocean of musical inspiration, with resources ranging from chord progressions to melody ideas. Whether you're a beginner or a seasoned musician, our platform provides the fuel you need to spark creativity and innovation.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Unlock Inspiration
        </div>
      ),
    },
  ];
  export function Discover() {
  return (
    <div className="mt-3rem py-4rem">
      <StickyScroll content={content} />
    </div>
  );
}
