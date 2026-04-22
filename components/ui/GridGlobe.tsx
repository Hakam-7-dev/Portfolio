"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../ui/Globe").then((m) => m.World), {
  ssr: false,
});

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function GlobeDemo() {
  const globeConfig = useMemo(
    () => ({
      pointSize: 4,
      globeColor: "#062056",
      showAtmosphere: true,
      atmosphereColor: "#FFFFFF",
      atmosphereAltitude: 0.1,
      emissive: "#062056",
      emissiveIntensity: 0.1,
      shininess: 0.9,
      polygonColor: "rgba(255,255,255,0.7)",
      ambientLight: "#38bdf8",
      directionalLeftLight: "#ffffff",
      directionalTopLight: "#ffffff",
      pointLight: "#ffffff",
      arcTime: 1000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
      initialPosition: { lat: 22.3193, lng: 114.1694 },
      autoRotate: true,
      autoRotateSpeed: 0.5,
    }),
    []
  );

  const sampleArcs = useMemo(
    () => [
      {
        order: 1,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -22.9068,
        endLng: -43.1729,
        arcAlt: 0.1,
        color: getRandomColor(),
      },
      {
        order: 1,
        startLat: 28.6139,
        startLng: 77.209,
        endLat: 3.139,
        endLng: 101.6869,
        arcAlt: 0.2,
        color: getRandomColor(),
      },
      {
        order: 2,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.2,
        color: getRandomColor(),
      },
      {
        order: 2,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 3.139,
        endLng: 101.6869,
        arcAlt: 0.3,
        color: getRandomColor(),
      },
      {
        order: 3,
        startLat: -33.8688,
        startLng: 151.2093,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.3,
        color: getRandomColor(),
      },
    ],
    []
  );

  return (
    <div className="flex items-center justify-center absolute w-full h-full -left-5 lg:top-15 md:top-0">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        </motion.div>

        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />

        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}