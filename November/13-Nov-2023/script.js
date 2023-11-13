const FetchAndInert = (url , targetClass) =>{
    fetch(url)
        .then(Response => Response.text())
        .then(data => document.querySelector(`.${targetClass}`).innerHTML = data)   
        .catch(error => console.log("Error to fetch the data",error));
};

document.addEventListener("DOMContentLoaded",()=>{
    FetchAndInert("./header.html","header");
    FetchAndInert("./footer.html","footer");
});