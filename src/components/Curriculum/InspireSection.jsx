import React from "react";
import styles from "./InspireSection.module.css";
import kid1 from "/src/assets/kid1.png";
import kid2 from "/src/assets/kid2.png";
import bg from "/src/assets/Approach-bg.png";
import swirl from "/src/assets/blue-swirl.png";

export default function InspireSection() {
  return (
    <section data-aos="fade-up" className={styles.wrapper}>
      {/* Background swirl */}
      <img src={bg} alt="blue swirl" className={styles.bgSwirl} />

      <div className={styles.container}>
        {/* Kid images positioned around text */}
        <img src={kid1} alt="Kid smiling" className={`${styles.kidImg} ${styles.kidLeft}`} />
        <img src={kid2} alt="Kid learning" className={`${styles.kidImg} ${styles.kidRight}`} />

        {/* Text content */}
        <div className={styles.textBox}>
          <h2>
            At <span className={styles.highlight}>Little Ella Preschool</span>,
            we believe that every child is unique and has their own way of
            learning and exploring the world around them.
          </h2>
          <p>
            Our child-centric approach, blended with play-based learning and a
            touch of Montessori philosophy, sets the stage for a fulfilling
            educational journey for your toddler or kindergartener.
          </p>
          <div className={styles.ctaWrapper}>
            <img src={swirl} alt="blue swirl" className={styles.ctaSwirl} />
            <button className={styles.ctaBtn}>Call for Inquiries →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
