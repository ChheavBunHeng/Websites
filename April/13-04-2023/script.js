const DisplayClick = document.getElementById('Count');
const IncreaseBTN = document.getElementById('IncreaseBTN');
const DecreaseBTN = document.getElementById('DecreaseBTN');
let Count = 0;

IncreaseBTN.addEventListener('click',Increase);
DecreaseBTN.addEventListener('click',Decrease);

function Increase()
{
    if(Count >=100)
    {
        DisplayClick.innerHTML = "Please stop";
    }
    else
    {
        Count = Count + 1;
        DisplayClick.innerHTML=Count;
    }
}
function Decrease()
{
    if(Count <= 0)
    {
        DisplayClick.innerHTML = "Please stop";
        Count == 0;
    }
    else
    {
        DisplayClick.innerHTML=Count;
        Count = Count - 1;
    }
}