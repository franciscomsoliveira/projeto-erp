import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import estabelecimentosRoutes from "./routes/estabelecimentos.routes.js";
import healthRoutes from "./routes/health.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/estabelecimentos", estabelecimentosRoutes);
app.use("/health", healthRoutes);

// Rota para capturar caminhos inexistentes
app.use((req, res) => {
  res.status(404).json({
    message: `Rota ${req.method} ${req.url} não encontrada no servidor.`,
  });
});

export default app;
