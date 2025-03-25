describe("Experience Section", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("section").contains("War Stories").scrollIntoView();
  });

  it("displays experience items", () => {
    cy.contains("War Stories").should("be.visible");
    cy.get('[data-slot="dialog-trigger"]').should("have.length.gt", 0);
  });

  it("opens dialog with details", () => {
    cy.get('[data-slot="dialog-trigger"]').first().click();
    cy.get('[data-slot="dialog-content"]').should("be.visible");
    cy.contains("Frontend:").should("be.visible");
  });

  it("is responsive", () => {
    cy.viewport("iphone-6");
    cy.contains("War Stories").should("be.visible");

    cy.viewport("macbook-15");
    cy.contains("War Stories").should("be.visible");
  });
});
