// // Listen for form submission on element with class "addForm"
// document.querySelector(".addForm").addEventListener("submit", (e) => {
//     // Get values from input fields
//     var picture = document.querySelector(".Input-Item-Picture").value;
//     var className = document.querySelector(".Input-Item-ClassName").value;
//     var price = document.querySelector(".Input-Item-Price").value;
//     var title = document.querySelector(".Input-Item-Title").value;
//     var duration = document.querySelector(".Input-Item-Duration").value; // Added missing dot before class name
  
//     // Create new item object with input values
//     var newitem = {
//       picture: picture,
//       className: className,
//       price: price,
//       title: title,
//       duration: duration
//     };
  
//     // Retrieve existing items from local storage or create empty array
//     var items = JSON.parse(localStorage.getItem("items")) || [];
  
//     // Add new item to items array
//     items.push(newitem);
  
//     // Save updated items array to local storage
//     localStorage.setItem("items", JSON.stringify(items));
  
//     // Reset form
//     document.querySelector(".addForm").reset();
//   });
  

var picture = document.querySelector(".Input-Item-Picture");
var DisplayImage = document.querySelector(".Display-image");

picture.addEventListener("change",(event)=>{
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload  = () =>
  {
    DisplayImage.src = reader.result;
  };
});