import express from "express";
import * as userController from "./controller.js";

export const usersRouters = express.Router();

usersRouters.get("/lista-usuarios", userController.getAllUsers);

usersRouters.get("/usuarios", userController.getAllUsersPaginated);

usersRouters.get("/usuario/:id", userController.getUserById);

usersRouters.post("/usuario", userController.createUser);

usersRouters.delete("/usuario/:id", userController.deleteUser);

usersRouters.patch("/usuario/:id", userController.editUser);
