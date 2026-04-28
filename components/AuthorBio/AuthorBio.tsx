"use client";

import Image from "next/image";
import styles from "./AuthorBio.module.scss";
import { useAuthorAnimation } from "@/hooks/useAuthorAnimation";

const stats = [
  { value: "24M+", label: "YouTube Views" },
  { value: "300K", label: "Subscribers" },
  { value: "100K+", label: "Women Coached" },
];

const AuthorBio = () => {
  const { photoRef, eyebrowRef, headlineRef, bodyRef, statsRef } =
    useAuthorAnimation();

  return (
    <section className={styles.author} id="author">
      <div className={styles.inner}>
        {/* ── LEFT — photo ── */}
        <div className={styles.photoWrap} ref={photoRef}>
          <Image
            src="/images/author.webp"
            alt="Mat Shaffer"
            fill
            className={styles.photo}
            sizes="(max-width: 900px) 100vw, 420px"
          />
        </div>

        {/* ── RIGHT — content ── */}
        <div className={styles.right}>
          <span className={styles.eyebrow} ref={eyebrowRef}>Why Listen to Mat?</span>

          <h2 className={styles.headline} ref={headlineRef}>Hi, I'm Mat&nbsp;Shaffer.</h2>

          <div className={styles.body} ref={bodyRef}>
            <p>
              I'm not just a relationship coach. I'm a former attorney who left
              the courtroom to decode the masculine mind.
            </p>
            <p>
              I don't deal in fluff. I deal in the raw, honest truths men rarely
              share, because I've heard them directly from the source.
            </p>
            <p>
              This isn't theory. This is insider access to what men actually
              think, feel, and crave in the bedroom.
            </p>
          </div>

          <div className={styles.stats} ref={statsRef}>
            {stats.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
