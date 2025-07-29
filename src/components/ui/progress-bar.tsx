"use client";

import { useEffect, useState } from "react";

import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";
import { useThemeStore } from "@/context/theme-context";

export function AnimatedProgressBar() {
  const [value, setValue] = useState(0);
  const theme = useThemeStore((state: { theme: string }) => state.theme)
  const isDark = theme === 'dark'

  useEffect(() => {
    let animationFrameId: number;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setValue(Math.min(100, Math.max(0, progress)));
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="hidden sm:block fixed bottom-4 right-4 z-50">
        <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor={isDark ? "#fff" : "#000"}
        gaugeSecondaryColor={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}
        />
    </div>
  );
}
