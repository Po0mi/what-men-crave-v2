"use client";

import { useVisionOfAfterAnimation } from "@/hooks/useVisionOfAfterAnimation";
import styles from "./VisionOfAfter.module.scss";

const VisionOfAfter = () => {
  const { containerRef } = useVisionOfAfterAnimation(styles);
  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.kicker}>What&rsquo;s on the other side</span>
        <div className={styles.content}>
          <h2 className={styles.title}>Imagine.</h2>
          <div className={styles.body}>
            <p>
              You walk into the bedroom and you&rsquo;re not managing anything.
              You&rsquo;re not performing. You&rsquo;re not wondering what
              he&rsquo;s thinking. You&rsquo;re present. He feels wanted. The
              silence between you isn&rsquo;t a question anymore &mdash;
              it&rsquo;s a depth.
            </p>
            <p>
              The morning after, he texts you something he hasn&rsquo;t texted
              in years. Three weeks in, your friends ask what&rsquo;s different
              about you. Three months in, your relationship doesn&rsquo;t look
              like other people&rsquo;s relationships anymore. It looks like
              yours.
            </p>
          </div>
          <p className={styles.pullQuote}>
            That&rsquo;s what&rsquo;s on the other side of the 7 Cravings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionOfAfter;
