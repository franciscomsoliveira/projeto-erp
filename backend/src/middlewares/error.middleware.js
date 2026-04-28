export function errorMiddleware(error, req, res, next) {
  return res.status(error.statusCode || 400).json({
    error: error.message || "Erro interno no servidor",
  });
}
