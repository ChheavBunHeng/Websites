const fandI = (url, targetClass) => {
    fetch(url)
        .then(Response => Response.text())
        .then(data => document.querySelector(`.${targetClass}`).innerHTML = data)
        .catch(error => console.error("Error the fetch the data",error))
};

document.addEventListener("DOMContentLoaded",(){
    fandI("./header.html","header");
}); 