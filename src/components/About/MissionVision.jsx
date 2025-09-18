import React from "react";
import styles from "./MissionVision.module.css";

// Import your assets
import bulbIcon from "/src/assets/bulb.png";
import targetIcon from "/src/assets/target.png";
import cloudLeft from "/src/assets/cloud-left.png";
import cloudRight from "/src/assets/cloud-right.png";
import swirl from "/src/assets/swirl.png";
import knot from "/src/assets/knot.png";

export default function MissionVision() {
  return (
    <section data-aos="fade-up" className={styles.missionVision}>
      {/* Decorative images */}
      {/* <img src={cloudLeft} alt="cloud" className={styles.cloudLeft} /> */}
      <img src={cloudRight} alt="cloud" className={styles.cloudRight} />
      <img src={swirl} alt="swirl" className={styles.swirl} />
      <img src={knot} alt="knot" className={styles.knot} />

      <div className={styles.wrapper}>
        {/* Mission Box */}
        <div className={styles.missionBox}>
          <div className={styles.iconBlock}>
            <img
              src={bulbIcon}
              alt="Mission Bulb"
              className={styles.iconLeft}
            />
            <h3 className={styles.missionTitle}>Our Mission</h3>
          </div>
          <div className={styles.missionContent}>
            <p>
              <strong>Nurture Creativity:</strong> Embed problem-solving,
              imagination, and design thinking into everyday learning.
            </p>
            <p>
              <strong>Ensure Safety & Trust:</strong> Keep transparent,
              high-standard safety and hygiene practices that parents can see.
            </p>
            <p>
              <strong>Partner with Parents:</strong> Create open communication
              and shared experiences in every child’s journey.
            </p>
          </div>
        </div>

        {/* Vision Box */}
        <div className={styles.visionBox}>
          <div className={styles.visionContent}>
            <p>
              To be Chennai’s most trusted and inspiring early learning space,
              where creativity shapes confident, compassionate, and curious
              human beings.
            </p>
          </div>
          <div className={styles.iconBlock}>
            <img
              src={targetIcon}
              alt="Vision Target"
              className={styles.iconRight}
            />
            <h3 className={styles.visionTitle}>Our Vision</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
