"use client";

import { useTestimonialsAnimation } from "@/hooks/useTestimonialsAnimation"; // Adjust path
import styles from "./Testimonials.module.scss";

const featured = {
  quote:
    "I finally understood why my husband shut down after sex. The 'After' chapter literally fixed our marriage. We're closer now than we've been in ten years.",
  name: "Sarah J.",
};

const secondary = [
  {
    quote:
      "I used to think I had to be 'good at sex.' Mat taught me I just had to be present. The shift in my partner's energy was immediate. He's more affectionate, more open, and more connected.",
    name: "Emily R.",
  },
  {
    quote:
      "The Vault workshops are worth 10x the price. Hearing Mat coach other women helped me realize I wasn't broken — I was just missing the map.",
    name: "Jessica T.",
  },
];

const Stars = () => (
  <span className={styles.stars} aria-label="5 stars">
    {"★★★★★"}
  </span>
);

const Testimonials = () => {
  const { containerRef } = useTestimonialsAnimation(styles);

  return (
    <section ref={containerRef} className={styles.section} id="testimonials">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>What Women Are Saying</span>

        {/* ── Featured quote ── */}
        <div className={styles.featured}>
          <Stars />
          <blockquote className={styles.featuredQuote}>
            "{featured.quote}"
          </blockquote>
          <cite className={styles.featuredName}>{featured.name}</cite>
        </div>

        {/* ── Divider ─ */}
        <div className={styles.divider} />

        {/* ── Secondary quotes ── */}
        <div className={styles.grid}>
          {secondary.map(({ quote, name }) => (
            <div key={name} className={styles.card}>
              <Stars />
              <blockquote className={styles.cardQuote}>"{quote}"</blockquote>
              <cite className={styles.cardName}>{name}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
