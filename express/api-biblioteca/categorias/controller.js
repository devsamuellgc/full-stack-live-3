import * as service from "./service.js";

const getAllCategories = async (req, res) => {
  const categories = await service.getAllCategories(req.user.id);

  return res.json({
    mensagem: "Categorias listados com sucesso!",
    data: categories,
  });
};

const getAllCategoriesPaginated = async (req, res) => {
  const params = req.query;
  const userId = req.user.id;
  const categories = await service.getAllCategoriesPaginated(params, userId);

  return res.json({
    mensagem: "Categorias listados com sucesso!",
    data: categories,
  });
};

const getCategoryById = async (req, res) => {
  const category = await service.getCategoryById(req.params.id);

  if (!category) {
    return res.status(404).json({ mensagem: "Categoria não encontrado!" });
  }

  return res
    .status(200)
    .json({ mensagem: "Categoria encontrado com sucesso!", data: category });
};

const createCategory = async (req, res) => {
  const body = req.body;
  const user = req.user;

  if (!body.nome) {
    return res.status(400).json({ error: "Nome obrigatório!" });
  }

  const createdCategory = await service.createCategory({
    ...body,
    biblioteca_id: user.id,
  });

  return res.status(201).json({
    message: "Categoria criada com sucesso",
    data: createdCategory,
  });
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;

  const category = await service.getCategoryById(id);

  if (!category) {
    return res.status(404).json({ mensagem: "Categoria não encontrado!" });
  }

  const removedCategory = await service.deleteCategory(id);

  return res.status(200).json({
    mensagem: "Categoria deletado com sucesso!",
    data: removedCategory,
  });
};

const editCategory = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const updatedCategory = await service.editCategory(id, body);

  return res.status(200).json({
    message: "Categoria atualizado com sucesso!",
    data: updatedCategory,
  });
};

export {
  editCategory,
  getCategoryById,
  getAllCategories,
  createCategory,
  deleteCategory,
  getAllCategoriesPaginated,
};
