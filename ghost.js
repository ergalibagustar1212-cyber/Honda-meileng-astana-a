document.addEventListener("DOMContentLoaded", ()=>{
const taskform = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList =document.getElementById("task-list");
taskForm.addEventListener('submit', (e)=>{
})
e.preventDefault();
addTask(taskInput.value);
taskInput.value = ''
});
function addTask(task){
const li = document.createElement("li");
li.textContent-task;
const deleteBurron = document.createElement("button");
deleteBurron.textContent='Delete';
deleteBurron.addEventListener("click", ()=>{
task-List.removeChild(li);
});
appendChild(deleteBurron);
task.appendChild(li);
}