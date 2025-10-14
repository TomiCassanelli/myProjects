import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import styles from "./Curriculum.module.css";

export default function Curriculum() {
  return (
    <>
      <Header />
      <section className={styles.intro}>
        <div className="container">
          <img className={styles.avatar} alt="Foto de perfil" src="/yo.png" />
          <h1>
            <span data-field="name">Tomás Cassanelli</span>
          </h1>
          <p className={styles.muted}>
            <span data-field="role">Estudiante de Ingeniería en Sistemas</span>{" "}
            -<span data-field="address"> Córdoba, Argentina</span>
          </p>
        </div>
      </section>

      <main className={`container ${styles.grid}`} role="main">
        <Skills />
        <Experience />
        <Education />
      </main>

      <Footer />
    </>
  );
}
