import express from "express";
import * as clientController from "./controller.js";

export const clientsRouters = express.Router();

clientsRouters.get("/clientes", clientController.getAllClients);

clientsRouters.get(
  "/clientes-paginado",
  clientController.listAllClientsWithAddress
);

clientsRouters.get("/cliente/:id", clientController.getClientById);

clientsRouters.post("/cliente", clientController.createClient);

clientsRouters.delete("/cliente/:id", clientController.deleteClient);

clientsRouters.patch("/cliente/:id", clientController.editClient);
