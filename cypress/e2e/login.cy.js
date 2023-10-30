describe('Login', () => {
  it('should sign in', () => {
    cy.visit('http://127.0.0.1:5500/src/login.html')
    cy.get('input[name="id"]').type(1)
    cy.get('input[name="email"]').type("viniciusteixeira@gmail")
    cy.get('button[type="submit"]').click()

  })

  it('should sign in error', () => {
    cy.visit('http://127.0.0.1:5500/src/login.html')
    cy.get('input[name="id"]').type(1)
    cy.get('input[name="email"]').type("vinicius@gmail")
    cy.get('button[type="submit"]').click()
    cy.get('.alert').contains("id ou email incorreto")
  })
})

