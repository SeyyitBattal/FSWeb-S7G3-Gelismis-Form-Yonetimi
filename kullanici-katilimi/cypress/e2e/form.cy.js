describe("Login Formu Testi", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  it("İsim Testi", () => {
    cy.get("#exampleText").type("aaa");
  });

  it("Email Testi", () => {
    cy.get("#exampleEmail").type("aaa@aaaa.com");
  });

  it("Şifre Testi", () => {
    cy.get("#examplePassword").type("123456");
  });

  it("Koşullar Testi", () => {
    cy.get("#checkbox2").check();
  });

  it("Buton Testi", () => {
    cy.get("[data-cy=login-button]").should("be.enabled");
  });
});
