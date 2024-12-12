import * as repository from "./repository.js";

const getAllUsers = async (userId) => await repository.getAllUsers(userId);

const getAllUsersPaginated = async (params, userId) =>
  await repository.getAllUsersPaginated(params, userId);

const getUserById = async (id) => {
  const user = await repository.getUserById(id);
  return user;
};

const createUser = async (user) => {
  const createdUser = await repository.createUser(user);

  return createdUser;
};

const deleteUser = async (id) => {
  const removedUser = await repository.deleteUser(id);

  return removedUser;
};

const editUser = async (id, user) => {
  const editedUser = await repository.editUser(id, user);

  return editedUser;
};

export {
  editUser,
  createUser,
  deleteUser,
  getUserById,
  getAllUsers,
  getAllUsersPaginated,
};
