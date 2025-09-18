import React from "react";
import styles from "./CuriositySection.module.css";
import arrow from "/src/assets/arrow.png";
import horsey1 from "/src/assets/horsey1.png";
import horsey2 from "/src/assets/horsey2.png";

const CuriositySection = () => {
  return (
    <section data-aos="fade-up" className={styles.curiosity}>
      {/* Arrow on left */}
      <img src={arrow} alt="arrow" className={styles.arrow} />

      {/* Content */}
      <div className={styles.content}>
        {/* Horsey 1 top-left */}
        <img src={horsey1} alt="horsey mascot" className={`${styles.horsey} ${styles.horsey1}`} />

        <h2 className={styles.heading}>
          Where Curiosity Meets Joyful Learning ✏️
        </h2>
        <p className={styles.text}>
          At Little Ella, every day is an adventure of curiosity, creativity,
          and discovery. Our creativity-first preschool in Chennai blends play,
          art, music, and nature to nurture essential skills and a love for
          lifelong learning—all in a safe, caring space guided by mentors.
        </p>

        {/* Horsey 2 bottom-right */}
        <img src={horsey2} alt="horsey mascot" className={`${styles.horsey} ${styles.horsey2}`} />
      </div>
    </section>
  );
};

export default CuriositySection;
