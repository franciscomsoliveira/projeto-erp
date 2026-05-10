import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function PrivateRoute({ children }) {
  const { signed } = useAuth();

  if (!signed) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
