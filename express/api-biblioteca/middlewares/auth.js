import jwt from "jsonwebtoken";

export const isAuthenticatedUser = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ mensagem: "Token inválido!" });
  }

  jwt.verify(token, "chave-secreta-e-longa", (err, user) => {
    if (err) {
      return res.status(401).json({ mensagem: "Token inválido!" });
    }

    req.user = user;

    return next();
  });
};
