const feelingbtn = document.querySelector(".feeling");

list_feeling =["I'm happy","Today is a good day","I'm Feeling Lucky"];

feelingbtn.addEventListener("click",function()
{
    let random = Math.floor(Math.random()*list_feeling.length);
    feelingbtn.innerText = list_feeling[random];
});