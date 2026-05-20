import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "@/core/auth";
import { AuthRoutes } from "@/modules/auth";

import { getFlatRoutes } from "./routeHelpers";
import { PrivateLayoutRoute } from "./PrivateLayoutRoute";

export function AppRoutes() {
  const { signed } = useAuth();

  const privateRoutes = getFlatRoutes();

  return (
    <Routes>
      {AuthRoutes()}

      {privateRoutes.map((route) => (
        <Route
          key={route.key}
          path={route.path}
          element={<PrivateLayoutRoute route={route} />}
        />
      ))}

      <Route
        path="*"
        element={
          signed ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}
