import mysql from "mysql2/promise";
//import 'dotenv/config';

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  timezone: "Z",
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 10,
});

pool.on("error", (err) => {
  console.error("Erro no MySQL:", err.message);
});

export async function testDatabaseConnection() {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    console.log("✅ Banco conectado com sucesso");
  } catch (error) {
    console.error("❌ Falha ao conectar ao banco:", error.message);
    process.exit(1);
  }
}
