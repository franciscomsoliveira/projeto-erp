import { Navigate } from "react-router-dom";

import { useAuth } from "@/core/auth";

export function ProtectedRoute({ children }) {
  const { signed, needsStoreSelection } = useAuth();

  // usuário não autenticado
  if (!signed && !needsStoreSelection) {
    return <Navigate to="/login" replace />;
  }

  // usuário precisa selecionar loja
  if (needsStoreSelection) {
    return <Navigate to="/selecionar-loja" replace />;
  }

  return children;
}
