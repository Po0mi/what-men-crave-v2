"use client";
import "./Navbar.scss";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  const getExpiryTime = () => {
    if (typeof window === "undefined") return Date.now() + 24 * 60 * 60 * 1000;
    const stored = localStorage.getItem("funnel_timer_expiry");
    if (!stored) {
      const expiry = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("funnel_timer_expiry", expiry.toString());
      return expiry;
    }
    const expiry = parseInt(stored, 10);
    if (Date.now() > expiry) {
      const newExpiry = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("funnel_timer_expiry", newExpiry.toString());
      return newExpiry;
    }
    return expiry;
  };

  const calculateTimeLeft = () => {
    const diff = getExpiryTime() - Date.now();
    if (diff <= 0) {
      if (typeof window !== "undefined")
        localStorage.removeItem("funnel_timer_expiry");
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const fmt = (n: number) => n.toString().padStart(2, "0");

  return (
    <nav className="funnel-nav">
      <div className="funnel-nav-container">
        {/* LEFT — message */}
        <span className="funnel-nav-message">
          Introductory pricing - limited time only
        </span>

        {/* CENTER — timer */}
        <div className="funnel-nav-timer-wrapper">
          <span className="funnel-nav-timer-label">Offer ends in</span>
          <div className="funnel-nav-timer-display">
            <div className="funnel-nav-unit">
              <span className="funnel-nav-time-unit">
                {fmt(timeLeft.hours)}
              </span>
              <span className="funnel-nav-unit-label">hr</span>
            </div>
            <span className="funnel-nav-colon">:</span>
            <div className="funnel-nav-unit">
              <span className="funnel-nav-time-unit">
                {fmt(timeLeft.minutes)}
              </span>
              <span className="funnel-nav-unit-label">min</span>
            </div>
            <span className="funnel-nav-colon">:</span>
            <div className="funnel-nav-unit">
              <span className="funnel-nav-time-unit">
                {fmt(timeLeft.seconds)}
              </span>
              <span className="funnel-nav-unit-label">sec</span>
            </div>
          </div>
        </div>

        {/* RIGHT — CTA */}
        <a href="#value-stack" className="funnel-nav-cta">
          Get Access - $37
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
