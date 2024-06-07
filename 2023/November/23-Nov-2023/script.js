const fetchAndInsert = (url, targetClass) =>{
    fetch(url)
    .then(res => res.text())
    .then(data => document.querySelector(`.${targetClass}`).innerHTML = data)   
};

fetchAndInsert("./src/html/location.html","location");
fetchAndInsert("./src/html/courses.html","courses");
fetchAndInsert("./src/html/about.html","about");
fetchAndInsert("./src/html/contact.html","contact");

