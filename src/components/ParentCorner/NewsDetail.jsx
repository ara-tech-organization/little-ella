import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./NewsEvents.module.css";

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`https://little-ella.azurewebsites.net/api/news/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching news details:", err));
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <section className={styles.newsDetailSection}>
      <h2 className={styles.detailTitle}>{news.title}</h2>
      {news.imageUrl && (
        <img src={news.imageUrl} alt="news" className={styles.detailImage} />
      )}
      <p className={styles.detailText}>{news.description}</p>
    </section>
  );
}
