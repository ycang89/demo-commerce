describe("Product Details", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/products/*").as("getProduct");
    cy.visit("/product/1");
    cy.wait("@getProduct");
  });
  it("notification box should shown up when checkout has error", () => {
    cy.intercept("POST", "**/checkout", (req) => {
      req.reply({ statusCode: 400, fixture: "checkoutWithError.json" });
    }).as("postCheckout");
    cy.get('[data-cy="checkout-button"]').click();
    cy.get('[data-cy="notification"]').should(
      "be.contain",
      "This field is required."
    );
  });
  it("user able to checkout", () => {
    cy.intercept("POST", "**/checkout", (req) => {
      req.reply({ statusCode: 200, fixture: "checkout.json" });
    }).as("postCheckout");
    cy.get('[data-cy="checkout-button"]').click();
    cy.get('[data-cy="notification"]').should(
      "be.contain",
      "Redirecting to payment gateway in 3 seconds..."
    );
  });
});
