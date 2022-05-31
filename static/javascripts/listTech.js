const title = document.querySelector('.aw-graph-box__header')
const technologies = document.querySelector('.aw-graph-box__no-data')

const btnInit = document.querySelector('.btn-init')
const btnFinal = document.querySelector('.btn-final')
const btnPause = document.querySelector('.btn-pause')

const wrapper = document.querySelector('.wrapper')

function ListTechnology(){
    let idProject = queryString("idProject")
    var objectTech = JSON.parse(getTechnology(urlProject, idProject))
    let objectProject = JSON.parse(getProjectById(urlProject, idProject))

    title.innerHTML =  `
        <h2 class="aw-graph-box__title">${objectProject.name} <span>Technologias</span></h2>
    `
    
    for(let i=0; i<objectTech.length; i++){
       technologies.innerHTML += `
            <div>
                <i class="ph-code"></i>
                <span>${objectTech[i].name}</span>
            </div>

       
       `

    }

    // let objectProject = JSON.parse(
    console.log(objectProject.name)
    
}

btnInit.addEventListener('click', function(event){
    let idProject = queryString("idProject")

    try{
        let time = inicializar(urlProject, idProject)
        wrapper.innerHTML = `
            <div style="margin-top: 1rem;" class="alert alert-success visually-hidden" role="alert">
                Projeto inicializado. Agora você está pronto para codar.
            </div>
        `
    }catch(error){
        wrapper.innerHTML = `
            <div style="margin-top: 1rem;" class="alert alert-danger" role="alert">
                Erro ao inicializar projeto: projeto já incializado.
            </div>
        `
    }
    
    // time = JSON.parse(time)
    // console.log(time)
    // time = time.dateInit
    // console.log(time)
    // time = Date.parse(time)
    // console.log(time)
    


})

btnFinal.addEventListener('click', function(event){
    let idProject = queryString("idProject")
        try{
            finalizar(urlProject, idProject)
            wrapper.innerHTML = `
            <div style="margin-top: 1rem;" class="alert alert-success visually-hidden" role="alert">
                Projeto Finalizado. Parabéns por concluir o projeto.
            </div>
        `
        }catch(error){
            console.log(error)
            wrapper.innerHTML = `
                <div style="margin-top: 1rem;" class="alert alert-danger" role="alert">
                    Erro ao finalizar. Projeto já finalizado
                </div>
            `
        }
    
})



ListTechnology()


