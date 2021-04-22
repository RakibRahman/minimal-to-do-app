const task = document.getElementById("task");
const addItem = document.getElementById("addItem");
const output = document.getElementById("output");
const outputDiv = document.getElementById("showOutput");

// addItem.addEventListener("click", () => {
//   output.innerHTML = task.value;
// });

//! add task to list
const addTask = () => {
  event.preventDefault();
  console.log("clicked");
  if (!task.value) return false; //? add no item if its empty
  const item = document.createElement("li");
  item.innerHTML = task.value;
  output.appendChild(item);
  task.value = "";
};

addItem.addEventListener("click", addTask);

// ! remove item from the list

output.addEventListener("click", (event) => {
  const element = event.target;
  element.classList.toggle("done");
});
