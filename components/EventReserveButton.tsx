"use client";

import type { ReactNode } from "react";
import { useReserveSeat } from "./ReserveSeatModal";

export default function EventReserveButton({
  eventName,
  className,
  children,
}: {
  eventName: string;
  className?: string;
  children: ReactNode;
}) {
  const { openModal } = useReserveSeat();

  return (
    <button type="button" onClick={() => openModal(eventName)} className={className}>
      {children}
    </button>
  );
}
