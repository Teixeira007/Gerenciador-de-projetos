const nameUser = document.querySelector('.aw-logged-user')

let idUser = queryString("id")
objectUser = getUserId(urlUser, idUser)
objectUser = JSON.parse(objectUser)
nameUser.innerHTML = `
    <span class="aw-logged-user__name">${objectUser.name}</span>
`