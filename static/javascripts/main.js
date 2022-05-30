const urlUser = "http://localhost:8080/users/";
const urlProject = "http://localhost:8080/projects/";

function getUser(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText;
}


function postUser(url, name, email){
    const params = {
        name: name,
        email: email,
    }

    let request = new XMLHttpRequest()
   
    try{
        request.open("POST", url, false)
        request.setRequestHeader('Content-type', 'application/json')
        
        request.send(JSON.stringify(params))
        let objectErr = JSON.parse(request.response);
        
        if(request.status != 201) throw objectErr;
    }catch(objectErr){
        throw JSON.parse(request.response)
    }

    return request.responseText;
}



function getUserId(url, id){
    let request = new XMLHttpRequest();
    request.open("GET", `${url}${id}`, false);
    request.send();

    // const stringJSON = JSON.stringify(id)
    // localStorage.setItem('key', stringJSON)

    return request.responseText
}


function postProject(url, name, idUser){
    const params = {
        name: name,
        user: {
            id: idUser
        }
    }

    let request = new XMLHttpRequest();

    try{
        request.open("POST", url, false);
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify(params));

        console.log(request)
        let objectErr = JSON.parse(request.response);
        console.log(objectErr)
        if(request.status != 201 && request.status != 200) throw objectErr;
    }catch(objectErr){
        throw JSON.parse(request.response)
    }
    
    return request.responseText;
   
}

function postTechnology(url, name, idUser){
    let urlTechnology = `${url}${idUser}/technologies`
    const params = {
        name: name
    }

    let request = new XMLHttpRequest();

    try{
        request.open("POST", urlTechnology, false);
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify(params))

        let objectErr = JSON.parse(request.response);
        if(request.status != 201) throw objectErr;

    }catch(objectErr){
        throw JSON.parse(request.response)
    }

    return request.responseText
}

function getTechnology(url, idProject){
    let request = new XMLHttpRequest();
    request.open("GET", `${url}${idProject}/technologies`, false);
    request.send();

    return request.responseText
}

function getProjectByUser(url, idUser){
    let request = new XMLHttpRequest();
    request.open("GET", `${url}user/${idUser}`, false);
    request.send();

    // console.log(request.responseText);
    return request.responseText
}

function getProjectById(url, id){
    let request = new XMLHttpRequest();
    request.open("GET", `${url}${id}`, false);
    request.send();

    return request.responseText
}

// getProjectByUser(urlProject, 2)

function queryString(parameter){
    let loc = location.search.substring(1, location.search.length)
    // console.log(loc)
    // let param_value = false;
    let params = loc.split("?");
    // console.log(params.length);
    if(params.length == 1 ){
        var user = params[0].split("=")
    }else{
        var user = params[0].split("=")
        var project = params[1].split("=")
    }
    // console.log(project);
    if(parameter === "id") return user[1]
    if(parameter === "idProject") return project[1]
    
}

function finalizar(url, idProject){
    let request = new XMLHttpRequest();
    request.open("GET", `${url}finalizar/${idProject}`, false);
    request.send();

    return request.responseText
}

// console.log(finalizar(urlProject, 5));
// criar()

// function criarLinha(user){
//     let linha = document.createElement("tr");
//     let tdId = document.createElement("td");
//     let tdNome = document.createElement("td");
//     tdId.innerHTML = user.id;
//     tdNome.innerHTML = user.name

//     linha.appendChild(tdId)
//     linha.appendChild(tdNome)

//     return linha;
// }

// function main(){
//     console.log(getUser(url));
//     let data = getUser(url);
//     console.log(data);
//     let user = JSON.parse(data);
//     let table = document.getElementById("table")

//     user.forEach(element => {
//         let linha = criarLinha(element);
//         table.appendChild(linha);
//     })
// }

// main()





