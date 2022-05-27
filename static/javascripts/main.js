const urlUser = "http://localhost:8080/users/";
const register = document.querySelector('.register')
const wrapper = document.querySelector('.wrapper')
const login = document.querySelector('.login-btn')

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
       
        const err = request.response;
        let objectErr = JSON.parse(err);
        
        console.log(object.status);
        if(objectErr.status != 201) throw objectErr;
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


register.addEventListener('click', function(event){
    event.preventDefault()
    const newName = document.querySelector('.name-input')
    const newEmail = document.querySelector('.email-input')

    try{
        postUser(urlUser, newName.value, newEmail.value)
        
        wrapper.innerHTML = `
            <div class="alert alert-success visually-hidden" role="alert">
                Cadastrado com Sucesso!
            </div>
        `
    }catch(error){
        console.log(error)
        wrapper.innerHTML = `
            <div class="alert alert-danger" role="alert">
               Erro ao cadastrar ${error.title}
            </div>
        
        `
    }
})


login.addEventListener('click', function(event){
    event.preventDefault()
    const id = document.querySelector('.id-input')
    const emailLogin = document.querySelector('.email-input-login')

    const userId = JSON.parse(getUserId(urlUser, id.value))
    if(userId.id === Number(id.value) && userId.email === emailLogin.value ){
        // window.location.href = "http://localhost:5500/src/cadastro.html"
    }
})




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





