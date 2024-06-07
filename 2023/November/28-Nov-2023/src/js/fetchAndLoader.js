const fetchAndTargetClass = (url, TargetClass) => {
    // Initiating a fetch request to the specified URL
    fetch(url)
        .then(res => res.text()) // Extracting the text content from the response
        .then(data => {
            // Updating the inner HTML of all elements with the specified class
            document.querySelectorAll(`.${TargetClass}`).forEach(element => {
                element.innerHTML = data;
            });
        });
};

// Invoking the fetchAndTargetClass function with a specific URL and class
fetchAndTargetClass("/Websites/November/28-Nov-2023/Pages/Navbar.html", "Navbar");

// Logging a message to the console
console.log("Hello world from loader");
