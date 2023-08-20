const UserName = document.querySelector(".UserName");
const UserPassword = document.querySelector(".UserPassword");
const SubmitBTN = document.querySelector(".SubmitBTN");
const attempts = document.querySelector(".attempts");
let attempt = 3; // Declare the attempt variable outside the event listener


function login()
{
    if (attempt > 0) {
        if (UserName.value === "admin" && UserPassword.value === "admin") {
            attempts.innerHTML = "Login Successful";
            setInterval(function() {
                window.location.href = "http://127.0.0.1:5500/WebSite/May/05-05-2023/index.html";
            }, 2000);
        } 
        else 
        {
            UserPassword.value = "";
            attempt--; // Decrement the attempt count
            attempts.innerHTML =`You have ${attempt} attempts`; // Display the attempt count
        }
    } 
    else 
    {
        SubmitBTN.disabled = true;
        attempts.innerHTML = "You have no more attempts";
        attempts.style.color = "red"
    }
}
function Check_input() {
    if (UserName.value === "" || UserPassword.value === "") {
        
        SubmitBTN.disabled = true;
        attempts.innerHTML = "Please fill in both fields";
    } else {
        attempts.innerHTML = ""; // Clear the attempts message
        SubmitBTN.disabled = false;
        login();
    }
}
function Enable_Button()
{
    if(attempt >0)
    {
        SubmitBTN.disabled = false;
    }

}
SubmitBTN.addEventListener("click", Check_input);
const intervalid = setInterval(Enable_Button, 1000);