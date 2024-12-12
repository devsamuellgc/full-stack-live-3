import express from "express";
import * as addressController from "./controller.js";

export const addressesRouters = express.Router();

addressesRouters.get("/enderecos", addressController.getAllAddresses);

addressesRouters.get("/endereco/:id", addressController.getAddressById);

addressesRouters.post("/endereco", addressController.createAddress);

addressesRouters.delete("/endereco/:id", addressController.deleteAddress);

addressesRouters.patch("/endereco/:id", addressController.editAddress);
