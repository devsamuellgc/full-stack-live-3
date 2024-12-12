import { sum } from "./sum";

describe("Função de somar", () => {
  it("Deve ser possível adicionar dois números", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("Deve retornar 0 ao somar 0 e 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});
