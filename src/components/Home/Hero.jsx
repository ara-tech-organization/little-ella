import React, { useState } from "react";
import styles from "./Hero.module.css";
import Modal from "./Modal";

const Hero = () => {
  const [showModal, setShowModal] = useState(true); // show on load

  return (
    <>
      <section data-aos="fade-up" className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <p className={styles.subtitle}>Welcome to Little Ella</p>
          <h1 className={styles.title}>
            Growing with love, <br /> learning with joy
          </h1>
          <button
            className={styles.button}
            onClick={() => setShowModal(true)}
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Hero;
