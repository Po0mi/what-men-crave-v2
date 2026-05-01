"use client";

import { useTestimonialsAnimation } from "@/hooks/useTestimonialsAnimation";
import styles from "./Testimonials.module.scss";

type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  location?: string;
  status?: string;
  image?: string;
};

const featured: Testimonial = {
  quote:
    "No matter who you are, if you need help understanding your connections with men, this will help you. You'll get so much out of it",
  name: "Nicole L.",
  initials: "NL",
  location: "PORTLAND, OG",
  image: "/images/Nicole.webp",
};

const secondary: Testimonial[] = [
  {
    quote:
      "I've done a lot of work on myself over the years. What surprised me about this is how fast it clicked — so many breakthrough moments in such a short space of time.",
    name: "Liz R.",
    initials: "LR",
    location: "Wales, UK",
    image: "/images/Liz.webp",
  },
  {
    quote:
      "Mat has taken everything I've read in the past ten years of being single and put it in one place. It finally makes sense",
    name: "Lisa M.",
    initials: "LM",
    location: "Las Vegas, NV",
    image: "/images/Lisa.webp",
  },
  {
    quote:
      "It's been profound — the difference this has made in my attitude, my confidence, the way I show up in relationships. I'm so thankful.",
    name: "Mikel T.",
    initials: "MT",
    location: "Washington, DC",
    image: "/images/mikel-t.webp",
  },
];

const Stars = () => (
  <span className={styles.stars} aria-label="5 stars">
    {"★★★★★"}
  </span>
);

const Avatar = ({
  initials,
  image,
  name,
}: {
  initials: string;
  image?: string;
  name: string;
}) => {
  if (image) {
    return (
      <div className={styles.photoWrapper}>
        <img src={image} alt={`Portrait of ${name}`} className={styles.photo} />
      </div>
    );
  }
  return (
    <div className={styles.avatar} aria-hidden="true">
      {initials}
    </div>
  );
};

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
          <Avatar
            initials={featured.initials}
            image={featured.image}
            name={featured.name}
          />
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
          {secondary.map(
            ({ quote, name, initials, location, status, image }) => (
              <div key={name} className={styles.card}>
                <Avatar initials={initials} image={image} name={name} />
                <Stars />
                <blockquote className={styles.cardQuote}>"{quote}"</blockquote>
                <Attribution name={name} location={location} status={status} />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
