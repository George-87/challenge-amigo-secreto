const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  if (!nombre) {
    alert("Debes ingresar un nombre");
    return;
  }

  // Validar solo letras y espacios
  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
    alert("El nombre no puede contener números ni caracteres especiales");
    return;
  }

  listaAmigos.push(nombre);

  const li = document.createElement("li");
  li.textContent = nombre;
  ulListaAmigos.appendChild(li);

  inputAmigo.value = "";
  ulResultado.innerHTML = "";
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay nombres para sortear");
    return;
  }
  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];

  ulResultado.textContent = ` El amigo secreto es: ${amigoSecreto}`;
}
