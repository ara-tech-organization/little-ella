import styles from "./ContactSection.module.css";
import horsyIcon from "/src/assets/horsy-icon.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import React, { useState } from "react";

export default function ContactSection() {
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
    <div data-aos="fade-up" className={styles.contactWrapper}>
      <div className={styles.header}>
        <img src={horsyIcon} alt="Logo" className={styles.icon} />
        <h2>
          Get in <span>Touch with us</span>
        </h2>
      </div>

      <p className={styles.subText}>
        Get in touch with us for admissions, inquiries, or support. We’re here
        to assist you with all your questions about our school.
      </p>

      <div className={styles.formMap}>
        {/* Left Side - Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
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

        {/* Right Side - Map */}
        <div className={styles.mapContainer}>
          <iframe
            title="Little Ella Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.334411817036!2d80.17751899999999!3d13.077980000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA0JzQwLjciTiA4MMKwMTAnMzkuMSJF!5e0!3m2!1sen!2sin!4v1760607011439!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <span className={styles.iconCircle}>
            <FaMapMarkerAlt />
          </span>
          <p>
            No.482 H I G, SriVari 1st main road eri scheme Mogappair West
            Chennai - 600037
          </p>
        </div>
        <div className={styles.footerItem}>
          <span className={styles.iconCircle}>
            <FaPhoneAlt />
          </span>
          <p>
            <a href="tel:9790056699" className={styles.phoneLink}>
              9790056699
            </a>{" "}
            /{" "}
            <a href="tel:9840145678" className={styles.phoneLink}>
              9840145678
            </a>
          </p>
        </div>

        <div className={styles.footerItem}>
          <span className={styles.iconCircle}>
            <FaEnvelope />
          </span>
          <p>
            <a
              href="mailto:littleellaschool@gmail.com"
              className={styles.emailLink}
            >
              littleellaschool@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
