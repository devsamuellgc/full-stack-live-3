import { pool } from "../db.js";

const getAllAddresses = async () => {
  const query = "SELECT * FROM crm.addresses;";
  const result = await pool.query(query);
  return result.rows;
};

const getAddressById = async (id) => {
  const query = `SELECT * FROM crm.addresses WHERE id = '${id}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const createAddress = async (client) => {
  const keys = Object.keys(client);
  const values = Object.values(client);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO crm.addresses (${columns}) VALUES (${placeholders}) RETURNING *;`;
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteAddress = async (id) => {
  const deletedAddress = await getAddressById(id);
  const query = `DELETE FROM crm.addresses WHERE id = '${id}';`;
  const result = await pool.query(query);
  return deletedAddress;
};

const editAddress = async (id, client) => {
  const keys = Object.keys(client);
  const values = Object.values(client);
  const placeholders = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const query = `UPDATE crm.addresses SET ${placeholders} WHERE id = $${
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
