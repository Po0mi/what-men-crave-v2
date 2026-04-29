"use client";

import { useClosingCtaAnimation } from "@/hooks/useClosingCtaAnimation"; // Adjust path
import styles from "./ClosingCta.module.scss";

const ClosingCta = () => {
  const { containerRef } = useClosingCtaAnimation(styles);

  return (
    <section ref={containerRef} className={styles.section} id="closing">
      <div className={styles.inner}>
        {/* ── LEFT — narrative ── */}
        <div className={styles.left}>
          <h2 className={styles.headline}>You have two choices.</h2>

          <div className={styles.optionA}>
            <span className={styles.optionLabel}>Option A</span>
            <p className={styles.optionAText}>
              Keep guessing. Keep wondering. Keep managing.
            </p>
          </div>

          <div className={styles.orDivider}>
            <span className={styles.orLine} />
            <span className={styles.orWord}>or</span>
            <span className={styles.orLine} />
          </div>

          <div className={styles.optionB}>
            <span className={styles.optionLabel}>Option B</span>
            <p className={styles.optionBText}>
              Read this tonight. Try one thing. Watch what happens to him.
            </p>
          </div>

          <p className={styles.quote}>
            The bedroom should be a sanctuary. A playground. A place where walls
            come down.
          </p>
        </div>

        {/* ── RIGHT — sticky CTA card ── */}
        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.badge}>
              <span className={styles.badgeNumber}>60</span>
              <span className={styles.badgeDay}>Day</span>
              <span className={styles.badgeSub}>Money-Back<br />Guarantee</span>
            </div>

            <hr className={styles.cardRule} />

            <p className={styles.cardGuarantee}>
              If you don't feel a deeper connection after applying the 7
              Cravings, just email me. I'll refund every penny — no questions
              asked.
            </p>

            <hr className={styles.cardRule} />

            <p className={styles.productLine}>
              Guide + The Vault
              <span className={styles.productMeta}>9+ Hours of Workshops</span>
            </p>

            <a href="#checkout" className={styles.cta}>
              YES, I'M READY — INSTANT ACCESS · $37
            </a>

            <span className={styles.trust}>
              Secure Checkout · 60-Day Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCta;
