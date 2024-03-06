import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { BackgroundGradientAnimation } from "@/app/components/ui/background-gradient-animation";
import { WavyBackground } from "@/app/components/ui/wavy-background";
import React from "react";

const InstructorSection = () => {
  const people = [
    {
      id: 1,
      name: "Mohammad Imran Khan",
      designation: "Software Engineer",
      image:
        "https://res.cloudinary.com/dhvev2dkh/image/upload/v1702216973/dhvev2dkh/kbjykhlkj2zaul8df2qh.jpg",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <>
      <BackgroundGradientAnimation>
        <div className="flex m-[10rem] h-[100px] justify-center w-96 align-bottom mx-auto">
          <AnimatedTooltip items={people} />
        </div>
        <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl flex-col">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 z-20">
            Meet Our Instructors
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Discover the professionals who will guide your music journey
          </p>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
};

export default InstructorSection;
