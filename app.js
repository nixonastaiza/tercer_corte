// EJERCICIO 1
document.getElementById("btn1").addEventListener("click", () => {
  let elemento = document.getElementById("mi-elemento");
  elemento.innerHTML = "Hola, mundo!";
  elemento.style.backgroundColor = "blue";
});

// EJERCICIO 2
document.getElementById("btn2").addEventListener("click", () => {
  let elementos = document.getElementsByClassName("mi-clase");
  for (let i = 0; i < elementos.length; i++) {
      elementos[i].innerHTML = "Hola, mundo!";
      elementos[i].style.color = "blue";
  }
});

// EJERCICIO 3
document.getElementById("btn3").addEventListener("click", () => {
  let divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
      divs[i].innerHTML = "Div modificado";
      divs[i].style.backgroundColor = "yellow";
      divs[i].style.border = "1px solid black";
  }
});

// EJERCICIO 4a
document.getElementById("ejercicio1").addEventListener("click", () => {
  const destacados = document.querySelectorAll(".destacado");
  destacados.forEach(e => e.style.background = "yellow");
});

// EJERCICIO 4b
document.getElementById("ejercicio2").addEventListener("click", () => {
  const enlaces = document.querySelectorAll("#menu a");
  enlaces.forEach(e => e.classList.add("activo"));
});

// EJERCICIO 4c
document.getElementById("ejercicio3").addEventListener("click", () => {
  const imagenes = document.querySelectorAll("img[alt]");
  imagenes.forEach(img => img.style.border = "3px solid yellow");
});

// EJERCICIO 4d
document.getElementById("ejercicio4").addEventListener("click", () => {
  const items = document.querySelectorAll(".tareas li:nth-child(odd)");
  items.forEach(li => li.style.fontWeight = "bold");
});

// EJERCICIO 4e
document.getElementById("ejercicio5").addEventListener("click", () => {
  const checks = document.querySelectorAll("input[type='checkbox']:checked");
  checks.forEach(c => c.checked = false);
});

// EJERCICIO 5 lista dinámica
let contador = 0;
document.getElementById("agregar").addEventListener("click", () => {
  contador++;

  const contenedor = document.getElementById("lista-tareas");

  let lista = document.querySelector("#lista-tareas ul");
  if (!lista) {
      lista = document.createElement("ul");
      contenedor.appendChild(lista);
  }

  const li = document.createElement("li");
  li.textContent = "Mi nueva tarea " + contador;

  lista.appendChild(li);
});
