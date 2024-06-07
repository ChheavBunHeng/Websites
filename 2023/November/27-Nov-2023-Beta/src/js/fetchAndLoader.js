const fetchAndInsert = (url, targetClass) => {
    fetch(url)
    .then(res => res.text())
    .then(data => {
        document.querySelectorAll(`.${targetClass}`).forEach(element => {
            element.innerHTML = data;
        });
    });
};

