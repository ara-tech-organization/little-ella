import React, { useEffect } from "react";
import styles from "./WelcomeSection.module.css";

// ✅ Import images directly
import curve from "../../assets/Group 257.png";
import childImg from "../../assets/WelcomeImg.jpg";
import bgPattern from "../../assets/Approach-bg.png";

// ✅ Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const WelcomeSection = () => {
  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: "ease-in-out",
      once: true, // animate only once
      offset: 100, // trigger point from top
    });
  }, []);

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className={styles.topCurve} data-aos="fade-down">
        <img src={curve} alt="curve" className={styles.curveImg} />
      </div>

      <div className={styles.wrapper}>
        {/* Left Image */}
        <div className={styles.leftImg} data-aos="fade-right">
          <div className={styles.imgWrapper}>
            <img src={childImg} alt="Happy Child" className={styles.img} />
          </div>
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <h2 className={styles.heading}>Founder’s Welcome Note</h2>
          <p className={styles.subheading}>Dear Parents,</p>
          <p className={styles.text}>
            Welcome to Little Ella—a preschool built on the belief that every
            child deserves a joyful beginning. We create a safe, caring, and
            inspiring space where children imagine, explore, and discover their
            unique strengths.
          </p>
          <p className={styles.text}>
            Our passionate team nurtures confidence, creativity, and curiosity,
            while working in true partnership with families. At Little Ella,
            school feels like a second home—filled with laughter, wonder, and
            growth.
          </p>
          <p className={styles.founderName}>
            Mr. R. Thiyagarajan <br />
            Founder & Director <br />
            Little ELLA
          </p>
        </div>
      </div>

      {/* Full Width Text */}
      {/* <div className={styles.fullText}>
        <p>
          Thank you for considering Little Ella for your child’s early journey.
          We invite you to visit us, meet our team, and experience how we
          nurture bright beginnings that last a lifetime.
        </p>
      </div> */}

      {/* Full Width Text */}
      <div className={styles.fullText} data-aos="fade-up" data-aos-delay="200">
        {/* <p>
          What truly sets us apart is our commitment to partnership—with
          families and with each little learner. Here, you’ll find open doors,
          real conversations, and a genuine invitation to be part of your
          child’s learning adventure. From creative projects to daily
          discoveries, we believe school should be a second home—one filled with
          laughter, wonder, and growth.
        </p> */}
        <p>
          Thank you for considering Little Ella for your child’s early journey.
          We invite you to visit us, meet our team, and experience how we
          nurture bright beginnings that last a lifetime.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
