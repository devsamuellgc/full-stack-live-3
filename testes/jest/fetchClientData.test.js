import { fetchClients } from "./fetchClientData";

describe("Lidando com dados dos clientes", () => {
  it("Deve retornar 5 clientes", () => {
    const clients = fetchClients();
    expect(clients).toHaveLength(5)
  });
});
