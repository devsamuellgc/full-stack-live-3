import * as service from "./service.js";

const getAllLibraries = async (req, res) => {
  const libraries = await service.getAllLibraries();

  return res.json({
    mensagem: "Bibliotecas listadas com sucesso!",
    data: libraries,
  });
};

const getLibraryById = async (req, res) => {
  const library = await service.getLibraryById(req.params.id);

  if (!library) {
    return res.status(404).json({ mensagem: "Biblioteca não encontrada!" });
  }

  return res
    .status(200)
    .json({ mensagem: "Biblioteca encontrada com sucesso!", data: library });
};

const createLibrary = async (req, res) => {
  const body = req.body;

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

  const createdLibrary = await service.createLibrary(body);

  return res.status(201).json({
    message: "Biblioteca criada com sucesso",
    data: createdLibrary,
  });
};

const deleteLibrary = async (req, res) => {
  const id = req.params.id;

  const library = await service.getLibraryById(id);

  if (!library) {
    return res.status(404).json({ mensagem: "Biblioteca não encontrada!" });
  }

  const removedLibrary = await service.deleteLibrary(id);

  return res.status(200).json({
    mensagem: "Biblioteca deletada com sucesso!",
    data: removedLibrary,
  });
};

const editLibrary = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const library = await service.getLibraryById(id);

  if (!library) {
    return res.status(404).json({ mensagem: "Biblioteca não encontrada!" });
  }

  const updatedLibrary = await service.editLibrary(id, body);

  return res.status(200).json({
    message: "Biblioteca atualizada com sucesso!",
    data: updatedLibrary,
  });
};

export {
  editLibrary,
  getLibraryById,
  getAllLibraries,
  createLibrary,
  deleteLibrary,
};
