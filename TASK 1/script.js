// Get references
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task Event
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // prevent empty tasks

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.marginLeft = "10px";

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "5px";

  // Edit functionality
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", li.firstChild.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      li.firstChild.textContent = newTask; // update dynamically
    }
  });

  // Delete functionality
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Append buttons to list item
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Add list item to UL
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
