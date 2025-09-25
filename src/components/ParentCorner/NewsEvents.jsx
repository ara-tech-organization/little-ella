import React, { useEffect, useState } from "react";
import styles from "./NewsEvents.module.css";
import { FaArrowDown } from "react-icons/fa6";

export default function NewsEvents() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetch("https://little-ella.azurewebsites.net/api/news")
      .then((res) => res.json())
      .then((data) => setNewsItems(data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  const openNewsDetails = (id) => {
    // Open in new tab and pass the news id via URL
    window.open(`/news/${id}`, "_blank");
  };

  return (
    <section className={styles.newsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Latest News/Events</h2>
        <p className={styles.subtitle}>
          Stay updated with our school’s latest news, announcements, and
          upcoming events.
        </p>
      </div>

      <div className={styles.grid}>
        {newsItems.map((item) => (
          <div key={item._id} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>

            <div className={styles.cardBody}>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt="news"
                  className={styles.thumbImage}
                />
              )}

              <p className={styles.cardText}>
                {item.description.length > 150
                  ? item.description.slice(0, 150) + "..."
                  : item.description}
              </p>

              <div className={styles.cardActions}>
                <i
                  className={styles.icon}
                  onClick={() => openNewsDetails(item._id)}
                >
                  <FaArrowDown />
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
