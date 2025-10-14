import { useCallback, useMemo, useState } from "react";
import type { Task } from "@/pages/Private/components/ListItem";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");

  const pending = useMemo(() => tasks.filter((t) => !t.done).length, [tasks]);

  const addTask = useCallback(() => {
    const value = text.trim();
    if (!value) return;
    setTasks((prev) => [
      { id: crypto.randomUUID(), text: value, done: false },
      ...prev,
    ]);
    setText("");
  }, [text]);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { tasks, text, setText, addTask, toggleTask, deleteTask, pending };
}
