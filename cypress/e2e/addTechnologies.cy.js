describe('Validar cadastro de tecnologias em um projeto', () => {
    it('cadastro realizado com sucesso', () => {
      cy.visit('http://localhost:5500/src/cadastro-tech.html?id=1?idProject=3')
      cy.get('input[name="name"]').type("Java")
      cy.get('button[type="submit"]').click()
      cy.get('.alert').contains("Technologia adicionada com sucesso. Você já pode iniciar seu projeto")
    })
  
    it('cadastro não realizado', () => {
      cy.visit('http://localhost:5500/src/cadastro-tech.html?id=1?idProject=3')
      cy.get('button[type="submit"]').click()
      cy.get('.alert').contains("Erro ao cadastrar technologia. Verifique se você preencheu o campo corretamente")
    })
  })