import styles from "./AdmissionHero.module.css";
import unicorn from "../../assets/unicorn.png";
import pinkSpark from "../../assets/pink_spark.png";
import yellowSpark from "../../assets/yellow_spark.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.png";
import img6 from "../../assets/image2.png";
import img7 from "../../assets/image3.png";

const programmes = [
  { id: 1, title: "Playgroup", age: "Age: 1.5 yrs. to 3 yrs.", img: img1, color: "#00A9A5" },
  { id: 2, title: "Nursery", age: "Age: 3 yrs. to 4 yrs.", img: img2, color: "#FF007A" },
  { id: 3, title: "LKG", age: "Age: 4 yrs. to 5 yrs.", img: img3, color: "#005BBB" },
  { id: 4, title: "UKG", age: "Age: 5 yrs. to 6 yrs.", img: img4, color: "#FF5722" },
  { id: 5, title: "Grade 1", age: "Age: 6 yrs. to 7 yrs.", img: img5, color: "#FFC107" },
  { id: 6, title: "Grade 2", age: "Age: 7 yrs. to 8 yrs.", img: img6, color: "#005BBB" },
  { id: 7, title: "Day Care", age: "Age: 1.5 yrs. onwards", img: img7, color: "#005BBB" },
];

function AdmissionHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // animation happens only once
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading} data-aos="fade-down">Our Programmes</h2>

      <div className={styles.grid}>
        {programmes.map((p, index) => (
          <div 
            key={p.id} 
            className={styles.card} 
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // alternate animation
          >
            <div className={styles.cardInner}>
              {/* Front Side */}
              <div
                className={styles.cardFront}
                style={{
                  backgroundImage: `url(${p.img})`,
                  border: `3px solid ${p.color}`,
                  padding: "5px 15px",
                }}
              >
                <div className={styles.label} style={{ borderColor: p.color }}>
                  <span>{p.title}</span>
                  <span
                    className={styles.arrow}
                    style={{ backgroundColor: p.color }}
                  >
                    ➜
                  </span>
                </div>
              </div>

              {/* Back Side */}
              <div
                className={styles.cardBack}
                style={{ backgroundColor: p.color, border: `3px solid ${p.color}` }}
              >
                <div className={styles.backTop}>
                  <h3 className={styles.backTitle}>{p.title}</h3>
                </div>
                <div className={styles.backBottom}>
                  <p>{p.age ? p.age : p.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Unicorn inside the grid */}
        <div className={styles.unicornBox} data-aos="fade-right">
          <img src={pinkSpark} alt="pink spark" className={styles.pinkSpark} data-aos="fade-up" />
          <img src={yellowSpark} alt="yellow spark" className={styles.yellowSpark} data-aos="fade-down" />
          <img src={unicorn} alt="unicorn" className={styles.unicorn} data-aos="fade-left" />
        </div>
      </div>
    </div>
  );
}

export default AdmissionHero;
