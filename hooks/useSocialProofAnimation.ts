"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Styles = Record<string, string>;

export function useSocialProofAnimation(styles: Styles) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const stats = el.querySelector(`.${styles.stats}`);
      const quote = el.querySelector(`.${styles.quote}`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Trigger slightly later for better visibility
          once: true,
        },
      });

      if (stats) {
        tl.from(
          stats,
          {
            y: 10,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "start",
        );
      }

      if (quote) {
        tl.from(
          quote,
          {
            y: 10,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3", // Overlap slightly with stats animation
        );
      }
    }, el);

    return () => ctx.revert();
  }, [styles]);

  return { containerRef };
}
