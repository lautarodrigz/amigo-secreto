// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let entrada = document.querySelector("#amigo");
    let nuevoAmigo = entrada.value;
    if (nuevoAmigo !== "") {
        amigos.push(nuevoAmigo);
        entrada.value = "";
    } else {
        alert("Por favor, inserte un nombre");
    }
}