import express from "express";
import * as modelController from "./controller.js";

export const modelsRouters = express.Router();

modelsRouters.get("/listar-exemplares", modelController.getAllModels);

modelsRouters.get("/exemplares", modelController.getAllModelsPaginated);

modelsRouters.get("/exemplar/:id", modelController.getModelById);

modelsRouters.post("/exemplar", modelController.createModel);

modelsRouters.delete("/exemplar/:id", modelController.deleteModel);

modelsRouters.patch("/exemplar/:id", modelController.editModel);
