describe('Validar cadastro de um Projeto', () => {
    it('should sign in', () => {
      cy.visit('http://127.0.0.1:5500/src/login.html')
      cy.get('input[name="id"]').type(1)
      cy.get('input[name="email"]').type("viniciusteixeira@gmail")
      cy.get('button[type="submit"]').click()
    })
      
    it('cadastro não realizado', () => {
    cy.visit('http://127.0.0.1:5500/src/dashboard.html?id=1')
    cy.get('button[name="save-project"]').click()
    cy.get('.alert').contains("Erro ao cadastrar Um ou mais campos estão inválidos. Faça o preenchimento correto e tente novamente")
    })
})