import * as librariesService from "../bibliotecas/service.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (credentials) => {
  const { email, senha } = credentials;

  const library = await librariesService.getLibraryByEmail(email);

  if (!library) {
    return false;
  }

  const passwordMatch = bcrypt.compareSync(senha, library.senha);

  if (!passwordMatch) {
    return false;
  }

  const token = jwt.sign(
    { id: library.id, email: library.email },
    "chave-secreta-e-longa",
    { expiresIn: "4h" }
  );

  return {
    token,
    library: {
      id: library.id,
      email: library.email,
    },
  };
};
