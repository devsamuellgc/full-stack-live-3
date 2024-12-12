import express from "express";
import * as bookController from "./controller.js";

export const booksRouters = express.Router();

booksRouters.get("/listar-livros", bookController.getAllBooks);

booksRouters.get("/livros", bookController.getAllBooksPaginated);

booksRouters.get("/livro/:id", bookController.getBookById);

booksRouters.post("/livro", bookController.createBook);

booksRouters.delete("/livro/:id", bookController.deleteBook);

booksRouters.patch("/livro/:id", bookController.editBook);
