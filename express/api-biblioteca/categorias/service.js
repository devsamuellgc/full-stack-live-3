import * as repository from "./repository.js";

const getAllCategories = async (userId) =>
  await repository.getAllCategories(userId);

const getAllCategoriesPaginated = async (params, userId) =>
  await repository.getAllCategoriesPaginated(params, userId);

const getCategoryById = async (id) => {
  const category = await repository.getCategoryById(id);
  return category;
};

const createCategory = async (category) => {
  const createdCategory = await repository.createCategory(category);

  return createdCategory;
};

const deleteCategory = async (id) => {
  const removedCategory = await repository.deleteCategory(id);

  return removedCategory;
};

const editCategory = async (id, category) => {
  const editedCategory = await repository.editCategory(id, category);

  return editedCategory;
};

export {
  editCategory,
  createCategory,
  deleteCategory,
  getCategoryById,
  getAllCategories,
  getAllCategoriesPaginated,
};
