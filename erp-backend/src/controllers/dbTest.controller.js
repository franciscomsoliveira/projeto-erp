import { pool } from '../config/database.js';

export default async function dbTestController(req, res) {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', service: 'database' });
  } catch {
    res.status(500).json({ status: 'error', service: 'database' });
  }
}
