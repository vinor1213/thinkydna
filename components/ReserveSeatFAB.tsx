"use client";

import { useReserveSeat } from "./ReserveSeatModal";

export default function ReserveSeatFAB({
  eventName,
  label = "Reserve your seat",
}: {
  eventName?: string;
  label?: string;
}) {
  const { openModal } = useReserveSeat();

  return (
    <button
      onClick={() => openModal(eventName)}
      className="btn-primary fixed bottom-6 right-6 z-40 !px-6 !py-3.5 text-sm shadow-2xl sm:bottom-8 sm:right-8"
    >
      <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-white" />
      {label}
    </button>
  );
}
