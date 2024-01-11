const Result = document.getElementById('Result');
const BTN = document.getElementById('BTN');

BTN.addEventListener('click', Cal);

function Cal() {
    const Num1 = parseInt(document.getElementById('num1').value);
    const Num2 = parseInt(document.getElementById('num2').value);
    const OP = document.getElementById('OP');
    const InputOP = OP.value;
    let Answer;

    switch (InputOP) {
        case '+':
            Answer = Num1 + Num2;
            break;
        case '-':
            Answer = Num1 - Num2;
            break;
        case '/':
            Answer = Num1 / Num2;
            break;
        case '*':
            Answer = Num1 * Num2;
            break;
        default:
            Answer = '';
    }

    const resultString = Answer.toString();
    let count = 0;
    for(let i = 0; i<= resultString.length;i++)
    {
        setTimeout(() => {
            Result.innerHTML +=resultString.charAt(count);
            count++;
            if(count === resultString.length)
            {
                if(Answer<0)
                {
                    Result.style.color = 'red';
                }
                else
                {
                    Result.style.color = 'Green';
                }
            }
        }, i * 50);
        }
    Result.innerHTML = ""
}
