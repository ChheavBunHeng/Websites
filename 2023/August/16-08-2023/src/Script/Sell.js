const MaxAttempts = 3; // Maximum allowed login attempts
let Attempts = MaxAttempts; // Initialize login attempts counter

const Name = document.querySelector(".Name");
const Password = document.querySelector(".Password");
const SubmitBTN = document.querySelector('.submit');

SubmitBTN.addEventListener("click", () => 
{
    console.log(Password.value);
    Attempts--;

    if (Attempts === 0) {
        SubmitBTN.disabled = true;
        console.log(`Maximum login attempts reached (${MaxAttempts}).`);
    }
});
