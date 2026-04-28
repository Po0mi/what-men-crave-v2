import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EASE = "power3.out";

export const useStoryAnimation = () => {
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = {
      label: labelRef.current,
      headline: headlineRef.current,
      body: bodyRef.current,
    };

    const ctx = gsap.context(() => {
      // Section label — quick fade up
      if (els.label) {
        gsap.fromTo(
          els.label,
          { opacity: 0, y: 14 },
          {
            opacity: 1, y: 0, duration: 0.5, ease: EASE,
            scrollTrigger: { trigger: els.label, start: "top 90%", once: true },
          }
        );
      }

      // Left headline — slides in from slightly below
      if (els.headline) {
        gsap.fromTo(
          els.headline,
          { opacity: 0, y: 36 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: EASE,
            scrollTrigger: { trigger: els.headline, start: "top 88%", once: true },
          }
        );
      }

      // Right body — each paragraph staggers in
      if (els.body) {
        const children = els.body.querySelectorAll("p, blockquote");
        gsap.fromTo(
          children,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: EASE,
            stagger: 0.1,
            scrollTrigger: { trigger: els.body, start: "top 88%", once: true },
          }
        );
      }

    });

    return () => ctx.revert();
  }, []);

  return { labelRef, headlineRef, bodyRef };
};
