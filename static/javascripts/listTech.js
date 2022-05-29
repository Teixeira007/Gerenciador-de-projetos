const title = document.querySelector('.aw-graph-box__title')

function ListTechnology(){
    let idProject = queryString("idProject")
    var objectTech = JSON.parse(getTechnology(urlProject, idProject))
     
    for(let i=0; i<objectTech.length; i++){
        console.log(objectTech);
        // title.innerText = objectTech[i].name

    }

    
}



ListTechnology()


