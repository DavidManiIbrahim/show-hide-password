
const revealpassword = document.querySelector("#showpassword");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");

 revealpassword.addEventListener("click", evt => {
    evt.preventDefault();

    if (password.type === "text") {
        password.type = "password";
        confirm_password.type = "password";
        revealpassword.innerHTML = "Show Password";
    }else if(password.type === "password") {
        password.type = "text";
        confirm_password.type = "text";
        revealpassword.innerHTML = "Hide Password";
    }


})





