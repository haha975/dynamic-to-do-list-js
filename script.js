document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const addButton = document.getElementById("add-task-btn");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = function () {
      taskList.removeChild(newTask);
    };

    newTask.appendChild(removeBtn);
    taskList.appendChild(newTask);
    taskInput.value = "";
  }

  // Add task when "Enter" is pressed
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

  // Add task when button is clicked
  addButton.addEventListener("click", function () {
    addTask();
  });
});
