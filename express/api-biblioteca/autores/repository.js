import { pool } from "../db.js";

const getAllAuthors = async () => {
  const query = "SELECT * FROM app_biblioteca.autores;";
  const result = await pool.query(query);
  return result.rows;
};

const getAuthorById = async (id) => {
  const query = `SELECT * FROM app_biblioteca.autores WHERE id = '${id}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const createAuthor = async (author) => {
  const keys = Object.keys(author);
  const values = Object.values(author);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO app_biblioteca.autores (${columns}) VALUES (${placeholders}) RETURNING *;`;
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteAuthor = async (id) => {
  const query = `DELETE FROM app_biblioteca.autores WHERE id = '${id}' RETURNING *;`;
  const result = await pool.query(query);
  return result.rows[0];
};

const editAuthor = async (id, author) => {
  const keys = Object.keys(author);
  const values = Object.values(author);
  const placeholders = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const query = `UPDATE app_biblioteca.autores SET ${placeholders} WHERE id = $${
    keys.length + 1
  } RETURNING *;`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

export { editAuthor, deleteAuthor, createAuthor, getAllAuthors, getAuthorById };
