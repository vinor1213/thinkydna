"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { STATS } from "@/lib/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Word-level reveal — each word slides/fades in with its own delay so the
// headline reads as "split text" rather than one solid block.
const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: "60%", rotateX: -40 },
  visible: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function SplitWords({
  text,
  className = "",
  wordClassName = "",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
}) {
  const words = text.split(" ").filter(Boolean);
  return (
    <motion.span
      variants={wordContainer}
      className={`inline ${className}`}
      style={{ perspective: 600 }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-1">
          <motion.span
            variants={wordItem}
            className={`inline-block will-change-transform ${wordClassName}`}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// Event listing data — shaped like real tickets: date, venue, price, category.
const TICKETS = [
  {
    author: "Rochelle Fernandez",
    category: "Workshop",
    title: "No-Code Product Sprint",
    date: "SEP 14",
    day: "MON",
    time: "10:00 AM",
    venue: "The Loft, Koramangala",
    price: "₹499",
    seatsLeft: "42 seats left",
    accent: "text-fuchsia-300",
    gradient: "from-fuchsia-700/60 via-purple-800/50 to-purple-950/70",
    ring: "ring-fuchsia-400/25",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop",
  },
  {
    author: "Regina Phalange",
    category: "Career",
    title: "Nail Your Next Interview",
    date: "SEP 21",
    day: "MON",
    time: "6:30 PM",
    venue: "Indiranagar Club House",
    price: "₹149",
    seatsLeft: "Selling fast",
    accent: "text-teal-300",
    gradient: "from-slate-800/95 via-slate-900/95 to-black/95",
    ring: "ring-teal-400/25",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
  },
  {
    author: "Joey Tribbiani",
    category: "Founder Talk",
    title: "Build Your First Product",
    date: "OCT 02",
    day: "FRI",
    time: "5:00 PM",
    venue: "HSR Innovation Hub",
    price: "₹599",
    seatsLeft: "18 seats left",
    accent: "text-emerald-300",
    gradient: "from-emerald-700/60 via-teal-800/50 to-emerald-950/70",
    ring: "ring-emerald-400/25",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop",
  },
  {
    author: "Monica Geller",
    category: "Masterclass",
    title: "Public Speaking Bootcamp",
    date: "OCT 09",
    day: "FRI",
    time: "11:00 AM",
    venue: "Whitefield Convention Hall",
    price: "₹349",
    seatsLeft: "60 seats left",
    accent: "text-brand-red",
    gradient: "from-rose-700/60 via-red-800/50 to-red-950/70",
    ring: "ring-brand-red/25",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop",
  },
  {
    author: "Chandler Bing",
    category: "Panel",
    title: "Break Into Product Management",
    date: "OCT 17",
    day: "SAT",
    time: "4:00 PM",
    venue: "MG Road Auditorium",
    price: "₹449",
    seatsLeft: "Almost full",
    accent: "text-sky-300",
    gradient: "from-sky-700/60 via-blue-800/50 to-blue-950/70",
    ring: "ring-brand-blue/25",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=500&auto=format&fit=crop",
  },
];

// Returns the shortest signed distance (in card-steps) from `index` to `current`,
// wrapping around the array — this is what lets the deck loop infinitely.
function getOffset(index: number, current: number, length: number) {
  let diff = index - current;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

// Triangular spotlight beams — a narrow point at the top (the light source)
// flaring out to a wide base over the card deck. clip-path draws an actual
// cone/triangle shape, so it reads as a beam instead of a blurred smear.
function LightRays() {
  const rays = [
    { rotate: -16, left: "18%", hue: "brand-red", delay: 0 },
    { rotate: -4, left: "38%", hue: "white", delay: 0.5 },
    { rotate: 6, left: "58%", hue: "brand-blue", delay: 1 },
    { rotate: 18, left: "78%", hue: "white", delay: 0.25 },
  ];

  const hueClass: Record<string, string> = {
    "brand-red": "from-brand-red/70",
    "brand-blue": "from-brand-blue/70",
    white: "from-white/50",
  };

  return (
    <div className="pointer-events-none absolute -top-16 left-0 right-0 h-[420px] z-0">
      {/* Glow at the apex, sells the idea of a light source */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-14 bg-white/40 rounded-full blur-2xl" />

  
    </div>
  );
}

function IconCalendar() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5l3 3" />
    </svg>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ticket = TICKETS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TICKETS.length) % TICKETS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TICKETS.length);
  };

  return (
    <section className="relative overflow-hidden bg-ink min-h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/image-1.png"
          alt="Crowd with hands raised at a live event"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/90 to-ink" />
      </div>

      {/* Ambient geometry */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] border border-brand-red/10 rounded-full"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-60 -left-40 w-[700px] h-[700px] border border-brand-blue/10 rounded-full"
          animate={{ scale: [1, 1.15, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-page relative section-pad py-12 md:py-16 min-h-[80vh] flex items-center">
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Listing content */}
          <div className="lg:col-span-7">
            <motion.p variants={item} className="eyebrow mb-4 text-brand-red opacity-90 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              Great experiences shouldn't belong to just a handful of cities.
            </motion.p>

            <motion.h1
              variants={wordContainer}
              className="max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              <SplitWords text="We're building a culture of" />{" "}
              <SplitWords
                text="better experiences"
                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue"
                wordClassName="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue"
              />{" "}
              <SplitWords text="in more cities." />
            </motion.h1>

            <motion.p variants={item} className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
              We create live events, entertainment and community experiences
              that bring fresh ideas, new formats and memorable moments to
              audiences beyond the usual places.
            </motion.p>

       {/* Event detail bar — reads like a real listing, not a pitch */}
<motion.div
  variants={item}
  className="mt-6 w-fit max-w-full flex flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
>
  <div className="flex items-center gap-2 text-sm text-gray-200">
    <span className="text-brand-red">
      <IconCalendar />
    </span>
    {ticket.date} · {ticket.day}
  </div>

  <div className="h-4 w-px bg-white/15" />

  <div className="flex items-center gap-2 text-sm text-gray-200">
    <span className="text-brand-red">
      <IconClock />
    </span>
    {ticket.time}
  </div>

  <div className="hidden h-4 w-px bg-white/15 sm:block" />

  <div className="flex items-center gap-2 text-sm text-gray-200">
    <span className="text-brand-red">
      <IconPin />
    </span>
    {ticket.venue}
  </div>
</motion.div>

            <motion.div variants={item} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/community-events" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Events
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <span className="inline-block">→</span>
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-brand-gradient"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>

            <motion.dl variants={item} className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 md:grid-cols-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-xl font-semibold text-white md:text-2xl group-hover:text-brand-red transition-colors duration-300">
                    {stat.value}
                  </dd>
                  <p className="mt-0.5 text-xs text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          {/* Right: Stacked peek-card carousel (original design) */}
          <motion.div variants={item} className="lg:col-span-5 w-full">
            <div className="relative h-[320px] w-full flex items-center justify-center">
              {/* Light rays behind the card deck */}
              <LightRays />

              {/* Prev / Next controls */}
              <button
                onClick={handlePrev}
                aria-label="Previous event"
                className="absolute left-0 top-1/2 z-30 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
              >
                <svg className="w-3 h-3 text-white group-hover:text-brand-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next event"
                className="absolute right-0 top-1/2 z-30 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
              >
                <svg className="w-3 h-3 text-white group-hover:text-brand-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Card deck */}
              <div className="relative h-full w-full max-w-[240px] mx-auto z-10">
                {TICKETS.map((card, index) => {
                  const offset = getOffset(index, currentIndex, TICKETS.length);
                  if (offset < -1 || offset > 1) return null; // only render visible neighbours

                  const isCenter = offset === 0;

                  return (
                    <motion.div
                      key={card.author}
                      onClick={() => !isCenter && setCurrentIndex(index)}
                      className={`absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br ${card.gradient} backdrop-blur-xl shadow-2xl ring-1 ${card.ring} ${
                        isCenter ? "cursor-default" : "cursor-pointer"
                      } overflow-hidden`}
                      style={{ transformOrigin: "center" }}
                      animate={{
                        x: `${offset * 78}%`,
                        scale: isCenter ? 1 : 0.88,
                        opacity: isCenter ? 1 : 0.55,
                        zIndex: isCenter ? 20 : 10,
                        filter: isCenter ? "blur(0px)" : "blur(0.5px)",
                      }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Event Image */}
                      <div className="absolute inset-0">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>

                      <div className="relative h-full flex flex-col p-5">
                        <span className={`text-xs font-semibold tracking-wide ${card.accent}`}>
                          {card.author}
                        </span>

                        <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-white">
                          {card.title}
                        </h3>

                        <div className="mt-auto pt-4">
                          <div className="flex items-center gap-1.5 text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            Live Event
                          </div>

                          <div className="mt-1.5 text-sm text-gray-300">
                            {card.price}
                            <span className="text-gray-500">/-</span>
                          </div>

                          <Link
                            href="/contact-us"
                            onClick={(e) => e.stopPropagation()}
                            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 px-3 py-1.5 text-xs font-semibold text-white border border-white/10 transition-all duration-300"
                          >
                            Event Details
                            <span aria-hidden>↗</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="mt-4 flex justify-center gap-1.5">
              {TICKETS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to card ${idx + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-5 bg-gradient-to-r from-brand-red to-brand-blue" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}