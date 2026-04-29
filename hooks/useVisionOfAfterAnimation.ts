"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Styles = Record<string, string>;

export function useVisionOfAfterAnimation(styles: Styles) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const kicker = el.querySelector(`.${styles.kicker}`);
      const title = el.querySelector(`.${styles.title}`);
      const bodyParagraphs = el.querySelectorAll(`.${styles.body} p`);
      const pullQuote = el.querySelector(`.${styles.pullQuote}`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true,
        },
      });

      if (kicker) {
        tl.from(kicker, {
          y: 12,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      if (title) {
        tl.from(
          title,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25",
        );
      }

      if (bodyParagraphs.length) {
        tl.from(
          bodyParagraphs,
          {
            y: 18,
            opacity: 0,
            stagger: 0.15,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.3",
        );
      }

      if (pullQuote) {
        tl.from(
          pullQuote,
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
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
