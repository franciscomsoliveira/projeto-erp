import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Layout from "../components/Layout";

// Importação das Páginas
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

// Importação do Módulo de Produtos
import ProdutosLista from "../pages/Produtos/ProdutosLista"; // A tela com os CARDS
import Insumos from "../pages/Produtos/Insumos";
import PreProducao from "../pages/Produtos/PreProducao";
import ProdutoVenda from "../pages/Produtos/ProdutoVenda";
import FichasTecnicas from "../pages/Produtos/FichasTecnicas";

// Importação do Módulo de Administração
import Estabelecimentos from "../pages/CadAdmin/Estabelecimentos";
import AdminLista from "../pages/CadAdmin/AdminLista";
import Fornecedores from "../pages/CadAdmin/Fornecedores";
import Usuarios from "../pages/CadAdmin/Usuarios";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rota Pública */}
      <Route path="/login" element={<Login />} />

      {/* Rotas Privadas (Todas dentro do Layout) */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        {/* Redireciona a raiz "/" para o Dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />

        {/* --- MÓDULO DE PRODUTOS --- */}
        <Route path="produtos">
          {/* A rota index renderiza os CARDS quando você acessa /produtos */}
          <Route index element={<ProdutosLista />} />

          {/* Sub-rotas que os cards vão chamar */}
          <Route path="insumos" element={<Insumos />} />
          <Route path="pre-producao" element={<PreProducao />} />
          <Route path="venda" element={<ProdutoVenda />} />
          <Route path="fichas-tecnicas" element={<FichasTecnicas />} />
        </Route>

        {/* --- MÓDULO DE Administrativo --- */}
        <Route path="admin">
          {/* A rota index renderiza os CARDS quando você acessa /produtos */}
          <Route index element={<AdminLista />} />

          {/* Sub-rotas que os cards vão chamar */}
          <Route path="estabelecimentos" element={<Estabelecimentos />} />
          <Route path="fornecedores" element={<Fornecedores />} />
          <Route path="usuarios" element={<Usuarios />} />
        </Route>
      </Route>

      {/* Fallback para rotas inexistentes */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
