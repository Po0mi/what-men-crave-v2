"use client";

import { useTestimonialsAnimation } from "@/hooks/useTestimonialsAnimation";
import styles from "./Testimonials.module.scss";

type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  location?: string;
  status?: string;
};

const featured: Testimonial = {
  quote:
    "I finally understood why my husband shut down after sex. The 'After' chapter literally fixed our marriage. We're closer now than we've been in ten years.",
  name: "Sarah Mitchell",
  initials: "SM",
  location: "Austin, TX",
  status: "Married 14 years",
};

const secondary: Testimonial[] = [
  {
    quote:
      "I used to think I had to be 'good at sex.' Mat taught me I just had to be present. The shift in my partner's energy was immediate. He's more affectionate, more open, and more connected.",
    name: "Emily Russo",
    initials: "ER",
    location: "Chicago, IL",
    status: "Dating 2 years",
  },
  {
    quote:
      "The Vault workshops are worth 10x the price. Hearing Mat coach other women helped me realize I wasn't broken — I was just missing the map.",
    name: "Jessica Torres",
    initials: "JT",
    location: "Nashville, TN",
    status: "Married 7 years",
  },
];

const Stars = () => (
  <span className={styles.stars} aria-label="5 stars">
    {"★★★★★"}
  </span>
);

const Avatar = ({ initials }: { initials: string }) => (
  <div className={styles.avatar} aria-hidden="true">
    {initials}
  </div>
);

const Attribution = ({
  name,
  location,
  status,
}: {
  name: string;
  location?: string;
  status?: string;
}) => (
  <div className={styles.attribution}>
    <cite className={styles.citeName}>{name}</cite>
    {(location || status) && (
      <span className={styles.citeMeta}>
        {[location, status].filter(Boolean).join(" · ")}
      </span>
    )}
  </div>
);

const Testimonials = () => {
  const { containerRef } = useTestimonialsAnimation(styles);

  return (
    <section ref={containerRef} className={styles.section} id="testimonials">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>What Women Are Saying</span>

        {/* ── Featured quote ── */}
        <div className={styles.featured}>
          <Avatar initials={featured.initials} />
          <Stars />
          <blockquote className={styles.featuredQuote}>
            "{featured.quote}"
          </blockquote>
          <Attribution
            name={featured.name}
            location={featured.location}
            status={featured.status}
          />
        </div>

        {/* ── Divider ── */}
        <div className={styles.divider} />

        {/* ── Secondary quotes ── */}
        <div className={styles.grid}>
          {secondary.map(({ quote, name, initials, location, status }) => (
            <div key={name} className={styles.card}>
              <Avatar initials={initials} />
              <Stars />
              <blockquote className={styles.cardQuote}>"{quote}"</blockquote>
              <Attribution name={name} location={location} status={status} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
