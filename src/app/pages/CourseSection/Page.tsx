import { BackgroundGradient } from "@/app/components/ui/background-gradient";
import React from "react";

const index = () => {
  const courses = [
    {
      title: "Guitar Fundamental",
      body: "Learn Guitar basic with our Fundamental Course for beginner and get started with us and have fun",
      link: "",
    },
    {
      title: "Advanced Vocal Training",
      body: "Enhance your training with Advance Vocal Training for intermediate to advanced students",
      link: "",
    },
    {
      title: "Music Production Fundamentals",
      body: "Master the basics of music production with our comprehensive course, you ll be able to produce your own music production",
      link: "",
    },
    {
      title: "Piano Masterclass",
      body: "Unlock your potential with our Piano Masterclass for beginners to advanced players",
      link: "",
    },
    {
      title: "Songwriting Workshop",
      body: "Discover the art of songwriting and unleash your creativity in our workshop and similarly we can enhace your skills",
      link: "",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 w-full p-10 dark:bg-slate-900">
        <h1 className="text-xl font-semibold text-blue-500 mx-auto flex justify-center">
          FEATURED COURSES
        </h1>
        <h1 className="text-4xl font-bold mx-auto flex justify-center">
          Learn With the Best
        </h1>
        <div className="flex flex-wrap justify-normal w-[1300px] gap-10 mt-6 mx-auto">
          {courses.map((course) => (
            <BackgroundGradient
              key={course.title}
              className="rounded-[22px] cursor-pointer max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
            >
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
                {course.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                {course.body}
              </p>
              <button className="rounded-full px-4 py-2 text-white flex items-center  bg-black mt-4 text-xs font-bold dark:bg-zinc-800 mx-auto">
                <span>Learn more </span>
              </button>
            </BackgroundGradient>
          ))}
        </div>
        <div className="mx-auto mt-6">
          <button className="dark:bg-black light:bg-slate-200 light:text-black dark:text-slate-200 px-5 py-2 rounded-full ">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
