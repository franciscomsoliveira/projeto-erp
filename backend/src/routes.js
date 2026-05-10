import { Router } from "express";

import authRoutes from "./modules/auth/auth.routes.js";
import usuariosRoutes from "./modules/usuarios/usuarios.routes.js";
import lojasRoutes from "./modules/lojas/lojas.routes.js";
import perfisRoutes from "./modules/perfis/perfis.routes.js";

import { authMiddleware } from "./middlewares/auth.middleware.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "API do ERP funcionando" });
});

routes.use("/auth", authRoutes);

routes.use("/usuarios", usuariosRoutes);
routes.use("/lojas", lojasRoutes);
routes.use("/perfis", perfisRoutes);

routes.get("/privado", authMiddleware, (req, res) => {
  res.json({
    message: "Acesso autorizado 🔓",
    usuario: req.user,
  });
});

export default routes;
