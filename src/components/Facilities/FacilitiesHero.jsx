import React, { useState, useEffect } from "react";
import styles from "./FacilitiesHero.module.css";

// Import images as modules
import hero1 from "/src/assets/hero-1.jpg";
import hero2 from "/src/assets/f-h-2.jpg";
import hero3 from "/src/assets/f-h-3.jpg";

// ✅ Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const FacilitiesImageSection = () => {
  const images = [hero1, hero2, hero3];
  const [currentImg, setCurrentImg] = useState(0);
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4s
    return () => clearInterval(interval);
  }, []);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: "ease-in-out",
      once: true, // only animate once
      offset: 100, // trigger point from top
    });
  }, []);

  return (
    <div className={styles.facilitiesImageSection} data-aos="fade-in">
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${images[currentImg]})` }}
      ></div>

      <div className={styles.overlay} data-aos-delay="300"></div>
    </div>
  );
};

export default FacilitiesImageSection;
