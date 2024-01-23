const signUpToggler = document.getElementById("signUp-toggler");
const loginToggler = document.getElementById("login-toggler");
const formOne = document.querySelector(".form-1");
const formTwo = document.querySelector(".form-2");
const RegisterOrLogin = document.querySelector(".RegisterOrLogin");
const registerOrLoginDesc = document.querySelector(".registerOrLoginDesc");
const SignOrLoginGoogle = document.querySelector(".SignOrLoginGoogle");

const roundBtn = document.getElementById('roundBtn')
const body = document.querySelector("body")



const dayNightToggler =()=>{
    roundBtn.classList.toggle("dayNnight")
    body.classList.toggle("dark")
}    
    
const LoginSignUpPageToggler = () => {
    formOne.classList.toggle('active');
    formTwo.classList.toggle("active");
    const isRegister = RegisterOrLogin.innerHTML === "Register";
    RegisterOrLogin.innerHTML = isRegister ? "Login" : "Register";
    registerOrLoginDesc.innerHTML = isRegister ? "Welcome to Login Page." : "Welcome to our registration page.";
    SignOrLoginGoogle.innerHTML = isRegister ? "Login with Google" : "Sign up with Google";
}


// --------------------Form validation-------------
const firstnameLabel = document.getElementById("firstnameLabel")
const lastNameLabel = document.getElementById("lastNameLabel")
const emailLabel = document.getElementById("emailLabel")
const passwordLabel = document.getElementById("passwordLabel")
const confirmPasswordLabel = document.getElementById("confirmPasswordLabel")

const loginEmailLabel = document.getElementById("loginEmailLabel")
const loginPasswordLabel = document.getElementById("loginPasswordLabel")



const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

const loginEmail = document.getElementById('emailTwo')
const loginPassword = document.getElementById('passwordTwo')




firstName.addEventListener("input",(e)=>{
    const firstValue = e.target.value
    
    let regExp = /^[A-Za-z]+$/
    let errorMessageElement  =  document.getElementById('firstNameError')

   
    if(!firstValue){
        errorMessageElement.textContent =""
        firstnameLabel.style.color = "white"
        firstName.style.borderColor= "grey"
    }
   else if(!regExp.test(firstValue)){
         errorMessageElement.textContent = "Non-alphabetic not alloweded"
         firstnameLabel.style.color = "red"
         firstName.style.borderColor= "red"
    }else{
        errorMessageElement.textContent = ""
        firstnameLabel.style.color = "blueviolet"
        firstName.style.borderColor= "grey"
    }
})
lastName.addEventListener("input",(e)=>{
    const lastValue = e.target.value
    
    let regExp = /^[A-Za-z]+$/
    let errorMessageElement  =  document.getElementById('lastNameError')

   
    if(!lastValue){
        errorMessageElement.textContent =""
        lastNameLabel.style.color = "white"
        lastName.style.borderColor= "grey"
    }
   else if(!regExp.test(lastValue)){
         errorMessageElement.textContent = "Non-alphabetic not alloweded"
         lastNameLabel.style.color = "red"
         lastName.style.borderColor= "red"
    }else{
        errorMessageElement.textContent = ""
        lastNameLabel.style.color = "blueviolet"
        lastName.style.borderColor= "grey"
    }
})


email.addEventListener('input', (e) => {
    const emailValue = e.target.value;

    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailErrorMessageElement = document.getElementById("emailError");

    if (!emailValue) {
        emailErrorMessageElement.textContent = "";
        emailLabel.style.color = "white"
        email.style.borderColor= "grey"
    } else if (!regExp.test(emailValue)) {
        emailErrorMessageElement.textContent = "Invalid email format";
        emailLabel.style.color = "red"
        email.style.borderColor= "red"
    } else {
        emailErrorMessageElement.textContent = "";
        emailLabel.style.color = "blueviolet"
        email.style.borderColor= "grey"
    }
});


password.addEventListener('input', (e) => {
    const passwordValue = e.target.value;

    let minRegex = /^.{8,}$/
    let oneUpperCaseRegex = /^(?=.*[A-Z])/
    let oneLowerCaseRegex = /^(?=.*[a-z])/
    let oneNumberCaseRegex = /^(?=.*\d)/
    let oneSpecialCaseRegex = /^(?=.*[@#$%^&*!])/
    let avoideCommaRegex = /^(?!password)(?!123456)(?!qwerty)/i

    let passwordErrorMessageElement = document.getElementById("passwordError");

    if (!passwordValue) {
        passwordErrorMessageElement.textContent = "";
        passwordLabel.style.color = "white"
        password.style.borderColor= "grey"
    } else if (!minRegex.test(passwordValue)) {
        passwordErrorMessageElement.textContent = "Minimum 8 characters needed";
        passwordLabel.style.color = "red"
        password.style.borderColor= "red"
    } else if(!oneUpperCaseRegex.test(passwordValue)){
        passwordErrorMessageElement.textContent = "Atleast 1 uppercase letter is needed";
        passwordLabel.style.color = "red"
        password.style.borderColor= "red"
    }else if(!oneLowerCaseRegex.test(passwordValue)){
        passwordErrorMessageElement.textContent = "Atleast 1 lowercase letter is needed";
        passwordLabel.style.color = "red"
        password.style.borderColor= "red"
    }else if(!oneNumberCaseRegex.test(passwordValue)){
        passwordErrorMessageElement.textContent = "Atleast 1 number is needed";
        passwordLabel.style.color = "red"
        password.style.borderColor= "red"
    }else if(!oneSpecialCaseRegex.test(passwordValue)){
        passwordErrorMessageElement.textContent = "Atleast 1 special character is needed";
        passwordLabel.style.color = "red"
        password.style.borderColor= "red"
    }else if(!avoideCommaRegex.test(passwordValue)){
        passwordErrorMessageElement.textContent = "Comma words and phrases is not allowed";
        passwordLabel.style.color = "red"
        password.style.borderColor= "red"
    }
    else {
        passwordErrorMessageElement.textContent = "";
        passwordLabel.style.color = "blueviolet"
        password.style.borderColor= "grey"
    }
});


confirmPassword.addEventListener("input", (e)=>{
    const confirmPasswordValue = e.target.value
    const passwordValue  = document.getElementById("password").value

    confirmErrorElement = document.getElementById("corfirmPasswordError")


    if(!confirmPasswordValue){
        confirmErrorElement.textContent = ""
        confirmPasswordLabel.style.color = "white"
        confirmPassword.style.borderColor= "grey"
    }
   else if(confirmPasswordValue != passwordValue){
        confirmErrorElement.textContent = "Password is not matching"
        confirmPasswordLabel.style.color = "red"
        confirmPassword.style.borderColor= "red"
    }else{
        confirmErrorElement.textContent = ""
        confirmPasswordLabel.style.color = "blueviolet"
        confirmPassword.style.borderColor= "grey"
    }

})



// ---------------Login------------



loginEmail.addEventListener('input', (e) => {
    const emailValue = e.target.value;

    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailErrorMessageElement = document.getElementById("loginEmailError");

    if (!emailValue) {
        emailErrorMessageElement.textContent = "";
        loginEmailLabel.style.color = "white"
        loginEmail.style.borderColor= "grey"
    } else if (!regExp.test(emailValue)) {
        emailErrorMessageElement.textContent = "Invalid email format";
        loginEmailLabel.style.color = "red"
        loginEmail.style.borderColor= "red"
    } else {
        emailErrorMessageElement.textContent = "";
        loginEmailLabel.style.color = "blueviolet"
        loginEmail.style.borderColor= "grey"
    }
});


loginPassword.addEventListener('input', (e) => {
    const passwordValue = e.target.value;

    let minRegex = /^.{8,}$/
    let oneUpperCaseRegex = /^(?=.*[A-Z])/
    let oneLowerCaseRegex = /^(?=.*[a-z])/
    let oneNumberCaseRegex = /^(?=.*\d)/
    let oneSpecialCaseRegex = /^(?=.*[@#$%^&*!])/
    let avoideCommaRegex = /^(?!password)(?!123456)(?!qwerty)/i

    let passwordErrorMessageElement = document.getElementById("loginPasswordError");

    if (!passwordValue) {
        passwordErrorMessageElement.textContent = "";
        loginPasswordLabel.style.color = "white"
        loginPassword.style.borderColor= "grey"
    } else if (!minRegex.test(passwordValue)) {
        passwordErrorMessageElement.textContent = "Minimum 8 characters needed";
        loginPasswordLabel.style.color = "red"
        loginPassword.style.borderColor= "red"
    } else if(!oneUpperCaseRegex.test(passwordValue)){
        passwordErrorMessageElement.textContent = "Atleast 1 uppercase letter is needed";
        loginPasswordLabel.style.color = "red"
        loginPassword.style.borderColor= "red"
    }else if(!oneLowerCaseRegex.test(passwordValue)){
        passwordErrorMessageElement.textContent = "Atleast 1 lowercase letter is needed";
        loginPasswordLabel.style.color = "red"
        loginPassword.style.borderColor= "red"
    }else if(!oneNumberCaseRegex.test(passwordValue)){
        passwordErrorMessageElement.textContent = "Atleast 1 number is needed";
        loginPasswordLabel.style.color = "red"
        loginPassword.style.borderColor= "red"
    }else if(!oneSpecialCaseRegex.test(passwordValue)){
        passwordErrorMessageElement.textContent = "Atleast 1 special character is needed";
        loginPasswordLabel.style.color = "red"
        loginPassword.style.borderColor= "red"
    }else if(!avoideCommaRegex.test(passwordValue)){
        passwordErrorMessageElement.textContent = "Comma words and phrases is not allowed";
        loginPasswordLabel.style.color = "red"
        loginPassword.style.borderColor= "red"
    }
    else {
        passwordErrorMessageElement.textContent = "";
        loginPasswordLabel.style.color = "blueviolet"
        loginPassword.style.borderColor= "grey"
    }
});




// ---------------password visibility-------------------


const eyeCloseIcon = document.getElementById('eyeClose')
const eyeCloseIcon2 = document.getElementById('eyeClose2')


eyeCloseIcon.addEventListener("click", ()=>{
    
    const isVisible = eyeCloseIcon.innerHTML === "visibility_off"
    const isValue = password.value

   if(isValue){

    eyeCloseIcon.innerHTML = isVisible ? "visibility" : "visibility_off"

    const isPassord = password.type === "password"

    password.type = isPassord ? "text" : "password"
   }

})


eyeCloseIcon2.addEventListener("click", ()=>{
    
    const isVisible = eyeCloseIcon2.innerHTML === "visibility_off"
    const isValue = loginPassword.value

    if(isValue){
        
        eyeCloseIcon2.innerHTML = isVisible ? "visibility" : "visibility_off"

        const isPassord = loginPassword.type === "password"
    
        loginPassword.type = isPassord ? "text" : "password"
    }

   
})