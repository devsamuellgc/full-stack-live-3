/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should not be able to access home page without a login", () => {
    cy.location("pathname").should("eq", "/login");
  });

  it("should be able to add a value into counter", () => {
    cy.get("[name=email]").type("email@teste.com.br");
    cy.get("[name=name]").type("Usuário Teste");
    cy.get("[data-cy=btn-submit]").click();
    const btn = cy.get("[data-cy=btn-add]");
    btn.click();
    cy.get("[data-cy=counter]").should("have.text", "1");
  });

  it("should be able to remove a value from counter", () => {
    cy.get("[name=email]").type("email@teste.com.br");
    cy.get("[name=name]").type("Usuário Teste");
    cy.get("[data-cy=btn-submit]").click();
    const btnAdd = cy.get("[data-cy=btn-add]");
    const btnRemove = cy.get("[data-cy=btn-remove]");
    btnAdd.click();
    btnRemove.click();
    cy.get("[data-cy=counter]").should("have.text", "0");
  });

  it("should not be able to remove a value if counter is 0", () => {
    cy.get("[name=email]").type("email@teste.com.br");
    cy.get("[name=name]").type("Usuário Teste");
    cy.get("[data-cy=btn-submit]").click();
    const btnRemove = cy.get("[data-cy=btn-remove]");
    btnRemove.click();
    cy.get("[data-cy=counter]").should("have.text", "0");
  });

  it("should be able to logout", () => {
    cy.get("[name=email]").type("email@teste.com.br");
    cy.get("[name=name]").type("Usuário Teste");
    cy.get("[data-cy=btn-submit]").click();
    const btn = cy.get("[data-cy=btn-logout]");
    btn.click();
    cy.location("pathname").should("eq", "/login");
  });
});
