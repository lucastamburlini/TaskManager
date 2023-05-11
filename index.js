let inputTarea = document.querySelector("#inputTarea");
let formTareas = document.querySelector("#formTareas");
let listTareas = document.querySelector("#listTareas");

if (localStorage.getItem("tareas")) {
  listTareas.innerHTML = localStorage.getItem("tareas");
}

formTareas.addEventListener("submit", function (event) {
  event.preventDefault();
  const tarea = inputTarea.value;
  if (tarea) {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.innerText = tarea;
    listTareas.appendChild(nuevaTarea);

    const eliminarTarea = document.createElement("button");
    eliminarTarea.innerText = "Eliminar";
    nuevaTarea.appendChild(eliminarTarea);

    eliminarTarea.onclick = function () {
      nuevaTarea.remove();
    };

    const fechaTexto = document.createElement("span");
    fechaTexto.innerText = new Date().toLocaleString();
    nuevaTarea.appendChild(fechaTexto);
  }

  inputTarea.value = "";

  localStorage.setItem("tareas", listTareas.innerHTML);
});

window.addEventListener("beforeunload", function () {
  localStorage.setItem("tareas", listTareas.innerHTML);
});
