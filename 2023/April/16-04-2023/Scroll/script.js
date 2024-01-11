const TypeSpan = document.querySelectorAll('h1');

var Typed = new Typed('.Auto-Type',{
    strings:["😍vicheka😍","sleeping",'Eating'],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
    // fadeOut:true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));