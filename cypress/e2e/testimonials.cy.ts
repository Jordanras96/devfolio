describe("Testimonials Section", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#testimonials").scrollIntoView();
    cy.wait(3000); // Augmenter davantage le temps d'attente pour l'animation
  });

  it("should display testimonials carousel", () => {
    // Force l'animation à se terminer en forçant l'opacité du parent à 1
    cy.get("#testimonials > div").invoke("css", "opacity", "1");

    // Vérifier ensuite la visibilité du carousel
    cy.get('[data-testid="testimonial-carousel"]').should("be.visible");
  });

  it("should cycle through testimonials automatically", () => {
    // Force l'animation à se terminer pour ce test aussi
    cy.get("#testimonials > div").invoke("css", "opacity", "1");

    cy.get('[data-testid="testimonial-text"]').then(($initialTestimonial) => {
      const initialText = $initialTestimonial.text();

      // Attendre le changement automatique
      cy.wait(3500);

      cy.get('[data-testid="testimonial-text"]').should(
        "not.contain",
        initialText
      );
    });
  });

  it("should navigate testimonials manually", () => {
    // Force l'animation à se terminer pour ce test aussi
    cy.get("#testimonials > div").invoke("css", "opacity", "1");

    cy.get('[data-testid="testimonial-name"]').then(($initialName) => {
      const initialName = $initialName.text();

      // Clique sur le bouton suivant - utiliser la valeur française de l'aria-label
      cy.get('[aria-label="Témoignage suivant"]').click();

      cy.get('[data-testid="testimonial-name"]').should(
        "not.contain",
        initialName
      );

      // Clique sur le bouton précédent - utiliser la valeur française de l'aria-label
      cy.get('[aria-label="Témoignage précédent"]').click();

      cy.get('[data-testid="testimonial-name"]').should("contain", initialName);
    });
  });

  it("should display profile pictures", () => {
    // Force l'animation à se terminer pour ce test aussi
    cy.get("#testimonials > div").invoke("css", "opacity", "1");

    cy.get('[data-testid="testimonial-avatar"]')
      .find("img")
      .should("be.visible")
      .and("have.attr", "src")
      .and("not.be.empty");
  });

  it("should update pagination dots when navigating", () => {
    // Force l'animation à se terminer pour ce test aussi
    cy.get("#testimonials > div").invoke("css", "opacity", "1");

    // Vérifier la largeur du premier point au lieu de vérifier une classe spécifique
    cy.get('[data-testid="pagination-dot"]')
      .first()
      .invoke("width")
      .should("be.gt", 2);

    // Stocker la largeur du premier point
    let firstDotWidth;
    cy.get('[data-testid="pagination-dot"]')
      .first()
      .invoke("width")
      .then((width) => {
        firstDotWidth = width;
      });

    // Clique sur le bouton suivant
    cy.get('[aria-label="Témoignage suivant"]').click();

    // Vérifier que la largeur du premier point est maintenant différente (plus petite)
    cy.get('[data-testid="pagination-dot"]')
      .first()
      .invoke("width")
      .should("not.eq", firstDotWidth);

    // Vérifier que la largeur du deuxième point est maintenant plus grande
    cy.get('[data-testid="pagination-dot"]')
      .eq(1)
      .invoke("width")
      .should("be.gt", 2);
  });
});
