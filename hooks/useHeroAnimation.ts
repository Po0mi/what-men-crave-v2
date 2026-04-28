import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
// Shared defaults
// ─────────────────────────────────────────────
const EASE = "power3.out";

// ─────────────────────────────────────────────
// useGsapReveal
// Fades + slides a single element into view on scroll.
// Usage:
//   const ref = useGsapReveal();
//   <div ref={ref}>…</div>
// ─────────────────────────────────────────────
interface RevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
}

export const useGsapReveal = <T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) => {
  const ref = useRef<T>(null);
  const { y = 40, duration = 0.8, delay = 0, start = "top 88%" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: EASE,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [y, duration, delay, start]);

  return ref;
};

// ─────────────────────────────────────────────
// useGsapStagger
// Staggers child elements into view on scroll.
// Usage:
//   const ref = useGsapStagger(".card");
//   <ul ref={ref}>…</ul>
// ─────────────────────────────────────────────
interface StaggerOptions {
  selector?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
}

export const useGsapStagger = <T extends HTMLElement = HTMLElement>(
  options: StaggerOptions = {}
) => {
  const ref = useRef<T>(null);
  const {
    selector = ":scope > *",
    y = 30,
    duration = 0.7,
    stagger = 0.12,
    start = "top 85%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gsap.utils.toArray(el.querySelectorAll(selector)),
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: EASE,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [selector, y, duration, stagger, start]);

  return ref;
};

// ─────────────────────────────────────────────
// useGsapHero
// Timeline entrance for the hero section.
// Animates .hero-eyebrow → .hero-title → .hero-subtitle → .hero-cta
// Usage:
//   const ref = useGsapHero();
//   <section ref={ref}>…</section>
// ─────────────────────────────────────────────
export const useGsapHero = <T extends HTMLElement = HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: EASE }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.9, ease: EASE },
          "-=0.35"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: EASE },
          "-=0.45"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: EASE },
          "-=0.35"
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
};

// ─────────────────────────────────────────────
// useGsapParallax
// Moves an element at a slower rate than scroll — parallax depth effect.
// Usage:
//   const ref = useGsapParallax(0.4);  // 0 = fixed, 1 = scroll speed
//   <div ref={ref}>…</div>
// ─────────────────────────────────────────────
export const useGsapParallax = <T extends HTMLElement = HTMLElement>(
  speed = 0.3
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -100 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return ref;
};

// ─────────────────────────────────────────────
// useGsapCounter
// Animates a number from 0 to target on scroll.
// Usage:
//   const ref = useGsapCounter(24);
//   <span ref={ref} /> — inner text will count up to 24
// ─────────────────────────────────────────────
export const useGsapCounter = <T extends HTMLElement = HTMLSpanElement>(
  target: number,
  suffix = ""
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val) + suffix;
        },
      });
    });

    return () => ctx.revert();
  }, [target, suffix]);

  return ref;
};
