"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const DISTANCE = 28;

function getOffset(direction: Direction) {
  switch (direction) {
    case "up":
      return { y: DISTANCE };
    case "down":
      return { y: -DISTANCE };
    case "left":
      return { x: DISTANCE };
    case "right":
      return { x: -DISTANCE };
    default:
      return {};
  }
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.3,
  scale,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  scale?: number;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...getOffset(direction), ...(scale ? { scale } : {}) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(scale ? { scale: 1 } : {}),
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
