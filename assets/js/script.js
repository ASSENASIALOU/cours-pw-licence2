

let connexion = document.getElementsByClassName("btn-white btn-grd")[0]
console.log(connexion)


function modifier() {
    let analyse = document.getElementsByClassName("s1-titre")[0]
    console.log(analyse)
    analyse.innerText = " "
}

connexion.addEventListener('click', modifier)

let sinscrire = document.getElementsByClassName("btn-black btn-grd")[0]
console.log(sinscrire)

function afficher() {
    let analyse = document.getElementsByClassName("s1-titre")[0]
    console.log(analyse)
    analyse.innerHTML = " <p>Analyser l'ensemble du territoire <br> pour une croissance plus intelligente</p>"
}
sinscrire.addEventListener('click', afficher) 
