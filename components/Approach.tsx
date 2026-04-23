"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/Canvas_Reveal_Effect";
import { NoiseBackground } from "./ui/NoiseBackground";

export const Approach = () => {
  return (
    <section className="w-full py-20 px-4">
      <h1 className="heading text-center">
        Feature <span className="text-purple-400">process</span>
      </h1>

      <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Planning and Structure"
          icon={<AceternityIcon order="Phase 1" />}
          description="Break down requirements into clear UI structure, define reusable components, and plan data flow before development."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title="Development & Implementation"
          icon={<AceternityIcon order="Phase 2" />}
          description="Build responsive interfaces using React and Next.js, integrate APIs, and manage state with clean, maintainable code."
        >
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
          icon={<AceternityIcon order="Phase 3" />}
          description="Improve performance, ensure responsive behavior across devices, and deliver stable front-end solutions with consistent user experience."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

/* ---------------- CARD ---------------- */

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [active, setActive] = React.useState(false);

  return (
    <div
      onClick={() => setActive((p) => !p)} // mobile tap
      onMouseEnter={() => setActive(true)} // desktop hover
      onMouseLeave={() => setActive(false)} // desktop hover
      className="border border-black/[0.2] dark:border-white/[0.2]
      group relative max-w-sm w-full mx-auto p-4
      lg:h-[35rem] min-h-[18rem]
      flex items-center justify-center
      overflow-hidden cursor-pointer rounded-xl"
    >
      {/* Corner icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-black dark:text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black dark:text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-black dark:text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-black dark:text-white" />

      {/* Background effect */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center w-full px-2">
        {/* ICON */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300
          ${active ? "opacity-0 -translate-y-4" : "opacity-100"}`}
        >
          {icon}
        </div>

        {/* TITLE */}
        <h2
          className={`text-lg font-bold text-black dark:text-white transition-all duration-300
          ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p
          className={`text-sm mt-3 text-[#e4ecff] transition-all duration-300
          ${active ? "opacity-100" : "opacity-0"}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};


const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-black dark:text-white me-5"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeLinecap="round"
        />
      </svg>

      <div>
        <NoiseBackground>
          <div className="px-3 py-1 bg-neutral-200 text-zinc-900 font-semibold rounded-full text-sm">
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