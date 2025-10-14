import styles from "./Curriculum.module.css";

export default function Skills() {
  const habilidades = ["C++", "SQL", "ReactJS", "Git", "Go", "Azure (Cloud)"];
  const aptitudes = [
    "Inglés Intermedio",
    "Trabajo en Equipo",
    "Proactividad",
    "Organización",
    "Responsabilidad",
  ];
  return (
    <div id="skills" className={styles.skillsGrid}>
      <section className="card">
        <h2>Habilidades</h2>
        <ul>
          {habilidades.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
      <section className="card">
        <h2>Aptitudes</h2>
        <ul>
          {aptitudes.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
