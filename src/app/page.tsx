"use client";
import Image from "next/image";
import { FloatingNav } from "./components/ui/floating-navbar";
import { Button } from "./components/ui/moving-border";
import { BackgroundGradient } from "./components/ui/background-gradient";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/app/components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import { useState } from "react";
import HeroSection from "@/app/pages/HeroSection/page";
import CourseSection from "@/app/pages/CourseSection/Page";
import { Discover } from "./pages/Discover/Page";
import Testimonials from "./pages/Testimonials/Page";
import Link from "next/link";
import FeaturedWebinar from "./pages/FeaturedSection/Page";
import InstructorSection from "./pages/InstructorSection/Page";
import Footer from "./pages/Footer/Page";

export function Navbar({ className }: { className?: string }) {
  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Our Courses",
      link: "",
      children: [
        { name: "All Courses", link: "allCourses" },
        { name: "Guitar Fundamental", link: "courseDetails/1" },
        { name: "Advance Vocal Training", link: "courseDetails/2" },
        {
          name: "Music Production Fundamentals",
          link: "courseDetails/3",
        },
        { name: "Piano Master Class", link: "courseDetails/4" },
        { name: "Song Writing Workshop", link: "courseDetails/5" },
      ],
    },
    { name: "Contact Us", link: "contactUs" },
  ];
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border dark:border-slate-400 rounded-full",
        className
      )}
    >
      <Menu setActive={setActive}>
        {navItems.map((item) => (
          <Link key={item.name} href={item.link}>
            <MenuItem setActive={setActive} active={active} item={item.name}>
              {item.children && (
                <div className="flex flex-col space-y-4 text-sm">
                  {" "}
                  {item?.children?.map((child) => (
                    <HoveredLink href={child.link} key={child.name}>
                      {child.name}
                    </HoveredLink>
                  ))}
                </div>
              )}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}

export default function Home() {
  return (
    <main className={"dark"}>
      <HeroSection />
      <CourseSection />
      <Discover />
      <Testimonials />
      <FeaturedWebinar />
      <InstructorSection />
      <Footer />
    </main>
  );
}
