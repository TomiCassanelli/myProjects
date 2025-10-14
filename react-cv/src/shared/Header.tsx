import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.link} ${isActive ? styles.activeLink : ""}`;

  return (
    <header>
      <div className={styles.container}>
        <strong>
          <Link to="/curriculum" className={styles.link}>
            CV
          </Link>
        </strong>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
          aria-label="Secciones"
        >
          <NavLink to="/service-http-component" className={getLinkClass}>
            Arte
          </NavLink>
          <NavLink to="/curriculum" className={getLinkClass}>
            Curriculum
          </NavLink>
          <NavLink to="/form" className={getLinkClass}>
            Contacto
          </NavLink>
          <NavLink to="/login" className={getLinkClass}>
            Login
          </NavLink>
          <span aria-hidden="true"> | </span>
          <NavLink to="/privado" className={getLinkClass}>
            Privado
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
