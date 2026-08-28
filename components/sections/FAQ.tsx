"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { FAQ } from "@/lib/content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-page grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
        <Reveal direction="left" className="flex h-full flex-col space-y-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Good to know before you reach out"
            description="Can't find what you're looking for? Send us a note on the contact page and we'll get back within a business day."
          />

          <div className="relative flex-1 w-full min-h-[300px] overflow-hidden rounded-2xl">
            <Image
              src="https://media.istockphoto.com/id/501387734/photo/dancing-friends.webp?a=1&b=1&s=612x612&w=0&k=20&c=bUDxktHlH235pfdX2F1dRU5-73sUlFDAkwU5H_Ymmlk="
              alt="Team answering questions"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/20 to-transparent mix-blend-soft-light" />
          </div>
        </Reveal>

        <Reveal
          direction="right"
          delay={0.1}
          className="flex h-full flex-col divide-y divide-gray-200 border-t border-gray-200"
        >
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="flex-1">
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-ink">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-gradient text-white"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-gray-500">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}