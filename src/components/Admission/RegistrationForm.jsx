import React from "react";
import styles from "./RegistrationForm.module.css";
import bgImage from "../../assets/Approach-bg.png"; // replace with your image path
import topLeftImage from "../../assets/Reg-left.png"; // replace with your image path
import bottomRightImage from "../../assets/Reg-right.png"; // replace with your image path
import thankYouImage from "../../assets/thank-you 1.png"; // replace with your image path
import uploadIcon from "../../assets/Group 3.png"; // replace with your image path



const RegistrationForm = () => {
  return (
    <div data-aos="fade-up"
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img src={topLeftImage} alt="Top Left" className={styles.topLeft} />
      <img src={bottomRightImage} alt="Bottom Right" className={styles.bottomRight} />

      <div className={styles.formContainer}>
        <h2 className={styles.title}>Registration</h2>
        <form className={styles.form}>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Name of the Children *</label>
              <input type="text" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Date of Birth *</label>
              <input type="date" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Applying for *</label>
              <select required>
                <option value="">Select</option>
              </select>
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Primary phone number *</label>
              <input type="tel" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Confirm phone number *</label>
              <input type="tel" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Whats app number *</label>
              <input type="tel" required />
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Email *</label>
              <input type="email" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Confirm Email *</label>
              <input type="email" required />
            </div>
            <div className={styles.inputGroup}></div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Mother's Name *</label>
              <input type="text" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Father's Name *</label>
              <input type="text" required />
            </div>
            <div className={styles.inputGroup}></div>
          </div>

          <div className={styles.inputGroupFull}>
            <label>Parents notes *</label>
            <textarea rows="4" required></textarea>
          </div>

          <div className={styles.radioSection}>
            <label className={styles.radioLabel}>How did you find us:</label>
            <div className={styles.radioRow}>
              <label><input type="radio" name="find" /> Google</label>
              <label><input type="radio" name="find" /> Social media</label>
              <label><input type="radio" name="find" /> Hoarding/Flyers</label>
            </div>
            <div className={styles.radioRow}>
              <label><input type="radio" name="find" /> SMS/Whats app</label>
              <label><input type="radio" name="find" /> Events - Pongal Peruvizha, Canvas etc.</label>
              <label><input type="radio" name="find" /> Friends & Relatives</label>
            </div>
          </div>

          <label className={styles.radioLabel}>Upload documents : </label>
          <div className={styles.uploadSection}>
            <div className={styles.uploadBox}>
              <img src={uploadIcon} alt="Upload" />
              <input type="file" />
              <p>Upload ID Proof</p>
            </div>
            <div className={styles.uploadBox}>
              <img src={uploadIcon} alt="Upload" />
              <input type="file" />
              <p>Upload Address Proof</p>
            </div>
            <div className={styles.uploadBox}>
              <img src={uploadIcon} alt="Upload" />
              <input type="file" />
              <p>Upload Photo</p>
            </div>
          </div>

          <p className={styles.note}>
            Choose a file or drag & drop it here <br />
            JPEG, PNG, PDG, and MP4 formats, up to 50MB
          </p>

          <button className={styles.applyButton}>Apply Now</button>
        </form>
      </div>

      <div className={styles.thankYouSection}>
        <img src={thankYouImage} alt="Thank You" />
        <div className={styles.thankYouText}>
          <p>
            Thank you for choosing Little Ella, one of the best Kindergarten
            schools in Chennai. Applications for AY 2025-26 have been issued to
            registered parents. We are now accepting registrations for the
            Academic year 2026-27.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
