export const isAdmin = (req, res, next) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res
      .status(403)
      .json({ mensagem: "Você não permissão pra acessar esse conteúdo!" });
  }
  return next();
};

export const isFinancial = (req, res, next) => {
  const role = req.user.role;
  if (role === "financial" || role === "admin") {
    console.log("Usuário admin ou financeiro");
    return next();
  }
  return res
    .status(403)
    .json({ mensagem: "Você não permissão pra acessar esse conteúdo!" });
};
