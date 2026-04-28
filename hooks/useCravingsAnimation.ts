import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EASE = "power3.out";

export const useCravingsAnimation = () => {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

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

      // CTA button
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.5, ease: EASE,
            scrollTrigger: { trigger: ctaRef.current, start: "top 92%", once: true },
          }
        );
      }

      // List items — each row staggers in as it enters the viewport
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.querySelectorAll("li"),
          { opacity: 0, x: 24 },
          {
            opacity: 1, x: 0, duration: 0.6, ease: EASE,
            stagger: 0.08,
            scrollTrigger: { trigger: listRef.current, start: "top 82%", once: true },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return { eyebrowRef, headlineRef, introRef, ctaRef, listRef };
};
