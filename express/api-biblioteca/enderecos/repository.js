import { pool } from "../db.js";

const getAllAddresses = async () => {
  const query = "SELECT * FROM app_biblioteca.enderecos;";
  const result = await pool.query(query);
  return result.rows;
};

const getAddressById = async (id) => {
  const query = `SELECT * FROM app_biblioteca.enderecos WHERE id = '${id}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const createAddress = async (address) => {
  const keys = Object.keys(address);
  const values = Object.values(address);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO app_biblioteca.enderecos (${columns}) VALUES (${placeholders}) RETURNING *;`;
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteAddress = async (id) => {
  const query = `DELETE FROM app_biblioteca.enderecos WHERE id = '${id}' RETURNING *;`;
  const result = await pool.query(query);
  return result.rows[0];
};

const editAddress = async (id, address) => {
  const keys = Object.keys(address);
  const values = Object.values(address);
  const placeholders = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const query = `UPDATE app_biblioteca.enderecos SET ${placeholders} WHERE id = $${
    keys.length + 1
  } RETURNING *;`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

export {
  editAddress,
  deleteAddress,
  createAddress,
  getAllAddresses,
  getAddressById,
};
