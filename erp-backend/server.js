import "dotenv/config";
import app from "./src/app.js";
import { testDatabaseConnection } from "./src/config/database.js";

const PORT = process.env.PORT || 3333;

async function start() {
  try {
    await testDatabaseConnection();
    app.listen(PORT, () => {
      console.log(`🚀 API rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Falha ao iniciar o servidor:", error);
    process.exit(1); // Fecha o processo se o banco não conectar
  }
}

start();
