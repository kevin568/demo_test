// cypress/integration/todo_app.spec.js

describe("To Do List App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should add a new To Do item", () => {
    cy.get('[data-testid="TODO_INPUT"]').type("New Todo Item");
    cy.get('[data-testid="ADD_BUTTON"]').click();
    cy.get('[data-testid="TODO_ITEM_New Todo Item"]').should("exist");
  });

  it("should delete a To Do item", () => {
    cy.get('[data-testid="TODO_INPUT"]').type("Item to be deleted");
    cy.get('[data-testid="ADD_BUTTON"]').click();
    cy.get('[data-testid="TODO_ITEM_Item to be deleted"]').click();
    cy.get('[data-testid="TODO_ITEM_Item to be deleted"]').should("not.exist");
  });
});
