"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { SCAN_TYPES } from "../lib/site";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [scan, setScan] = useState("MRI");

  const value = useMemo(
    () => ({
      open,
      scan,
      openBooking: (nextScan) => {
        setScan(SCAN_TYPES.includes(nextScan) ? nextScan : "MRI");
        setOpen(true);
      },
      closeBooking: () => setOpen(false),
    }),
    [open, scan]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
}
