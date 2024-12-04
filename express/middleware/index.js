import express from "express";
import cors from "cors";
import { isAuthenticatedUser } from "./middlewares/auth.js";
import { isAdmin } from "./middlewares/permission.js";
import * as usersController from "./controllers/users.controller.js";

const app = express();
const port = 3000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// app.use(isAuthenticatedUser); Middleware global

app.get("/users", isAuthenticatedUser, isAdmin, usersController.getUsers);

app.post("/signup", usersController.createUser);

app.post("/login", usersController.login);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
