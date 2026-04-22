"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradiantBack";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/data/confetiee.json";
import MagicButton from "@/components/ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("hakam.hammoud8@gmail.com")
    setCopied(true);
  }
  return (
    <div
      className={cn(
        `group/bento shadow-input row-span-1 flex relative overflow-hidden flex-col 
        justify-between space-y-8 rounded-3xl 
        border hover:shadow-xl 
        dark:border-white/10 dark:bg-black dark:shadow-none hover:scale-[1.02] transition-transform duration-300`,
        className,
      )} style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }} >
      <div className={`${id === 6 && 'flex justify-center h-full' }`}>
        <div className="absolute w-full h-full lg:top-0 left-0 p-2 sm:bottom-0">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover", "object-cover")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn("object-cover", "object-fill")}
            />
          )}
        
        </div>
       
    <div className={cn(titleClassName, `leading-snug group-hover/bento:translate-x-2
         transition duration-200 relative md:h-full min-h-40 flex flex-col p-4 lg:justify-end justify-center z-10000 max-w-lg`)}>
            <div className={`font-sans font-extralight
              text-xs md:text-sm text-gray-400
                 z-10`}>
                {description}
            </div>
<div className={`font-sans 
    font-bold text-lg lg:text-2xl relative z-100 md:text-xl gap-2 `}>
          {title}
        </div>
    </div>
      </div>
    {id == 2 && <GlobeDemo />}
         {id == 3 && (
      <div className="flex md:gap-8 lg:gap-4 w-fit absolute -right-3 lg:right-1 gap-7">
        <div className="flex flex-col md:gap-13 lg:gap-10 gap-5">
      {['JavaScript', 'Tailwind CSS', 'Supabase'].map((item) => (
        <span key={item} className="py-3 px-1 text-xs lg:text-base opacity-50
        lg:opacity-100 rounded-xl text-center text-[#c1c2d3] bg-[#10132E]">
          {item}
        </span>
      ))}
      <span className="py-4 px- rounded-lg text-center bg-[#10132c]" />
        </div>
        <div className="flex flex-col md:gap-13 lg:gap-12 gap-7">
              <span className="py-4 px-2 rounded-lg text-center bg-[#10132c]" />
      {['React.JS', 'Next.Js', 'TypeScript'].map((item) => (
        <span key={item} className="py-1 lg:py-2 lg:px-2 px-2 text-xs lg:text-base opacity-50
        lg:opacity-100 rounded-lg text-center text-[#c1c2d3] bg-[#10132E]">
          {item}
        </span>
      ))}
        </div>
      </div>
    )}
    
   { id === 6 && (
  <>   
      <BackgroundGradientAnimation />
    {/* Content */}
    <div className="relative flex flex-col lg:items-center h-full px-6 lg:top-5 -top-[35px]">
      {/* Button */}
      <MagicButton
        title={copied ? "Email Copied ✓" : "Copy my email"}
        icon={<IoCopyOutline />}
        position="left"
        otherClasses="bg-[#c1c23d]"
        handleClick= {handleCopy}
      />

      {copied && (
        <div className="flex items-center justify-center pointer-events-none absolute top-10">
          <div className="w-[280px] h-[280px] ">
            <Lottie
            animationData={animationData}
            loop = {false}
            autoPlay = {true}
            />
          </div>
        </div>
      )}

    </div>
  </>
)}

    </div>
  );
};
