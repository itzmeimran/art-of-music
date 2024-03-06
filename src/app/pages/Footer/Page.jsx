import React from "react";
import Link from "next/link";
const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/allCourses" },
    { name: "AboutUs", link: "/aboutUs" },
    { name: "ContactUs", link: "/contactUs" },
  ];
  const followUs = [
    { name: "Instagram", link: "" },
    { name: "Github", link: "https://www.github.com/itzmeimran" },
    { name: "Linkedin", link: "" },
  ];
  return (
    <div className="flex justify-between p-24 ">
      <div className="flex-1 text-center gap-5 flex flex-col">
        <h1 className={"font-bold text-2xl"}>About Us</h1>
        <p className="font-sm">
          "Welcome to our music school, where passion meets proficiency. Our
          dedicated instructors foster a love for music while nurturing talent
          through personalized instruction. With a diverse curriculum covering
          theory, performance, and composition, we empower students to unleash
          their musical potential. Join us and embark on a melodious journey
          today!"
        </p>
      </div>
      <div className="flex-1 text-center gap-5 flex flex-col">
        <h1 className={"font-bold text-2xl"}>Quick Links</h1>
        <div>
          {quickLinks.map((link, i) => (
            <Link href={link.link} key={i}>
              <p className="hover:text-slate-500">{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 text-center gap-5 flex flex-col">
        <h1 className={"font-bold text-2xl"}>Follow Us</h1>
        <div>
          {followUs.map((item, i) => (
            <Link key={i} href={item.link}>
              <p className="hover:text-slate-500">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 text-center gap-5 flex flex-col">
        <h1 className={"font-bold text-xl"}>Contact Us</h1>
        <div>
          <p className="text-slate-500">Kadapa, Andhra Pradesh</p>
          <p className="text-slate-500">Kadapa 516001</p>
          <p className="text-slate-500">Email ikik790@gmail.com</p>
          <p className="text-slate-500">Phone 91-7013897XX</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
