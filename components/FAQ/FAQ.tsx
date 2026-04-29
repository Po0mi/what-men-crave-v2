"use client";

import { useState, useEffect } from "react";
import { useFAQAnimation, animateAnswerChange } from "@/hooks/useFAQAnimation"; // Adjust path
import styles from "./FAQ.module.scss";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Is this explicit?",
    a: "This is a guide about emotional connection, psychology, and intimacy dynamics. It is direct and honest, but it is not erotica. It's about understanding the mind and energy behind the act.",
  },
  {
    q: "What if I'm not currently in a relationship?",
    a: "These principles apply to any future partner. Understanding masculine psychology now prepares you to build healthier, more connected relationships from day one.",
  },
  {
    q: "Will my partner know I bought this?",
    a: "Your purchase is discreet. But more importantly, this guide is for you. It's about your confidence, your presence, and your ability to connect. The changes he sees will be in you — your confidence, your warmth, your ease.",
  },
  // --- NEW ENTRY 1 (Time Investment) ---
  {
    q: "How long is this guide and how long will it take to read?",
    a: "The main guide is 46 pages and you can comfortably read it in under 90 minutes. Most women read it in one evening. The 7 Cravings chapters are short by design — meant to be read one per night and then absorbed. The Vault workshops total around nine hours but are watched at your own pace, on weekends or during commutes.",
  },
  // --- NEW ENTRY 2 (Partner Engagement) ---
  {
    q: "Will this work if my partner won't engage with personal-development stuff?",
    a: "Yes. This guide is designed for you, not for him. Most of the work is internal — coming back into your body, owning your desire, holding the bonding window. He doesn’t need to read it, watch anything, or know you bought it. The changes he sees will be in you. Most husbands respond to the shifts in their wives long before they ever ask what changed.",
  },
  // --- EXISTING ENTRY (Moved to end) ---
  {
    q: "How quickly can I see results?",
    a: "Many women report a shift in their partner's responsiveness within the first few days of applying the 'Presence' and 'Desire' principles. It's not about learning new tricks; it's about shifting your energy.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);
  const { containerRef } = useFAQAnimation(styles);

  // Trigger animation when active index changes
  useEffect(() => {
    animateAnswerChange(styles, containerRef);
  }, [active, styles, containerRef]);

  return (
    <section ref={containerRef} className={styles.section} id="faq">
      <div className={styles.inner}>
        {/* ── LEFT — question list ── */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.headline}>Common Questions</h2>

          <ul className={styles.list}>
            {faqs.map((item, i) => (
              <li key={i}>
                <button
                  className={`${styles.question} ${active === i ? styles.questionActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.qNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.qText}>{item.q}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT — answer display ── */}
        <div className={styles.right}>
          <div className={styles.answerWrap}>
            <p className={styles.answerQuestion}>{faqs[active].q}</p>
            <p className={styles.answerText}>{faqs[active].a}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
