"use client";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import { courseData } from "@/app/data";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CodeIcon from "@mui/icons-material/Code";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import Image from "next/image";

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
    <div className={"mt-[8rem]  mx-10 "}>
      <div className=" flex justify-between px-20 py-20 flex-wrap max-h-screen item-center">
        <div className=" flex flex-col gap-5 w-[550px]">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-md">{data.description}</p>
          <div className="flex text-left sm:text-center  items-center gap-3">
            <span className="font-bold text-lg">4.7</span>
            <Rating
              name="half-rating-read"
              defaultValue={4.7}
              precision={0.5}
              readOnly
              size="small"
            />
            <span className="text-sm">3642 reviews</span>
          </div>
          <div className=" flex gap-2 flex-col sm:text-center lg:text-left">
            <p>Subscribe to access all courses. Cancel anytime!</p>
            <button className="rounded-full sm:w-full lg:w-[350px] py-3 font-bold bg-gradient-to-r from-[#F526B1] to-[#8328ED] font-md text-base">
              SUBSCRIBE FOR $29/M
            </button>
            <div>
              <hr></hr>
            </div>
          </div>
          <button className="rounded-full sm:w-full lg:w-[350px] py-3 font-bold bg-[#8328ED] text-base">
            BUT THIS COURSE FOR $15{" "}
            <span className="line-through text-sm">$149</span>
          </button>
        </div>
        <div className="w-[350px] border border-slate-500 bg-[#10142A] p-10 rounded-lg flex flex-col gap-4">
          <h1 className="font-bold text-xl">Course Overview</h1>
          <div className="bg-gradient-to-r from-[#F526B1] to-[#8328ED] h-[5px] w-[60px]"></div>
          <div className="mt-4 flex flex-col gap-4 text-[#7A7AAD]">
            {data.courseOverview && (
              <div className="flex justify-start gap-4">
                <SignalCellularAltIcon />
                <p className="font-bold text-lg">{data?.courseOverview[0]}</p>
              </div>
            )}
            {data.courseOverview && (
              <div className="flex justify-start gap-4">
                <PlayCircleIcon />
                <p className="font-bold text-lg">{data?.courseOverview[1]}</p>
              </div>
            )}
            {data.courseOverview && (
              <div className="flex justify-start gap-4">
                <FeaturedPlayListIcon />
                <p className="font-bold text-lg">{data?.courseOverview[2]}</p>
              </div>
            )}
            {data.courseOverview && (
              <div className="flex justify-start gap-4">
                <CloudDownloadIcon />
                <p className="font-bold text-lg">{data?.courseOverview[3]}</p>
              </div>
            )}
            {data.courseOverview && (
              <div className="flex justify-start gap-4">
                <CodeIcon />
                <p className="font-bold text-lg">{data?.courseOverview[4]}</p>
              </div>
            )}
            {data.courseOverview && (
              <div className="flex justify-start gap-4">
                <ClosedCaptionIcon />
                <p className="font-bold text-lg">{data?.courseOverview[5]}</p>
              </div>
            )}
            {data.courseOverview && (
              <div className="flex justify-start gap-4">
                <AllInclusiveIcon />
                <p className="font-bold text-lg">{data?.courseOverview[6]}</p>
              </div>
            )}
            {data.courseOverview && (
              <div className="flex justify-start gap-4">
                <AccessTimeIcon />
                <p className="font-bold text-lg">{data?.courseOverview[7]}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col w-[550px] m-auto gap-10">
        <h1 className="text-3xl font-bold">Clear.Concise.Comprehensive.</h1>
        <p className="text-xl">
          Tired of piecing together disconnected tutorials or dealing with
          rambling, confusing instructors? This course is for you! It's
          perfectly structured into a series of bite-sized, easy-to-follow
          videos that cover both theory and practice.
        </p>
      </div>
    </div>
  );
};

export default Page;
