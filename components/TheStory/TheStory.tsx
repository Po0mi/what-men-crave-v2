"use client";

import styles from "./TheStory.module.scss";
import { useStoryAnimation } from "@/hooks/useStoryAnimation";

const TheStory = () => {
  const { labelRef, headlineRef, bodyRef } = useStoryAnimation();

  return (
    <section className={styles.story} id="story">
      {/* ── Section label ── */}
      <div className={styles.inner}>
        <span className={styles.sectionLabel} ref={labelRef}>The Story</span>

        {/* ── Two-column editorial grid ── */}
        <div className={styles.grid}>
          {/* LEFT — sticky headline anchor */}
          <div className={styles.left} ref={headlineRef}>
            <h2 className={styles.headline}>
              She lay next to him afterward, <em>replaying every moment.</em>
            </h2>
          </div>

          {/* RIGHT — narrative body */}
          <div className={styles.right} ref={bodyRef}>
            <p className={styles.lead}>
              Did he like it? Did I ask for too much? Did he notice I hesitated?
            </p>

            <p>
              He said it was great. He always says that. But she'd seen the look
              on his face, that quiet distance that meant he was thinking
              something he wouldn't say. And she realized with a sinking
              feeling: She would never know what he actually needed.
            </p>

            <p>
              Most women live in this gap. They wonder if they're "doing it
              right." They worry they're too demanding or not enough. They
              assume men are simple, or that silence means satisfaction.
            </p>

            <p className={styles.callout}>They are wrong.</p>

            <p>
              After coaching over 100,000 women and having more honest,
              unfiltered conversations about sex and intimacy than 99% of men
              ever will, I can tell you the truth:
            </p>

            <blockquote className={styles.blockquote}>
              Men are starving to be wanted. Not just tolerated. Not just
              "accepted."{" "}
              <strong>
                <em>Wanted.</em>
              </strong>
            </blockquote>

            <p>
              But they are afraid to ask. Afraid of judgment. Afraid of
              rejection. So they stay quiet. And you are left guessing.
            </p>

            <p className={styles.resolution}>Until now.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheStory;
