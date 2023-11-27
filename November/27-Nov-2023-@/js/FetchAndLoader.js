const FetchAndLoader = (url, TargetClass) =>{
    fetch(url)
    .then(res => res.text())
    .then(data => document.querySelector(`.${TargetClass}`).innerHTML = data)
};

FetchAndLoader("../Navbar.html","Navbar");  
