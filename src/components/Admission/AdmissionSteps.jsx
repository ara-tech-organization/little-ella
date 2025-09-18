import React from "react";
import styles from "./AdmissionSteps.module.css";
import leftSvg from "../../assets/Highlight_04.png";
import rightSvg from "../../assets/Highlight_06.png";
import bgImage from "../../assets/image 49.png";
import overlayImage from "../../assets/Rectangle 80.png";
import labelBg from "../../assets/Rectangle 15.png";
import unicorn from "../../assets/Studying.png";


const steps = [
    {
        title: "1. Register your Enquiry",
        desc: "Share your Interest and get connect with us",
    },
    {
        title: "2. Fill Admission form",
        desc: "Provide your details to begin the admission process.",
    },
    {
        title: "3. Submit the documents",
        desc: "Complete your application by submitting ID and address proof documents and photographs.",
    },
];

const AdmissionSteps = () => {
    return (
        <section data-aos="fade-up"
            className={styles.admissionSection}
            style={{ backgroundImage: `url(${bgImage}), url(${overlayImage})` }}
        >
            <div className={styles.overlay}></div>

            {/* SVGs */}
            <img src={leftSvg} alt="left decoration" className={styles.leftSvg} />
            <img src={rightSvg} alt="right decoration" className={styles.rightSvg} />

            <div className={styles.container}>
                <h2 className={styles.title}>The Admission Procedure</h2>
                <div className={styles.grid}>
                    {steps.map((step, i) => (
                        <div className={styles.card} key={i}>
                            <div className={styles.innerBox}>
                                <div className={styles.label}>
                                    <img src={labelBg} alt="label background" className={styles.labelBg} />
                                    <div className={styles.labelContent}>
                                        <span className={styles.oval}></span>
                                        <h3>{step.title}</h3>
                                    </div>
                                </div>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src={unicorn} alt="Unicorn" className={styles.unicorn} />
        </section>
    );
};

export default AdmissionSteps;
