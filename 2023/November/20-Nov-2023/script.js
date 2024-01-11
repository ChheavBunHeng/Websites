const fetchAndInsert =(url, targetClass) =>{
    fetch(url)
    .then(response => response.text())
    .then(data => document.querySelector(`.${targetClass}`).innerHTML = data)
}

document.addEventListener("DOMContentLoaded", () => {
    fetchAndInsert("./header.html","header");
    fetchAndInsert("./content.html","content");
    fetchAndInsert("./footer.html","footer");
});