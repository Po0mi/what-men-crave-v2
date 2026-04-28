"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Styles = Record<string, string>;

export function useClosingCtaAnimation(styles: Styles) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Select elements using the passed styles object
      const headline = el.querySelector(`.${styles.headline}`);
      const optionA = el.querySelector(`.${styles.optionA}`);
      const orDivider = el.querySelector(`.${styles.orDivider}`);
      const optionB = el.querySelector(`.${styles.optionB}`);
      const quote = el.querySelector(`.${styles.quote}`);

      const card = el.querySelector(`.${styles.card}`);
      const badge = el.querySelector(`.${styles.badge}`);
      const ctaBtn = el.querySelector(`.${styles.cta}`);

      // Create a timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          once: true, // <--- ADDED: Fires only once
        },
      });

      // 1. Left Side Narrative Reveal (Faster)
      if (headline) {
        tl.from(headline, {
          y: 20, // Reduced distance
          opacity: 0,
          duration: 0.5, // Reduced from 0.8
          ease: "power2.out",
        })
          .from(
            optionA,
            {
              x: -20, // Reduced distance
              opacity: 0,
              duration: 0.4, // Reduced from 0.6
              ease: "power2.out",
            },
            "-=0.3", // Tighter overlap
          )
          .from(
            orDivider,
            {
              scale: 0,
              opacity: 0,
              duration: 0.3, // Reduced from 0.4
              ease: "back.out(1.7)",
            },
            "-=0.2",
          )
          .from(
            optionB,
            {
              x: 20, // Reduced distance
              opacity: 0,
              duration: 0.4, // Reduced from 0.6
              ease: "power2.out",
            },
            "-=0.2",
          )
          .from(
            quote,
            {
              y: 15, // Reduced distance
              opacity: 0,
              duration: 0.5, // Reduced from 0.8
              ease: "power2.out",
            },
            "-=0.3", // Tighter overlap
          );
      }

      // 2. Right Side Card Reveal (Faster)
      if (badge) {
        // Badge spins/pops in
        tl.from(
          badge,
          {
            rotation: -180,
            scale: 0,
            opacity: 0,
            duration: 0.8, // Reduced from 1
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.4", // Tighter overlap
        )
          // Card content fades up
          .from(
            card,
            {
              y: 30, // Reduced distance
              opacity: 0,
              duration: 0.5, // Reduced from 0.8
              ease: "power3.out",
            },
            "-=0.5", // Tighter overlap
          )
          // CTA Button pops last
          .from(
            ctaBtn,
            {
              scale: 0.9,
              opacity: 0,
              duration: 0.4, // Reduced from 0.6
              ease: "back.out(1.7)",
            },
            "-=0.3", // Tighter overlap
          );
      } else if (card) {
        // Fallback if badge is missing but card exists
        tl.from(
          card,
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4",
        ).from(
          ctaBtn,
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );
      }
    }, el);

    return () => ctx.revert();
  }, [styles]);

  return { containerRef };
}
