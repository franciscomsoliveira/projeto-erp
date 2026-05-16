import { Navigate } from "react-router-dom";

import { useAuth } from "@/core/auth";

export function PublicRoute({ children }) {
  const { signed, needsStoreSelection } = useAuth();

  // usuário autenticado
  if (signed) {
    return <Navigate to="/dashboard" replace />;
  }

  // usuário com sessão temporária
  if (needsStoreSelection) {
    return <Navigate to="/selecionar-loja" replace />;
  }

  return children;
}
