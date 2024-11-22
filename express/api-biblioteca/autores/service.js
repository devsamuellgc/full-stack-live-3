import * as repository from "./repository.js";

const getAllAuthors = async () => await repository.getAllAuthors();

const getAuthorById = async (id) => {
  const author = await repository.getAuthorById(id);
  return author;
};

const createAuthor = async (author) => {
  const createdAuthor = await repository.createAuthor(author);

  return createdAuthor;
};

const deleteAuthor = async (id) => {
  const removedAuthor = await repository.deleteAuthor(id);

  return removedAuthor;
};

const editAuthor = async (id, author) => {
  const editedAuthor = await repository.editAuthor(id, author);

  return editedAuthor;
};

export {
  editAuthor,
  createAuthor,
  deleteAuthor,
  getAuthorById,
  getAllAuthors,
};
