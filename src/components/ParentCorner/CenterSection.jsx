import styles from "./CenterSection.module.css";
import mainImage from "/src/assets/Rectangle 262.png";
import bgImage from "/src/assets/Approach-bg.png";

function NewsSection() {
  return (
    <section data-aos="fade-up"
      className={styles.section}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <img src={mainImage} alt="Main News" className={styles.mainImage} />
        <h2 className={styles.heading}>News Title Goes Here</h2>
        <p className={styles.paragraph}>
          This is a sample paragraph describing the news content. You can expand
          this section with more text, highlights, or details about the story.
        </p>
      </div>
    </section>
  );
}

export default NewsSection;
