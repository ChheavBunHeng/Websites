const Observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else
        {
            entry.target.classList.remove("show");
        }
    });
})


const HiddenElement = document.querySelectorAll(".hidden");
HiddenElement.forEach((entry) =>{
    Observer.observe(entry);
});