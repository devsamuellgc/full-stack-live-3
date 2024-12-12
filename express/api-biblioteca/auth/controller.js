import * as authService from "./service.js";

export const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res
      .status(400)
      .json({ mensagem: "Todos os campos são obrigatórios!" });
  }

  const library = await authService.login({ email, senha });

  if (!library) {
    return res.status(400).json({ mensagem: "E-mail ou senha inválidos!" });
  }

  return res.status(200).json({
    mensagem: "Login realizado com sucesso!",
    data: library,
  });
};
