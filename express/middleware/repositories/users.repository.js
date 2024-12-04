import { pool } from "../db.js";

export const getUsers = async () => {
  const users = await pool.query("SELECT id, email, role FROM auth.users;");
  return users.rows;
};

export const getUserByEmail = async (email) => {
  const user = await pool.query("SELECT * FROM auth.users WHERE email = $1", [
    email,
  ]);
  return user.rows[0];
};

export const createUser = async (user) => {
  const createdUser = await pool.query(
    "INSERT INTO auth.users (email, password, role) values ($1, $2, $3) RETURNING *",
    [user.email, user.password, user.role]
  );
  return createdUser.rows[0];
};
