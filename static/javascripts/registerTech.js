const btnSave = document.querySelector('.btn-submit-save-tech');
const nameTech = document.querySelector('.input-name')
const project = document.querySelector('.project')
const wrapper = document.querySelector('.wrapper')

btnSave.addEventListener('click', function(event){
    event.preventDefault()
    let idProject = queryString('idProject');
    // console.log(idProject);
    try{
        postTechnology(urlProject, nameTech.value, idProject)
        wrapper.innerHTML = `
            <div style="margin-top: 1rem;" class="alert alert-success visually-hidden" role="alert">
                Technologia adicionada com sucesso. Você já pode iniciar seu projeto
            </div>
        `
    }catch(error){
        wrapper.innerHTML = `
            <div style="margin-top: 1rem;" class="alert alert-danger" role="alert">
                Erro ao cadastrar technologia. Verifique se você preencheu o campo corretamente
            </div>
        `
    }

})



// project.addEventListener('click', function(event){
//     event.preventDefault()
//     window.location.href = "http://localhost:5500/src/dashboard-technologias.html?id="+userId.id
// })