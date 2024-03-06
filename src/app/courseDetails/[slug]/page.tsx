"use client";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import { courseData } from "@/app/data";

const Page = () => {
  var currentUrl = window.location.href.split("/");
  const courseId: Number = Number(currentUrl[currentUrl.length - 1]);
  console.log("this is courseId", courseId);

  const [data, setData] = useState([]); // Initialize as an empty object

  useEffect(() => {
    async function fetchCourse() {
      try {
        const result = await courseData.find(
          (course) => course.id === courseId
        );
        setData(result);
        console.log("this is result", result);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    }
    if (courseId) {
      fetchCourse();
    }
  }, [courseId]);
  console.log("this is course Data", data);

  return (
    <div className={"mt-[8rem] border border-white mx-10 "}>
      <div className="text-3xl font-bold flex flex-col gap-6">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          {data.title}
        </p>
        <p className="text-xl font-normal">
          Description: <br></br>
          {data.description}
        </p>
        <p className="text-xl text-yellow-500">Price: $ {data.price}</p>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Page;
