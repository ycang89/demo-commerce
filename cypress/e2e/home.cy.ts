describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("product listing should loaded", () => {
    cy.intercept("GET", "/api/products").as("getProducts");
    cy.wait("@getProducts").then(() => {
      cy.get('[data-cy="product-item"]').should("have.length", 8);
    });
  });
  it("product detail should loaded", () => {
    cy.intercept("GET", "/api/products").as("getProducts");
    cy.wait("@getProducts").then(() => {
      cy.get('[data-cy="product-item"]').first().click();
      cy.get('[data-cy="product-content"]').should("be.visible");
    });
  });
  it("currency will change to 'MYR' when user switch to Malaysia country", () => {
    cy.intercept("GET", "/api/products").as("getProducts");
    cy.get('[data-cy="switch-country-btn"]').click();
    cy.get('[data-cy="country-selection"]').contains("Malaysia").click();
    cy.wait("@getProducts").then(() => {
      cy.get('[data-cy="product-item"]').first().find('[data-cy="product-currency"]').should("have.text", "MYR")
      expect(cy.get('[data-cy="country-label"]').should("have.text", "Malaysia"))
      expect(localStorage.getItem("country_code")).to.eq("MY");
    });
  });
});
