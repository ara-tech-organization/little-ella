import React from "react";
import styles from "./ContactSection.module.css";
import horsyIcon from "/src/assets/horsy-icon.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div data-aos="fade-up" className={styles.contactWrapper}>
      <div className={styles.header}>
        <img src={horsyIcon} alt="Logo" className={styles.icon} />
        <h2>
          Get in <span>Touch with us</span>
        </h2>
      </div>

      <p className={styles.subText}>
        Get in touch with us for admissions, inquiries, or support. We’re here
        to assist you with all your questions about our school.
      </p>

      <div className={styles.formMap}>
        {/* Left Side - Form */}
        <form className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Mobile Number" />
          <input type="email" placeholder="Your Mail - ID" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>

        {/* Right Side - Map */}
        <div className={styles.mapContainer}>
          <iframe
            title="Little Elly Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236509.36809897164!2d79.9889571741324!3d12.983027667488754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526485e849b871%3A0x5da644802f8d2be8!2sLittle%20Elly%20-%20Preschool%20in%20Kolathur%2C%20Chennai%20%7C%20Nursery%20%7C%20Day%20Care%20%7C%20Kindergarten!5e1!3m2!1sen!2sin!4v1757574676351!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <span className={styles.iconCircle}>
            <FaMapMarkerAlt />
          </span>
          <p>
            No.482 H I G, SriVari 1st main road eri scheme Mogappair West Chennai - 600037
          </p>
        </div>
        <div className={styles.footerItem}>
          <span className={styles.iconCircle}>
            <FaPhoneAlt />
          </span>
          <p>+91 0123456789</p>
        </div>
        <div className={styles.footerItem}>
          <span className={styles.iconCircle}>
            <FaEnvelope />
          </span>
          <p>mail@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
