import { Routes, Route, Navigate } from "react-router-dom";
import Curriculum from "./pages/Curriculum/Curriculum";
import ServiceHttp from "./pages/ServiceHttp/ServiceHttp";
import ContactForm from "./pages/Form/ContactForm";
import Login from "./pages/Login/Login";
import Private from "./pages/Private/Private";
import { AuthProvider } from "./auth/AuthContext";
import PrivateRoute from "./auth/PrivateRoute";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/curriculum" replace />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/service-http-component" element={<ServiceHttp />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/privado"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/curriculum" />} />
      </Routes>
    </AuthProvider>
  );
}
