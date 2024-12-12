import { fetchAdvice, fetchAdviceById, fetchData } from "./fetchData";

describe("Funções assíncronas", () => {
  it("Deve ser possível receber dados", async () => {
    const data = await fetchData();
    expect(data).toBe("data received");
  });

  it("Deve ser possível receber um objeto com duas chaves", async () => {
    const advice = await fetchAdvice();
    expect(advice).toHaveProperty("advice");
  });

  it("Deve ser possível receber a informação correta", async () => {
    const advice = await fetchAdviceById(3);
    expect(advice.advice).toBe("Don't eat non-snow-coloured snow.");
  });
});
