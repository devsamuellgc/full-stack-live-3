import db from "pg";

const { Pool } = db;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "1234",
  port: 5440,
});
