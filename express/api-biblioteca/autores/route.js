import express from "express";
import * as authorController from "./controller.js";

export const authorsRouters = express.Router();

authorsRouters.get("/autores", authorController.getAllAuthors);

authorsRouters.get("/autor/:id", authorController.getAuthorById);

authorsRouters.post("/autor", authorController.createAuthor);

authorsRouters.delete("/autor/:id", authorController.deleteAuthor);

authorsRouters.patch("/autor/:id", authorController.editAuthor);
