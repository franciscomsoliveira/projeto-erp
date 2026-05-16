import { Route } from "react-router-dom";

import { ProtectedRoute } from "@/app/routes";
import { AppLayout } from "@/app/layouts";

import { Dashboard } from "./pages/Dashboard";

export function DashboardRoutes() {
  return (
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <AppLayout>
            <Dashboard />
          </AppLayout>
        </ProtectedRoute>
      }
    />
  );
}
