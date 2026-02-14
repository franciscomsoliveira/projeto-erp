import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Estabelecimentos from "../pages/Estabelecimentos/Estabelecimentos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/estabelecimentos"
        element={
          <PrivateRoute>
            <Estabelecimentos />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
