// const urlUser = "http://localhost:8080/users/";
const login = document.querySelector('.login-btn')
const wrapper = document.querySelector('.wrapper')



login.addEventListener('click', function(event){
    event.preventDefault()
    const id = document.querySelector('.id-input')
    const emailLogin = document.querySelector('.email-input-login')

    const userId = JSON.parse(getUserId(urlUser, id.value))
    if(userId.id === Number(id.value) && userId.email === emailLogin.value ){
        console.log(window.location.href = "http://localhost:5500/src/dashboard.html")
       
    }else{
        wrapper.innerHTML = `
            <div class="alert alert-danger" role="alert">
               id ou email incorreto
            </div>
        
        `
    }
})