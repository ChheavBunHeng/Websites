const RegisterBTN = document.querySelector(".RegisterBTN"); 

RegisterBTN.addEventListener("click", () => {
    const jsonData = {
        Date: document.querySelector(".reservation-day").value,
        Time: document.querySelector(".reservation-time").value,
        Number_of_people: document.querySelector(".number-of-guest").value,
        PhoneNumber: document.querySelector(".phone").value,
        Email: document.querySelector(".email").value,
        SpecialRequest: document.querySelector(".special-requests").value    
    };
    var json = JSON.stringify(jsonData);
    console.log(json);
    ClearInput();
});

function ClearInput()
{
    document.querySelectorAll(".reservations-form input").forEach(function(element) {
        element.value = "";
    });   
}   