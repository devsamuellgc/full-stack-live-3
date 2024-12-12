import { pool } from "../db.js";

const getAllCategories = async (userId) => {
  const query =
    "SELECT * FROM app_biblioteca.categorias WHERE biblioteca_id = $1;";
  const result = await pool.query(query, [userId]);
  return result.rows;
};

const countCategories = async (userId) => {
  const query = `
  SELECT
    count(*)
  from
    app_biblioteca.categorias
  where
    biblioteca_id = $1;`;

  const result = await pool.query(query, [userId]);
  const count = result.rows[0] ? result.rows[0].count : 0;
  return count;
};

const getAllCategoriesPaginated = async (params, userId) => {
  const page = params.page ? params.page : 1;
  const perPage = params.perPage ? params.perPage : 10;
  const currentPage = (Number(page) - 1) * perPage;

  const query = `
    select
      c.id,
      c.nome,
      b.nome as nome_biblioteca
    from
      app_biblioteca.categorias c
    left join 
      app_biblioteca.bibliotecas b 
    on 
      b.id = c.biblioteca_id 
    where
      c.biblioteca_id = $1
    order by
      c.data_de_criacao
    DESC
    limit
      ${perPage} 
    offset 
      ${currentPage};
  `;

  const result = await pool.query(query, [userId]);

  const total = await countCategories(userId);

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

const getCategoryById = async (id) => {
  const query = `SELECT * FROM app_biblioteca.categorias WHERE id = '${id}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const createCategory = async (category) => {
  const keys = Object.keys(category);
  const values = Object.values(category);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO app_biblioteca.categorias (${columns}) VALUES (${placeholders}) RETURNING *;`;
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteCategory = async (id) => {
  const query = `DELETE FROM app_biblioteca.categorias WHERE id = '${id}' RETURNING *;`;
  const result = await pool.query(query);
  return result.rows[0];
};

const editCategory = async (id, category) => {
  const keys = Object.keys(category);
  const values = Object.values(category);
  const placeholders = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const query = `UPDATE app_biblioteca.categorias SET ${placeholders} WHERE id = $${
    keys.length + 1
  } RETURNING *;`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

export {
  editCategory,
  deleteCategory,
  createCategory,
  getAllCategories,
  getCategoryById,
  getAllCategoriesPaginated,
};
