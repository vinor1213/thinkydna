"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const EVENT_TYPES = [
  "Community event",
  "Conference",
  "Brand activation",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="card-surface flex flex-col items-start gap-3 p-8"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white"
        >
          ✓
        </motion.span>
        <h3 className="font-display text-xl font-semibold text-ink">
          Message sent
        </h3>
        <p className="text-sm leading-relaxed text-gray-500">
          Thanks for reaching out. A producer from thinkydna will reply
          within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-ghost -ml-5"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="name"
            required
            type="text"
            placeholder="Ananya Iyer"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-magenta"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder="you@company.com"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-magenta"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-ink">Event type</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {EVENT_TYPES.map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setEventType(type)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                eventType === type
                  ? "border-transparent bg-brand-gradient text-white"
                  : "border-gray-300 text-gray-500 hover:border-brand-magenta hover:text-brand-magenta"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="date" className="text-sm font-medium text-ink">
          Target date (optional)
        </label>
        <input
          id="date"
          type="text"
          placeholder="e.g. Late September 2026"
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-magenta"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Tell us about the event
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="Expected attendees, city, and anything else that helps us scope it."
          className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-magenta"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
      </button>
    </form>
  );
}
