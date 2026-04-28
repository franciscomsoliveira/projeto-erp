import { Router } from "express";
import { login } from "./auth.controller.js";

const router = Router();

router.get("/teste", (req, res) => {
  res.json({ message: "Auth funcionando" });
});

router.post("/login", login);

export default router;
