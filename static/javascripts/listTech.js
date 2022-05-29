const title = document.querySelector('.aw-graph-box__header')
const technologies = document.querySelector('.aw-graph-box__no-data')

function ListTechnology(){
    let idProject = queryString("idProject")
    var objectTech = JSON.parse(getTechnology(urlProject, idProject))
    let objectProject = JSON.parse(getProjectById(urlProject, idProject))

    title.innerHTML =  `
        <h2 class="aw-graph-box__title">${objectProject.name} <span>Technologias</span></h2>
    `
    
    for(let i=0; i<objectTech.length; i++){
       technologies.innerHTML = `
            <i class="ph-code"></i>
            <span>${objectTech[i].name}</span>

       
       `

    }

    // let objectProject = JSON.parse(
    console.log(objectProject.name)
    
}



ListTechnology()


