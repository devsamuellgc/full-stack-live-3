import * as repository from "./repository.js";

const getAllBorrowedBooks = async () => await repository.getAllBorrowedBooks();

const getBorrowedBookById = async (id) => {
  const borrowedBook = await repository.getBorrowedBookById(id);
  return borrowedBook;
};

const createBorrowedBook = async (borrowedBook) => {
  const createdBorrowedBook = await repository.createBorrowedBook(borrowedBook);

  return createdBorrowedBook;
};

const deleteBorrowedBook = async (id) => {
  const removedBorrowedBook = await repository.deleteBorrowedBook(id);

  return removedBorrowedBook;
};

const editBorrowedBook = async (id, borrowedBook) => {
  const editedBorrowedBook = await repository.editBorrowedBook(
    id,
    borrowedBook
  );

  return editedBorrowedBook;
};

export {
  editBorrowedBook,
  createBorrowedBook,
  deleteBorrowedBook,
  getBorrowedBookById,
  getAllBorrowedBooks,
};
