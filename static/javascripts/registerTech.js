const btnSave = document.querySelector('.btn-submit-save-tech');
const nameTech = document.querySelector('.input-name')


btnSave.addEventListener('click', function(event){
    event.preventDefault()
    let idProject = queryString('idProject');
    // console.log(idProject);
    postTechnology(urlProject, nameTech.value, idProject)

})