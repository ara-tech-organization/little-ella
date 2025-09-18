import React from "react";
import styles from "./ApproachSection.module.css";
import Box1 from "/src/assets/Box-1.png";
import Box2 from "/src/assets/Box-2.png";
import Box3 from "/src/assets/Box-3.png";
import Box4 from "/src/assets/Box-4.png";
import Box5 from "/src/assets/Box-5.png";
import Box6 from "/src/assets/Box-6.png";
import Swirl from "/src/assets/swirl.png";

const items = [
  {
    title: "Creativity-Driven Learning",
    tagColor: "teal",
    text: "Children dive into daily explorations—art, music, storytelling, and invention—guided gently into foundational academics.",
    img: Box1,
  },
  {
    title: "Personal Attention",
    tagColor: "orange",
    text: "Small class sizes mean every child is heard, seen, and valued — not just a number.",
    img: Box2,
  },
  {
    title: "Innovative Spaces",
    tagColor: "pink",
    text: "From sensory-rich 'Spark Corners' to green discovery gardens, our campus makes imagination tangible.",
    img: Box4,
  },
  {
    title: "Inclusive & Flexible",
    tagColor: "blue",
    text: "Our curriculum adapts to each child’s needs, with special support for both outgoing and sensitive personalities.",
    img: Box3,
  },
  {
    title: "Real Parent Involvement",
    tagColor: "coral",
    text: "Monthly 'Parent Creator' sessions welcome families into learning—building a warm, engaged community (not just drop-offs).",
    img: Box5,
  },
  {
    title: "Creative Documentation",
    tagColor: "red",
    text: "Children dive into daily explorations—art, music, storytelling, and invention—guided gently into foundational academics.",
    img: Box6,
  },
];

export default function ApproachSection() {
  const rows = [];
  for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));

  return (
    <section data-aos="fade-up" className={styles.approach}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Approach—How Little Ella Stands Out</h2>
        <p className={styles.subtext}>
          We place the child at the center of our curriculum, ensuring that
          their interests and learning styles are considered.
        </p>

        <div className={styles.grid}>
  {rows.map((pair, idx) => (
    <div key={idx} className={styles.row}>
      {/* Add swirl above the first box (only for first row) */}
      {idx === 0 && (
        <img src={Swirl} alt="Swirl" className={styles.swirl} />
      )}

      {pair.map((it, j) => (
        <div key={j} className={`${styles.item} ${styles[it.tagColor]}`}>
          <img src={it.img} alt={it.title} className={styles.boxImg} />
          <div className={styles.content}>
            <span className={styles.tag}>{it.title}</span>
            <p className={styles.desc}>{it.text}</p>
          </div>
        </div>
      ))}
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
