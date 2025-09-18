import React from "react";
import styles from "./Gallery.module.css";
import wave from "/src/assets/wave.png";

const images = [
  "/src/assets/gallery1.jpg",
  "/src/assets/gallery2.jpg",
  "/src/assets/gallery3.jpg",
  "/src/assets/gallery4.jpg",
  "/src/assets/gallery5.jpg",
  "/src/assets/gallery6.jpg",
  "/src/assets/gallery7.jpg",
  "/src/assets/gallery8.jpg",
  "/src/assets/gallery9.jpg",
  "/src/assets/gallery10.jpg",
   "/src/assets/gallery11.jpg",
  "/src/assets/gallery12.jpg",
  "/src/assets/gallery13.jpg",
  "/src/assets/gallery14.jpg",
  "/src/assets/gallery15.jpg",
  "/src/assets/gallery16.jpg",
  "/src/assets/gallery17.jpg",
  "/src/assets/gallery18.jpg",
  "/src/assets/gallery19.jpg",
  "/src/assets/gallery20.jpg",
  "/src/assets/gallery21.jpg",
  "/src/assets/gallery22.jpg",
  "/src/assets/gallery23.jpg",
  "/src/assets/gallery24.jpg",
  "/src/assets/gallery25.jpg",
];

export default function Gallery() {
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
            {/* Duplicate block for seamless looping */}
            {[...block, ...block].map((_, idx) => (
              <div
                className={`${styles.galleryBlock} ${
                  i % 2 === 0 ? styles.blockTypeA : styles.blockTypeB
                }`}
                key={idx}
              >
                {i % 2 === 0 ? (
                  <>
                    {/* Layout A: 2 left + 1 center + 2 right */}
                    <div className={styles.sideColumn}>
                      {block[0] && <img src={block[0]} alt="" />}
                      {block[1] && <img src={block[1]} alt="" />}
                    </div>

                    {block[2] && (
                      <div className={styles.centerImage}>
                        <img src={block[2]} alt="" />
                      </div>
                    )}

                    <div className={styles.sideColumn}>
                      {block[3] && <img src={block[3]} alt="" />}
                      {block[4] && <img src={block[4]} alt="" />}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Layout B: Left big, 2 stacked center, Right big */}
                    <div className={styles.bigImage}>
                      {block[0] && <img src={block[0]} alt="" />}
                    </div>

                    <div className={styles.stackedColumn}>
                      {block[1] && <img src={block[1]} alt="" />}
                      {block[2] && <img src={block[2]} alt="" />}
                    </div>

                    <div className={styles.bigImage}>
                      {block[3] && <img src={block[3]} alt="" />}
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
