import React, { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import wave from "/src/assets/wave.png";
import { Modal } from "antd";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // 👈 track selected image

  useEffect(() => {
    fetch("https://little-ella.azurewebsites.net/api/upload")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ color: "#000", textAlign: "center" }}>Loading...</p>;
  }

  const blocks = [];
  for (let i = 0; i < images.length; i += 5) {
    blocks.push(images.slice(i, i + 5));
  }

  return (
    <div className={styles.galleryWrapper}>
      <h2 className={styles.heading}>Gallery</h2>

      <div className={styles.wave}>
        <img src={wave} alt="wave design" />
      </div>

      {blocks.map((block, i) => (
        <div
          key={i}
          className={`${styles.galleryContainer} ${i % 2 === 0 ? styles.leftScroll : styles.rightScroll
            }`}
        >
          <div className={styles.galleryTrack}>
            {[...block, ...block].map((img, idx) => (
              <div
                className={`${styles.galleryBlock} ${i % 2 === 0 ? styles.blockTypeA : styles.blockTypeB
                  }`}
                key={idx}
              >
                {i % 2 === 0 ? (
                  <>
                    <div className={styles.sideColumn}>
                      {block[0] && (
                        <img
                          src={block[0].url}
                          alt=""
                          onClick={() => setSelectedImage(block[0].url)}
                        />
                      )}
                      {block[1] && (
                        <img
                          src={block[1].url}
                          alt=""
                          onClick={() => setSelectedImage(block[1].url)}
                        />
                      )}
                    </div>
                    {block[2] && (
                      <div className={styles.centerImage}>
                        <img
                          src={block[2].url}
                          alt=""
                          onClick={() => setSelectedImage(block[2].url)}
                        />
                      </div>
                    )}
                    <div className={styles.sideColumn}>
                      {block[3] && (
                        <img
                          src={block[3].url}
                          alt=""
                          onClick={() => setSelectedImage(block[3].url)}
                        />
                      )}
                      {block[4] && (
                        <img
                          src={block[4].url}
                          alt=""
                          onClick={() => setSelectedImage(block[4].url)}
                        />
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.bigImage}>
                      {block[0] && (
                        <img
                          src={block[0].url}
                          alt=""
                          onClick={() => setSelectedImage(block[0].url)}
                        />
                      )}
                    </div>
                    <div className={styles.stackedColumn}>
                      {block[1] && (
                        <img
                          src={block[1].url}
                          alt=""
                          onClick={() => setSelectedImage(block[1].url)}
                        />
                      )}
                      {block[2] && (
                        <img
                          src={block[2].url}
                          alt=""
                          onClick={() => setSelectedImage(block[2].url)}
                        />
                      )}
                    </div>
                    <div className={styles.bigImage}>
                      {block[3] && (
                        <img
                          src={block[3].url}
                          alt=""
                          onClick={() => setSelectedImage(block[3].url)}
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Zoom Modal */}
      <Modal
        open={!!selectedImage}
        onCancel={() => setSelectedImage(null)}
        footer={null}
        width={"95%"}
        closeIcon={<span className={styles.customClose}>×</span>}
        centered={false}
        className={styles.modalRoot}
        styles={{
          mask: {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(5px)",
          },
          content: {
            background: "rgba(0, 0, 0, 0.21)",
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        bodyStyle={{
          textAlign: "center",
          background: "transparent",
          padding: 0,
        }}
      >
        <img src={selectedImage} alt="zoomed" className={styles.zoomedImage} />
      </Modal>

      <div className={styles.waves}>
        <img src={wave} alt="wave design" />
      </div>
    </div>
  );
}