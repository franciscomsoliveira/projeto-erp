import { Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { SelecionarLoja } from "./pages/SelecionarLoja";
import { EsqueciSenha } from "./pages/EsqueciSenha";

export function AuthRoutes() {
  return (
    <>
      <Route path="/login" element={<Login />} />

      <Route path="/selecionar-loja" element={<SelecionarLoja />} />

      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
    </>
  );
}
