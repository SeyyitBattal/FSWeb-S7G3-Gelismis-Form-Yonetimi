describe("Login Formu için", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  it("Login Formu Testi", () => {
    cy.get("#exampleText").type("aaa");
    cy.get("#exampleEmail").type("aa@aa.com");
    cy.get("#checkbox2").check();
  });
});
