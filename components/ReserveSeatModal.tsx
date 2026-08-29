"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type ReserveSeatContextValue = {
  openModal: (eventName?: string) => void;
  closeModal: () => void;
};

const ReserveSeatContext = createContext<ReserveSeatContextValue | null>(null);

export function useReserveSeat() {
  const ctx = useContext(ReserveSeatContext);
  if (!ctx) {
    throw new Error("useReserveSeat must be used within a ReserveSeatProvider");
  }
  return ctx;
}

export function ReserveSeatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [eventName, setEventName] = useState<string | undefined>(undefined);

  const openModal = useCallback((name?: string) => {
    setEventName(name);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeModal]);

  return (
    <ReserveSeatContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ReserveSeatModal
        isOpen={isOpen}
        eventName={eventName}
        onClose={closeModal}
      />
    </ReserveSeatContext.Provider>
  );
}

function ReserveSeatModal({
  isOpen,
  eventName,
  onClose,
}: {
  isOpen: boolean;
  eventName?: string;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [seats, setSeats] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setSeats(1);
    }
  }, [isOpen, eventName]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.button
            aria-label="Close reserve your seat form"
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Reserve your seat"
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl2 bg-white shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-ink transition-colors hover:bg-gray-200"
            >
              ✕
            </button>

            <div className="relative overflow-hidden bg-ink px-8 pb-8 pt-9">
              <div className="absolute inset-0 bg-brand-radial" />
              <div className="relative">
                <p className="eyebrow mb-3 text-brand-red">Reserve your seat</p>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {eventName ? eventName : "Save your spot"}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Fill this in and we&apos;ll confirm your seat over email or
                  WhatsApp.
                </p>
              </div>
            </div>

            <div className="p-8 pt-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-start gap-3 py-2"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white">
                    ✓
                  </span>
                  <h4 className="font-display text-xl font-semibold text-ink">
                    Seat reserved
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Thanks{eventName ? ` — we've noted you down for ${eventName}` : ""}.
                    A member of the team will confirm within one business day.
                  </p>
                  <button onClick={onClose} className="btn-primary mt-2">
                    Done
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="rs-name"
                      className="text-sm font-medium text-ink"
                    >
                      Full Name
                    </label>
                    <input
                      id="rs-name"
                      required
                      type="text"
                      placeholder="Ananya Iyer"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-magenta"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="rs-email"
                        className="text-sm font-medium text-ink"
                      >
                        Email ID
                      </label>
                      <input
                        id="rs-email"
                        required
                        type="email"
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-magenta"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rs-phone"
                        className="text-sm font-medium text-ink"
                      >
                        Phone/WhatsApp
                      </label>
                      <input
                        id="rs-phone"
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-magenta"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="rs-event"
                        className="text-sm font-medium text-ink"
                      >
                        Event
                      </label>
                      <input
                        id="rs-event"
                        type="text"
                        readOnly={Boolean(eventName)}
                        defaultValue={eventName ?? ""}
                        placeholder="Which event are you asking about?"
                        className={`mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-magenta ${
                          eventName ? "bg-gray-50 text-gray-600" : ""
                        }`}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rs-seats"
                        className="text-sm font-medium text-ink"
                      >
                        Number of seats
                      </label>
                      <input
                        id="rs-seats"
                        type="number"
                        min={1}
                        max={10}
                        value={seats}
                        onChange={(e) =>
                          setSeats(Math.max(1, Number(e.target.value) || 1))
                        }
                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-magenta"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="rs-message"
                      className="text-sm font-medium text-ink"
                    >
                      Anything else?{" "}
                      <span className="font-normal text-gray-400">
                        (Optional)
                      </span>
                    </label>
                    <textarea
                      id="rs-message"
                      rows={3}
                      placeholder="Dietary needs, +1s, questions — anything we should know."
                      className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-magenta"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Confirm my seat
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
