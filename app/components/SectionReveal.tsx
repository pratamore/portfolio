"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function SectionReveal({
  children,
  delay = 0,
}: SectionRevealProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.section>
  );
}
