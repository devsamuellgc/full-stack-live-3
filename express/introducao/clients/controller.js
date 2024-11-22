import * as service from "./service.js";
import * as addressService from "../addresses/service.js";

const getAllClients = async (req, res) => {
  const clients = await service.getAllClients();

  return res.json({
    mensagem: "Clientes listados com sucesso!",
    data: clients,
  });
};

const listAllClientsWithAddress = async (req, res) => {
  const params = req.query;

  const data = await service.listAllClientsWithAddress(params);

  return res.json({
    mensagem: "Clientes listados com sucesso!",
    data,
  });
};

const getClientById = async (req, res) => {
  const cliente = await service.getClientById(req.params.id);

  if (!cliente) {
    return res.status(404).json({ mensagem: "Usuário não encontrado!" });
  }

  return res
    .status(200)
    .json({ mensagem: "Usuário encontrado com sucesso!", data: cliente });
};

const createClient = async (req, res) => {
  const client = req.body.info;

  const address = req.body.address;

  if (!client.name) {
    return res.status(400).json({ error: "Nome obrigatório!" });
  }

  if (!client.email || !service.isEmailValid(client.email)) {
    return res.status(400).json({ error: "E-mail inválido!" });
  }

  if (await service.isEmailAvailable(client.email)) {
    return res.status(400).json({ error: "E-mail já está em uso!" });
  }

  const createdClient = await service.createClient(client);

  if (address) {
    const createdAddress = await addressService.createAddress({
      ...address,
      user_id: createdClient.id,
    });

    if (!createdAddress) {
      return res.status(400).json({
        message: "Erro ao criar endereço do usuário!",
      });
    }
  }

  return res.status(201).json({
    message: "Cliente criado com sucesso",
    data: createdClient,
  });
};

const deleteClient = async (req, res) => {
  const id = req.params.id;

  const client = await service.getClientById(id);

  if (!client) {
    return res.status(404).json({ mensagem: "Cliente não encontrado!" });
  }

  const removedClient = await service.deleteClient(id);

  return res
    .status(200)
    .json({ mensagem: "Cliente deletado com sucesso!", data: removedClient });
};

const editClient = async (req, res) => {
  const id = req.params.id;
  const addressId = req.body.addressId;
  const info = req.body.info;
  const address = req.body.address;

  const client = await service.getClientById(id);

  if (
    info.email &&
    info.email !== client.email &&
    !service.isEmailValid(info.email)
  ) {
    return res.status(400).json({ error: "E-mail inválido!" });
  }

  if (
    info.email &&
    info.email !== client.email &&
    (await service.isEmailAvailable(info.email))
  ) {
    return res.status(400).json({ error: "E-mail já está em uso!" });
  }

  const updatedClient = await service.editClient(id, info);

  if (address) {
    const updatedAddress = await addressService.editAddress(addressId, address);

    if (!updatedAddress) {
      return res.status(400).json({
        message: "Erro ao editar endereço do usuário!",
      });
    }
  }

  return res
    .status(200)
    .json({ message: "Cliente atualizado com sucesso!", data: updatedClient });
};

export {
  editClient,
  getClientById,
  getAllClients,
  createClient,
  deleteClient,
  listAllClientsWithAddress,
};
