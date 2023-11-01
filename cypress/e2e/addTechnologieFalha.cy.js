describe('Validar cadastro de tecnologias em um projeto', () => {
    it('should sign in', () => {
      cy.visit('http://127.0.0.1:5500/src/login.html')
      cy.get('input[name="id"]').type(1)
      cy.get('input[name="email"]').type("viniciusteixeira@gmail")
      cy.get('button[type="submit"]').click()
    })
    it('cadastro não realizado', () => {
      cy.visit('http://localhost:5500/src/cadastro-tech.html?id=1?idProject=3')
      cy.get('button[type="submit"]').click()
      cy.get('.alert').contains("Erro ao cadastrar technologia. Verifique se você preencheu o campo corretamente")
    })
  })