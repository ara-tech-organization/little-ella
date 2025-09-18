import React from "react";
import styles from "./NewsEvents.module.css";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom"; // ✅ import Link

const newsItems = [
  {
    id: 1,
    title: "News heading",
    text: "Get in touch with us for admissions, inquiries, or support. We’re here to assist you with all your questions about our school.",
  },
  {
    id: 2,
    title: "News heading",
    text: "Get in touch with us for admissions, inquiries, or support. We’re here to assist you with all your questions about our school.",
  },
  {
    id: 3,
    title: "News heading",
    text: "Get in touch with us for admissions, inquiries, or support. We’re here to assist you with all your questions about our school.",
  },
  {
    id: 4,
    title: "News heading",
    text: "Get in touch with us for admissions, inquiries, or support. We’re here to assist you with all your questions about our school.",
  },
  {
    id: 5,
    title: "News heading",
    text: "Get in touch with us for admissions, inquiries, or support. We’re here to assist you with all your questions about our school.",
  },
  {
    id: 6,
    title: "News heading",
    text: "Get in touch with us for admissions, inquiries, or support. We’re here to assist you with all your questions about our school.",
  },
];

export default function NewsEvents() {
  return (
    <section data-aos="fade-up" id="newevents" className={styles.newsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Latest News/Events</h2>
        <p className={styles.subtitle}>
          Stay updated with our school’s latest news, announcements, and upcoming events.
        </p>
      </div>

      <div className={styles.grid}>
        {newsItems.map((item) => (
          <Link
            to={`/newsdetails`} // ✅ unique route per news
            key={item.id}
            className={styles.card} // ✅ so it keeps card style
          >
            <div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
            <i className={styles.icon}>
              <FaArrowDown />
            </i>
          </Link>
        ))}
      </div>
    </section>
  );
}
