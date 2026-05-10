export function checkNivel(niveisPermitidos = []) {
  return (req, res, next) => {
    const nivel = Number(req.user?.nivel);

    if (!niveisPermitidos.includes(nivel)) {
      return res.status(403).json({
        message: "Você não tem permissão para executar esta ação.",
      });
    }

    next();
  };
}
