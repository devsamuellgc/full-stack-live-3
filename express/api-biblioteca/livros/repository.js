import { pool } from "../db.js";

const getAllBooks = async (userId) => {
  const query = "SELECT * FROM app_biblioteca.livros WHERE biblioteca_id = $1;";
  const result = await pool.query(query, [userId]);
  return result.rows;
};

const countBooks = async (userId) => {
  const query = `
  SELECT
    count(*)
  from
    app_biblioteca.livros
  where
    biblioteca_id = $1;`;

  const result = await pool.query(query, [userId]);
  const count = result.rows[0] ? result.rows[0].count : 0;
  return count;
};

const getAllBooksPaginated = async (params, userId) => {
  const page = params.page ? params.page : 1;
  const perPage = params.perPage ? params.perPage : 10;
  const currentPage = (Number(page) - 1) * perPage;

  const query = `
    select
      l.id,
      l.titulo,
      l.editora,
      l.ano_publicacao,
      b.nome as nome_biblioteca,
      json_build_object(
        'id', c.id,
        'nome', c.nome
      ) as categoria,
      json_build_object(
        'id', a.id,
        'nome', a.nome
      ) as autor
    from
      app_biblioteca.livros l
    left join 
      app_biblioteca.bibliotecas b 
    on 
      b.id = l.biblioteca_id 
    left join 
      app_biblioteca.autores a 
    on 
      a.id = l.autor_id 
    left join 
      app_biblioteca.categorias c 
    on 
      c.id = l.categoria_id 
    where
      l.biblioteca_id = $1
    order by
      l.data_de_criacao
    DESC
    limit
      ${perPage} 
    offset 
      ${currentPage};
  `;

  const result = await pool.query(query, [userId]);

  const total = await countBooks(userId);

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

const getBookById = async (id) => {
  const query = `SELECT * FROM app_biblioteca.livros WHERE id = '${id}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const createBook = async (book) => {
  const keys = Object.keys(book);
  const values = Object.values(book);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO app_biblioteca.livros (${columns}) VALUES (${placeholders}) RETURNING *;`;
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteBook = async (id) => {
  const query = `DELETE FROM app_biblioteca.livros WHERE id = '${id}' RETURNING *;`;
  const result = await pool.query(query);
  return result.rows[0];
};

const editBook = async (id, book) => {
  const keys = Object.keys(book);
  const values = Object.values(book);
  const placeholders = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const query = `UPDATE app_biblioteca.livros SET ${placeholders} WHERE id = $${
    keys.length + 1
  } RETURNING *;`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

export {
  editBook,
  deleteBook,
  createBook,
  getAllBooks,
  getBookById,
  getAllBooksPaginated,
};
