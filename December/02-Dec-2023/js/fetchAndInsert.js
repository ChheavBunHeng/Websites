const fetchAndTargetClass = (url, TargetClass) =>{
    fetch(url)
    .then(res => res.text())
    .then(data => document.querySelectorAll(`.${TargetClass}`).forEach(element => {
        element.innerHTML = data;
    }));
};
fetchAndTargetClass("/Websites/December/02-Dec-2023/pages/NavBar.html","NavBar");
fetchAndTargetClass("/Websites/December/02-Dec-2023/pages/Course.html","Course");