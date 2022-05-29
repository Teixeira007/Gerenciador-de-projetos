const btnSave = document.querySelector('.btn-submit-save-tech');
const nameTech = document.querySelector('.input-name')
const project = document.querySelector('.project')

btnSave.addEventListener('click', function(event){
    event.preventDefault()
    let idProject = queryString('idProject');
    // console.log(idProject);
    postTechnology(urlProject, nameTech.value, idProject)

})



// project.addEventListener('click', function(event){
//     event.preventDefault()
//     window.location.href = "http://localhost:5500/src/dashboard-technologias.html?id="+userId.id
// })