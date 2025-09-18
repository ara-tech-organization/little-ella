import styles from "./AdmissionHero.module.css";
import unicorn from "../../assets/unicorn.png";
import pinkSpark from "../../assets/pink_spark.png";
import yellowSpark from "../../assets/yellow_spark.png";

import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.png";
import img6 from "../../assets/image2.png";
import img7 from "../../assets/image3.png";

const programmes = [
  { id: 1, title: "Playgroup", age: "Age: 1.5 yrs. to 3 yrs.", img: img1, color: "#00A9A5" },
  { id: 2, title: "Nursery", img: img2, color: "#FF007A" },
  { id: 3, title: "LKG", img: img3, color: "#005BBB" },
  { id: 4, title: "UKG", img: img4, color: "#FF5722" },
  { id: 5, title: "Grade 1", img: img5, color: "#FFC107" },
  { id: 6, title: "Grade 2", img: img6, color: "#005BBB" },
  { id: 7, title: "Day Care", img: img7, color: "#005BBB" },
];

function AdmissionHero() {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <h2 className={styles.heading}>Our Programmes</h2>
      <div className={styles.grid}>
        {programmes.map((p) => (
          <div key={p.id} className={styles.card}>
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
                <p>{p.age ? p.age : p.title}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Unicorn inside the grid */}
        <div className={styles.unicornBox}>
          <img src={pinkSpark} alt="pink spark" className={styles.pinkSpark} />
          <img src={yellowSpark} alt="yellow spark" className={styles.yellowSpark} />
          <img src={unicorn} alt="unicorn" className={styles.unicorn} />
        </div>
      </div>
    </div>
  );
}

export default AdmissionHero;
