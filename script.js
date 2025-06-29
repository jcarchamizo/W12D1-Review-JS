// 1. Bucle del 20 al 5
function ej1() {
    console.clear();
    for (let i = 20; i >= 5; i--) {
      console.log(i);
    }
    document.getElementById("output").innerText = "Revisa la consola para ver los números del 20 al 5.";
  }

  // 2. Cuadrados del 3 al 33
  function ej2() {
    console.clear();
    for (let i = 3; i <= 33; i++) {
      console.log(`El cuadrado de ${i} es ${i * i}`);
    }
    document.getElementById("output").innerText = "Revisa la consola para ver los cuadrados del 3 al 33.";
  }

  // 3. Día y tiempo
  function ej3() {
    let dia = prompt("¿Qué día de la semana es?");
    let clima = prompt("¿Qué tiempo hace?");
    elTiempo(dia, clima);
  }

  function elTiempo(dia, clima) {
    const frase = `El ${dia.toLowerCase()} hará ${clima.toLowerCase()}.`;
    console.log(frase);
    document.getElementById("output").innerText = frase;
  }

  // 4. Mostrar recetas
  function ej4() {
    const recetas = ["Tortilla de patatas", "Gazpacho", "Paella", "Croquetas"];
    let html = "<h3>Recetas:</h3><ul>";
    for (let receta of recetas) {
      html += `<li>${receta}</li>`;
    }
    html += "</ul>";
    document.getElementById("output").innerHTML = html;
  }

  // 5. Bucle while con array de lenguajes
  function ej5() {
    const lenguajes = ["Python", "Java", "C", "C++", "JavaScript", "Ruby", "Go"];
    let orden;

    console.clear();
    while (true) {
      orden = prompt("Número de orden (1-" + lenguajes.length + ") o 0 para salir:");
      if (orden === null || orden === "0") {
        console.log("Saliendo...");
        break;
      }

      let indice = parseInt(orden) - 1;
      if (indice >= 0 && indice < lenguajes.length) {
        console.log(`Lenguaje ${orden}: ${lenguajes[indice]}`);
      } else {
        console.log("Número fuera de rango");
      }
    }
    document.getElementById("output").innerText = "Consulta la consola para ver los resultados.";
  }