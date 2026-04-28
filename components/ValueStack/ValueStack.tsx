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
  },
  {
    label: "Bonus II",
    duration: "2.5 Hours",
    title: "What Men Actually Want",
    body: 'Why men hide their fantasies. How to create safety for him to open up. The "Curiosity Conversation" that changes everything.',
    value: "$97",
  },
  {
    label: "Bonus III",
    duration: "3.5 Hours",
    title: "Polarity in Practice",
    body: "Mastering the masculine/feminine dance. Why enthusiasm beats expertise. How to be the conductor of connection.",
    value: "$97",
  },
  {
    label: "Bonus IV",
    duration: null,
    title: "Start Here Guide",
    body: "Your quick-start roadmap to using these tools immediately.",
    value: "$27",
  },
];

const ValueStack = () => {
  const { eyebrowRef, headlineRef, introRef, listRef, priceBarRef } =
    useValueStackAnimation();

  return (
    <section className={styles.section} id="value-stack">
      {/* ── Header ── */}
      <div className={styles.header}>
        <span className={styles.eyebrow} ref={eyebrowRef}>The Value Stack</span>
        <h2 className={styles.headline} ref={headlineRef}>It's Not Just a PDF.</h2>
        <p className={styles.intro} ref={introRef}>
          When you grab the guide today, you're not just getting a book. You're
          getting <strong>The Vault</strong>—including{" "}
          <strong>9+ Hours of Live Workshop Recordings</strong> where I go
          deeper, answer real questions, and coach women live. Unfiltered, raw,
          and transformative.
        </p>
      </div>

      {/* ── Bonus list ── */}
      <div className={styles.listWrap}>
        <ul className={styles.list} ref={listRef}>
          {bonuses.map(({ label, duration, title, body, value }) => (
            <li key={label} className={styles.item}>
              <div className={styles.itemMeta}>
                <span className={styles.itemLabel}>{label}</span>
                {duration && (
                  <span className={styles.itemDuration}>{duration}</span>
                )}
              </div>
              <div className={styles.itemBody}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.itemDesc}>{body}</p>
              </div>
              <span className={styles.itemValue}>{value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Closing price bar ── */}
      <div className={styles.priceBar} ref={priceBarRef}>
        <div className={styles.priceBarInner}>
          <div className={styles.priceBreakdown}>
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

          <div className={styles.ctaGroup}>
            <a href="#checkout" className={styles.cta}>
              Yes, I Want Instant Access - $37
            </a>
            <span className={styles.guarantee}>
              One-time payment. Instant access. No subscriptions.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
