const fetchAndInsert = (url, targetClass) => {
    fetch(url)
        .then(response => response.text())
        .then(data => document.querySelector(`.${targetClass}`).innerHTML = data) 
        .catch(error => console.error("Error fetching content", error));
};

document.addEventListener("DOMContentLoaded", () => {
    fetchAndInsert("./header.html", "header");   
    fetchAndInsert("./footer.html", "footer");
});
