import express from "express";
import * as authController from "./controller.js";

export const authRouters = express.Router();

authRouters.post("/auth/login", authController.login);
