import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import React from "react";

const FeaturedWebinar = () => {
  const projects = [
    {
      title: "Jamify",
      description:
        "A music collaboration platform that connects musicians worldwide, allowing them to work together on projects in real-time.",
      link: "https://jamify.com",
    },
    {
      title: "BeatGenius",
      description:
        "An innovative music production tool that empowers musicians to create beats and melodies effortlessly.",
      link: "https://beatgenius.com",
    },
    {
      title: "MelodyMixer",
      description:
        "A platform for exploring and mixing melodies, providing musicians with endless possibilities for crafting unique compositions.",
      link: "https://melodymixer.com",
    },
    {
      title: "ChordConnect",
      description:
        "A social network for musicians to discover and share chord progressions, fostering collaboration and inspiration.",
      link: "https://chordconnect.com",
    },
    {
      title: "RhythmRevolution",
      description:
        "A community-driven platform for rhythm enthusiasts to explore, create, and share rhythmic patterns and sequences.",
      link: "https://rhythmrevolution.com",
    },
    {
      title: "SoundSync",
      description:
        "A synchronized music playback tool that allows multiple users to listen to the same music simultaneously, perfect for virtual jam sessions.",
      link: "https://soundsync.com",
    },
  ];

  return (
    <div
      className={
        "mt-8 flex flex-col justify-center align-center text-center gap-8 min-h-screen light:bg-slate-200"
      }
    >
      <h1 className="text-xl font-semibold text-green-500">Featured Webinar</h1>
      <h1 className="text-4xl font-bold">Enhance Your Musical Journey</h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default FeaturedWebinar;
