import * as repository from "./repository.js";

const getAllModels = async (userId) => await repository.getAllModels(userId);

const getAllModelsPaginated = async (params, userId) =>
  await repository.getAllModelsPaginated(params, userId);

const getModelById = async (id) => {
  const model = await repository.getModelById(id);
  return model;
};

const createModel = async (model) => {
  const createdModel = await repository.createModel(model);

  return createdModel;
};

const deleteModel = async (id) => {
  const removedModel = await repository.deleteModel(id);

  return removedModel;
};

const editModel = async (id, model) => {
  const editedModel = await repository.editModel(id, model);

  return editedModel;
};

export {
  editModel,
  createModel,
  deleteModel,
  getModelById,
  getAllModels,
  getAllModelsPaginated,
};
