import React from "react";
import styles from "./FoundingYear.module.css";

import Rect1 from "/src/assets/Rectangle-1.png";
import Rect2 from "/src/assets/Rectangle-2.png";
import Rect3 from "/src/assets/Rectangle-3.png";

import Year1 from "/src/assets/year-1.png";
import Year2 from "/src/assets/year-2.png";
import Year3 from "/src/assets/year-3.png";
import Swirl from "/src/assets/swirl-2.png";
import Decor from "/src/assets/Decor.png";
import Leaf from "/src/assets/leaf.png";
import cloudLeft from "/src/assets/cloud-left.png";

export default function FoundingYear() {
  const sections = [
    {
      title: "“A Dream of Joyful Beginnings”",
      text: "Every dream begins with a spark — and Little Ella was born from the simple belief that every child deserves a safe, joyful, and inspiring place to begin their journey of learning. As an educator and a parent at heart, I wished to create a preschool where children feel as comfortable as they do at home, yet curious enough to explore the world around them.",
      rect: Rect1,
      year: Year1,
    },
    {
      title: "“A Vision Where Play Meets Purpose”",
      text: "What started as an idea soon grew into a vision — a space where play and learning flow together,where traditions meet creativity, and where every child’s voice is heard and celebrated. At Little Ella,we blend global learning with the richness of Chennai’s culture, encouraging children to discover,imagine, and grow in their own unique way.",
      rect: Rect2,
      year: Year2,
    },
    {
      title: "“More Than a Preschool — A Community”",
      text: "Today, Little Ella stands as more than just a preschool — it is a community built on care, kindness, and curiosity. With every smile, every story, and every little milestone, we are reminded of why this journey began: to nurture happy hearts and bright minds, one child at a time.",
      rect: Rect3,
      year: Year3,
    },
  ];

  return (
    <section data-aos="fade-up" className={styles.foundingYear}>
      <h2 className={styles.heading}>Founding Year – 2014</h2>
      <p className={styles.subheading}>The Story of Little Ella Preschool ✏️</p>

      <div className={styles.timeline}>
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`${styles.block} ${
              idx % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.rectWrapper}>
              <img
                src={sec.rect}
                alt="Rectangle"
                className={styles.rectangle}
              />
              <div className={styles.inner}>
                <img src={sec.year} alt="Year" className={styles.year} />
                <div className={styles.textContent}>
                  <h3>{sec.title}</h3>
                  <p>{sec.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Decorative elements */}
        <img src={cloudLeft} alt="cloud" className={styles.cloudLeft} />
        <img src={Swirl} alt="Swirl" className={styles.swirlDecor} />
        <img src={Decor} alt="Center Decor" className={styles.centerDecor} />
        <img src={Decor} alt="Center Decor" className={styles.rightDecor} />
        <img src={Leaf} alt="Leaf" className={styles.leafDecor} />
      </div>
    </section>
  );
}
