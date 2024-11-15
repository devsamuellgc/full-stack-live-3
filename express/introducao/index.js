import express from "express";
import cors from "cors";
import { clientsRouters } from "./clients/route.js";
import { addressesRouters } from "./addresses/route.js";

const app = express();
const port = 3000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use(clientsRouters);
app.use(addressesRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
