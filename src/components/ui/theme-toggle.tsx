"use client";

import { useThemeStore } from "@/context/theme-context";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface ThemeClass {
  className?: string;
}

export const ThemeToggle = ({className}: ThemeClass) => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const owlSoundRef = useRef<HTMLAudioElement | null>(null);
  const chickenSoundRef = useRef<HTMLAudioElement | null>(null);

  const handleToggle = () => {
    if (theme === "dark") {
      const chicken = chickenSoundRef.current;
      if (chicken) {
        chicken.volume = 0.3;
        chicken.playbackRate = 1.6;
        chicken.play();
      }
    } else {
      const owl = owlSoundRef.current;
      if (owl) {
        owl.volume = 0.6;
        owl.play();
      }
    }
    toggleTheme();
  };


  if (!isMounted) return null;

  return (
    <>
      <audio ref={owlSoundRef} src="/backsound/dark/owl-hooting-2.mp3" preload="auto" />
      <audio ref={chickenSoundRef} src="/backsound/light/chicken.mp3" preload="auto" />

      <motion.div
        className={cn(
          "relative w-16 h-8 flex items-center rounded-full p-1 overflow-hidden",
          className
        )}
        initial={false}
        animate={{
          backgroundColor: theme === "dark" ? "#1f2937" : "#e5e7eb", // dark: gray-800, light: gray-200
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 rounded-full z-0"
          initial={false}
          animate={{
            background: theme === "dark"
              ? "linear-gradient(to right, #4b6cb7, #182848)"
              : "linear-gradient(to right, #f9d423, #ff4e50)",
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Toggle Button */}
        <motion.button
          onClick={handleToggle}
          className="relative z-10 h-6 w-6 bg-white rounded-full shadow-md flex items-center justify-center"
          initial={false}
          animate={{
            x: theme === "dark" ? 32 : 0,
          }}
          transition={{ type: "spring", stiffness: 600, damping: 35, duration: 1.5 }}
          
        >
          <motion.div
            animate={{
              rotate: theme === "dark" ? 180 : 0,
              scale: theme === "dark" ? 1.1 : 1,
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
          >
            {theme === "dark" ? 
              <div className="rotate-180 transition-transform duration-300">🦉</div> : "🌞"}
          </motion.div>
        </motion.button>
      </motion.div>
    </>
  );
}