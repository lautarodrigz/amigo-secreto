// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.querySelector("#amigo").value;
    if (nuevoAmigo !== "") {
        amigos.push(nuevoAmigo);
    } else {
        alert("Por favor, inserte un nombre");
    }
}