describe("Hero Section", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays profile image", () => {
    cy.get('img[alt="Profile"]').should("be.visible");
  });

  it("has working CTA button", () => {
    cy.get('[data-slot="button"]').first().click();
    cy.get("#contact").should("be.visible");
  });

  it("shows technology icons on hover", () => {
    cy.get(".bg-accent\\/50").first().trigger("mouseover", { force: true });
    cy.get('img[alt="React"]').should("be.visible");
  });

  it("displays rotating orbit icons", () => {
    cy.get(".w-48").parent().find("img").should("have.length.gt", 0);
  });

  it("is responsive", () => {
    cy.viewport("iphone-6");
    cy.wait(1000);
    cy.get(".text-4xl").should("be.visible");

    cy.viewport("macbook-15");
    cy.wait(1000);
    cy.get(".text-4xl").should("be.visible");
  });
});
