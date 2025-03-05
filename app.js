// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.querySelector("#listaAmigos");

function agregarAmigo() {
    let entrada = document.querySelector("#amigo");
    let nuevoAmigo = entrada.value;
    if (nuevoAmigo !== "") {
        amigos.push(nuevoAmigo);
        entrada.value = "";
    } else {
        alert("Por favor, inserte un nombre");
    }
    agregarAmigoListItem();
}

function agregarAmigoListItem() {
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let amigoItem = document.createElement("li");
        amigoItem.textContent = amigos[i];
        lista.appendChild(amigoItem);
    }
}

function sortearAmigo() {
    lista.innerHTML = "";
    let resultado = document.querySelector("#resultado");
    if (amigos.length > 0) {
        let numeroSorteado = Math.floor(Math.random() * amigos.length);
        let nombreSorteado = amigos[numeroSorteado];
        console.log(nombreSorteado);
        resultado.textContent = "El amigo secreto sorteado es: " + nombreSorteado;
    } else {
        alert("No hay amigos para sortear!")
    }
}