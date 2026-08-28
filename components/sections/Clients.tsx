"use client";

import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/content";

export default function Clients() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="border-y border-gray-200 bg-white py-14">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          Trusted by teams and communities across India
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <motion.div
          className="flex w-max gap-16 pr-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center whitespace-nowrap font-display text-lg font-semibold text-gray-400 transition-colors hover:text-brand-magenta"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
