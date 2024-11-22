import express from "express";
import cors from "cors";
import { librariesRouters } from "./bibliotecas/route.js";
import { authorsRouters } from "./autores/route.js";

const app = express();
const port = 3000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use(librariesRouters);
app.use(authorsRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
