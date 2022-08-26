let addButton = document.querySelector("#liveToastBtn");
let ulDOM = document.querySelector("#list");
let removeTask = document.createElement("span");
removeTask.innerHTML = "X";

const newElement = () => {
  let taskInput = document.querySelector("#task");
  if (taskInput.value) {
    let task = document.createElement("li");
    task.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    task.innerHTML = taskInput.value;
    task.appendChild(removeTask);
    ulDOM.appendChild(task);

    taskInput.value = "";

    removeTask.addEventListener("click", deleteTask);
  } else {
    alert("Lütfen bir task giriniz.");
  }
};

function deleteTask() {
  let deleted = this.parentElement;
  deleted.remove();
}
