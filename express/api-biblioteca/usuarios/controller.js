import * as service from "./service.js";

const getAllUsers = async (req, res) => {
  const users = await service.getAllUsers(req.user.id);

  return res.json({
    mensagem: "Usuários listados com sucesso!",
    data: users,
  });
};

const getAllUsersPaginated = async (req, res) => {
  const params = req.query;
  const userId = req.user.id;
  const users = await service.getAllUsersPaginated(params, userId);

  return res.json({
    mensagem: "Usuários listados com sucesso!",
    data: users,
  });
};

const getUserById = async (req, res) => {
  const user = await service.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ mensagem: "Usuário não encontrado!" });
  }

  return res
    .status(200)
    .json({ mensagem: "Usuário encontrado com sucesso!", data: user });
};

const createUser = async (req, res) => {
  const body = req.body;
  const user = req.user;

  if (!body.nome) {
    return res.status(400).json({ error: "Nome obrigatório!" });
  }

  if (!body.email) {
    return res.status(400).json({ error: "E-mail obrigatório!" });
  }

  if (!body.telefone) {
    return res.status(400).json({ error: "Telefone obrigatório!" });
  }

  if (!body.documento) {
    return res.status(400).json({ error: "Documento obrigatório!" });
  }

  if (!body.senha) {
    return res.status(400).json({ error: "Senha obrigatória!" });
  }

  const createdUser = await service.createUser({
    ...body,
    biblioteca_id: user.id,
  });

  return res.status(201).json({
    message: "Usuário criado com sucesso",
    data: createdUser,
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const user = await service.getUserById(id);

  if (!user) {
    return res.status(404).json({ mensagem: "Usuário não encontrado!" });
  }

  const removedUser = await service.deleteUser(id);

  return res.status(200).json({
    mensagem: "Usuário deletado com sucesso!",
    data: removedUser,
  });
};

const editUser = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const updatedUser = await service.editUser(id, body);

  return res.status(200).json({
    message: "Usuário atualizado com sucesso!",
    data: updatedUser,
  });
};

export {
  editUser,
  getUserById,
  getAllUsers,
  createUser,
  deleteUser,
  getAllUsersPaginated,
};
