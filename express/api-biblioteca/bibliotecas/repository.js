import { pool } from "../db.js";

const getAllLibraries = async () => {
  const query = "SELECT * FROM app_biblioteca.bibliotecas;";
  const result = await pool.query(query);
  return result.rows;
};

const getLibraryById = async (id) => {
  const query = `SELECT * FROM app_biblioteca.bibliotecas WHERE id = '${id}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const createLibrary = async (library) => {
  const keys = Object.keys(library);
  const values = Object.values(library);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO app_biblioteca.bibliotecas (${columns}) VALUES (${placeholders}) RETURNING *;`;
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteLibrary = async (id) => {
  const query = `DELETE FROM app_biblioteca.bibliotecas WHERE id = '${id}' RETURNING *;`;
  const result = await pool.query(query);
  return result.rows[0];
};

const editLibrary = async (id, library) => {
  const keys = Object.keys(library);
  const values = Object.values(library);
  const placeholders = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const query = `UPDATE app_biblioteca.bibliotecas SET ${placeholders} WHERE id = $${
    keys.length + 1
  } RETURNING *;`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

export {
  editLibrary,
  deleteLibrary,
  createLibrary,
  getAllLibraries,
  getLibraryById,
};
