import express from "express";
import * as categoryController from "./controller.js";

export const categoriesRouters = express.Router();

categoriesRouters.get("/lista-categorias", categoryController.getAllCategories);

categoriesRouters.get(
  "/categorias",
  categoryController.getAllCategoriesPaginated
);

categoriesRouters.get("/categoria/:id", categoryController.getCategoryById);

categoriesRouters.post("/categoria", categoryController.createCategory);

categoriesRouters.delete("/categoria/:id", categoryController.deleteCategory);

categoriesRouters.patch("/categoria/:id", categoryController.editCategory);
