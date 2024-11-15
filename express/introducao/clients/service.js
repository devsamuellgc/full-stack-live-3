import * as repository from "./repository.js";

const getAllClients = async () => await repository.getAllClients();

const listAllClientsWithAddress = async (params) =>
  await repository.listAllClientsWithAddress(params);

const getClientById = async (id) => {
  const client = await repository.getClientById(id);
  return client;
};

const getClientByEmail = async (email) =>
  await repository.getClientByEmail(email);

const isEmailAvailable = async (email) => {
  const isEmailUnavailable = await getClientByEmail(email);

  if (isEmailUnavailable) return true;

  return false;
};

const isEmailValid = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(email);
  return isEmailValid;
};

const createClient = async (client) => {
  const createdClient = await repository.createClient(client);

  return createdClient;
};

const deleteClient = async (id) => {
  const removedClient = await repository.deleteClient(id);

  return removedClient;
};

const editClient = async (id, client) => {
  const editedClient = await repository.editClient(id, client);

  return editedClient;
};

export {
  editClient,
  createClient,
  isEmailValid,
  deleteClient,
  getClientById,
  getAllClients,
  getClientByEmail,
  isEmailAvailable,
  listAllClientsWithAddress,
};
