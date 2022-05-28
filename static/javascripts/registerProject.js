const inputName = document.querySelector('.input-name')
const inputTechnology = document.querySelector('.input-technology')

const btnAddtechnology = document.querySelector('.btn-submit-add-technology')
const btnSaveProject = document.querySelector('.btn-submit-save-project')

const projects = document.querySelector('.projects')


btnSaveProject.addEventListener("click", function(event){
    event.preventDefault()
    // const urlTechnology = `${urlProject}`
    const id = Number(queryString('id'));
    // console.log(id)
    
    try{
        postProject(urlProject, inputName.value, id)
    }catch(error){
        // projects.innerHTML = `
        //     <div class="col-sm-4">
        
        //         <div class="aw-box">
        //         <div class="aw-box__icon">
        //             <i class="fa  fa-bank  fa-3x"></i>
        //         </div>
        //         <div class="aw-box__value">R$983.433,20</div>
        //         <div class="aw-box__title">Faturamento total</div>
        //         </div>
        
        //     </div>
        // `
    }

})