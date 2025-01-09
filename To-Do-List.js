// Get references to the DOM elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add a new task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const newTask = document.createElement("li");
    
    // Create task text element
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    newTask.appendChild(taskContent);

    // Create 'complete' button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => {
      newTask.classList.toggle("completed");
    });

    // Create 'delete' button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(newTask);
    });

    newTask.appendChild(completeButton);
    newTask.appendChild(deleteButton);

    // Append the task to the task list
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = "";
  }
});

// Allow users to press 'Enter' to add a task
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
});
