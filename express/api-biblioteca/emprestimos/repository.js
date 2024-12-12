import { pool } from "../db.js";

const getAllBorrowedBooks = async () => {
  const query = "SELECT * FROM app_biblioteca.emprestimos;";
  const result = await pool.query(query);
  return result.rows;
};

const getBorrowedBookById = async (id) => {
  const query = `SELECT * FROM app_biblioteca.emprestimos WHERE id = '${id}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const createBorrowedBook = async (borrowedBook) => {
  const keys = Object.keys(borrowedBook);
  const values = Object.values(borrowedBook);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO app_biblioteca.emprestimos (${columns}) VALUES (${placeholders}) RETURNING *;`;
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteBorrowedBook = async (id) => {
  const query = `DELETE FROM app_biblioteca.emprestimos WHERE id = '${id}' RETURNING *;`;
  const result = await pool.query(query);
  return result.rows[0];
};

const editBorrowedBook = async (id, borrowedBook) => {
  const keys = Object.keys(borrowedBook);
  const values = Object.values(borrowedBook);
  const placeholders = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const query = `UPDATE app_biblioteca.emprestimos SET ${placeholders} WHERE id = $${
    keys.length + 1
  } RETURNING *;`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

export {
  editBorrowedBook,
  deleteBorrowedBook,
  createBorrowedBook,
  getAllBorrowedBooks,
  getBorrowedBookById,
};
