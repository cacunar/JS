const list = [];

const initialTask = [
  {name: "Tarea 1", id: randomIdentifier(), completed: false},
  {name: "Tarea 2", id: randomIdentifier(), completed: false},
  {name: "Tarea 3", id: randomIdentifier(), completed: false}
]

let completedTasks = 0;

initialTask.forEach((task) => {
  list.push(task)
  // Llamado inicial para tareas
  renderTable(task);
})

function randomIdentifier() {
   id = Math.floor(Math.random() * 100) + 1
   return id
}

let inputTask = document.getElementById("frm1");

inputTask.addEventListener("submit", (e) => {
  e.preventDefault();

  let task = document.getElementById("task");

  if (task.value == "") {
    alert("Tarea no ingresada");
  } else {
    obj = {
      name: task.value,
      id: randomIdentifier(),
      completed: false,
    };

    list.push(obj);
    task.value = "";
  }
  updateTaskCount();
  renderTable(obj);
});

document.getElementById("table").addEventListener("change", function (e) {
  if (e.target.type === "checkbox") {
    let row = e.target.closest("tr");

    let id = parseInt(row.querySelector(".id").textContent, 10);

    let task = list.find((t) => t.id === id);

    task.completed = e.target.checked;
    updateTaskCount();
  }
});

function updateTaskCount() {
  let completedTasks = list.filter((obj) => obj.completed).length;
  let count = list.length;

  document.getElementById("total").innerHTML = `Total: ${count}`;
  document.getElementById("done").innerHTML = `Realizadas: ${completedTasks}`;
}

function renderTable(task) {

  let newRow = document.getElementById("table").insertRow();
  newRow.innerHTML = `
  <td class="id" data-id="${task.id}">${task.id}</td>
  <td>${task.name}</td>
  <td><input type="checkbox" id="check" name="${task.name}"></td>
  <td"><span onclick= "removeTask(${task.id})" id="remove">
  <i class="fa-solid fa-x" style="color: #ff0000;"></i></span>
  </td>`;
  console.log(list);
}

function removeTask(id) {
    let index = list.findIndex((t) => t.id === id);
    console.log(index)

    if (index !== -1) {
        list.splice(index, 1);
        let table = document.getElementById("table");
        let removeRows = table.querySelector(`.id[data-id="${id}"]`).parentNode;
        console.log(removeRows)
        removeRows.parentNode.removeChild(removeRows);

    updateTaskCount();
    }
}   

