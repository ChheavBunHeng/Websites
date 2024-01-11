const UserName = document.querySelector(".UserName");
const UserPassword = document.querySelector(".UserPassword");
const SignupBTN = document.querySelector(".SignupBTN");  
const attempts = document.querySelector(".attempts");

function Check_input() {
    if (UserName.value === "" || UserPassword.value === "") {
        
        SignupBTN.disabled = true;
        attempts.innerHTML = "Please fill in both fields";
    } else {
        attempts.innerHTML = "Successfully"; // Clear the attempts message
        SignupBTN.disabled = false;
        Signup();
    }
}
function Signup()
{
    const ExistData = JSON.parse(localStorage.getItem("UserArray"))||[];    
    const MyObj = {name: UserName.value, password: UserName.value};
    ExistData.push(MyObj);
    localStorage.setItem("UserArray",JSON.stringify(ExistData));
    UserName.value = "";
    UserPassword.value = "";
}
SignupBTN.addEventListener('click', Check_input);

window.setInterval(Enable_Button, 1000);

function Enable_Button()
{
    SignupBTN.disabled = false;
}