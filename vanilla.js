// Get references to DOM elements
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const clearAllBtn = document.getElementById("clearAllBtn"); // Added reference to clear all button
const todoList = document.getElementById("todoList");

// Add event listener to the "Add Todo" button
addTodoBtn.addEventListener("click", addTodo);
clearAllBtn.addEventListener("click", clearAllTodos); // Added event listener for clear all button

// Function to add a new todo item
function addTodo() {
  // Get the trimmed value from the todo input field
  const todoText = todoInput.value.trim();

  // Check if the input is not empty
  if (todoText !== "") {
    // Create a new list item
    const li = document.createElement("li");
    // Create checkbox for marking as completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    checkbox.addEventListener("change", function () {
      li.classList.toggle("completed");
      span.style.color = checkbox.checked ? "green" : "red"; // Change text color based on checkbox state
    });
    
    // Create a div to hold the edit and delete buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Create a span element to display the todo text
    const span = document.createElement("span");
    span.textContent = todoText;

    // Create an Edit button
    const editButton = document.createElement("button");
    editButton.classList.add("link-button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTodo);
    buttonsDiv.appendChild(editButton);

    // Create a Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("link-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodo);
    buttonsDiv.appendChild(deleteButton);

    // Clear the input field
    todoInput.value = "";

    // Append the elements to the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonsDiv);
    todoList.appendChild(li);
  }
}

function toggleCompleted() {
  const listItem = this.parentElement; // Get the parent list item
  listItem.classList.toggle("completed"); // Toggle the "completed" class on the list item
}

function editTodo() {
  // Prompt the user for the updated todo text
  const newText = prompt("Enter updated todo:");

  // Check if the prompt was not cancelled and the new text is not empty
  if (newText !== null && newText.trim() !== "") {
    // Get a reference to the parent list item
    const li = this.parentElement.parentElement;

    // Remove the existing todo text span
    const span = li.querySelector("span");
    span.textContent = newText.trim();
  }
}

// Function to delete a todo item
function deleteTodo() {
  // Remove the parent list item of the delete button
  this.parentElement.parentElement.remove();
}

// Function to clear all todo items
function clearAllTodos() {
  todoList.innerHTML = "";
}
