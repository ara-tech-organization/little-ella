import React, { useState, useEffect } from "react";
import styles from "./FacilitiesCards.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import img100 from "../../assets/image 100.png";
import img102 from "../../assets/image 102.png";
import img103 from "../../assets/image 103.png";
import img104 from "../../assets/image 104.png";
import img106 from "../../assets/image 106.png";
import img107 from "../../assets/image 107.png";
import img1064 from "../../assets/image 1064.png";

import TopLeftSVG from "../../assets/spiralArrow.png";
import TopRightSVG from "../../assets/Spark.png";

// ✅ AOS Import
import AOS from "aos";
import "aos/dist/aos.css";

const cardsData = [
  {
    title: "Comprehensive Safety & Security",
    desc: "Equipped with advanced CCTV surveillance and controlled access systems, our campus ensures the highest standard of security providing parents with complete peace of mind as children explore and learn freely.",
    color: "#F77F3F",
    img: img100,
  },
  {
    title: "Montessori & Sensory Development Labs",
    desc: "Hands-on learning labs with Montessori equipment for sensory growth.",
    color: "#00B3A6",
    img: img102,
  },
  {
    title: "Innovative Creative Lab",
    desc: "A space designed to foster imagination, innovation and creative problem solving.",
    color: "#FF9E2C",
    img: img103,
  },
  {
    title: "Curated Library & Scholastic Zones",
    desc: "Extensive collection of books and zones designed for focused learning.",
    color: "#FF4971",
    img: img104,
  },
  {
    title: "Child-Centric Design",
    desc: "Spaces thoughtfully crafted keeping children’s comfort in mind.",
    color: "#1C4D9C",
    img: img106,
  },
  {
    title: "Holistic Physical Development",
    desc: "Activities to enhance both fine and gross motor skills in children.",
    color: "#7B3CF2",
    img: img107,
  },
  {
    title: "Entertainment Performing & Arts Corner",
    desc: "A vibrant stage for kids to showcase talents in drama, dance, and music.",
    color: "#009688",
    img: img1064,
  },
];

const Facilities = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleToggle = (idx) => {
    setFlippedCard(flippedCard === idx ? null : idx);
  };

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      className={styles.facilities}
      data-aos="fade-up"       // entire section animation
      data-aos-delay="100"
    >
      {/* Floating Decorations */}
      <img src={TopLeftSVG} alt="Decoration" className={styles.topLeft} />
      <img src={TopRightSVG} alt="Decoration" className={styles.topRight} />

      {/* Heading */}
      <h2 className={styles.heading}>Facilities at Little Ella</h2>
      <p className={styles.subtext}>
        We place the child at the center of our curriculum, ensuring that their
        interests and learning styles are considered.
      </p>

      {/* Cards (no individual AOS) */}
      <div className={styles.grid}>
        {cardsData.map((card, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${
              flippedCard === idx ? styles.flipped : ""
            }`}
            style={{ "--cardColor": card.color }}
          >
            <div className={styles.inner}>
              {/* Front */}
              <div className={styles.front}>
                <h3>{card.title}</h3>
                <img src={card.img} alt={card.title} />
                <button
                  className={styles.label}
                  onClick={() => handleToggle(idx)}
                >
                  <div className={styles.arrow}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  {/* <span>Know More</span> */}
                </button>
              </div>

              {/* Back */}
              <div className={styles.back}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <button
                  className={styles.label}
                  onClick={() => handleToggle(idx)}
                >
                  <div className={styles.arrow}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <span>Back</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;