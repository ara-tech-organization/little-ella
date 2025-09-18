import React from "react";
import styles from "./WelcomeSection.module.css";

// ✅ Import images directly
import curve from "../../assets/Group 257.png";
import childImg from "../../assets/WelcomeImg.jpg";
import bgPattern from "../../assets/Approach-bg.png";


const WelcomeSection = () => {
    return (
        <section data-aos="fade-up"
            className={styles.section}
            style={{ backgroundImage: `url(${bgPattern})` }}
        >
            <div className={styles.topCurve}>
                <img src={curve} alt="curve" className={styles.curveImg} />
            </div>

            <div className={styles.wrapper}>
                {/* Left Image */}
                <div className={styles.leftImg}>
                    <div className={styles.imgWrapper}>
                        <img src={childImg} alt="Happy Child" className={styles.img} />
                    </div>
                </div>

                {/* Right Content */}
                <div className={styles.content}>
                    <h2 className={styles.heading}>Founder’s Welcome Note</h2>
                    <p className={styles.subheading}>Dear Parents,</p>
                    <p className={styles.text}>
                        Welcome to Little Ellaa, a place born from the belief that every
                        child deserves not just education, but a joyful beginning. As both
                        an educator and a parent, I’ve seen how a caring environment and
                        creative freedom can shape a child’s confidence, curiosity, and love
                        for learning—for life.
                    </p>
                    <p className={styles.text}>
                        At Little Ella, our mission is simple: to give every child the space
                        to imagine, explore, and discover their unique strengths. We
                        designed every corner of our preschool to feel nurturing, safe, and
                        inspiring—because I know, just like you, that the right start
                        matters. Our passionate team brings warmth, encouragement, and
                        expertise to every little moment, valuing each child’s individuality
                        and creating connections that last.
                    </p>
                </div>
            </div>

            {/* Full Width Text */}
            <div className={styles.fullText}>
                <p>
                    What truly sets us apart is our commitment to partnership—with
                    families and with each little learner. Here, you’ll find open doors,
                    real conversations, and a genuine invitation to be part of your
                    child’s learning adventure. From creative projects to daily
                    discoveries, we believe school should be a second home—one filled with
                    laughter, wonder, and growth.
                </p>
                <p>
                    Thank you for considering Little Ella for your family’s most important
                    journey. I invite you to visit us, meet our team, and see how
                    together, we can nurture bright, joyful beginnings that last a
                    lifetime.
                </p>
            </div>
        </section>
    );
};

export default WelcomeSection;
