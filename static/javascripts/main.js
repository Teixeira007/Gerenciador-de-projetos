const urlUser = "http://localhost:8080/users/";
const register = document.querySelector('.register')
const wrapper = document.querySelector('.wrapper')

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
        request.onload = function(){
            console.log(request.responseText)
        }
        console.log(request)
    }catch(error){
        const erro = new Error('opa')
        throw erro;
    }

    return request.responseText;
}


//console.log(getUser(urlUser))


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
        console.log("Erro:",error)
        wrapper.innerHTML = `
            <div class="alert alert-danger" role="alert">
                A simple danger alert—check it out!
            </div>
        
        `
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





