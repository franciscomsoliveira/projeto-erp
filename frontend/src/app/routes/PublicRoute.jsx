import { Navigate } from "react-router-dom";

import { useAuth } from "@/core/auth";

export function PublicRoute({ children }) {
  const { signed, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (signed) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
