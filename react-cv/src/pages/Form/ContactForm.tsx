import { useForm } from "react-hook-form";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import styles from "./ContactForm.module.css";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });
  const onSubmit = (data: FormData) => {
    alert("Mensaje enviado!\n" + JSON.stringify(data, null, 2));
    reset();
  };
  return (
    <>
      <Header />
      <section className={styles.intro}>
        <div className={styles.container}>
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

      <main className={styles.container}>
        <section className={styles.card}>
          <h2>Contacto</h2>
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div>
              <label>Nombre</label>
              <input
                {...register("name", { required: true, minLength: 3 })}
                placeholder="Tu nombre"
                className={styles.input}
              />
              {errors.name && (
                <p className={styles.error}>
                  Nombre requerido (mínimo 3 caracteres).
                </p>
              )}
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^S@]+@[^S@]+\.[^S@]+$/,
                })}
                placeholder="tu@mail.com"
                className={styles.input}
              />
              {errors.email && <p className={styles.error}>Email inválido.</p>}
            </div>
            <div>
              <label>Asunto</label>
              <input
                {...register("subject", { required: true, minLength: 3 })}
                placeholder="Asunto"
                className={styles.input}
              />
              {errors.subject && (
                <p className={styles.error}>
                  Asunto requerido (mínimo 3 caracteres).
                </p>
              )}
            </div>
            <div>
              <label>Mensaje</label>
              <textarea
                {...register("message", { required: true, minLength: 3 })}
                placeholder="Contame brevemente en qué puedo ayudarte"
                className={styles.input}
              />
              {errors.message && (
                <p className={styles.error}>
                  Mensaje requerido (mínimo 3 caracteres).
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className={styles.btn}
                disabled={isSubmitting}
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
