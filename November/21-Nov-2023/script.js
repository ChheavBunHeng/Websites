document.addEventListener("DOMContentLoaded",function()
{
    function updateTime()
    {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var Second = now.getSeconds();
        var ampm = hours>= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        document.querySelector(".hour").textContent ="hour " + hours;
        document.querySelector(".minute").textContent ="minute " + minutes;
        document.querySelector(".second").textContent ="second " + Second;
        if((Second % 2) == 0)
        {
            console.log("even");
            // alert(Second);
        }
    }
    updateTime();
    setInterval(updateTime,1000);
})