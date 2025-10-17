import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Modal from "./Modal";

// Import images as modules
import hero1 from "/src/assets/hero-1.jpg";
import hero2 from "/src/assets/hero-2.jpg";
import hero3 from "/src/assets/hero-3.jpg";

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [showModal, setShowModal] = useState(false); // start hidden
  const [currentImg, setCurrentImg] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4s
    return () => clearInterval(interval);
  }, []);

  // Auto-show modal after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        data-aos="fade-down"
        className={styles.hero}
        style={{ backgroundImage: `url(${images[currentImg]})` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <p data-aos="fade-up" className={styles.subtitle}>Welcome to Little Ella</p>
          <h1 data-aos="fade-right" className={styles.title}>
            Growing with love, <br /> learning with joy
          </h1>
          <button data-aos="fade-up" className={styles.button} onClick={() => setShowModal(true)}>
            Apply Now
          </button>
        </div>
      </section>

      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Hero;
