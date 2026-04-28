import { Router } from "express";
import authRoutes from "./modules/auth/auth.routes.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "API do ERP funcionando" });
});

routes.use("/auth", authRoutes);

routes.get("/privado", authMiddleware, (req, res) => {
  res.json({
    message: "Acesso autorizado 🔓",
    usuario: req.user,
  });
});

export default routes;
