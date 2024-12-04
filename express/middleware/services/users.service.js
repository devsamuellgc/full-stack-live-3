import * as userRepository from "../repositories/users.repository.js";
import bcrypt from "bcryptjs";

export const getUsers = async () => await userRepository.getUsers();

export const getUserByEmail = async (email) =>
  await userRepository.getUserByEmail(email);

export const createUser = async (data) => {
  const { email, password } = data;
  const role = !data.role ? "normal" : data.role;

  const hashedPassword = bcrypt.hashSync(password);

  const response = await userRepository.createUser({
    email,
    password: hashedPassword,
    role,
  });

  return response;
};
