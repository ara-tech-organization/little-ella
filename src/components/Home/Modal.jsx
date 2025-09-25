
import styles from "./Modal.module.css";
import enquiryImg from "/src/assets/enquiry.png";
import React, { useState } from "react";

export default function Modal({ show, onClose }) {
  if (!show) return null; // don't render if not visible
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // 👇 log the data being sent
      console.log("Data being sent:", formData);
      console.log("As JSON:", JSON.stringify(formData, null, 2));

      const response = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/littleella01",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 123",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      setStatus("✅ Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to submit form. Try again!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div data-aos="fade-up" className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <div className={styles.modalContent}>
          {/* Left Side Image */}
          <div className={styles.imageSection}>
            <h2 className={styles.heading}>Enquiry Form</h2>
            <img src={enquiryImg} alt="Enquiry" />
          </div>

          {/* Right Side Form */}
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Mail - ID *"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>

              {status && <p>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
