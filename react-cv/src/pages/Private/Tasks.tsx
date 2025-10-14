import React, { useMemo, useState, type FormEvent } from "react";
import styles from "./Tasks.module.css";

type Task = { id: string; text: string; done?: boolean };

export const Tasks: React.FC = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const add = (e: FormEvent) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    const id =
      (globalThis.crypto as any)?.randomUUID?.() ??
      Math.random().toString(36).slice(2);
    setTasks((prev) => [{ id, text: t }, ...prev]);
    setText("");
  };

  const toggle = (id: string) =>
    setTasks((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it))
    );

  const remove = (id: string) =>
    setTasks((prev) => prev.filter((it) => it.id !== id));

  const counterText = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((it) => it.done).length;
    return `${done} / ${total} completadas`;
  }, [tasks]);

  return (
    <div className={styles.board}>
      <h3 className={styles.title}>Tareas</h3>

      <div className={styles.resp}>
        {/* IZQUIERDA: input + botón */}
        <div className={styles.col}>
          <form className={styles.form} onSubmit={add}>
            <textarea
              className={styles.input}
              placeholder="Escribí la tarea…"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className={styles.button} type="submit">
              Agregar
            </button>
          </form>
        </div>

        {/* DERECHA/ABAJO: lista */}
        <div className={`${styles.col} ${styles.listWrap}`}>
          {tasks.length === 0 ? (
            <p className={styles.empty}>Sin tareas por ahora</p>
          ) : (
            <ul className={styles.tasks}>
              {tasks.map((t) => (
                <li key={t.id} className={styles.item}>
                  <input
                    type="checkbox"
                    checked={!!t.done}
                    onChange={() => toggle(t.id)}
                  />
                  <span className={t.done ? styles.done : undefined}>
                    {t.text}
                  </span>
                  <button
                    type="button"
                    className={styles.trash}
                    aria-label="Eliminar"
                    onClick={() => remove(t.id)}
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ABAJO: contador centrado */}
      <div className={styles.counter}>{counterText}</div>
    </div>
  );
};
