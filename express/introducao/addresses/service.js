import * as repository from "./repository.js";

const getAllAddresses = async () => await repository.getAllAddresses();

const getAddressById = async (id) => {
  const address = await repository.getAddressById(id);
  return address;
};

const createAddress = async (address) => {
  const createdAddress = await repository.createAddress(address);

  return createdAddress;
};

const deleteAddress = async (id) => {
  const removedAddress = await repository.deleteAddress(id);

  return removedAddress;
};

const editAddress = async (id, address) => {
  const editedAddress = await repository.editAddress(id, address);

  return editedAddress;
};

export {
  editAddress,
  createAddress,
  deleteAddress,
  getAddressById,
  getAllAddresses,
};
