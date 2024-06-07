
var BTN = document.getElementById('Answer');
var Display = document.getElementById('Display');

BTN.addEventListener('click',CAl)
function CAl()
{   
    var num1 = document.getElementById('Num1').value;
    var num2 = document.getElementById('Num2').value;
    var result = parseInt(num1) + parseInt(num2);
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
}
