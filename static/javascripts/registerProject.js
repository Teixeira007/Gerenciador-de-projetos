const inputName = document.querySelector('.input-name')
const inputTechnology = document.querySelector('.input-technology')

const btnAddtechnology = document.querySelector('.btn-submit-add-technology')
const btnSaveProject = document.querySelector('.btn-submit-save-project')

const project = document.querySelector('.project')
const btns = document.querySelector('.btns')
const wrapper = document.querySelector('.alert')

const initBtn = document.querySelector('.init-btn')



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
    
    for(let i=0; i< jsonObject.length;i++){
        console.log(jsonObject[i]);
        project.innerHTML += `
            <div class="col-sm-4">
            
                <div class="aw-box project">
                    <div class="aw-box__icon">
                        <a  href="cadastro-tech.html?id=${id}?idProject=${jsonObject[i].id}"><i class="ph-plus-circle"></i></a>
                    </div>
                    
                    
                    <div class="aw-box__value projects-name">
                        
                       
                    
                        <a href="dashboard-technologias.html?id=${id}?idProject=${jsonObject[i].id}">${jsonObject[i].name}</a>
                    </div>
                    
                    <div class="aw-box__title">${intervalTemp(jsonObject[i])}</div>
                        
                    </div>
            
            </div>
            `
       
    }
}


function intervalTemp(jsonObject){
        console.log(click)
        // console.log(jsonObject)
        if(typeof(jsonObject.dateInit) !== "string"){
            return formatData(0)
        }
        if(typeof(jsonObject.dateFinal) !== 'string'){

            let dateFinal = new Date() 
            dateFinal = `${dateFinal.getFullYear()}-${zeroLeft(dateFinal.getMonth()+1)}-${zeroLeft(dateFinal.getDate())}T${zeroLeft(dateFinal.getHours())}:${zeroLeft(dateFinal.getMinutes())}:${zeroLeft(dateFinal.getSeconds())}-03:00`
            let intervalDate = Date.parse(dateFinal) - Date.parse(jsonObject.dateInit);
            let miliseconds = 2.7777777777777776e-7
            let hours = intervalDate * (miliseconds)
            return formatData(hours)
        }
        if(typeof(jsonObject.dateInit) === "string" && typeof(jsonObject.dateFinal) === "string"){

            let dataString = jsonObject.dateInit;
            let dateFinal = jsonObject.dateFinal;
            console.log(dataString)
            let intervalDate = Date.parse(dateFinal) - Date.parse(dataString);
            let miliseconds = 2.7777777777777776e-7
            let hours = intervalDate * (miliseconds)
            return formatData(hours)

        }
        
}

function formatData(time){
    time = time.toString()
    if(time >= 1){
        let result = time.split('.')
        let hours = result[0]
        let minutes = result[1] 
        minutes = minutes.substring(0,2)
        if(minutes > 60) {
            hours++
            minutes = minutes - 60
        }
        return `${hours} hrs ${minutes} mins `
    }

    // console.log(hours)
    // let dateFormat = `${dateNow.getFullYear()}-${zeroLeft(dateNow.getMonth()+1)}-${zeroLeft(dateNow.getDate())}T${zeroLeft(dateNow.getHours())}:${zeroLeft(dateNow.getMinutes())}:${zeroLeft(dateNow.getSeconds())}-03:00`
    let hours = 0
    if(time == 0){
        minutes = 0
    }else{
        var minutes = time * 60
        minutes = minutes.toString()
        minutes = minutes.substring(0,2)
    }
    

    return `${hours} hrs ${minutes} mins `
}


function zeroLeft(temp){
    return temp < 10 ? `0${temp}` : `${temp}`
}




ListProjectsByUser()
