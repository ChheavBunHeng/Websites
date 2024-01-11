const fetchAndTargetClass = (url, TargetClass) =>{
    fetch(url)
    .then(res => res.text())
    .then(data => document.querySelectorAll(`.${TargetClass}`).forEach(element => {
        element.innerHTML = data;
    }));
};
fetchAndTargetClass("")