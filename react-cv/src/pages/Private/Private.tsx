import React from "react";
import styles from "./Private.module.css";
// import TaskList from "./components/TaskList";
import { useAuth } from "@/auth/AuthContext";
import Header from "@/shared/Header";
import { Tasks } from "./Tasks";

const Private: React.FC = () => {
  const { logout } = useAuth();

  return (
    <>
      <Header />
      <div className={styles.wrap}>
        <div className={styles.shell}>
          {/* HERO */}
          <section className={`${styles.panel} ${styles.hero}`}>
            <div className={styles.notice}>
              <h2 style={{ margin: 0 }}>Zona privada</h2>
              <p style={{ margin: 0 }}>
                Si estás viendo esto, es contenido privado.
              </p>
              <button
                className={`${styles.btn} ${styles.btnDanger}`}
                onClick={logout}
              >
                Cerrar sesión
              </button>
            </div>

            <div className={styles.videoWrap}>
              <div className={styles.videoFrame}>
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          {/* SOLO TAREAS: input izquierda, lista derecha */}
          <section
            className={styles.panel}
            style={{ padding: 16, minHeight: 0, overflow: "auto" }}
          >
            <Tasks />
          </section>
        </div>
      </div>
    </>
  );
};

export default Private;
