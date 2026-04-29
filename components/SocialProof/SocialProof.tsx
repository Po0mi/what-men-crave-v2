"use client";

import { useSocialProofAnimation } from "@/hooks/useSocialProofAnimation";
import styles from "./SocialProof.module.scss";

const people = [
  { initials: "SM", name: "Sarah M.", location: "Austin, TX" },
  { initials: "ER", name: "Emily R.", location: "Denver, CO" },
  { initials: "JT", name: "Jessica T.", location: "Nashville, TN" },
];

const SocialProof = () => {
  const { containerRef } = useSocialProofAnimation(styles);

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={styles.band}
      aria-label="Social proof"
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.avatars}>
            {people.map(({ initials, name, location }) => (
              <div
                key={initials}
                className={styles.avatar}
                title={`${name}, ${location}`}
                aria-label={`${name}, ${location}`}
              >
                {initials}
              </div>
            ))}
          </div>
          <span className={styles.names}>
            {people.map((p, i) => (
              <span key={p.initials}>
                <span className={styles.personName}>{p.name.toUpperCase()}</span>
                <span className={styles.location}> ({p.location.toUpperCase()})</span>
                {i < people.length - 1 && <span className={styles.dot}> · </span>}
              </span>
            ))}
          </span>
        </div>

        <div className={styles.right}>
          <p className={styles.stats}>
            <span>24M+ YOUTUBE VIEWS</span>
            <span className={styles.dot}> · </span>
            <span>300K SUBSCRIBERS</span>
            <span className={styles.dot}> · </span>
            <span>100,000+ WOMEN COACHED</span>
          </p>
          <p className={styles.quote}>
            &ldquo;Mat&rsquo;s the only person who&rsquo;s ever told me what men actually think.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
