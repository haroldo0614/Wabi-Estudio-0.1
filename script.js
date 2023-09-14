//alert("Hola este es mi Javascript");
//let nombre1 = "haroldo";
// console.log(nombre1);

// let cargo = "tecnica";
// let profesion = "desarrolladora multimedia";
// let años = "6";

// let parrafo = document.querySelector(".soyun");

// function cambiarTexto(cargo, profesion, años) {
//     let contenido = `Soy un ${cargo} en ${profesion} al que le apasiona la ilustración vectorial y la fotografía, junto a mi esposa llevamos ${años} años detrás de una cámara capturando hermosos momentos.`;

//     return contenido;
// }
// parrafo.innerText = cambiarTexto(cargo, profesion, años);
let menu_responsive = document.querySelector(".checkbtn");

    menu_responsive.onclick = function () {

        barra = document.querySelector(".barra");

        barra.classList.toggle("active");

    };
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
function suma(a, b){
    return a+ b;
}
console.log(suma(3, 7));