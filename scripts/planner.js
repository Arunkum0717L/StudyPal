const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("tasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${task.subject}: ${task.task} by ${new Date(task.deadline).toLocaleString()}`;
    taskList.appendChild(li);
  });
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = {
    subject: document.getElementById("subject").value,
    task: document.getElementById("task").value,
    deadline: document.getElementById("deadline").value,
  };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  taskForm.reset();
});

renderTasks();
