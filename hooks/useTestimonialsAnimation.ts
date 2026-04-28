"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Use a generic record type instead of a strict interface
type Styles = Record<string, string>;

export function useTestimonialsAnimation(styles: Styles) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Select elements using the passed styles object
      const eyebrow = el.querySelector(`.${styles.eyebrow}`);
      const featuredBlock = el.querySelector(`.${styles.featured}`);
      const featuredQuote = el.querySelector(`.${styles.featuredQuote}`);
      const featuredName = el.querySelector(`.${styles.featuredName}`);
      const cards = el.querySelectorAll(`.${styles.card}`);

      // Create a timeline for the intro section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true, // <--- ADDED: Fires only once
        },
      });

      // 1. Eyebrow Fade In (Faster)
      if (eyebrow) {
        tl.from(eyebrow, {
          y: 15,
          opacity: 0,
          duration: 0.5, // Reduced from 0.8
          ease: "power2.out",
        });
      }

      // 2. Featured Quote Reveal (Faster)
      if (featuredBlock) {
        tl.from(featuredBlock, {
          scale: 0.98, // Less dramatic scale for speed
          opacity: 0,
          duration: 0.6, // Reduced from 1
          ease: "power3.out",
        }).from(
          [featuredQuote, featuredName],
          {
            y: 15,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5, // Reduced from 0.8
            ease: "power2.out",
          },
          "-=0.4", // Increased overlap
        );
      }

      // 3. Secondary Cards Staggered Reveal (Faster)
      cards.forEach((card) => {
        const quote = card.querySelector(`.${styles.cardQuote}`);
        const name = card.querySelector(`.${styles.cardName}`);

        // Animate Card Container
        gsap.from(card, {
          y: 20, // Reduced distance
          opacity: 0,
          duration: 0.5, // Reduced from 0.8
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true, // <--- ADDED: Fires only once
          },
        });

        // Optional: Animate content inside card slightly later
        if (quote || name) {
          gsap.from([quote, name], {
            y: 10,
            opacity: 0,
            stagger: 0.05,
            duration: 0.4, // Reduced from 0.6
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true, // <--- ADDED: Fires only once
            },
          });
        }
      });
    }, el);

    return () => ctx.revert();
  }, [styles]);

  return { containerRef };
}
