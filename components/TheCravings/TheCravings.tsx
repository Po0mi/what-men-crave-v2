"use client";

import styles from "./TheCravings.module.scss";
import { useCravingsAnimation } from "@/hooks/useCravingsAnimation";

const cravings = [
  {
    numeral: "I",
    title: "Presence > Performance",
    body: "Why being 'in your body' beats any sexual technique you've ever learned. How to stop managing the experience and start feeling it.",
  },
  {
    numeral: "II",
    title: "Desire (Not Just Receptivity)",
    body: "Men are starving to feel wanted. Learn how to show him you desire HIM, not just the act of sex. The difference between 'willingness' and 'hunger' changes everything.",
  },
  {
    numeral: "III",
    title: "Confidence & Ownership",
    body: "Stop making your pleasure a puzzle he has to solve. How to own your arousal without apology, and why guiding his hand is the hottest form of communication.",
  },
  {
    numeral: "IV",
    title: "The Language of Touch",
    body: "Your hands speak a language he's listening to. How to use curious, exploratory touch to help him discover pleasures he didn't even know he had.",
  },
  {
    numeral: "V",
    title: "Polarity & The Dance",
    body: "Why sameness kills attraction. How to surrender into receiving to invite him to step fully into his masculine giving. Creating the electric spark through energetic balance.",
  },
  {
    numeral: "VI",
    title: "The Unspoken Words",
    body: "Men are starving for verbal acknowledgment. The specific phrases, sounds, and moments of validation that empower him and deepen his connection to you.",
  },
  {
    numeral: "VII",
    title: "The Aftermath (The Bonding Window)",
    body: "The 30 seconds after sex are when emotional attachment happens, or fails. How to close the experience so he feels closer, safer, and more connected to you.",
  },
];

const TheCravings = () => {
  const { eyebrowRef, headlineRef, introRef, ctaRef, listRef } =
    useCravingsAnimation();

  return (
    <section className={styles.cravings} id="framework">
      <div className={styles.inner}>
        {/* ── LEFT — sticky anchor ── */}
        <div className={styles.left}>
          <span className={styles.eyebrow} ref={eyebrowRef}>The Framework</span>
          <h2 className={styles.headline} ref={headlineRef}>The 7 Unspoken Cravings</h2>
          <p className={styles.intro} ref={introRef}>
            You don't need more "techniques." You need a map. Inside{" "}
            <em>What Men Crave (But Will Never Ask For)</em>, I reveal the
            specific emotional and energetic shifts that transform intimacy from
            a routine into a sanctuary.
          </p>
          <a href="#value-stack" className={styles.cta} ref={ctaRef}>
            Show Me the 7 Cravings - $37
          </a>
        </div>

        {/* ── RIGHT — craving list ── */}
        <ol className={styles.list} ref={listRef}>
          {cravings.map(({ numeral, title, body }) => (
            <li key={numeral} className={styles.item}>
              <span className={styles.numeral}>{numeral}</span>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.itemBody}>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default TheCravings;
