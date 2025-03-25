declare namespace Cypress {
  interface Chainable {
    /**
     * Scrolls to a section by its title
     * @param title The section title to scroll to
     */
    scrollToSection(title: string): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add("scrollToSection", (title) => {
  return cy.contains("section", title).scrollIntoView();
});
