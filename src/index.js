document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById('create-task-form')

  newTaskForm.addEventListener('submit', createNewTask)
});

function createNewTask(event) {
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
}

function appendNewTask(task) {
  document.getElementById("tasks").appendChild(task);
}