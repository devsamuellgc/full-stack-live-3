import * as usersRepository from "../repositories/users.repository.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (credentials) => {
  const { email, password } = credentials;

  const user = await usersRepository.getUserByEmail(email);

  if (!user) {
    return false;
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return false;
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    "chave-secreta-e-longa",
    { expiresIn: "4h" }
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  };
};
