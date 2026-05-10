import { Routes, Route, Navigate } from "react-router-dom";

import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { Usuarios } from "../pages/Usuarios/Usuarios";

import { Placeholder } from "../pages/Feedback/Placeholder";
import { NotFound } from "../pages/Feedback/NotFound";

import { PrivateLayout } from "./PrivateLayout";

export function AppRoutes() {
  return (
    <Routes>
      {/* redirect */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* pública */}
      <Route path="/login" element={<Login />} />

      {/* privadas */}
      <Route element={<PrivateLayout />}>
        <Route path="/home" element={<Home />} />

        <Route path="/usuarios" element={<Usuarios />} />

        <Route path="/estoque" element={<Placeholder title="Estoque" />} />

        <Route path="/produtos" element={<Placeholder title="Produtos" />} />

        <Route
          path="/financeiro"
          element={<Placeholder title="Financeiro" />}
        />
      </Route>

      {/* fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
