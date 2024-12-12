import { pool } from "../db.js";

const getAllAuthors = async (userId) => {
  const query =
    "SELECT id, nome FROM app_biblioteca.autores WHERE biblioteca_id = $1;";
  const result = await pool.query(query, [userId]);
  return result.rows;
};

const countAuthors = async (userId) => {
  const query = `
  SELECT
    count(*)
  from
    app_biblioteca.autores
  where
    biblioteca_id = $1;`;

  const result = await pool.query(query, [userId]);
  const count = result.rows[0] ? result.rows[0].count : 0;
  return count;
};

const getAllAuthorsPaginated = async (params, userId) => {
  const page = params.page ? params.page : 1;
  const perPage = params.perPage ? params.perPage : 10;
  const currentPage = (Number(page) - 1) * perPage;

  const query = `
    select
      a.id,
      a.nome,
      b.nome as nome_biblioteca
    from
      app_biblioteca.autores a
    left join 
      app_biblioteca.bibliotecas b 
    on 
      b.id = a.biblioteca_id 
    where
      a.biblioteca_id = $1
    order by
      a.data_de_criacao
    DESC
    limit
      ${perPage} 
    offset 
      ${currentPage};
  `;

  const result = await pool.query(query, [userId]);

  const total = await countAuthors(userId);

  const totalPages = Math.ceil(total / perPage);

  const totalItemsPage = result.rows.length;

  return {
    data: result.rows,
    meta: {
      total: Number(total),
      perPage: Number(perPage),
      totalPages: Number(totalPages),
      totalItemsPage: Number(totalItemsPage),
      page: Number(page),
    },
  };
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

export {
  editAuthor,
  deleteAuthor,
  createAuthor,
  getAllAuthors,
  getAuthorById,
  getAllAuthorsPaginated,
};
