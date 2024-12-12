import express from "express";
import cors from "cors";
import { librariesRouters } from "./bibliotecas/route.js";
import { authorsRouters } from "./autores/route.js";
import { categoriesRouters } from "./categorias/route.js";
import { borrowedBooksRouters } from "./emprestimos/route.js";
import { addressesRouters } from "./enderecos/route.js";
import { modelsRouters } from "./exemplares/route.js";
import { booksRouters } from "./livros/route.js";
import { usersRouters } from "./usuarios/route.js";
import { authRouters } from "./auth/route.js";
import { isAuthenticatedUser } from "./middlewares/auth.js";

const app = express();
const port = 3000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(librariesRouters);
app.use(authRouters);
app.use(isAuthenticatedUser);
app.use(authorsRouters);
app.use(categoriesRouters);
app.use(borrowedBooksRouters);
app.use(addressesRouters);
app.use(modelsRouters);
app.use(booksRouters);
app.use(usersRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
