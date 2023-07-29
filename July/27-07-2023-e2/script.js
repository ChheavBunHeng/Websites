const input = document.querySelector("input");
const submitButton = document.querySelector("button");
const result = document.querySelector("ul");
function JsonFile()
{
    var Info = {
        Name: input.value
    };
    var json = JSON.stringify(Info);
    var a = document.createElement("a");
    a.href = "#";
    a.textContent = "Download";
    result.appendChild(a);
    a.addEventListener("click", ()=>{
        var blob = new Blob([json],{type:"application/json"});
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = "Info.json";
        a.click();
        localStorage.setItem("Info", json);
    });
}
function Input()
{
    if((input.value).toLocaleLowerCase() == "json")
    {
        JsonFile();
    }
    else if(input.value != "json")
    {
        result.innerHTML = input.value;
    }
}
function Submit() 
{
    input.value = "";
    result.innerHTML = "";
    localStorage.setItem("json", json);
}

submitButton.addEventListener("click", Submit);

input.addEventListener("input", Input);