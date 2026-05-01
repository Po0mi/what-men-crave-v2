"use client";

import styles from "./ValueStack.module.scss";
import { useValueStackAnimation } from "@/hooks/useValueStackAnimation";

const bonuses = [
  {
    label: "Bonus I",
    duration: "3 Hours",
    title: "The Playground & The Sanctuary",
    body: "Deep dive into power dynamics, personality types, and how to guide him without emasculating him. Plus live Q&A.",
    value: "$97",
    numeral: "I",
  },
  {
    label: "Bonus II",
    duration: "2.5 Hours",
    title: "What Men Actually Want",
    body: 'Why men hide their fantasies. How to create safety for him to open up. The "Curiosity Conversation" that changes everything.',
    value: "$97",
    numeral: "II",
  },
  {
    label: "Bonus III",
    duration: "3.5 Hours",
    title: "Polarity in Practice",
    body: "Mastering the masculine/feminine dance. Why enthusiasm beats expertise. How to be the conductor of connection.",
    value: "$97",
    numeral: "III",
  },
  {
    label: "Bonus IV",
    duration: null,
    title: "Start Here Guide",
    body: "Your quick-start roadmap to using these tools immediately.",
    value: "$27",
    numeral: "IV",
  },
];

const ValueStack = () => {
  const { eyebrowRef, headlineRef, introRef, listRef, priceBarRef } =
    useValueStackAnimation();

  return (
    <section className={styles.section} id="value-stack">
      <div className={styles.inner}>
        {/* ── LEFT — sticky anchor ── */}
        <div className={styles.left}>
          <span className={styles.eyebrow} ref={eyebrowRef}>
            The Value Stack
          </span>
          <h2 className={styles.headline} ref={headlineRef}>
            It&rsquo;s Not Just a PDF.
          </h2>
          <p className={styles.intro} ref={introRef}>
            When you grab the guide today, you&rsquo;re not just getting a book.
            You&rsquo;re getting <strong>The Vault</strong>&mdash;including{" "}
            <strong>9+ Hours of Live Workshop Recordings</strong> where I go
            deeper, answer real questions, and coach women live.
          </p>

          {/* Price + CTA lives in the sticky left col */}
          <div className={styles.priceBlock} ref={priceBarRef}>
            <div className={styles.priceRows}>
              <div className={styles.priceRow}>
                <span>Total Value</span>
                <span className={styles.strike}>$418</span>
              </div>
              <div className={styles.priceRow}>
                <span>Regular Price</span>
                <span className={styles.strike}>$97</span>
              </div>
              <div className={`${styles.priceRow} ${styles.priceToday}`}>
                <span>Today Only</span>
                <span className={styles.bigPrice}>$37</span>
              </div>
            </div>

            <a
              href="https://matshaffer.samcart.com/products/what-a-man-craves"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Get Instant Access &mdash; $37
            </a>
            <span className={styles.guarantee}>
              One-time &middot; Instant access &middot; No subscriptions
            </span>
          </div>
        </div>

        {/* ── RIGHT — bonus cards ── */}
        <ul className={styles.list} ref={listRef}>
          {bonuses.map(({ label, duration, title, body, value, numeral }) => (
            <li key={label} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardLabel}>{label}</span>
                  {duration && (
                    <span className={styles.cardDuration}>{duration}</span>
                  )}
                </div>
                <span className={styles.cardValue}>{value}</span>
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{body}</p>
              <span className={styles.cardNumeral} aria-hidden="true">
                {numeral}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ValueStack;
