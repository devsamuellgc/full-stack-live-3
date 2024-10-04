/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Login feature", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("should be able to type on inputs", () => {
    cy.get("[name=email]").type("email@teste.com.br");
    cy.get("[name=name]").type("Usuário Teste");
  });

  it("should be able to login on the system", () => {
    cy.get("[name=email]").type("email@teste.com.br");
    cy.get("[name=name]").type("Usuário Teste");
    cy.get("[data-cy=btn-submit]").click();
    cy.location("pathname").should("eq", "/");
  });

  it("should login successfully", () => {
    cy.get("[name=email]").type("email@teste.com.br");
    cy.get("[name=name]").type("Usuário Teste");
    cy.get("[data-cy=btn-submit]").click();
    cy.location("pathname").should("eq", "/");
    cy.get("h1").should("have.text", "Bem-vindo, Usuário Teste");
  });
});
