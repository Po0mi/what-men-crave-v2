"use client";

import Image from "next/image";
import "./Hero.scss";
import { useGsapHero } from "@/hooks/useHeroAnimation";

const Hero = () => {
  const ref = useGsapHero<HTMLElement>();

  return (
    <section className="hero" ref={ref}>
      {/* 
        We put the Image directly in the section. 
        The 'fill' prop makes it stretch to fill the parent (.hero).
      */}
      <Image
        src="/images/hero-intimate.jpg"
        alt="Intimate couple connection representing deep emotional bond"
        fill
        priority
        className="hero-bg-image"
        style={{ zIndex: 0 }} // Explicitly set via inline style to be safe
      />

      {/* Overlay sits on top of image */}
      <div className="hero-overlay"></div>

      {/* Content sits on top of overlay */}
      <div className="hero-container">
        <span className="hero-eyebrow">
          A guide for the woman who wants the truth
        </span>

        <h1 className="hero-title">
          He’s Thinking Something He Will Never Say Out Loud.
        </h1>

        <p className="hero-subtitle">
          Discover the 7 Unspoken Cravings that turn physical intimacy into deep
          emotional connection, without guessing, performing, or asking.
        </p>

        <div className="hero-cta">
          <a href="#value-stack" className="primary-cta">
            Get Instant Access - $37
          </a>

          <span className="hero-meta">
            Includes 9+ Hours of Live Workshop Recordings
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
