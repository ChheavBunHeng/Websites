const BTN =document.getElementById('BTN');
BTN.addEventListener('click',calculate)
function calculate() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var result = num1 + num2;
    var Answer = document.getElementById('Answer').innerHTML = "Result: " + result;
  }
  