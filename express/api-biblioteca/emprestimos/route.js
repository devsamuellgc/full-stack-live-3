import express from "express";
import * as borrowedBookController from "./controller.js";

export const borrowedBooksRouters = express.Router();

borrowedBooksRouters.get(
  "/emprestimos",
  borrowedBookController.getAllBorrowedBooks
);

borrowedBooksRouters.get(
  "/emprestimo/:id",
  borrowedBookController.getBorrowedBookById
);

borrowedBooksRouters.post(
  "/emprestimo",
  borrowedBookController.createBorrowedBook
);

borrowedBooksRouters.delete(
  "/emprestimo/:id",
  borrowedBookController.deleteBorrowedBook
);

borrowedBooksRouters.patch(
  "/emprestimo/:id",
  borrowedBookController.editBorrowedBook
);
