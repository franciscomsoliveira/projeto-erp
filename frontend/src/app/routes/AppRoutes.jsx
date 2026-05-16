import { Routes } from "react-router-dom";

import { AuthRoutes } from "@/modules/auth";
import { DashboardRoutes } from "@/modules/dashboard";

// futuros módulos
// import { UsuariosRoutes } from "@/modules/usuarios";
// import { EstoqueRoutes } from "@/modules/estoque";

export function AppRoutes() {
  return (
    <Routes>
      {AuthRoutes()}

      {/* módulos protegidos */}
      {DashboardRoutes()}
      {/* {UsuariosRoutes()} */}
      {/* {EstoqueRoutes()} */}
    </Routes>
  );
}
