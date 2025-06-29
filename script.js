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

  // 6. Stock de Papá Noel
function ej6() {
    let stock = prompt("¿Cuántos regalos tienes en total? (ej: 250)");
    stock = parseInt(stock);
    if (isNaN(stock) || stock <= 0) {
      alert("Cantidad no válida.");
      return;
    }
  
    const output = document.getElementById("output");
    output.innerHTML = `
      <h3>🎁 Stock de Papá Noel</h3>
      <p>Regalos disponibles: <strong id="regalos">${stock}</strong></p>
      <input type="number" id="repartidos" placeholder="¿Cuántos has repartido hoy?" class="form-control" style="width: 250px;">
      <button onclick="repartirRegalos()" style="margin-top: 10px;">📦 Repartir</button>
      <p id="mensaje" style="margin-top: 1rem; font-weight: bold;"></p>
    `;
  
    // Hacemos accesible la variable stock y función a nivel global
    window.repartirRegalos = function () {
      const repartidos = parseInt(document.getElementById("repartidos").value);
      const mensaje = document.getElementById("mensaje");
  
      if (isNaN(repartidos) || repartidos <= 0) {
        mensaje.textContent = "Introduce un número válido de regalos repartidos.";
        return;
      }
  
      stock -= repartidos;
      const spanRegalos = document.getElementById("regalos");
  
      if (stock > 0) {
        spanRegalos.textContent = stock;
        mensaje.textContent = "";
  
        if (stock < 100) {
          mensaje.textContent = "⚠️ ¡Ojo, quedan menos de 100 regalos!";
          mensaje.style.color = "orange";
        } else {
          mensaje.style.color = "black";
        }
  
      } else {
        spanRegalos.textContent = 0;
        mensaje.innerHTML = "🎉 ¡Misión cumplida! Hasta el año que viene 🎄";
        mensaje.style.color = "green";
        document.getElementById("repartidos").disabled = true;
      }
    };
  }