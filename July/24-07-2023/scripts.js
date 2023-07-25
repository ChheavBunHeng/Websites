const Input = document.querySelector("input");
const SubmitBTN = document.querySelector("button");
const ToDoList = document.querySelector("ul");
let isMouseDown = false;

SubmitBTN.addEventListener("click", () => {
  const NewListItem = document.createElement("ul");
  NewListItem.textContent = Input.value;
  ToDoList.appendChild(NewListItem);

  NewListItem.addEventListener("click", () => {
    // Toggle the strikethrough style
    if (!NewListItem.style.textDecoration) {
      NewListItem.style.textDecoration = "line-through";
    } else {
      NewListItem.style.textDecoration = "";
    }
  });

  NewListItem.addEventListener("mousedown", () => {
    isMouseDown = true;
  });

  NewListItem.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  NewListItem.addEventListener("mousemove", () => {
    if (isMouseDown) {
      // Delete the item when dragging (left-click + move)
      ToDoList.removeChild(NewListItem);
    }
  });
});
