"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/Canvas_Reveal_Effect";
import { NoiseBackground } from "./ui/NoiseBackground";
import { TiEdit } from "react-icons/ti";

export const Approach = () => {
    return (
    <section className="w-full py-20">
        <h1 className="heading">
        My <span className="text-purple-400">approach</span>
        </h1>
        <>
        <div className="py-20 flex flex-col lg:flex-row items-center 
        justify-center
        w-full gap-4">

        <Card 
        title="Planning and Structure" 
        icon={<AceternityIcon order="Phase 1"/>}
        description="Break down requirements into clear UI structure, define reusable components, and plan data flow before development.">
            <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            />
        </Card>

        <Card 
        title="Development & Implementation" 
        icon={<AceternityIcon order="Phase 2"/>} 
        description="Build responsive interfaces using React and Next.js, integrate APIs, and manage state with clean, maintainable code.">
            <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
                [236, 72, 153],
                [232, 121, 249],
            ]}
            dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card 
        title="Optimization & Delivery" 
        icon={<AceternityIcon order = "Phase 3"/>}
        description="Improve performance, ensure responsive behavior across devices, and deliver stable front-end solutions with consistent user experience." >
            <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            />
        </Card>

        </div>
    </>
    </section>
    );
}

const Card = ({
    title,
    icon,
    children,
    description
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description: string
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
    <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card 
        flex items-center justify-center dark:border-white/[0.2]  
        max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] relative">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <AnimatePresence>
        {hovered && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
            >
            {children}
            </motion.div>
        )}
        </AnimatePresence>

        <div className="relative z-20">
        <div className="text-center 
        group-hover/canvas-card:-translate-y-4 
        group-hover/canvas-card:opacity-0 transition duration-200 w-full  
        mx-auto flex items-center justify-center
        absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            {icon}
        </div>
          <h2 className="text-center dark:text-white text-lg opacity-0 group-hover/canvas-card:opacity-100 
          relative z-10 text-black mt-4  
          font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 
          transition duration-200">
            {title}
        </h2>
        <h2 className="text-center dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 
        relative z-10 text-black mt-4 
        font-bold group-hover/canvas-card:text-white 
        group-hover/canvas-card:-translate-y-2 transition duration-200" style={{color: "#e4ecff"}}>
            {description}
        </h2>
        </div>
    </div>
    );
};

const AceternityIcon = ({order}: {order: string}) => {
    return (
        <div className="flex items-center justify-center ">
            <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-black dark:text-white group-hover/canvas-card:text-white me-5"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
            <div>
            <NoiseBackground>
                <div className="w-full bg-neutral-200 text-zinc-900 font-semibold rounded-full py-1">
                    {order}
                </div>
            </NoiseBackground>
            </div>
        </div>

    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
    );
};