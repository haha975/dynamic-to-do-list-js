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
    newTask.classList.add("task-item"); // ✅ Add styling class

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn"); // ✅ Add styling class

    removeBtn.onclick = function () {
      taskList.removeChild(newTask);
    };

    newTask.appendChild(removeBtn);
    taskList.appendChild(newTask);
    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
});

