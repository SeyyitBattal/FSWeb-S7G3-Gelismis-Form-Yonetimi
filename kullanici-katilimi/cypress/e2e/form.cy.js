describe("Login Formu Testi", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  it("İsim Testi", () => {
    cy.get("#exampleText").type("aa");
    cy.get(".invalid-feedback").should(
      "have.text",
      "İsmin 3 harften kısa olamaz herhalde"
    );
  });

  it("Email Testi", () => {
    cy.get("#exampleEmail").type("aaaa");
    cy.get(".invalid-feedback").should(
      "have.text",
      "Geçerli bir mail girer misin?"
    );
  });

  it("Şifre Testi", () => {
    cy.get("#examplePassword").type("12356");
    cy.get(".invalid-feedback").should(
      "have.text",
      "Güçlü parola hayat kurtarır"
    );
  });

  it("Koşullar Testi", () => {
    cy.get("#checkbox2").check().should("be.checked");
  });

  it("Buton Testi", () => {
    cy.get("[data-cy=login-button]").should("be.disabled");
  });
});
