describe('Validar cadastro de um Projeto', () => {
    it('cadastro realizado com sucesso', () => {
      cy.intercept('POST', 'http://localhost:8080/projects', {
        statusCode: 201,
        body: { message: 'Cadastro realizado com sucesso' }
    }).as('cadastro');

      cy.visit('http://127.0.0.1:5500/src/dashboard.html?id=1')
      cy.get('input[name="name"]').type("Projeto Teste")
      cy.get('button[name="save-project"]').click()
      cy.get('.alert').contains("Projeto Criado com sucesso. Adicione as tecnologias que será utilizada.")
    
      cy.wait('@cadastro');
    })
  
    it('cadastro não realizado', () => {
      cy.visit('http://127.0.0.1:5500/src/dashboard.html?id=1')
      cy.get('button[name="save-project"]').click()
      cy.get('.alert').contains("Erro ao cadastrar Um ou mais campos estão inválidos. Faça o preenchimento correto e tente novamente")
    })
  })