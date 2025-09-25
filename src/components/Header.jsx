import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ use NavLink
import styles from "./Header.module.css";
import logo from "/src/assets/logo.png";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBanner}>
        📢 Applications open 25 - 26 April!! 📢
      </div>

      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logo} alt="Enquiry" />
          </NavLink>
        </div>

        {/* Hamburger for mobile */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Nav menu */}
        <ul className={`${styles.navMenu} ${menuOpen ? styles.open : ""}`}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/admission"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Admission
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/curriculum"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Curriculum
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/facilities"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Facilities
            </NavLink>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* Gallery parent link */}
            <NavLink
              to="/gallery"
              end
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setDropdownOpen((prev) => !prev); // toggle dropdown
                }
              }}
            >
              Gallery ▾
            </NavLink>

            {dropdownOpen && (
              <ul className={styles.dropdown}>
                <li>
                  <NavLink
                    to="/parentCorner#testimonial"
                    className={({ isActive }) =>
                      isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                  >
                    Testimonial
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/parentCorner"
                    className={({ isActive }) =>
                      isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                  >
                    Parent Corner
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/parentCorner#newevents"
                    className={({ isActive }) =>
                      isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                  >
                    News/Events
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.navItem}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
