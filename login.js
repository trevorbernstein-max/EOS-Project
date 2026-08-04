console.log("Test");

let passbtn = document.getElementById("loginbtn");

passbtn.addEventListener("click", user);

const passwordField = document.getElementById("password");

function showpasserror() {
    passwordField.classList.add("Error-input");
    passwordField.value = "";
    passwordField.placeholder = "Incorrect Login";
}



function user() {

    let usernameinput = document.getElementById("username").value;
    let passwordinput = document.getElementById("password").value;
    let realusername = "trevorb";
    let realpass = "1234";

    if (usernameinput === realusername && passwordinput === realpass) {
        window.location.href="index.html";
    } else {
        showpasserror();
    }



}