const fetchAndInsert = (url, targetClass) =>{
    fetch(url)
    .then(res => res.text())
    .then(data => document.querySelector(`.${targetClass}`).innerHTML = data)
};

fetchAndInsert('../html/navbar.html', 'navbar');
