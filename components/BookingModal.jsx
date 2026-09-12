"use client";

import { useEffect, useState } from "react";
import { ANDROID_APP, IOS_APP, SCAN_TYPES, WHATSAPP_HREF } from "../lib/site";
import { useBooking } from "./BookingContext";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  scan: "MRI",
  message: "",
};

export default function BookingModal() {
  const { open, closeBooking, scan } = useBooking();
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    setForm({ ...emptyForm, scan });
    setSubmitted(false);
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, scan, closeBooking]);

  if (!open) return null;

  const update = (event) => {
    const { name, value } = event.target;
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setForm((current) => ({ ...current, [name]: digits }));
      return;
    }
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedName = form.name.trim();
    const cleanPhone = form.phone.replace(/\D/g, "");

    if (!trimmedName) {
      alert("Please enter your full name.");
      return;
    }

    if (cleanPhone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const text = [
      "Scan Booking Request",
      `Name: ${trimmedName}`,
      `Phone: ${cleanPhone}`,
      form.email ? `Email: ${form.email.trim()}` : null,
      `Scan: ${form.scan}`,
      form.message ? `Message: ${form.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`${WHATSAPP_HREF}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="booking-overlay" onClick={closeBooking} role="presentation">
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="booking-close" onClick={closeBooking} aria-label="Close booking form">
          ×
        </button>
        {submitted ? (
          <div className="booking-success">
            <h2>Thank you</h2>
            <p>Your request has been sent. Our team will contact you shortly to confirm your appointment.</p>
            <div className="app-download">
              <strong>Download our MDRC India Health App</strong>
              <div className="app-links">
                <a className="app-link" href={IOS_APP} target="_blank" rel="noopener noreferrer">
                  Download on iOS
                </a>
                <a className="app-link" href={ANDROID_APP} target="_blank" rel="noopener noreferrer">
                  Get it on Android
                </a>
              </div>
            </div>
            <button type="button" className="btn-book" onClick={closeBooking}>
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">BOOK APPOINTMENT</p>
            <h2 id="booking-title">Book your scan</h2>
            <p className="booking-lead">
              Share your details and we will help you schedule at the nearest MDRC centre.
            </p>
            <form className="booking-form" onSubmit={handleSubmit}>
              <label>
                <span>
                  Full name <span style={{ color: "#dc2626", fontWeight: "700" }}>*</span>
                </span>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                />
              </label>
              <label>
                <span>
                  Phone number <span style={{ color: "#dc2626", fontWeight: "700" }}>*</span>
                </span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={form.phone}
                  onChange={update}
                  placeholder="10-digit mobile number"
                  required
                  title="Please enter a valid 10-digit mobile number"
                  autoComplete="tel"
                />
              </label>
              <label>
                Email (optional)
                <input
                  name="email"
                  type="email"
                  inputMode="email"
                  value={form.email}
                  onChange={update}
                  placeholder="yourname@gmail.com"
                  autoComplete="email"
                />
              </label>
              <label>
                Scan type
                <select name="scan" value={form.scan} onChange={update}>
                  {SCAN_TYPES.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="booking-full">
                Message (optional)
                <textarea
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={update}
                  placeholder="Any specific instructions or doctor's prescription details..."
                />
              </label>
              <button type="submit" className="btn-book booking-submit">
                Submit request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
