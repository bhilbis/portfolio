"use client"

import { useMousePosition } from "@/lib/hooks/use-mouse-position";
import { motion } from "motion/react";

export default function CursorEffect() {
  const {x, y} = useMousePosition()

  return (
    <motion.div
      className="pointer-events-none fixed z-50 top-0 left-0"
      animate={{ x: x - 10, y: y - 10 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={{ willChange: "transform" }}
    >
      <div className="w-5 h-5 rounded-full bg-blue-400 opacity-60 mix-blend-multiply blur-sm"></div>
    </motion.div>
  );
};