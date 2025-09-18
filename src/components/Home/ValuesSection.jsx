import React from "react";
import styles from "./ValuesSection.module.css";

import spiralArrow from "/src/assets/spiralArrow.png";
import straightArrow from "/src/assets/straightArrow.png";
import leaf from "/src/assets/leaf.png";
import cloud from "/src/assets/cloud.png";

import val1 from "/src/assets/value1.png";
import val2 from "/src/assets/value2.png";
import val3 from "/src/assets/value3.png";
import val4 from "/src/assets/value4.png";
import val5 from "/src/assets/value5.png";

const ValuesSection = () => {
  return (
    <section data-aos="fade-up" className={styles.values}>
      {/* Decorative images */}
      <img src={spiralArrow} alt="spiral arrow" className={`${styles.decor} ${styles.spiralArrow}`} />
      <img src={cloud} alt="cloud" className={`${styles.decor} ${styles.cloudTop}`} />
      <img src={leaf} alt="leaf" className={`${styles.decor} ${styles.leafBottom}`} />
      <img src={cloud} alt="cloud" className={`${styles.decor} ${styles.cloudBottom}`} />
      <img src={straightArrow} alt="arrow" className={`${styles.decor} ${styles.straightArrow}`} />

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.heading}>Our Values at Little Ella</h2>
        <p className={styles.subtext}>
          We place the child at the center of our curriculum,
          ensuring that their interests and learning styles are considered.
        </p>

        {/* TOP ROW: 3 cards */}
        <div className={styles.gridTop}>
          <div className={`${styles.card} ${styles.blue}`}>
            <img src={val1} alt="Creativity" />
            <h3>We cherish creativity</h3>
            <p>
              Every child’s ideas matter. At LittleElla, there’s room for wild stories,
              colorful messes, and hands-on invention—because creativity is how little
              minds shine brightest.
            </p>
          </div>
          <div className={`${styles.card} ${styles.orange}`}>
            <img src={val2} alt="Care" />
            <h3>Care That Feels Like Home</h3>
            <p>
              Children grow best when they feel truly seen and cared for. Our teachers
              offer warmth, support, and genuine kindness—so every day, your child feels
              safe, happy, and understood.
            </p>
          </div>
          <div className={`${styles.card} ${styles.pink}`}>
            <img src={val3} alt="Belonging" />
            <h3>Everyone Belongs</h3>
            <p>
              No two children are the same, and that’s what we love most. We celebrate
              every personality and learning style, teaching little ones to value empathy,
              friendship, and respect.
            </p>
          </div>
        </div>

        {/* BOTTOM ROW: 2 cards centered */}
        <div className={styles.bottomRow}>
          <div className={`${styles.card} ${styles.purple}`}>
            <img src={val4} alt="Partners" />
            <h3>Parents are Our Partners</h3>
            <p>
              We believe you’re a vital part of your child’s journey. From regular updates
              to open invitations for classroom fun, you’ll always be in the loop—and part
              of the Little Ella family.
            </p>
          </div>
          <div className={`${styles.card} ${styles.yellow}`}>
            <img src={val5} alt="Learning" />
            <h3>Learning, Everywhere</h3>
            <p>
              Discovery happens in the classroom and beyond. Whether it’s planting seeds,
              making music, exploring nature, or building with bright blocks, we turn every
              moment into an adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
