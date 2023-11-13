const FetchAndInsert = (url, TargetClass) => {
    fetch(url)
        .then(res => res.text())
        .then(data => document.querySelector(`.${TargetClass}`).innerHTML = data)
        .catch(error, console.log("the is an error to fetch the data",error));
};

document.addEventListener("DOMContentLoaded",()=>{
    FetchAndInsert("./header.html","header");
    FetchAndInsert("./footer.html","footer");
});