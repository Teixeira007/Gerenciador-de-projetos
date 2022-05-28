// const urlUser = "http://localhost:8080/users/";
const register = document.querySelector('.register')
const wrapper = document.querySelector('.wrapper')


register.addEventListener('click', function(event){
    event.preventDefault()
    const newName = document.querySelector('.name-input')
    const newEmail = document.querySelector('.email-input')

    try{
        postUser(urlUser, newName.value, newEmail.value)
        
        wrapper.innerHTML = `
            <div class="alert alert-success visually-hidden" role="alert">
                Cadastrado com Sucesso! Você recebera seu id pelo email.
            </div>
        `
    }catch(error){
        // console.log(error)
        wrapper.innerHTML = `
            <div class="alert alert-danger" role="alert">
               Erro ao cadastrar ${error.title}
            </div>
        
        `
    }
})    