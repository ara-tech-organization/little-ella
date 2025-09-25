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
    name: "Priya S. – Parent of Arjun (LKG)",
    text: "Little Ella feels like a second home for my child. The teachers are caring and make learning so joyful.",
    img: Img1,
  },
  {
    name: "Ramesh K. – Parent of Diya (Nursery)",
    text: "We’ve seen Diya grow confident and curious since joining. The creative activities keep her engaged every day.",
    img: Img2,
  },
  {
    name: "Sneha M. – Parent of Aarav (Pre-KG)",
    text: "The warmth and encouragement from the teachers at Little Ella is something I truly value. Aarav loves going to school!",
    img: Img3,
  },
  {
    name: "Deepak & Kavitha – Parents of Raghav (UKG)",
    text: "Little Ella’s environment is nurturing, safe, and inspiring. Meera has developed a real love for learning here.",
    img: Img4,
  },
  {
    name: "Anitha R. – Parent of Mithra (Nursery)",
    text: "The way the school blends play and learning is wonderful. Harsh comes home with a new story every day.",
    img: Img5,
  },
  {
    name: "Sanjay P. – Parent of Ishaan (LKG)",
    text: "We love how Little Ella involves parents in the journey. It feels like a true partnership in our child’s growth.",
    img: Img6,
  },
  {
    name: "Lakshmi V. – Parent of Varun (Pre-KG)",
    text: "The caring teachers and creative classrooms make Varun excited for school every morning. That says it all!",
    img: Img1,
  },
  {
    name: "Hari & Divya – Parents of Nithya (UKG)",
    text: "The school focuses on every child’s individuality. Nithya has become more expressive and confident.",
    img: Img2,
  },
  {
    name: "Revathi M. – Parent of Surya (Nursery)",
    text: "Little Ella gives equal importance to academics, creativity, and values. Surya is growing holistically here.",
    img: Img3,
  },
  {
    name: "Arvind R. – Parent of Yuvan (LKG)",
    text: "The teachers are patient and understanding. Sneha’s learning journey feels joyful and stress-free.",
    img: Img4,
  },
  {
    name: "Megha S. – Parent of Meera (Pre-KG)",
    text: "The activities are designed so thoughtfully. Yuvan is more curious, independent, and eager to explore.",
    img: Img5,
  },
  {
    name: "Krishna & Aarthi – Parents of Viyaan (UKG)",
    text: "What sets Little Ella apart is the personal attention. Lavanya feels loved, cared for, and encouraged every day.",
    img: Img6,
  },
];

export default function ParentTestimonial() {
  const [rows] = useState([
    testimonials.slice(0, 4),
    testimonials.slice(4, 8),
    testimonials.slice(8, 12),
  ]);

  return (
    <section data-aos="fade-up" id="testimonial" className={styles.testimonialSection}>
      <h2 className={styles.heading}>Parent Testimonial</h2>
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