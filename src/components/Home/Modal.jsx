import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ show, onClose }) {
  if (!show) return null; // don't render if not visible

  return (
    <div data-aos="fade-up" className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <div className={styles.modalContent}>
          {/* Left Side Image */}
          <div className={styles.imageSection}>
            <h2 className={styles.heading}>Enquiry Form</h2>
            <img src="/src/assets/enquiry.png" alt="Kids" />
          </div>

          {/* Right Side Form */}
          <div className={styles.formSection}>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Mobile Number" />
              <input type="email" placeholder="Your Mail - ID" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
