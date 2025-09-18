import React, { useEffect, useRef } from "react";
import styles from "./EngagingLearning.module.css";

import Icon1 from "/src/assets/icon1.png";
import Icon3 from "/src/assets/icon2.png";
import Icon5 from "/src/assets/icon3.png";
import Icon4 from "/src/assets/icon5.png";
import Icon2 from "/src/assets/Puzzle.png";
import Icon6 from "/src/assets/icon6.png";
import Icon7 from "/src/assets/icon4.png";
import Icon8 from "/src/assets/icon7.png";


const learningData = [
  {
    img: Icon1,
    title: "Cross culture Programs",
    desc: "We provide a platform for children to develop essential social skills, such as effective communication, empathy, collaboration, and global awareness.",
  },
  {
    img: Icon2,
    title: "Cognitive Activities",
    desc: "Through interactive educational tools and resources, children engage in left and right brain developmental activities, enhancing their learning experiences and preparing them for the future.",
  },
  {
    img: Icon3,
    title: "Logical Thinking",
    desc: "We believe that fostering the integration of logical thinking (left brain) and creative expression (right brain) tools to well-rounded and holistic development in children.",
  },
  {
    img: Icon4,
    title: "Arty Crafty",
    desc: "Children express their creativity through different art mediums, exploring colors, shapes, and textures.",
  },
  {
    img: Icon5,
    title: "Yoga",
    desc: "Upgrading the physical & mental well-being of the children through the art of Yoga & Meditation.",
  },
  {
    img: Icon6,
    title: "Kayo Sports",
    desc: "Outdoor games, sports, and movement activities help children develop balance, coordination, and overall physical fitness.",
  },
  {
    img: Icon7,
    title: "Storytelling",
    desc: "Nurtures imagination and language skills, fostering a love for learning through engaging narratives and creative exploration.",
  },
  {
    img: Icon8,
    title: "STEM Activity",
    desc: "Children observe and explore the natural environment, developing curiosity and a sense of wonder.",
  },
];

export default function EngagingLearning() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target); // stop observing once animated
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div data-aos="fade-up" className={styles.wrapper}>
      <h2 className={styles.heading}>Engaging Learning Experiences</h2>
      <div className={styles.grid}>
        {learningData.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={styles.card}
          >
            <div className={styles.iconCircle}>
              <img src={item.img} alt={item.title} className={styles.icon} />
            </div>
            <div className={styles.contentBox}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
