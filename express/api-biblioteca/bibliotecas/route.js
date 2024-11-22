import express from "express";
import * as libraryController from "./controller.js";

export const librariesRouters = express.Router();

librariesRouters.get("/bibliotecas", libraryController.getAllLibraries);

librariesRouters.get("/biblioteca/:id", libraryController.getLibraryById);

librariesRouters.post("/biblioteca", libraryController.createLibrary);

librariesRouters.delete("/biblioteca/:id", libraryController.deleteLibrary);

librariesRouters.patch("/biblioteca/:id", libraryController.editLibrary);
