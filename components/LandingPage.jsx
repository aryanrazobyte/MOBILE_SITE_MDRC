"use client";

import { useEffect, useRef } from "react";
import {
  doctors,
  faqs,
  features,
  locations,
  mriScans,
  PHONE_HREF,
  preparationSteps,
  services,
  SITE_URL,
  WHATSAPP_HREF,
} from "../lib/site";
import { useBooking } from "./BookingContext";

function ContactButtons() {
  return (
    <>
      <a href={PHONE_HREF} className="header-call">
        <img src="/images/call.png" alt="" />
        <span>Call Now</span>
      </a>
      <a href={WHATSAPP_HREF} className="header-whatsapp" target="_blank" rel="noopener noreferrer">
        <img src="/images/whatsapp.png" alt="" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}

export default function LandingPage() {
  const { openBooking } = useBooking();
  const doctorGrid = useRef(null);
  const mriSlider = useRef(null);

  const scrollSlider = (sliderRef, direction, cardSelector) => {
    const grid = sliderRef.current;
    if (!grid) return;
    const card = grid.querySelector(cardSelector);
    const gap = parseFloat(getComputedStyle(grid).gap) || 18;
    const amount = card ? card.getBoundingClientRect().width + gap : 300;
    const maxScroll = grid.scrollWidth - grid.clientWidth;

    if (direction > 0 && grid.scrollLeft >= maxScroll - 8) {
      grid.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction < 0 && grid.scrollLeft <= 8) {
      grid.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      grid.scrollBy({ left: direction * amount, behavior: "smooth" });
    }
  };

  const scrollMri = (direction) => scrollSlider(mriSlider, direction, ".mri-scan-card");
  const scrollDoctors = (direction) => scrollSlider(doctorGrid, direction, ".doctor-card");

  useEffect(() => {
    const setupAutoScroll = (sliderRef, cardSelector, intervalMs) => {
      const slider = sliderRef.current;
      if (!slider) return () => {};

      let isPaused = false;
      let resumeTimeout;

      const pause = () => {
        isPaused = true;
        clearTimeout(resumeTimeout);
      };

      const resumeLater = () => {
        clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(() => {
          isPaused = false;
        }, 2500);
      };

      slider.addEventListener("mouseenter", pause);
      slider.addEventListener("mouseleave", () => {
        isPaused = false;
      });
      slider.addEventListener("touchstart", pause, { passive: true });
      slider.addEventListener("touchend", resumeLater, { passive: true });

      const timer = setInterval(() => {
        if (isPaused) return;
        const card = slider.querySelector(cardSelector);
        const gap = parseFloat(getComputedStyle(slider).gap) || 18;
        const amount = card ? card.getBoundingClientRect().width + gap : 300;
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        if (slider.scrollLeft >= maxScroll - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: amount, behavior: "smooth" });
        }
      }, intervalMs);

      return () => {
        clearInterval(timer);
        clearTimeout(resumeTimeout);
        slider.removeEventListener("mouseenter", pause);
        slider.removeEventListener("mouseleave", () => {
          isPaused = false;
        });
        slider.removeEventListener("touchstart", pause);
        slider.removeEventListener("touchend", resumeLater);
      };
    };

    const cleanupMri = setupAutoScroll(mriSlider, ".mri-scan-card", 3200);
    const cleanupDoctors = setupAutoScroll(doctorGrid, ".doctor-card", 3800);

    return () => {
      cleanupMri();
      cleanupDoctors();
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href={SITE_URL} className="logo" aria-label="Modern Diagnostic & Research Centre">
            <img src="/images/mdrc-logo.png" alt="Modern Diagnostic & Research Centre" />
          </a>
          <div className="header-actions">
            <button type="button" className="btn-book" onClick={() => openBooking("MRI")}>
              Book Now
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow-badge">
                <span className="badge-pulse"></span>
                <span>NABL &amp; NABH Accredited Labs</span>
              </div>
              <h1>
                Advanced MRI Scan <span>in Gurugram</span>
              </h1>
              <p className="hero-description">
                High-precision MRI imaging with advanced 3T technology and expert radiologists. Trusted for fast, dependable results.
              </p>
              <div className="hero-buttons">
                <button type="button" className="btn-book hero-primary-btn" onClick={() => openBooking("MRI")}>
                  Book Scan Now
                </button>
                <a href={PHONE_HREF} className="hero-call-btn">
                  <img src="/images/call.png" alt="" />
                  <span>Call 0124 671 2000</span>
                </a>
              </div>
              <div className="hero-trust">
                <div className="hero-trust-item">
                  <span className="check-icon">✓</span> 3T MRI Technology
                </div>
                <div className="hero-trust-item">
                  <span className="check-icon">✓</span> Expert Radiologists
                </div>
                <div className="hero-trust-item">
                  <span className="check-icon">✓</span> Advanced Imaging
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img
                  src="/images/heroSectionImage.png"
                  alt="Advanced 3T MRI scanner at MDRC Gurugram"
                  width="700"
                  height="600"
                  priority="true"
                />
              </div>
              <div className="hero-badge">
                <span className="badge-icon">3T</span>
                <div>
                  <strong>3T MRI Technology</strong>
                  <small>Ultra-Clear Advanced Imaging</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="MDRC diagnostic credentials">
          <div className="container trust-strip-grid">
            <div className="trust-item">
              <span className="trust-number">41+</span>
              <span className="trust-label">Years of Diagnostic Excellence</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">25+</span>
              <span className="trust-label">Diagnostic Labs</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">1 Cr+</span>
              <span className="trust-label">Patients Served</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">NABL & NABH</span>
              <span className="trust-label">Accredited</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container intro-grid">
            <div className="intro-copy">
              <div className="section-heading">
                <h2>MRI Scan in Gurugram</h2>
              </div>
              <div className="intro-content">
                <p>
                  Get access to advanced MRI scanning in Gurugram with high-quality imaging and accurate diagnostic support. MRI uses powerful magnetic fields and radio waves to create detailed images of organs, tissues, joints, and other structures inside the body.
                </p>
                <p>
                  At MDRC, every scan is performed in a calm, patient-friendly setting and reported by experienced radiologists. Whether your doctor has advised a brain, spine, joint, abdomen, or vascular study, 3T MRI helps deliver clear answers without ionizing radiation—so treatment decisions can be made with confidence.
                </p>
                <div className="content-points">
                  <div className="content-point">
                    <span className="check-icon">✓</span> Advanced MRI Technology
                  </div>
                  <div className="content-point">
                    <span className="check-icon">✓</span> Experienced Radiology Team
                  </div>
                  <div className="content-point">
                    <span className="check-icon">✓</span> Patient-focused Experience
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-visual">
              <img src="/images/indian-mri-scan.jpg" alt="Indian patient undergoing an MRI scan at MDRC" />
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div className="center-heading">
              <span className="eyebrow">MRI SERVICES</span>
              <h2>Other MRI Scans</h2>
              <p>Our MRI services cover a wide range of diagnostic imaging needs with advanced technology and expert care.</p>
            </div>
            <div className="mri-slider">
              <button
                type="button"
                className="slider-arrow mri-arrow-left"
                aria-label="Previous MRI scans"
                onClick={() => scrollMri(-1)}
              >
                ‹
              </button>
              <div className="mri-scans-slider" ref={mriSlider}>
                {mriScans.map((scan) => (
                  <article
                    className="mri-scan-card"
                    key={scan.title}
                    onClick={() => openBooking("MRI")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") openBooking("MRI");
                    }}
                  >
                    <div className="mri-scan-icon">
                      <img src={scan.image} alt="" />
                    </div>
                    <div className="mri-scan-content">
                      <h3>{scan.title}</h3>
                      <p>{scan.description}</p>
                    </div>
                  </article>
                ))}
              </div>
              <button
                type="button"
                className="slider-arrow mri-arrow-right"
                aria-label="Next MRI scans"
                onClick={() => scrollMri(1)}
              >
                ›
              </button>
            </div>
            <div className="section-cta">
              <button type="button" className="btn-book" onClick={() => openBooking("MRI")}>
                Book Now
              </button>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="center-heading">
              <span className="eyebrow">WHY CHOOSE MDRC</span>
              <h2>Why Choose Our MRI Centre?</h2>
              <p>Advanced technology, expert care, and accurate results you can trust.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <div className="feature-card" key={feature.title}>
                  <div className="feature-icon">
                    <img src={feature.image} alt="" />
                  </div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-blue-light">
          <div className="container">
            <div className="center-heading">
              <span className="eyebrow">BEFORE YOUR MRI</span>
              <h2>MRI Scan Preparation</h2>
              <p>Follow simple preparation guidelines to ensure a safe, smooth, and accurate scan.</p>
            </div>
            <div className="steps-grid">
              {preparationSteps.map((step) => (
                <div className="step-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div className="step-icon">
                    <img src={step.image} alt="" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="center-heading">
              <span className="eyebrow">OUR EXPERTS</span>
              <h2>Our Radiologists</h2>
            </div>
            <div className="doctor-slider">
              <button type="button" className="doctor-arrow doctor-arrow-left" aria-label="Previous doctors" onClick={() => scrollDoctors(-1)}>
                ‹
              </button>
              <div className="doctor-grid" ref={doctorGrid}>
                {doctors.map((doctor) => (
                  <article className="doctor-card" key={doctor.name}>
                    <div className="doctor-photo">
                      <img src={doctor.image} alt={doctor.name} />
                    </div>
                    <div className="doctor-info">
                      <h3>{doctor.name}</h3>
                      <p>{doctor.role}</p>
                    </div>
                  </article>
                ))}
              </div>
              <button type="button" className="doctor-arrow doctor-arrow-right" aria-label="Next doctors" onClick={() => scrollDoctors(1)}>
                ›
              </button>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div className="center-heading">
              <span className="eyebrow">OUR NETWORK</span>
              <h2>Trusted Diagnostic Network Across Gurugram</h2>
            </div>
            <div className="location-grid">
              {locations.map((location) => (
                <article className="location-card" key={location.label}>
                  <div className="location-image">
                    <img src={location.image} alt={location.title} />
                  </div>
                  <div className="location-content">
                    <span className="location-label">{location.label}</span>
                    <h3>{location.title}</h3>
                    <address>{location.address}</address>
                    <div className="location-card-actions">
                      <a href={PHONE_HREF} className="location-action-call">
                        <img src="/images/call.png" alt="" />
                        <span>Call Centre</span>
                      </a>
                      <button type="button" className="location-action-book" onClick={() => openBooking("MRI")}>
                        Book at this Lab
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="center-heading">
              <span className="eyebrow">DIAGNOSTIC SERVICES</span>
              <h2>Our Services</h2>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <button
                  type="button"
                  className="simple-service"
                  key={service.name}
                  onClick={() => openBooking(service.scan)}
                >
                  <img className="simple-service-icon" src={service.image} alt="" />
                  <span>{service.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container trust-image-grid">
            <div className="trust-image-wrapper">
              <img src="/images/PatientTrust.jpeg" alt="Patient receiving diagnostic imaging care at MDRC" />
            </div>
            <div className="trust-content">
              <span className="eyebrow eyebrow-light">PATIENT EXPERIENCE</span>
              <h2>Why Patients Trust Us</h2>
              <ul className="trust-list">
                <li>
                  <span>✓</span>
                  <p>Advanced diagnostic technology</p>
                </li>
                <li>
                  <span>✓</span>
                  <p>Experienced professionals</p>
                </li>
                <li>
                  <span>✓</span>
                  <p>Patient-focused environment</p>
                </li>
                <li>
                  <span>✓</span>
                  <p>Reliable diagnostic services</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-container">
            <div className="center-heading">
              <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2>MRI Scan FAQs</h2>
            </div>
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  {faq.question} <span className="faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="container final-cta-inner">
            <div>
              <h2>Need an MRI Scan in Gurugram?</h2>
              <p>
                Book your MRI scan at MDRC India and get access to advanced diagnostic imaging with experienced radiology professionals.
              </p>
            </div>
            <div className="final-buttons">
              <button type="button" className="btn-book btn-white-book" onClick={() => openBooking("MRI")}>
                Book Now
              </button>
              <ContactButtons />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-logo">
            <a href={SITE_URL} className="logo">
              <img src="/images/mdrc-logo.png" alt="Modern Diagnostic & Research Centre" />
            </a>
          </div>
          <div className="footer-meta">
            <a className="footer-link" href={`${SITE_URL}/page/privacy-policy`} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <p>©2024 All right reserved. Modern Diagnostic & Research Centre Limited.</p>
          </div>
        </div>
      </footer>

      <nav className="mobile-sticky-cta" aria-label="Quick contact actions">
        <a href={PHONE_HREF} className="sticky-btn sticky-call" aria-label="Call MDRC">
          <img src="/images/call.png" alt="" />
          <span>Call</span>
        </a>
        <a href={WHATSAPP_HREF} className="sticky-btn sticky-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp MDRC">
          <img src="/images/whatsapp.png" alt="" />
          <span>WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
