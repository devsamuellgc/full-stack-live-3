import { pool } from "../db.js";

const getAllClients = async () => {
  const query = "SELECT * FROM crm.clients;";
  const result = await pool.query(query);
  return result.rows;
};

const countClients = async () => {
  const query = `
  SELECT
    count(*)
  from
    crm.clients c
  join 
    crm.addresses a 
  on c.id = a.user_id;`;

  const result = await pool.query(query);
  return result.rows[0].count;
};

const listAllClientsWithAddress = async (params) => {
  const { page, perPage } = params;

  const currentPage = (Number(page) - 1) * perPage;

  const query = `
    select
      json_build_object(
        'id', c.id,
        'name', c.name,
        'email', c.email,
        'document', c.document,
        'phone', c.phone
      ) as info,
      json_build_object(
        'id', a.id,
        'state', a.state,
        'city', a.city,
        'country', a.country,
        'street', a.street,
        'neighborhood', a.neighborhood,
        'zip_code', a.zip_code,
        'number', a.number,
        'complement', a.complement
      ) as address
    from
      crm.clients c
    left join 
      crm.addresses a 
    on 
      c.id = a.user_id 
    order by
      c.created_at
    DESC
    limit
      ${perPage} 
    offset 
      ${currentPage};
  `;

  const result = await pool.query(query);

  const total = await countClients();

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

const getClientById = async (id) => {
  const query = `SELECT * FROM crm.clients WHERE id = '${id}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const getClientByEmail = async (email) => {
  const query = `SELECT * FROM crm.clients WHERE email = '${email}'`;
  const result = await pool.query(query);
  return result.rows[0];
};

const createClient = async (client) => {
  const keys = Object.keys(client);
  const values = Object.values(client);
  const columns = keys.join(", ");
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO crm.clients (${columns}) VALUES (${placeholders}) RETURNING *;`;
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteClient = async (id) => {
  const deletedClient = await getClientById(id);
  const query = `DELETE FROM crm.clients WHERE id = '${id}';`;
  const result = await pool.query(query);
  return deletedClient;
};

const editClient = async (id, client) => {
  const keys = Object.keys(client);
  const values = Object.values(client);
  const placeholders = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  const query = `UPDATE crm.clients SET ${placeholders} WHERE id = $${
    keys.length + 1
  } RETURNING *;`;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

export {
  editClient,
  deleteClient,
  createClient,
  getAllClients,
  getClientById,
  getClientByEmail,
  listAllClientsWithAddress,
};
