import { pool } from "../db.js";

const getAllModels = async (userId) => {
  const query =
    "SELECT * FROM app_biblioteca.exemplares WHERE biblioteca_id = $1;";
  const result = await pool.query(query, [userId]);
  return result.rows;
};

const countModels = async (userId) => {
  const query = `
  SELECT
    count(*)
  from
    app_biblioteca.exemplares
  where
    biblioteca_id = $1;`;

  const result = await pool.query(query, [userId]);
  const count = result.rows[0] ? result.rows[0].count : 0;
  return count;
};

const getAllModelsPaginated = async (params, userId) => {
  const page = params.page ? params.page : 1;
  const perPage = params.perPage ? params.perPage : 10;
  const currentPage = (Number(page) - 1) * perPage;

  const query = `
    select
      json_build_object(
        'id', e.id,
        'status', e.status,
        'numero_exemplar', e.numero_exemplar
      ) as exemplar,
      json_build_object(
        'id', l.id,
        'titulo', l.titulo
      ) as livro
    from
      app_biblioteca.exemplares e
    left join 
      app_biblioteca.livros l 
    on 
      l.id = e.livro_id 
    where
      e.biblioteca_id = $1
    order by
      e.data_de_criacao
    DESC
    limit
      ${perPage} 
    offset 
      ${currentPage};
  `;

  const result = await pool.query(query, [userId]);

  const total = await countModels(userId);

  const totalPages = Math.ceil(total / perPage);

  const totalItemsPage = result.rows.length;

  return {
    data: result.rows,
    total: Number(total),
    perPage: Number(perPage),
    totalPages: Number(totalPages),
    totalItemsPage: Number(totalItemsPage),
    page: Number(page),
  };
};

const getModelById = async (id) => {
  const query = `SELECT * FROM app_biblioteca.exemplares WHERE id = '${id}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const createModel = async (model) => {
  const keys = Object.keys(model);
  const values = Object.values(model);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO app_biblioteca.exemplares (${columns}) VALUES (${placeholders}) RETURNING *;`;
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteModel = async (id) => {
  const query = `DELETE FROM app_biblioteca.exemplares WHERE id = '${id}' RETURNING *;`;
  const result = await pool.query(query);
  return result.rows[0];
};

const editModel = async (id, model) => {
  const keys = Object.keys(model);
  const values = Object.values(model);
  const placeholders = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const query = `UPDATE app_biblioteca.exemplares SET ${placeholders} WHERE id = $${
    keys.length + 1
  } RETURNING *;`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

export {
  editModel,
  deleteModel,
  createModel,
  getAllModels,
  getModelById,
  getAllModelsPaginated,
};
