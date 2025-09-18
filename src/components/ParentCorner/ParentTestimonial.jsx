import React, { useState } from "react";
import styles from "./ParentTestimonial.module.css";

import Img1 from "/src/assets/img1.png";
import Img2 from "/src/assets/img2.png";
import Img3 from "/src/assets/img3.png";
import Img4 from "/src/assets/img4.png";
import Img5 from "/src/assets/img5.png";
import Img6 from "/src/assets/img6.png";

const testimonials = [
  {
    name: "Park Jee",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique.",
    img: Img1,
  },
  {
    name: "Jasmine Vandervort",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique.",
    img: Img2,
  },
  {
    name: "Jasmine Vandervort",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique.",
    img: Img3,
  },
  {
    name: "Jon Lakin",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique.",
    img: Img4,
  },
  {
    name: "Husna Mawadus",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique.",
    img: Img5,
  },
  {
    name: "Jacob Kozey",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique.",
    img: Img6,
  },
];

export default function ParentTestimonial() {
  const [rows] = useState([
    testimonials.slice(0, 2),
    testimonials.slice(2, 4),
    testimonials.slice(4, 6),
  ]);

  return (
    <section data-aos="fade-up" id="testimonial" className={styles.testimonialSection}>
      <h2 className={styles.heading}>Parent Testimonial ✏️</h2>
      <p className={styles.subText}>
        Get in touch with us for admissions, inquiries, or support. We’re here
        to assist you with all your questions about our school.
      </p>

      <div className={styles.wrapper}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`${styles.row} ${styles[`row${rowIndex}`]}`}
          >
            <div
              className={`${styles.track} ${
                rowIndex % 2 === 0 ? styles.moveLeft : styles.moveRight
              }`}
            >
              {row.concat(row).map((t, i) => (
                <div key={i} className={styles.card}>
                  <img src={t.img} alt={t.name} className={styles.avatar} />
                  <div>
                    <h4 className={styles.name}>{t.name}</h4>
                    <p className={styles.text}>{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
