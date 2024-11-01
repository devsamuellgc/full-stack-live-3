const http = require("http");
const url = require("url");

const PORT = 3000;
let clientes = [];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  res.writeHead(200, { "Contente-type": "application/json" });

  if (pathname === "/clientes" && req.method === "GET") {
    res.end(JSON.stringify(clientes));
  }

  if (pathname === "/clientes" && req.method === "POST") {
    let body = "";
    req.on("data", (chuck) => {
      body += chuck.toString();
    });

    req.on("end", () => {
      const { nome, email } = JSON.parse(body);
      const id = clientes.length + 1;
      clientes.push({ id, nome, email });
      res.end(
        JSON.stringify({
          message: "Cliente criado com sucesso",
          data: { id, nome, email },
        })
      );
    });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
