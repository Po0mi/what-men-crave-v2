"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Styles = Record<string, string>;

export function useFAQAnimation(styles: Styles) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Select elements
      const eyebrow = el.querySelector(`.${styles.eyebrow}`);
      const headline = el.querySelector(`.${styles.headline}`);
      const listItems = el.querySelectorAll(`.${styles.list} li`);
      const answerWrap = el.querySelector(`.${styles.answerWrap}`);

      // Note: We don't animate answerQuestion/answerText here as they are handled by the toggle logic

      // 1. Initial Entrance Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true, // <--- ADDED: Fires only once
        },
      });

      // Eyebrow & Headline (Faster)
      if (eyebrow && headline) {
        tl.from([eyebrow, headline], {
          y: 15, // Reduced distance
          opacity: 0,
          stagger: 0.1,
          duration: 0.5, // Reduced from 0.8
          ease: "power2.out",
        });
      }

      // List Items Stagger (Faster)
      listItems.forEach((item, index) => {
        gsap.from(item, {
          x: -20, // Reduced distance
          opacity: 0,
          duration: 0.4, // Reduced from 0.6
          delay: index * 0.08, // Tighter delay
          ease: "power2.out",
        });
      });

      // Initial Answer Fade Up (Faster)
      if (answerWrap) {
        gsap.from(answerWrap, {
          y: 20, // Reduced distance
          opacity: 0,
          duration: 0.5, // Reduced from 0.8
          ease: "power2.out",
          delay: 0.3, // Reduced delay
        });
      }
    }, el);

    return () => ctx.revert();
  }, [styles]);

  return { containerRef };
}

// Helper function to animate the answer switch
export const animateAnswerChange = (
  styles: Styles,
  containerRef: RefObject<HTMLElement | null>,
) => {
  const el = containerRef.current;
  if (!el) return;

  const answerWrap = el.querySelector(`.${styles.answerWrap}`);
  const answerQuestion = el.querySelector(`.${styles.answerQuestion}`);
  const answerText = el.querySelector(`.${styles.answerText}`);

  if (!answerWrap || !answerQuestion || !answerText) return;

  // Create a small timeline for the transition
  const tl = gsap.timeline();

  // 1. Fade Out Old Content (Faster)
  tl.to([answerQuestion, answerText], {
    y: -10,
    opacity: 0,
    duration: 0.15, // Reduced from 0.2
    ease: "power2.in",
  })
    // 2. Instantly swap content (React handles the DOM update before this runs if used in useEffect)
    .set([answerQuestion, answerText], {
      y: 10,
      opacity: 0,
    })
    // 3. Fade In New Content (Faster)
    .to([answerQuestion, answerText], {
      y: 0,
      opacity: 1,
      duration: 0.25, // Reduced from 0.3
      ease: "power2.out",
    });
};
