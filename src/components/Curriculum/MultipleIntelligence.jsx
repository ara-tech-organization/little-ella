import React from "react";
import  { useState } from "react";
import styles from "./MultipleIntelligence.module.css";

// ✅ Import your icons
import VerbalIcon from "/src/assets/verbal.png";
import MathIcon from "/src/assets/math.png";
import SpatialIcon from "/src/assets/spatial.png";
import MusicIcon from "/src/assets/music.png";
import BodyIcon from "/src/assets/body.png";
import IntraIcon from "/src/assets/intra.png";
import InterIcon from "/src/assets/inter.png";
import NaturalIcon from "/src/assets/natural.png";

const items = [
  {
    title: "Verbal Linguistic",
    subtitle: "A master of spoken and written language",
    icon: VerbalIcon,
    color: "#6A0DAD",
  },
  {
    title: "Math/Logic",
    subtitle: "Identifying patterns, problem-solving, and reasoning",
    icon: MathIcon,
    color: "#3B7A2A",
  },
  {
    title: "Spatial Intelligence",
    subtitle: "Creating and interpreting visual images; mazes, puzzles, and maps",
    icon: SpatialIcon,
    color: "#E63946",
  },
  {
    title: "Musical Intelligence",
    subtitle: "Awareness of sound, melody, pitch, and rhythm",
    icon: MusicIcon,
    color: "#00A8A8",
  },
  {
    title: "Bodily Kinaesthetic",
    subtitle: "Hand-eye coordination, physical activities, fine motor and gross motor skills",
    icon: BodyIcon,
    color: "#6C2EB9",
  },
  {
    title: "Intrapersonal",
    subtitle: "Understanding the feelings, needs, and purposes of others",
    icon: IntraIcon,
    color: "#1D62AE",
  },
  {
    title: "Interpersonal",
    subtitle: "Understanding one’s own emotions, goals, strengths, and weaknesses",
    icon: InterIcon,
    color: "#333",
  },
  {
    title: "Naturalistic",
    subtitle: "Understanding nature & organic processes",
    icon: NaturalIcon,
    color: "#D63384",
  },
];

export default function MultipleIntelligence() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section data-aos="fade-up" className={styles.wrapper}>
      <h2 className={styles.heading}>Multiple Intelligence</h2>
      <p className={styles.subText}>
        Our multi-level kindergarten cater to the age groups 2–5 years
        <br /> with a curriculum focussing children.
      </p>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ borderColor: item.color }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={styles.iconWrapper}
              style={{ backgroundColor: item.color + "20" }}
            >
              <img src={item.icon} alt={item.title} />
            </div>

            <div className={styles.textContent}>
              <h3
                className={styles.title}
                style={{
                  color: item.color,
                  transform:
                    hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
                  transition: "transform 0.3s ease",
                }}
              >
                {item.title}
              </h3>
              {hoveredIndex === index && (
                <p className={styles.subtitle}>{item.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
