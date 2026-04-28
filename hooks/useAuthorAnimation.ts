import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EASE = "power3.out";

export const useAuthorAnimation = () => {
  const photoRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Photo — slides in from the left
      if (photoRef.current) {
        gsap.fromTo(
          photoRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 1, ease: EASE,
            scrollTrigger: { trigger: photoRef.current, start: "top 85%", once: true },
          }
        );
      }

      // Eyebrow — quick fade up
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

      // Headline — slides up with weight
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: EASE,
            scrollTrigger: { trigger: headlineRef.current, start: "top 88%", once: true },
          }
        );
      }

      // Body paragraphs — stagger in
      if (bodyRef.current) {
        gsap.fromTo(
          bodyRef.current.querySelectorAll("p"),
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: EASE,
            stagger: 0.12,
            scrollTrigger: { trigger: bodyRef.current, start: "top 88%", once: true },
          }
        );
      }

      // Stats — stagger in with a slight scale pop
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll(":scope > div"),
          { opacity: 0, y: 16, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.5, ease: EASE,
            stagger: 0.1,
            scrollTrigger: { trigger: statsRef.current, start: "top 90%", once: true },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return { photoRef, eyebrowRef, headlineRef, bodyRef, statsRef };
};
