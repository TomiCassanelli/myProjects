import React from "react";
import styles from "./Login.module.css";
import { useAuth } from "@/auth/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/shared/Header";

export interface LoginProps {
  title?: string;
  buttonText?: string;
}

const Login: React.FC<LoginProps> = ({
  title = "Zona pública",
  buttonText = "Iniciar sesión",
}) => {
  const { login } = useAuth();
  const nav = useNavigate();
  const loc = useLocation() as any;

  const onLogin = () => {
    login();
    const to = loc?.state?.from?.pathname ?? "/privada";
    nav(to, { replace: true });
  };

  return (
    <>
      <Header />
      <div className={styles.wrap}>
        <div className={styles.card}>
          <h2 style={{ margin: 0 }}>{title}</h2>
          <button className={styles.btn} onClick={onLogin}>
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
