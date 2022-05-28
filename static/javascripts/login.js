// const urlUser = "http://localhost:8080/users/";
// const login = document.querySelector('.login-btn')
const wrapper = document.querySelector('.wrapper')
const formLogin = document.getElementById('form-login')
// let idUser;
formLogin.addEventListener('submit', function(event){
    event.preventDefault()
    const id = document.querySelector('.id-input')
    const emailLogin = document.querySelector('.email-input-login')
    const formData = new FormData(this);

    console.log(formData)

    const userId = JSON.parse(getUserId(urlUser, id.value))
    if(userId.id === Number(id.value) && userId.email === emailLogin.value ){
        // idUser = userId.id;
        
        console.log(window.location.href = "http://localhost:5500/src/dashboard.html?id="+userId.id)
        
    }else{
        wrapper.innerHTML = `
            <div class="alert alert-danger" role="alert">
               id ou email incorreto
            </div>
        
        `
    }
})
