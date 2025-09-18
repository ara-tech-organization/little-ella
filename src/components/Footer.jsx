import React from "react";
import styles from "./Footer.module.css";

import logo from "/src/assets/footer-logo.png";
import horsy from "/src/assets/horsy.png";
import wave from "/src/assets/wave.png";
import line from "/src/assets/lines.png";
import leftline from "/src/assets/left-line.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          {/* Top line */}
          <img src={leftline} alt="line" className={styles.topLine} />

          {/* Logo + Motto */}
          <div className={styles.logoBox}>
            <img src={logo} alt="Little Ella Logo" className={styles.logo} />
            <p className={styles.motto}>
              “It is our goal to provide age appropriate opportunity <br />
              for every child enrolled in Little Ella enrichment classes”
            </p>
          </div>

          {/* Bottom line with horsy */}
          <div className={styles.bottomLineBox}>
            <img src={horsy} alt="Horsey" className={styles.horsy} />
            <img src={line} alt="line" className={styles.bottomLine} />
          </div>

          {/* Quick Links */}
          <h4 className={styles.quickTitle}>Quick Links</h4>
          <ul className={styles.links}>
            <li>About Us</li>
            <li>Home</li>
            <li>Admission</li>
            <li>Curriculum</li>
            <li>Facilities</li>
            <li>Testimonial</li>
            <li>Parent Corner</li>
            <li>News/Events</li>
            <li>Contact Us</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Right Section - Contact Us */}
        {/* Right Section - Contact Us */}
        <div className={styles.contactWrapper}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          <aside className={styles.contactCard}>
            <div className={styles.cardBody}>
              <div className={styles.lineItem}>
                <i className="fas fa-map-marker-alt"></i>
                <p>
                  No. 482 H I G 1st Main Road, ERI Scheme Mogappair West,
                  Chennai-600037
                </p>
              </div>
              <div className={styles.lineItem}>
                <i className="fas fa-phone-alt"></i>
                <p>9790056699 / 9840145678</p>
              </div>
              <div className={styles.lineItem}>
                <i className="fas fa-envelope"></i>
                <p>littleellaschool@gmail.com</p>
              </div>
              <div className={styles.follow}>
                <span>Follow us on</span>
                <div className={styles.socials}>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Wave Image */}
      <div className={styles.wave}>
        <img src={wave} alt="wave design" />
      </div>

      {/* Footer Bottom */}
      <div className={styles.bottom}>
        <p>copyright © 2025 Little Ella || All Rights Reserved</p>
        <p>
          Crafted with ❤️ by <span>ARA Discover Technologies.</span>
        </p>
      </div>
    </footer>
  );
}
