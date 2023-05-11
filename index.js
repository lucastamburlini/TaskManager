let inputTarea = document.querySelector("#inputTarea");
let formTareas = document.querySelector("#formTareas");
let listTareas = document.querySelector("#listTareas");

formTareas.addEventListener("submit", function (event) {
  event.preventDefault();
  const tarea = inputTarea.value;
  if (tarea) {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.innerText = tarea;
    listTareas.appendChild(nuevaTarea);

    const fechaTexto = document.createElement("span");
    fechaTexto.innerText = new Date().toLocaleString();
    nuevaTarea.appendChild(fechaTexto);

    const eliminarTarea = document.createElement("button");
    eliminarTarea.innerText = "X";
    nuevaTarea.appendChild(eliminarTarea);

    eliminarTarea.onclick = function () {
      nuevaTarea.remove();
    };
  }

  inputTarea.value = "";
});
