"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Styles = Record<string, string>;

export function useSocialProofAnimation(styles: Styles) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const avatars = el.querySelectorAll(`.${styles.avatar}`);
      const names = el.querySelector(`.${styles.names}`);
      const stats = el.querySelector(`.${styles.stats}`);
      const quote = el.querySelector(`.${styles.quote}`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });

      if (avatars.length) {
        tl.from(avatars, {
          y: 16,
          opacity: 0,
          stagger: 0.1,
          duration: 0.45,
          ease: "power2.out",
        });
      }

      if (names) {
        tl.from(
          names,
          {
            y: 10,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2",
        );
      }

      if (stats) {
        tl.from(
          stats,
          {
            y: 10,
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.3",
        );
      }

      if (quote) {
        tl.from(
          quote,
          {
            y: 10,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2",
        );
      }
    }, el);

    return () => ctx.revert();
  }, [styles]);

  return { containerRef };
}
