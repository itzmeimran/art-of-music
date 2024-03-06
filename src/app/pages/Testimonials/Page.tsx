import { Boxes } from "@/app/components/ui/background-boxes";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import { cn } from "@/app/utils/cn";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "As a musician, I've found immense inspiration and creativity through this platform. It's like diving into a pool of endless musical possibilities.",
      name: "Alicia Keys",
      title: "Grammy Award-Winning Artist",
    },
    {
      quote:
        "This platform revolutionized the way I collaborate with other artists. It's seamless, intuitive, and has truly elevated the quality of my musical projects.",
      name: "John Legend",
      title: "Singer-Songwriter",
    },
    {
      quote:
        "Finding inspiration is essential for any musician. This platform provides just that - a constant source of musical ideas and innovation.",
      name: "Taylor Swift",
      title: "Singer-Songwriter",
    },
    {
      quote:
        "I've always believed in the power of music to connect people. This platform embodies that belief by bringing musicians together from all over the world.",
      name: "Beyoncé",
      title: "Recording Artist",
    },
    {
      quote:
        "This platform has been my companion on my musical journey. It's like having a trusted mentor guiding me through the vast ocean of music production.",
      name: "Pharrell Williams",
      title: "Music Producer",
    },
  ];
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg gap-10">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={"bold text-4xl z-10 my-4 "}>
        Hear Our Harmony: Voices Of Success
      </h1>
      <div className=" items-center justify-center relative overflow-hidden my-5">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Testimonials;
