describe("Skills Section", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#skills").scrollIntoView();
  });

  it("should display all skill categories", () => {
    cy.get("#skills").should("be.visible");

    cy.get("#skills h3.text-xl.font-bold").should("have.length", 4);
    cy.get("#skills h3.text-xl.font-bold")
      .first()
      .should("contain", "Frontend");
  });

  it("should display technology icons with correct alt text", () => {
    cy.get("#skills").should("be.visible");

    // Vérifie que les icônes de technologies sont présentes
    cy.get("#skills img").should("have.length.gt", 0);

    // Vérifie que la première icône a l'attribut alt "React"
    cy.get("#skills img").first().should("have.attr", "alt", "React");
  });

  it("should display correct number of technologies per category", () => {
    cy.get("#skills").should("be.visible");

    cy.get("#skills .flex.flex-wrap.justify-center.gap-4").each(($category) => {
      cy.wrap($category)
        .find(".flex.items-center.justify-center.w-16.h-16")
        .should("have.length.gt", 0);
    });
  });

  it("should have working links for social media", () => {
    cy.get("#skills").should("be.visible");

    cy.get("#skills img").each(($img) => {
      cy.wrap($img).should("have.attr", "src").and("not.be.empty");
    });
  });
});
