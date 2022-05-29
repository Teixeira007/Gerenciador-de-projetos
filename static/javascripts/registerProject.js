const inputName = document.querySelector('.input-name')
const inputTechnology = document.querySelector('.input-technology')

const btnAddtechnology = document.querySelector('.btn-submit-add-technology')
const btnSaveProject = document.querySelector('.btn-submit-save-project')

const project = document.querySelector('.project')
const wrapper = document.querySelector('.alert')


btnSaveProject.addEventListener("click", function(event){
    event.preventDefault()
    // const urlTechnology = `${urlProject}`
    let id = Number(queryString('id'));
    // console.log(id)
    // const jsonObject = JSON.parse(getProjectByUser(urlProject, id));
    // console.log(jsonObject[0].name)
    
    try{
        postProject(urlProject, inputName.value, id)

        function intervalReload(){
            location.reload();
        }setInterval(intervalReload, 2000);

        wrapper.innerHTML = `
            <div class="alert alert-success visually-hidden" role="alert">
                Projeto Criado com sucesso. Adicione as tecnologias que será utilizada.
            </div>
        `
    }catch(error){
        wrapper.innerHTML = `
            <div class="alert alert-danger" role="alert">
               Erro ao cadastrar ${error.title}
            </div>
        
        `
    }

})

function ListProjectsByUser(){
    const id = Number(queryString('id'));
    const jsonObject = JSON.parse(getProjectByUser(urlProject, id));
    // console.log(jsonObject)
    
    for(let i=0; i< jsonObject.length;i++){
        // console.log(jsonObject[i].id)
        project.innerHTML += `
            <div class="col-sm-4">
            
                <div class="aw-box project">
                    <div class="aw-box__icon">
                        <a  href="cadastro-tech.html?id=${id}?idProject=${jsonObject[i].id}"><i class="ph-plus-circle"></i></a>
                    </div>
                    
                    
                    <div class="aw-box__value projects-name">
                        
                       
                    
                        <a href="dashboard-technologias.html?id=${id}?idProject=${jsonObject[i].id}">${jsonObject[i].name}</a>
                    </div>
                    
                    <div class="aw-box__title">5 horas 37 min</div>
                </div>
            
            </div>
            `
    }
}

ListProjectsByUser()
