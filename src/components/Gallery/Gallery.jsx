import React, { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import wave from "/src/assets/wave.png";
import { Modal, Input, message } from "antd";

// ✅ No interface (was TS-only)

// Example: fetch images from backend
export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://little-ella.azurewebsites.net/api/upload")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false); // 👈 stop loading after success
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // 👈 also stop loading on error
      });
  }, []);

  if (loading) {
    return <p style={{ color: "#000", textAlign: "center" }}>Loading...</p>;
  }

  // break images into groups of 5
  const blocks = [];
  for (let i = 0; i < images.length; i += 5) {
    blocks.push(images.slice(i, i + 5));
  }

  return (
    <div className={styles.galleryWrapper}>
      <h2 className={styles.heading}>Gallery</h2>

      {/* Wave Image */}
      <div className={styles.wave}>
        <img src={wave} alt="wave design" />
      </div>

      {blocks.map((block, i) => (
        <div
          key={i}
          className={`${styles.galleryContainer} ${
            i % 2 === 0 ? styles.leftScroll : styles.rightScroll
          }`}
        >
          <div className={styles.galleryTrack}>
            {[...block, ...block].map((img, idx) => (
              <div
                className={`${styles.galleryBlock} ${
                  i % 2 === 0 ? styles.blockTypeA : styles.blockTypeB
                }`}
                key={idx}
              >
                {i % 2 === 0 ? (
                  <>
                    <div className={styles.sideColumn}>
                      {block[0] && <img src={block[0].url} alt="" />}
                      {block[1] && <img src={block[1].url} alt="" />}
                    </div>
                    {block[2] && (
                      <div className={styles.centerImage}>
                        <img src={block[2].url} alt="" />
                      </div>
                    )}
                    <div className={styles.sideColumn}>
                      {block[3] && <img src={block[3].url} alt="" />}
                      {block[4] && <img src={block[4].url} alt="" />}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.bigImage}>
                      {block[0] && <img src={block[0].url} alt="" />}
                    </div>
                    <div className={styles.stackedColumn}>
                      {block[1] && <img src={block[1].url} alt="" />}
                      {block[2] && <img src={block[2].url} alt="" />}
                    </div>
                    <div className={styles.bigImage}>
                      {block[3] && <img src={block[3].url} alt="" />}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.waves}>
        <img src={wave} alt="wave design" />
      </div>
    </div>
  );
}
