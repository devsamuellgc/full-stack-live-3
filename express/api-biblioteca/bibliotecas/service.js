import * as repository from "./repository.js";
import bcrypt from "bcryptjs";

const getAllLibraries = async () => await repository.getAllLibraries();

const getLibraryById = async (id) => {
  const library = await repository.getLibraryById(id);
  return library;
};

const getLibraryByEmail = async (email) =>
  await repository.getLibraryByEmail(email);

const createLibrary = async (library) => {
  const hashedPassword = bcrypt.hashSync(library.senha);
  const createdLibrary = await repository.createLibrary({
    ...library,
    senha: hashedPassword,
  });

  return createdLibrary;
};

const deleteLibrary = async (id) => {
  const removedLibrary = await repository.deleteLibrary(id);

  return removedLibrary;
};

const editLibrary = async (id, library) => {
  const editedLibrary = await repository.editLibrary(id, library);

  return editedLibrary;
};

export {
  editLibrary,
  createLibrary,
  deleteLibrary,
  getLibraryById,
  getAllLibraries,
  getLibraryByEmail,
};
