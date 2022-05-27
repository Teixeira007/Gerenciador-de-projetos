const urlUser = "http://localhost:8080/users/";
// const register = document.querySelector('.register')
// const wrapper = document.querySelector('.wrapper')
// const login = document.querySelector('.login-btn')

function getUser(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText;
}

// getUser(urlUser)

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
    //    console.log(request)
        // const err = request.response;
        // console.log(err)
        let objectErr = JSON.parse(request.response);
        
        // console.log(objectErr);
        if(request.status != 201) throw objectErr;
    }catch(objectErr){
        throw JSON.parse(request.response)
    }

    return request.responseText;
}


//console.log(getUser(urlUser))

function getUserId(url, id){
    let request = new XMLHttpRequest();
    request.open("GET", `${url}${id}`, false);
    request.send();
    return request.responseText
}

// console.log(getUserId(urlUser, 1))

// function registerUser(){
    
// }

// function loginUser(){
    
// }

// registerUser()
// login()





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





