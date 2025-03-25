describe("Education Section", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[id = education]").scrollIntoView();
  });

  it("should display education cards", () => {
    cy.get('[data-testid="education-card"]').should("have.length.at.least", 2);
  });

  it("should open drawer with details when card is clicked", () => {
    cy.get('[data-testid="education-card"]').first().click();

    cy.get('[role="dialog"]').should("be.visible");
    cy.get('[role="dialog"]').should(
      "contain",
      "Advanced Research Master in Mechatronics"
    );
    cy.get('[role="dialog"]').should(
      "contain",
      "This advanced master program in Mechatronics"
    );
  });

  it("should close drawer when close button is clicked", () => {
    cy.get('[data-testid="education-card"]').first().click();
    cy.get('[role="dialog"]').should("be.visible");

    cy.contains("Fermer").click();
    cy.get('[role="dialog"]').should("not.exist");
  });

  it("should display correct education information", () => {
    cy.get('[data-testid="education-card"]').should("have.length", 4);

    cy.get('[data-testid="education-card"]')
      .eq(0)
      .should("contain", "Advanced Research Master in Mechatronics")
      .and("contain", "Antananarivo Research Center");

    cy.get('[data-testid="education-card"]')
      .eq(1)
      .should("contain", "Master of Engineering in Electronics and Automation")
      .and("contain", "IES-AV");

    cy.get('[data-testid="education-card"]')
      .eq(2)
      .should("contain", "Complete React Developer (w/ Redux, Hooks, GraphQL)")
      .and("contain", "UDEMY");

    cy.get('[data-testid="education-card"]')
      .eq(3)
      .should("contain", "Complete Web Developer")
      .and("contain", "UDEMY");
  });

  it("should have hover effects on cards", () => {
    cy.get('[data-testid="education-card"]')
      .first()
      .parent()
      .should("have.class", "group");

    cy.get('[data-testid="education-card"]')
      .first()
      .should("have.class", "cursor-pointer");
  });
});
