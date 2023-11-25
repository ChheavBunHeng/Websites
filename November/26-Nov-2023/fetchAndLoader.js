const fetchAndInsert = (url, targetClass) =>{
    fetch(url)
    .then(res => res.text())
    .then(data => document.querySelector(`.${targetClass}`).innerHTML = data)
};

fetchAndInsert("./navbar.html","navbar");
fetchAndInsert("./header.html","header");
