const fetchAndTargetClass = (url, TargetClass) =>{
    fetch(url)
    .then(res => res.text())
    .then(data => document.querySelectorAll(`.${TargetClass}`).forEach(element => {
        element.innerHTML = data;
    }));
};
fetchAndTargetClass("/Websites/November/29-Nov-2023/src/Pages/Navbar.html","navbar");