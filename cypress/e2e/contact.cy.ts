describe("Contact Section", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("section").contains("Contact").scrollIntoView();
  });

  it("should display contact form with all fields", () => {
    cy.get("form").should("be.visible");
    cy.get("#name").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get("#message").should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");
  });

  it("should validate form inputs", () => {
    // Soumettre le formulaire vide
    cy.get('button[type="submit"]').click();

    // Vérifier que les champs sont requis
    cy.get("#name").should("have.attr", "required");
    cy.get("#email").should("have.attr", "required");
    cy.get("#message").should("have.attr", "required");
  });

  it("should show success message on valid submission", () => {
    // Intercepter la requête API
    cy.intercept("POST", "/api/send", {
      statusCode: 200,
      body: { success: true },
    }).as("sendMessage");

    // Remplir le formulaire
    cy.get("#name").type("John Doe");
    cy.get("#email").type("john@example.com");
    cy.get("#message").type("Ceci est un message de test");

    // Soumettre
    cy.get('button[type="submit"]').click();

    // Vérifier
    cy.wait("@sendMessage");
    // Attendre que le toast apparaisse
    cy.wait(1000);
    // Vérifier le toast de succès de sonner
    cy.get("[data-sonner-toast]").should("be.visible");
    cy.get("#name").should("have.value", "");
  });

  it("should show error message on failed submission", () => {
    // Intercepter la requête API avec une erreur
    cy.intercept("POST", "/api/send", {
      statusCode: 500,
      body: { error: "Server error" },
    }).as("sendMessage");

    // Remplir le formulaire
    cy.get("#name").type("John Doe");
    cy.get("#email").type("john@example.com");
    cy.get("#message").type("Ceci est un message de test");

    // Soumettre
    cy.get('button[type="submit"]').click();

    // Vérifier
    cy.wait("@sendMessage");
    // Attendre que le toast apparaisse
    cy.wait(1000);
    // Vérifier le toast d'erreur de sonner
    cy.get("[data-sonner-toast]").should("be.visible");
  });

  it("should have working social media links", () => {
    const socialLinks = [
      { href: "https://github.com/Jordanras96" },
      { href: "https://twitter.com/JordanRiantsoa" },
      { href: "https://linkedin.com/in/jordanrasoloarison" },
    ];

    socialLinks.forEach((link) => {
      cy.get(`a[href="${link.href}"]`).should("exist");
    });
  });
});
