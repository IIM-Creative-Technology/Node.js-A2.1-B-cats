//FRONT
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let pokemon = document.getElementById("pokemon");
function seeform(id) {
    if (id == 2) {
        nom.classList.add("activeform")
    }
    else if (id == 3) {
        prenom.classList.add("activeform")
    }
    else if (id == 1) {
       pokemon.classList.add("activeform")
    }
}
function sendform(id) {
    if (id == 1) {
        const pokemon = document.getElementById("Npokemon").value;
        localStorage.setItem("pokemon", pokemon);
    }
    else if (id == 2) {
        const nom = document.getElementById("Nnom").value;
        localStorage.setItem("nom", nom);
    }
    else if (id == 3) {
       const prenom = document.getElementById("Nprenom").value;
        localStorage.setItem("prenom", prenom);
    }
}















//NODE