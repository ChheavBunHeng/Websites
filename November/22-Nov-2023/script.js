var fetchAndInsert = (url, targetClass) =>{
    fetch(url)
    .then(Response => Response.text())
    .then(data => document.querySelector(`.${targetClass}`).innerHTML = data)   
    .catch(error, console.log("the is an error to fetch the data",error));
};

fetchAndInsert("./NavBar.Html", "NavBar");
fetchAndInsert("./header.html", "header");
fetchAndInsert("./Project.html","Project");