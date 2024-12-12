import { pool } from "../db.js";

const getAllUsers = async (userId) => {
  const query =
    "SELECT id, nome FROM app_biblioteca.usuarios WHERE biblioteca_id = $1;";
  const result = await pool.query(query, [userId]);
  return result.rows;
};

const countUsers = async (userId) => {
  const query = `
  SELECT
    count(*)
  from
    app_biblioteca.usuarios
  where
    biblioteca_id = $1;`;

  const result = await pool.query(query, [userId]);
  const count = result.rows[0] ? result.rows[0].count : 0;
  return count;
};

const getAllUsersPaginated = async (params, userId) => {
  const page = params.page ? params.page : 1;
  const perPage = params.perPage ? params.perPage : 10;
  const currentPage = (Number(page) - 1) * perPage;

  const query = `
    select
      u.id,
      u.nome,
      u.documento,
      u.telefone,
      u.email,
      b.nome as nome_biblioteca
    from
      app_biblioteca.usuarios u
    left join 
      app_biblioteca.bibliotecas b 
    on 
      b.id = u.biblioteca_id 
    where
      u.biblioteca_id = $1
    order by
      u.data_de_criacao
    DESC
    limit
      ${perPage} 
    offset 
      ${currentPage};
  `;

  const result = await pool.query(query, [userId]);

  const total = await countUsers(userId);

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

const getUserById = async (id) => {
  const query = `SELECT * FROM app_biblioteca.usuarios WHERE id = '${id}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const createUser = async (user) => {
  const keys = Object.keys(user);
  const values = Object.values(user);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO app_biblioteca.usuarios (${columns}) VALUES (${placeholders}) RETURNING *;`;
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteUser = async (id) => {
  const query = `DELETE FROM app_biblioteca.usuarios WHERE id = '${id}' RETURNING *;`;
  const result = await pool.query(query);
  return result.rows[0];
};

const editUser = async (id, user) => {
  const keys = Object.keys(user);
  const values = Object.values(user);
  const placeholders = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const query = `UPDATE app_biblioteca.usuarios SET ${placeholders} WHERE id = $${
    keys.length + 1
  } RETURNING *;`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

export {
  editUser,
  deleteUser,
  createUser,
  getAllUsers,
  getUserById,
  getAllUsersPaginated,
};
