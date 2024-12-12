import * as service from "./service.js";

const getAllModels = async (req, res) => {
  const models = await service.getAllModels(req.user.id);

  return res.json({
    mensagem: "Exemplares listados com sucesso!",
    data: models,
  });
};

const getAllModelsPaginated = async (req, res) => {
  const params = req.query;
  const userId = req.user.id;
  const models = await service.getAllModelsPaginated(params, userId);

  return res.json({
    mensagem: "Exemplares listados com sucesso!",
    data: models,
  });
};

const getModelById = async (req, res) => {
  const model = await service.getModelById(req.params.id);

  if (!model) {
    return res.status(404).json({ mensagem: "Exemplar não encontrado!" });
  }

  return res
    .status(200)
    .json({ mensagem: "Exemplar encontrado com sucesso!", data: model });
};

const createModel = async (req, res) => {
  const body = req.body;
  const userId = req.user.id;

  if (!body.numero_exemplar) {
    return res.status(400).json({ error: "Número do exemplar obrigatório!" });
  }

  if (!body.livro_id) {
    return res.status(400).json({ error: "Id do livro obrigatório!" });
  }

  const createdModel = await service.createModel({
    ...body,
    biblioteca_id: userId,
  });

  return res.status(201).json({
    message: "Exemplar criado com sucesso",
    data: createdModel,
  });
};

const deleteModel = async (req, res) => {
  const id = req.params.id;

  const model = await service.getModelById(id);

  if (!model) {
    return res.status(404).json({ mensagem: "Exemplar não encontrado!" });
  }

  const removedModel = await service.deleteModel(id);

  return res.status(200).json({
    mensagem: "Exemplar deletado com sucesso!",
    data: removedModel,
  });
};

const editModel = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const updatedModel = await service.editModel(id, body);

  return res.status(200).json({
    message: "Exemplar atualizado com sucesso!",
    data: updatedModel,
  });
};

export {
  editModel,
  getModelById,
  getAllModels,
  createModel,
  deleteModel,
  getAllModelsPaginated,
};
