import React from "react";
import { motion } from "framer-motion";

export default function AdventureSteps() {
  const steps = [
    {
      number: "01",
      title: "Whisper your answers, and let the adventure unfold.",
      description:
        "Plan less, explore more! Share your travel details in 10 minutes—dates, budget, and preferences—then let the magic happen. A surprise trip proposal will land in your inbox soon... no hints, just pure adventure!",
      position: "top-[10%] left-[5%] max-w-[450px]",
    },
    {
      number: "02",
      title: "Answers are in, now it's time for the thrill to begin!",
      description:
        "No planning, no stress—just pack up and let the Blind Fold trips do the rest!",
      position: "top-[35%] right-[5%] max-w-[450px]",
    },
    {
      number: "03",
      title: "Airport first, destination next—let the mystery unfold!",
      description:
        "Arrive at the airport, no need to guess. Open your postcard, feel the suspense! Board your flight, let wonder ignite. Adventure awaits—your journey takes flight!",
      position: "top-[65%] left-[5%] max-w-[450px]",
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/image.jpeg')",
      }}
    >
      {/* SVG Path with stroke */}
      <svg
        viewBox="0 0 1200 800"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        {/* First path - from box 1 to box 2 */}
        <path
          id="travelPath1"
          d="M 480 150 C 480 150, 450 200, 730 400"
          stroke="white"
          strokeWidth="3"
          strokeDasharray="16, 16"
          strokeLinecap="round"
          fill="none"
          filter="drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))"
        />

        {/* Second path - from box 2 to box 3 */}
        <path
          id="travelPath2"
          d="M 730 400 C 730 400, 550 500, 480 620"
          stroke="white"
          strokeWidth="3"
          strokeDasharray="16, 16"
          strokeLinecap="round"
          fill="none"
          filter="drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))"
        />
      </svg>

      {/* Car on first path - using motion.img with SVG path animation */}
      <motion.div
        className="absolute"
        style={{
          position: "absolute",
          zIndex: 10,
          width: "50px",
          height: "auto",
          offsetPath: "path('M 480 150 C 480 150, 450 200, 730 400')",
          offsetRotate: "auto",
          /* Adjust car position to align with the path */
          // transform: "translateY(-60px)"
        }}
        initial={{ offsetDistance: "0%", opacity: 0 }}
        animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 10, // Wait 10 seconds before repeating
          opacity: {
            times: [0, 0.05, 0.95, 1],
            duration: 5,
            repeat: Infinity,
            repeatDelay: 10
          }
        }}
      >
        <img 
          src="/car.png" 
          alt="Car" 
          width={90} 
          style={{ filter: "drop-shadow(0 0 3px white)" }} 
        />
      </motion.div>

      {/* Car on second path - using motion.img with SVG path animation */}
      <motion.div
        className="absolute"
        style={{
          position: "absolute",
          zIndex: 10,
          width: "50px",
          height: "auto",
          offsetPath: "path('M 730 400 C 730 400, 550 500, 480 620')",
          offsetRotate: "auto",
          /* Adjust car position to align with the path */
          transform: "translateX(10px)"
        }}
        initial={{ offsetDistance: "0%", opacity: 0 }}
        animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          delay: 5, // Start after car 1 finishes
          repeatDelay: 10, // Same delay as car 1
          opacity: {
            times: [0, 0.05, 0.95, 1],
            duration: 5,
            delay: 5,
            repeat: Infinity,
            repeatDelay: 10
          }
        }}
      >
        <img 
          src="/car.png" 
          alt="Car" 
          width={90} 
          style={{ filter: "drop-shadow(0 0 3px white)" }} 
        />
      </motion.div>

      {/* Boxes */}
      {/* {steps.map((step, idx) => (
        <div
          key={idx}
          className={`absolute ${step.position} p-6 bg-[#fff1dd] text-[#7a2e14] rounded-xl shadow-lg`}
        >
          <h2 className="text-6xl font-bold text-[#bbb69e]">{step.number}</h2>
          <h3 className="text-xl font-semibold mt-2 text-[#a02726]">{step.title}</h3>
          <p className="text-sm mt-2 text-[#573021]">{step.description}</p>
        </div>
      ))} */}

      {/* CTA Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button className="px-8 py-3 bg-[#a02726] text-white text-lg rounded-full shadow-md hover:bg-[#821d1d] transition-all flex items-center">
          Know your destination <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}
