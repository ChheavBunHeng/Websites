
const UserName = document.querySelector("#username");
const Password = document.querySelector("#password");
const Submit = document.querySelector(".submit");


Submit.addEventListener("click", ()=>{
    alert("Welcome " + UserName.value);
});