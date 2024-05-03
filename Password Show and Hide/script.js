let eyeIcon = document.querySelector("#showIcon");
let password = document.querySelector("#password");

eyeIcon.addEventListener("click", () =>{
    if(password.type === "password"){
        password.type = "text";
        eyeIcon.classList.replace("fa-eye-slash","fa-eye");
    }else{
        password.type = "password";
        eyeIcon.classList.replace("fa-eye","fa-eye-slash");
    }
});