// Get a reference to the container element on the home page
var container = document.querySelector(".Container");

// Get the items array from local storage and create HTML for each item
var items = JSON.parse(localStorage.getItem("items")) || [];
for (var i = 0; i < items.length; i++) {
  // Create a new div element for the item
  var newItem = document.createElement("div");
  newItem.classList.add("Item");

  // Set the innerHTML of the div to the HTML for the item
  newItem.innerHTML = `
    <img src="${items[i].picture}" alt="">
    <h1>${items[i].className}</h1>
    <div class="Item-Info">
      <div class="Info">
        <a href="#">${items[i].price}</a>
        <a href="#">|</a>
        <a href="#">${items[i].title}</a>
      </div>
      <a href="#">${items[i].duration}</a>
    </div>
  `;

  // Append the new div to the container element
  container.appendChild(newItem);
}
