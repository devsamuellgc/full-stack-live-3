import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import jwt from "jsonwebtoken";
import { isAuthenticatedUser } from "./middlewares/auth.js";
import { isAdmin, isFinancial } from "./middlewares/permission.js";
import { pool } from "./db.js";

const app = express();
const port = 3000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// app.use(isAuthenticatedUser); Middleware global
// app.use(isAuthenticatedUser);

// Middleware individual
app.get("/teste/:isLogged", isAuthenticatedUser, (req, res) => {
  return res.status(200).json({ mensagem: "Valor inicial" });
});

app.get("/extrato/:role", isFinancial, (req, res) => {
  return res.status(200).json({ mensagem: "Extrato retornado com sucesso!" });
});

app.get("/users", isAuthenticatedUser, isAdmin, async (req, res) => {
  const user = req.user;
  console.log(user);

  const users = await pool.query("SELECT id, email, role FROM auth.users;");

  return res.status(200).json({
    mensagem: "Usuários encontrados com sucesso!",
    data: users.rows[0],
  });
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!req.body.role) {
    req.body.role = "normal";
  }

  if (!email || !password) {
    return res.status(400).json({ mensagem: "Preencha todos os campos!" });
  }

  const hashedPassword = bcrypt.hashSync(password);

  const newUser = await pool.query(
    "INSERT INTO auth.users (email, password, role) values ($1, $2, $3) RETURNING *",
    [email, hashedPassword, req.body.role]
  );

  return res
    .status(201)
    .json({ mensagem: "Conta criada com sucesso!", user: newUser.rows[0] });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ mensagem: "E-mail ou senha inválidos!" });
  }

  const userResult = await pool.query(
    "SELECT * FROM auth.users WHERE email = $1",
    [email]
  );

  const user = userResult.rows[0];

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return res.status(400).json({ mensagem: "E-mail ou senha inválidos!" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    "chave-secreta-e-longa",
    { expiresIn: "4h" }
  );

  return res.status(200).json({
    mensagem: "Login realizado com sucesso!",
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
