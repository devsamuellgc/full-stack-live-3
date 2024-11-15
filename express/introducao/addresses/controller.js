import * as service from "./service.js";

const getAllAddresses = async (req, res) => {
  const clients = await service.getAllAddresses();

  return res.json({
    mensagem: "Addresses listados com sucesso!",
    data: clients,
  });
};

const getAddressById = async (req, res) => {
  const address = await service.getAddressById(req.params.id);

  if (!address) {
    return res.status(404).json({ mensagem: "Endereço não encontrado!" });
  }

  return res
    .status(200)
    .json({ mensagem: "Endereço encontrado com sucesso!", data: address });
};

const createAddress = async (req, res) => {
  const body = req.body;

  if (!body.street) {
    return res.status(400).json({ error: "Logradouro obrigatório!" });
  }

  if (!body.number) {
    return res.status(400).json({ error: "Número obrigatório!" });
  }

  if (!body.neighborhood) {
    return res.status(400).json({ error: "Bairro obrigatório!" });
  }

  if (!body.zip_code) {
    return res.status(400).json({ error: "CEP obrigatório!" });
  }

  if (!body.city) {
    return res.status(400).json({ error: "Cidade obrigatória!" });
  }

  if (!body.state) {
    return res.status(400).json({ error: "Estado obrigatório!" });
  }

  if (!body.country) {
    return res.status(400).json({ error: "País obrigatório!" });
  }

  if (!body.user_id) {
    return res.status(400).json({ error: "ID do usuário obrigatório!" });
  }

  const createdAddress = await service.createAddress(body);

  return res.status(201).json({
    message: "Endereço criado com sucesso",
    data: createdAddress,
  });
};

const deleteAddress = async (req, res) => {
  const id = req.params.id;

  const address = await service.getAddressById(id);

  if (!address) {
    return res.status(404).json({ mensagem: "Endereço não encontrado!" });
  }

  const removedAddress = await service.deleteAddress(id);

  return res
    .status(200)
    .json({ mensagem: "Endereço deletado com sucesso!", data: removedAddress });
};

const editAddress = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const updatedAddress = await service.editAddress(id, body);

  return res.status(200).json({
    message: "Endereço atualizado com sucesso!",
    data: updatedAddress,
  });
};

export {
  editAddress,
  getAddressById,
  getAllAddresses,
  createAddress,
  deleteAddress,
};
