const url = "http://localhost:8080/users/";
function getUser(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    console.log(request);
   
    return request.responseText;
    
}

// console.log(getUser(url))

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




