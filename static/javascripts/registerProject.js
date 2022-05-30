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
    let dataString = jsonObject[0].dateInit;
    let dateFinal = JSON.parse(finalizar(urlProject, 6))
    
    console.log(dataString)
    console.log(dateFinal.dateFinal)
    
    //intervalo de tempo em milesegundos
    let intervalDate = Date.parse(dateFinal.dateFinal) - Date.parse(dataString);

    //valor de 1 hora em milesegundo
    let miliseconds = 2.7777777777777776e-7
    //valor do intervalo de tempo em horas
    let hours = intervalDate * (miliseconds)
    console.log(hours)
    
    for(let i=0; i< jsonObject.length;i++){
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

function formatData(dateNow){

    let dateFormat = `${dateNow.getFullYear()}-${zeroLeft(dateNow.getMonth()+1)}-${zeroLeft(dateNow.getDate())}T${zeroLeft(dateNow.getHours())}:${zeroLeft(dateNow.getMinutes())}:${zeroLeft(dateNow.getSeconds())}-03:00`
    
    return dateFormat
}

function zeroLeft(temp){
    return temp < 10 ? `0${temp}` : `${temp}`
}




ListProjectsByUser()
