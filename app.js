const task = document.getElementById("task");
const addItem = document.getElementById("addItem");
const output = document.getElementById("output");

//! add task to list
const addTask = () => {
  event.preventDefault();
  console.log("clicked");
  if (!task.value) return false; //? add no item if its empty
  const item = document.createElement("li");
  item.innerHTML = task.value;
  item.style.textTransform = "capitalize";
  output.appendChild(item);
  task.value = "";
};

addItem.addEventListener("click", addTask);

// ! remove item from the list

output.addEventListener("click", (event) => {
  const element = event.target; // select each item of the list
  if (event.detail === 1) {
    console.log("crossed");
    element.classList.toggle("done");
  } else if (event.detail === 2) {
    element.style.textDecoration = "none";
    element.style.color = "black";
    element.style.content = "🥬";
    element.contentEditable = true;
    console.log("edit me now");
  }
});

// document.querySelectorAll(".edit-item").contentEditable = true;
