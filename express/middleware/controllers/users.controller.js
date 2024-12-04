import * as usersService from "../services/users.service.js";
import * as authService from "../services/auth.service.js";

export const getUsers = async (req, res) => {
  const users = await usersService.getUsers();
  return res.status(200).json({
    mensagem: "Usuários encontrados com sucesso!",
    data: users,
  });
};

export const createUser = async (req, res) => {
  const body = req.body;

  if (!body.email || !body.password) {
    return res.status(400).json({ mensagem: "Preencha todos os campos!" });
  }

  const newUser = await usersService.createUser(body);

  return res
    .status(201)
    .json({ mensagem: "Conta criada com sucesso!", user: newUser });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ mensagem: "Todos os campos são obrigatórios!" });
  }

  const user = await authService.login({ email, password });

  if (!user) {
    return res.status(400).json({ mensagem: "E-mail ou senha inválidos!" });
  }

  return res.status(200).json({
    mensagem: "Login realizado com sucesso!",
    data: user,
  });
};
