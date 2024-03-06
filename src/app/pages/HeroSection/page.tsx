import { Spotlight } from "@/app/components/ui/Spotlight";
import { Button } from "@/app/components/ui/moving-border";
import React from "react";

function index() {
  return (
    <div>
      <div className="h-screen flex text-center justify-center flex-col gap-12">
        <Spotlight />
        <div className="text-8xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Master the Art Of Music
          </p>
        </div>
        <p className="w-[450px] text-slate-200 mx-auto">
          Dive into your comprehension music course and transform your musical
          course and transform your musical journey today.Wether you are a
          beginner or lookng to refine your skills, join us to unlock your true
          potential.
        </p>
        <div>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 mx-auto"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </div>
  );
}

export default index;
