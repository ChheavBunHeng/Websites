const FetchandTargetClass =(url, TargetClass) =>{
    fetch(url)
    .then(Response => Response.text())
    .then(data => document.querySelector(`.${TargetClass}`).innerHTML = data)
    .catch(error,console.log("error to fetch data",error));
};

document.addEventListener("DOMContentLoaded",()=>{
    FetchandTargetClass("./src/HTML/Header.html","Header");
    FetchandTargetClass("./src/HTML/Content.html","Content");
    FetchandTargetClass("./src/HTML/Footer.html","Footer");
});