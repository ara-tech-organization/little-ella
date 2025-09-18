import React, { useState, useEffect } from "react";
import styles from "./Methodology.module.css";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Images
import KnotImg from "/src/assets/one-knot.png";
import SparkImg from "/src/assets/spark.png";
import PlayWayImg from "/src/assets/playway.png";
import MontessoriImg from "/src/assets/montessori.png";
import MultipleImg from "/src/assets/multiple.png";
import InquiryImg from "/src/assets/inquiry.png";

const methodologyItems = [
  {
    title: "Play Way Based",
    img: PlayWayImg,
    desc: "Our curriculum is designed to incorporate play as a powerful tool for learning. Through hands-on activities, games, and imaginative play, children develop essential cognitive, physical, and social skills while having fun.",
    color: "#1CB5A3", // teal
  },
  {
    title: "Montessori Methodology",
    img: MontessoriImg,
    desc: "Our classrooms are equipped with Montessori materials, fostering self-paced learning and promoting the development of concentration, coordination, and problem-solving abilities.",
    color: "#F89A36", // orange
  },
  {
    title: "Multiple Intelligence Theory",
    img: MultipleImg,
    desc: "Nurture each child’s unique intelligence profile, fostering their natural abilities and encouraging them to explore and excel in areas such as linguistic, bodily-kinesthetic, and naturalistic intelligences.",
    color: "#FF5D7A", // pink
  },
  {
    title: "Inquiry-Based and Experiential Learning",
    img: InquiryImg,
    desc: "Children are encouraged to ask questions, investigate, and actively participate in hands-on projects and real-world experiences. This approach helps deepen knowledge and ensures a deep understanding of concepts.",
    color: "#8B5CF6", // purple
  },
];

export default function Methodology() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const visibleCount = 3;
  const [isMobile, setIsMobile] = useState(false);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % methodologyItems.length);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992); // <992px = no carousel
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + methodologyItems.length) % methodologyItems.length
    );
  };

  const visibleCards = Array.from({ length: visibleCount }, (_, i) => {
    return methodologyItems[(currentIndex + i) % methodologyItems.length];
  });

  // Reset hover when cards change
  useEffect(() => {
    setHoveredIndex(null);
  }, [currentIndex]);

  return (
    <section data-aos="fade-up" className={styles.wrapper}>
      <img src={KnotImg} alt="knot" className={styles.knot} />
      <img src={SparkImg} alt="spark" className={styles.spark} />

      <div className={styles.content}>
        <h2 className={styles.heading}>Methodology</h2>
        <p className={styles.subText}>
          We place the child at the center of our curriculum, ensuring that
          their interests and learning styles are considered.
        </p>

        <div className={styles.carousel}>
          {!isMobile && (
            <button
              className={`${styles.arrow} ${styles.left}`}
              onClick={prevSlide}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}

          <div className={styles.grid}>
            {(isMobile ? methodologyItems : visibleCards).map((item, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  hoveredIndex === index ? styles.active : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <div
                  className={styles.description}
                  style={{ backgroundColor: item.color }}
                >
                  {hoveredIndex === index && <p>{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>

          {!isMobile && (
            <button
              className={`${styles.arrow} ${styles.right}`}
              onClick={nextSlide}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>

        {/* toggle bar hidden on mobile */}
        {!isMobile && (
          <div className={styles.toggleBar}>
            <div
              className={styles.toggleIndicator}
              style={{
                transform: `translateX(${currentIndex * 33.33}%)`,
              }}
            ></div>
          </div>
        )}
      </div>
    </section>
  );
}
