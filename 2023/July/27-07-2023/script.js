const ProductName = document.querySelector(".ProductName");
const ProductPrice = document.querySelector(".Price");
const ProductQuantity = document.querySelector(".Quantity");
const BTN = document.querySelector("button");
const PriceS = document.querySelector(".PriceS");
const NameS = document.querySelector(".NameS");
const QuantityS = document.querySelector(".QuantityS");
const TotalS = document.querySelector(".TotalS");

function cal() {
    var total = parseFloat(ProductPrice.value) * parseFloat(ProductQuantity.value);
    return total;
}

function Display() {
    var total = cal();
    PriceS.innerHTML = parseFloat(total)+"$";
    NameS.innerHTML = ProductName.value;
    QuantityS.innerHTML = ProductQuantity.value;
    TotalS.innerHTML = total+"$";
    var displayValues ={
        Name: ProductName.value,
        Price: ProductPrice.value,
        Quantity: ProductQuantity.value,
        Total: total
    };
    var json = JSON.stringify(displayValues);
    localStorage.setItem("displayValues",json);
}
function Clear()
{ 
    const input = [ProductName,ProductPrice,ProductQuantity];
    const SpanResult = [NameS,PriceS,QuantityS,TotalS];
    for(var i = 0; i < input.length; i++)
    {
        input[i].value = "";
    }
    for(var i = 0; i<SpanResult.length; i++)
    {
        SpanResult[i].innerHTML = "";
    }
    
}

ProductPrice.addEventListener("input", Display);
ProductQuantity.addEventListener("input", Display);
ProductName.addEventListener("input", Display);
BTN.addEventListener('click',Clear);