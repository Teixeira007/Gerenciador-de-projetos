let projectInit = false;
function getProjectById(){
    let request = new XMLHttpRequest();
    request.open("GET", `http://localhost:8080/projects/4`, false);
    request.send();

    return request.responseText
}

function restartProject(name, idUser){
    const params = {
        name: name,
        user: {
            id: idUser
        },
        dateInit: null,
        dateFinal: null
    }

    let request = new XMLHttpRequest();

    try{
        request.open("PUT", "http://localhost:8080/projects/4", false);
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify(params));

        console.log(request)
        let objectErr = JSON.parse(request.response);
        console.log(objectErr)
        if(request.status != 201 && request.status != 200) throw objectErr;
    }catch(objectErr){
        throw JSON.parse(request.response)
    }
    
    return request.responseText;
   
}


describe('Validar iniciando um projeto', () => {
    let objectProject = getProjectById()
    objectProject = JSON.parse(objectProject)
    before(()=>{
        
        if(objectProject.dateInit != null){
            projectInit = true
        }
    })

    after(() =>{
        restartProject(objectProject.name, objectProject.user.id )

    })
    it('inicialização realizada com sucesso', () => {
      cy.visit('http://localhost:5500/src/dashboard-technologias.html?id=1?idProject=4')
      cy.get('button[name="init"]').click()
      cy.get('.alert').contains("Projeto inicializado. Agora você está pronto para codar.")
    })
  
    it('inicialição não realizada', () => {
      cy.visit('http://localhost:5500/src/dashboard-technologias.html?id=1?idProject=4')
      cy.get('button[name="init"]').click()
      cy.get('.alert').contains("Erro ao inicializar projeto: projeto já incializado.")
    })
  })