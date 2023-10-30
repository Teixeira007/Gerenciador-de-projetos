describe('Fluxo de sucesso', () => {

    after(()=>{

    })
    it('cadastro realizado com sucesso', () => {
        cy.intercept('POST', 'http://localhost:8080/users', {
        statusCode: 201,
        body: { message: 'Cadastro realizado com sucesso' }
    }).as('cadastro');

      cy.visit('http://127.0.0.1:5500/src/cadastro.html')
      cy.get('input[name="name"]').type("Vinicius Teixeira")
      cy.get('input[name="email"]').type("vinicius@gmail")
      cy.get('button[type="submit"]').click()

      cy.wait('@cadastro');
    })

    it('login realizado com sucesso', () => {
        cy.visit('http://127.0.0.1:5500/src/login.html')
        cy.get('input[name="id"]').type(5)
        cy.get('input[name="email"]').type("vinicius@gmail")
        cy.get('button[type="submit"]').click()
    
      })
  
      it('cadastro de projeto realizado com sucesso', () => {
        cy.intercept('POST', 'http://localhost:8080/projects', {
        statusCode: 201,
        body: { message: 'Cadastro realizado com sucesso' }
    }).as('cadastro');
        cy.visit('http://127.0.0.1:5500/src/dashboard.html?id=5')
        cy.get('input[name="name"]').type("Projeto Fluxo Teste")
        cy.get('button[name="save-project"]').click()
        cy.get('.alert').contains("Projeto Criado com sucesso. Adicione as tecnologias que será utilizada.")
        
        cy.wait('@cadastro');
    })

      it('cadastro de tecnologia realizado com sucesso', () => {
        cy.intercept('POST', 'http://localhost:8080/projects/7/technologies', {
        statusCode: 201,
        body: { message: 'Cadastro realizado com sucesso' }
    }).as('cadastro');

        cy.visit('http://localhost:5500/src/cadastro-tech.html?id=5?idProject=7')
        cy.get('input[name="name"]').type("Java")
        cy.get('button[type="submit"]').click()
        cy.get('.alert').contains("Technologia adicionada com sucesso. Você já pode iniciar seu projeto")
        cy.wait('@cadastro');  
    })

      it('inicialização realizada com sucesso', () => {
        cy.intercept('GET', 'http://localhost:8080/projects/inicializar/7', {
        statusCode: 200,
        body: { message: 'inicializado realizado com sucesso' }
    }).as('inicializar');

        cy.visit('http://localhost:5500/src/dashboard-technologias.html?id=5?idProject=7')
        cy.get('button[name="init"]').click()
        cy.get('.alert').contains("Projeto inicializado. Agora você está pronto para codar.")
        
        cy.wait('@inicializar'); 
    })

      it('finalização realizada com sucesso', () => {
        cy.intercept('GET', 'http://localhost:8080/projects/finalizar/7', {
        statusCode: 200,
        body: { message: 'finalizado realizado com sucesso' }
    }).as('finalizar');

        cy.visit('http://localhost:5500/src/dashboard-technologias.html?id=1?idProject=7')
        cy.get('button[name="final"]').click()
        cy.get('.alert').contains("Projeto Finalizado. Parabéns por concluir o projeto.")
        
        cy.wait('@finalizar'); 

    })

  })