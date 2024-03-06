import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import { courseData } from "../data";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="dark mt-[8rem] mx-8 p-[2rem]  min-h-screen flex flex-wrap  text-center flex-col">
      <h1 className="text-center text-2xl font-bold text-teal-500 light:text-black">
        All Courses (5)
      </h1>
      <div className="flex flex-wrap justify-around">
        {courseData.map((course) => (
          <CardContainer key={course.name} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <Link href={`courseDetails/${course.id}`}>Try now →</Link>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  $ {course.price}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </main>
  );
};

export default Page;
