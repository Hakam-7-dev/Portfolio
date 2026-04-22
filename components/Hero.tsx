import React from "react";
import { Spotlight } from "./ui/SpotLight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { TiArrowBackOutline } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="pb-20 pt-32" id="about">
      <div>
        <Spotlight className="top-10 left-20 h-screen" fill="white" />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-60 -right-150 h-[80vh] w-[50vw]" fill="blue" />
        
      </div>
    <div className="absolute h-screen flex w-full items-center justify-center bg-white dark:bg-black">
    <div
  className={`${cn} absolute inset-0 
  bg-size-[80px_80px]
  bg-[linear-gradient(to_right,rgba(228,228,231,1)_1px,transparent_0.5px),linear-gradient(to_bottom,rgba(228,228,231,1)_1px,transparent_0.5px)]
  dark:bg-[linear-gradient(to_right,rgba(38,38,38,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,1)_1px,transparent_1px)]`}
/>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

    </div>
      <div className="flex justify-center my-20 relative z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h2 className="uppercase tracking-widest text-center text-blue-100">
                Front-End Developer | React • Next.js • TypeScript
              </h2>             
  <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Building fast, scalable interfaces for startups and small businesses" duration={1}/>
              <p className="text-center md:-tracking-wider mb-10 mt-1 text-sm md:text-lg lg:text-2xl">
Front-end developer based in Abu Dhabi, focused on building responsive, high-performance web applications for real-world use.            </p>
            <a href="#grid">
                      <MagicButton title = "View My Work" position = "right" icon= {<TiArrowBackOutline className="text-lg"/>}/>
            </a>
            </div>
      </div>
    </div>
  );
};

export default Hero;
