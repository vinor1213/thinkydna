"use client";

import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/content";
import Image from "next/image";

export default function Clients() {
  // Create 3 loops for seamless infinite scroll
  const loop = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="border-y border-gray-200 bg-white py-8">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400"
        >
        Built with people who believe in good ideas


        </motion.p>

    
      </div>

      <div className="relative mt-6 overflow-hidden">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Animated marquee - different style */}
        <motion.div
          className="flex w-max gap-12 pr-12"
          animate={{
            x: ["0%", "-33.33%"],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          {loop.map((client, i) => (
            <motion.div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {client.logo ? (
                <div className="relative h-8 w-24 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-110">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="whitespace-nowrap font-display text-base font-semibold text-gray-400 transition-colors group-hover:text-brand-magenta">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}