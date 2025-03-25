describe("Projects Section", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#projects").scrollIntoView();
  });

  it("should display projects carousel with correct items", () => {
    // Vérifie que le carousel est visible
    cy.get('[data-testid="embla-carousel"]').should("be.visible");

    // Vérifie que les projets sont affichés
    cy.get(".embla__slide").should("have.length.gt", 0);
    cy.get(".embla__slide").first().should("be.visible");
  });

  it("should navigate between projects using buttons", () => {
    // Attend que le carousel soit chargé
    cy.get('[data-testid="embla-carousel"]').should("be.visible");

    // Vérifie que le premier projet est visible
    cy.get(".embla__slide").first().should("be.visible");

    // Clique sur le bouton suivant plusieurs fois pour vérifier la navigation
    cy.get('[aria-label="Projet suivant"]')
      .should("be.visible")
      .click()
      .wait(500)
      .click()
      .wait(500)
      .click();

    // Vérifie que le carousel est toujours visible et contient des slides
    cy.get('[data-testid="embla-carousel"]').should("be.visible");
    cy.get(".embla__slide").should("have.length.gt", 0);
  });

  it("should open project details modal when clicked", () => {
    // Attend que le carousel soit chargé
    cy.get('[data-testid="embla-carousel"]').should("be.visible");

    // Clique sur le bouton Détails du premier projet
    cy.get(".embla__slide").first().find("button").contains("Détails").click();

    // Attend que le modal soit visible
    cy.get('[role="dialog"]').should("be.visible");

    // Vérifie le contenu du modal
    cy.get('[role="dialog"]').should("contain", "Vaknakonekta");
  });

  it("should be responsive on different screen sizes", () => {
    // Test sur mobile
    cy.viewport("iphone-6");
    cy.get('[data-testid="embla-carousel"]').should("be.visible");

    // Test sur tablette
    cy.viewport("ipad-2");
    cy.get('[data-testid="embla-carousel"]').should("be.visible");

    // Test sur desktop
    cy.viewport("macbook-15");
    cy.get('[data-testid="embla-carousel"]').should("be.visible");
  });
});
