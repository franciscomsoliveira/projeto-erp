import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token não informado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Conteúdo do Token (Payload):", payload); // <--- ADICIONE ISSO
    req.user = {
      id: payload.sub,
      estabelecimentoId: payload.est,
      role: payload.role,
    };
    next();
  } catch {
    res.status(401).json({ error: "Token inválido ou expirado" });
  }
}
