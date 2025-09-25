import React, { useState, useEffect } from "react";
import styles from "./RegistrationForm.module.css";
import bgImage from "../../assets/Approach-bg.png";
import topLeftImage from "../../assets/Reg-left.png";
import bottomRightImage from "../../assets/Reg-right.png";
import thankYouImage from "../../assets/thank-you 1.png";
import uploadIcon from "../../assets/Group 3.png";
import axios from "axios";
// AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    childrenName: "",
    dob: "",
    applyingFor: "",
    primaryNumber: "",
    confirmNumber: "",
    whatsappNumber: "",
    email: "",
    confirmEmail: "",
    motherName: "",
    fatherName: "",
    parentsNote: "",
    findUs: "",
  });

  const [idProof, setIdProof] = useState(null);
  const [addressProof, setAddressProof] = useState(null);
  const [photo, setPhoto] = useState(null);

  const [idProofName, setIdProofName] = useState("");
  const [addressProofName, setAddressProofName] = useState("");
  const [photoName, setPhotoName] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccess(false);

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (idProof) data.append("idProof", idProof);
      if (addressProof) data.append("addressProof", addressProof);
      if (photo) data.append("photo", photo);

      // 📦 Create a single object for console logging
      const logData = {};
      for (let [key, value] of data.entries()) {
        logData[key] =
          value instanceof File
            ? { name: value.name, size: value.size, type: value.type }
            : value;
      }

      console.log("📤 DATA SENT:", logData);

      await axios.post(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/littleella02",
        data,
        {
          headers: {
            Authorization: "Bearer 123",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccess(true);
    } catch (error) {
      console.error("❌ API ERROR:", error);
      setErrorMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
      data-aos="fade-in"
    >
      {/* Decorative Images */}
      <img
        src={topLeftImage}
        alt="Top Left"
        className={styles.topLeft}
        data-aos="fade-down"
      />
      <img
        src={bottomRightImage}
        alt="Bottom Right"
        className={styles.bottomRight}
        data-aos="fade-up"
      />

      {/* Form Section */}
      <div className={styles.formContainer} data-aos="zoom-in">
        <h2 className={styles.title} data-aos="fade-up">
          Registration
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Name of the Children *</label>
              <input
                type="text"
                name="childrenName"
                value={formData.childrenName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Applying for *</label>
              <input
                type="text"
                name="applyingFor"
                value={formData.applyingFor}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Primary phone number *</label>
              <input
                type="tel"
                name="primaryNumber"
                value={formData.primaryNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Confirm phone number *</label>
              <input
                type="tel"
                name="confirmNumber"
                value={formData.confirmNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Whats app number *</label>
              <input
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Confirm Email *</label>
              <input
                type="email"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}></div>
          </div>

          {/* Row 4 */}
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Mother's Name *</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Father's Name *</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}></div>
          </div>

          {/* Notes */}
          <div className={styles.inputGroupFull}>
            <label>Parents notes *</label>
            <textarea
              rows="4"
              name="parentsNote"
              value={formData.parentsNote}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Radio Options */}
          <div className={styles.radioSection}>
            <label className={styles.radioLabel}>How did you find us:</label>
            <div className={styles.radioRow}>
              <label>
                <input
                  type="radio"
                  name="findUs"
                  value="Google"
                  onChange={handleChange}
                />{" "}
                Google
              </label>
              <label>
                <input
                  type="radio"
                  name="findUs"
                  value="Social media"
                  onChange={handleChange}
                />{" "}
                Social media
              </label>
              <label>
                <input
                  type="radio"
                  name="findUs"
                  value="Hoarding/Flyers"
                  onChange={handleChange}
                />{" "}
                Hoarding/Flyers
              </label>
            </div>
            <div className={styles.radioRow}>
              <label>
                <input
                  type="radio"
                  name="findUs"
                  value="SMS/Whats app"
                  onChange={handleChange}
                />{" "}
                SMS/Whats app
              </label>
              <label>
                <input
                  type="radio"
                  name="findUs"
                  value="Events"
                  onChange={handleChange}
                />{" "}
                Events - Pongal Peruvizha, Canvas etc.
              </label>
              <label>
                <input
                  type="radio"
                  name="findUs"
                  value="Friends & Relatives"
                  onChange={handleChange}
                />{" "}
                Friends & Relatives
              </label>
            </div>
          </div>

          {/* Upload Section */}
          <div className={styles.uploadSection}>
            {/* ID Proof */}
            <div className={styles.uploadBox}>
              <label>
                <img src={uploadIcon} alt="Upload" />
                <input
                  type="file"
                  className={styles.hiddenFile}
                  onChange={(e) => {
                    setIdProof(e.target.files[0]);
                    setIdProofName(e.target.files[0]?.name || "");
                  }}
                />
                <p>{idProofName || "Upload ID Proof"}</p>
              </label>
            </div>

            {/* Address Proof */}
            <div className={styles.uploadBox}>
              <label>
                <img src={uploadIcon} alt="Upload" />
                <input
                  type="file"
                  className={styles.hiddenFile}
                  onChange={(e) => {
                    setAddressProof(e.target.files[0]);
                    setAddressProofName(e.target.files[0]?.name || "");
                  }}
                />
                <p>{addressProofName || "Upload Address Proof"}</p>
              </label>
            </div>

            {/* Photo */}
            <div className={styles.uploadBox}>
              <label>
                <img src={uploadIcon} alt="Upload" />
                <input
                  type="file"
                  className={styles.hiddenFile}
                  onChange={(e) => {
                    setPhoto(e.target.files[0]);
                    setPhotoName(e.target.files[0]?.name || "");
                  }}
                />
                <p>{photoName || "Upload Photo"}</p>
              </label>
            </div>
          </div>

          <p className={styles.note}>
            Choose a file or drag & drop it here <br />
            JPEG, PNG, PDF, and MP4 formats, up to 50MB
          </p>

          {loading && <p>⏳ Submitting...</p>}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <button className={styles.applyButton} disabled={loading}>
            {loading ? "Submitting..." : "Apply Now"}
          </button>
        </form>
      </div>

      {/* Thank You Section */}
      <div
        className={styles.thankYouSection}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <img src={thankYouImage} alt="Thank You" data-aos="zoom-in" />
        <div className={styles.thankYouText} data-aos="fade-up">
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
