describe('Registro', () => {
    it('cadastro realizado com sucesso', () => {
      cy.visit('http://127.0.0.1:5500/src/cadastro.html')
      cy.get('input[name="name"]').type("Vinicius Teixeira")
      cy.get('input[name="email"]').type("viniciusteixeira2@gmail")
      cy.get('button[type="submit"]').click()
  
    })
  
    it('cadastro não realizado', () => {
      cy.visit('http://127.0.0.1:5500/src/cadastro.html')
      cy.get('input[name="email"]').type("vinicius@gmail")
      cy.get('button[type="submit"]').click()
      cy.get('.alert').contains("Erro ao cadastrar Um ou mais campos estão inválidos. Faça o preenchimento correto e tente novamente")
    })
  })
  