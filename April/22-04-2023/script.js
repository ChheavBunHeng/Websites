var Typed = require('typed.js');

const signlink = document.getElementById('signup-link');
const signup = document.getElementById('signup-form');
signlink.addEventListener('click',function(event){
    event.preventDefault();
    if(signup.classList.contains('hidden')){
        signup.classList.remove('hidden');
        signup.classList.add('show');
    }
    else
    {
        signup.classList.remove('show');
        signup.classList.add('hidden');
    
    }
});

var typed = new Typed("#Auto-Type",{
    strings:["Hello world","hi"],
    typeSpeed:150,
    loop:true
});