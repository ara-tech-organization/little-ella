import React from "react";
import styles from "./FacilitiesHero.module.css";
import facilitiesImage from "../../assets/Rectangle 219.png"; // Replace with your image path

const FacilitiesImageSection = () => {
  return (
    <div data-aos="fade-up" className={styles.facilitiesImageSection}>
      <img src={facilitiesImage} alt="Facilities" className={styles.responsiveImage} />
      <div className={styles.overlay}></div>
    </div>
  );
};

export default FacilitiesImageSection;
