import * as service from "./service.js";

const getAllAuthors = async (req, res) => {
  const authors = await service.getAllAuthors(req.user.id);

  return res.json({
    mensagem: "Autores listados com sucesso!",
    data: authors,
  });
};

const getAllAuthorsPaginated = async (req, res) => {
  const params = req.query;
  const userId = req.user.id;
  const authors = await service.getAllAuthorsPaginated(params, userId);

  return res.json({
    mensagem: "Autores listados com sucesso!",
    data: authors,
  });
};

const getAuthorById = async (req, res) => {
  const author = await service.getAuthorById(req.params.id);

  if (!author) {
    return res.status(404).json({ mensagem: "Autor não encontrado!" });
  }

  return res
    .status(200)
    .json({ mensagem: "Autor encontrado com sucesso!", data: author });
};

const createAuthor = async (req, res) => {
  const body = req.body;
  const user = req.user;

  if (!body.nome) {
    return res.status(400).json({ error: "Nome obrigatório!" });
  }

  const createdAuthor = await service.createAuthor({
    ...body,
    biblioteca_id: user.id,
  });

  return res.status(201).json({
    message: "Autor criado com sucesso",
    data: createdAuthor,
  });
};

const deleteAuthor = async (req, res) => {
  const id = req.params.id;

  const author = await service.getAuthorById(id);

  if (!author) {
    return res.status(404).json({ mensagem: "Autor não encontrado!" });
  }

  const removedAuthor = await service.deleteAuthor(id);

  return res.status(200).json({
    mensagem: "Autor deletado com sucesso!",
    data: removedAuthor,
  });
};

const editAuthor = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const updatedAuthor = await service.editAuthor(id, body);

  return res.status(200).json({
    message: "Autor atualizado com sucesso!",
    data: updatedAuthor,
  });
};

export {
  editAuthor,
  getAuthorById,
  getAllAuthors,
  createAuthor,
  deleteAuthor,
  getAllAuthorsPaginated,
};
