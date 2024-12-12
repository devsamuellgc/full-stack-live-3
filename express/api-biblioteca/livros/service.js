import * as repository from "./repository.js";

const getAllBooks = async (userId) => await repository.getAllBooks(userId);

const getAllBooksPaginated = async (params, userId) =>
  await repository.getAllBooksPaginated(params, userId);

const getBookById = async (id) => {
  const book = await repository.getBookById(id);
  return book;
};

const createBook = async (book) => {
  const createdBook = await repository.createBook(book);

  return createdBook;
};

const deleteBook = async (id) => {
  const removedBook = await repository.deleteBook(id);

  return removedBook;
};

const editBook = async (id, book) => {
  const editedBook = await repository.editBook(id, book);

  return editedBook;
};

export {
  editBook,
  createBook,
  deleteBook,
  getBookById,
  getAllBooks,
  getAllBooksPaginated,
};
