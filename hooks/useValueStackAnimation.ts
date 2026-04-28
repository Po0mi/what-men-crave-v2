import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EASE = "power3.out";

export const useValueStackAnimation = () => {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const priceBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Eyebrow
      if (eyebrowRef.current) {
        gsap.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 14 },
          {
            opacity: 1, y: 0, duration: 0.5, ease: EASE,
            scrollTrigger: { trigger: eyebrowRef.current, start: "top 88%", once: true },
          }
        );
      }

      // Headline
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: EASE,
            scrollTrigger: { trigger: headlineRef.current, start: "top 88%", once: true },
          }
        );
      }

      // Intro paragraph
      if (introRef.current) {
        gsap.fromTo(
          introRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: EASE,
            scrollTrigger: { trigger: introRef.current, start: "top 90%", once: true },
          }
        );
      }

      // Bonus list items — stagger in from below
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.querySelectorAll("li"),
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0, duration: 0.65, ease: EASE,
            stagger: 0.1,
            scrollTrigger: { trigger: listRef.current, start: "top 84%", once: true },
          }
        );
      }

      // Price bar — fades up last
      if (priceBarRef.current) {
        gsap.fromTo(
          priceBarRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: EASE,
            scrollTrigger: { trigger: priceBarRef.current, start: "top 90%", once: true },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return { eyebrowRef, headlineRef, introRef, listRef, priceBarRef };
};
