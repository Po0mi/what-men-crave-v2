"use client";

import { useSocialProofAnimation } from "@/hooks/useSocialProofAnimation";
import styles from "./SocialProof.module.scss";

const SocialProof = () => {
  const { containerRef } = useSocialProofAnimation(styles);

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={styles.band}
      aria-label="Social proof"
    >
      <div className={styles.inner}>
        <p className={styles.stats}>
          <span>24M+ YOUTUBE VIEWS</span>
          <span className={styles.dot}> · </span>
          <span>300K SUBSCRIBERS</span>
          <span className={styles.dot}> · </span>
          <span>100,000+ WOMEN COACHED</span>
        </p>
        <p className={styles.quote}>
          &ldquo;Mat&rsquo;s the only person who&rsquo;s ever told me what men
          actually think.&rdquo;
        </p>
      </div>
    </div>
  );
};

export default SocialProof;
