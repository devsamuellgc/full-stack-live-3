import * as service from "./service.js";

const getAllAddresses = async (req, res) => {
  const addresses = await service.getAllAddresses();

  return res.json({
    mensagem: "Endereços listados com sucesso!",
    data: addresses,
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

  if (!body.logradouro) {
    return res.status(400).json({ error: "Logradouro obrigatório!" });
  }

  if (!body.numero) {
    return res.status(400).json({ error: "Número obrigatório!" });
  }

  if (!body.bairro) {
    return res.status(400).json({ error: "Bairro obrigatório!" });
  }

  if (!body.cidade) {
    return res.status(400).json({ error: "Cidade obrigatória!" });
  }

  if (!body.estado) {
    return res.status(400).json({ error: "Estado obrigatório!" });
  }

  if (!body.cep) {
    return res.status(400).json({ error: "CEP obrigatório!" });
  }

  if (!body.pais) {
    return res.status(400).json({ error: "País obrigatório!" });
  }

  if (!body.usuario_id) {
    return res.status(400).json({ error: "Id do usuário obrigatório!" });
  }

  if (!body.biblioteca_id) {
    return res.status(400).json({ error: "Id da biblioteca obrigatório!" });
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

  return res.status(200).json({
    mensagem: "Endereço deletado com sucesso!",
    data: removedAddress,
  });
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
