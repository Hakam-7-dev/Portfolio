import React from "react";
import { Spotlight } from "./ui/SpotLight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="relative py-28 px-7">
      {/* Background Effects */}
      <Spotlight className="top-10 left-0 md:left-20" fill="white" />
      <Spotlight className="top-40 right-0" fill="purple" />

      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-sm uppercase tracking-widest text-blue-200 mb-4">
          About Me
        </h2>

        {/* Animated Headline */}
        <TextGenerateEffect
          className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-8"
          words="I build scalable front-end systems that feel fast, clean, and intuitive"
          duration={1}
        />

        {/* Paragraphs in card style */}
        <div className="grid gap-6 mt-10 text-left">

          <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              I’m a Front-End Developer specializing in React, Next.js, and TypeScript, focused on building responsive and high-performance web applications.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              I turn UI/UX designs into scalable interfaces, working with APIs, managing complex state, and building reusable component systems for clean architecture.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              My recent work includes CMS platforms, dashboards, and interactive web apps, with a strong focus on performance optimization and user experience.
            </p>
          </div>

        </div>

        {/* Footer highlight */}
        <div className="mt-10 text-sm text-blue-300">
          Based in Abu Dhabi • Available for Front-End roles immediately
        </div>

      </div>
    </section>
  );
};

export default About;