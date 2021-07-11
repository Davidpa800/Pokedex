//Obtención de los datos de PokeAPI
function obtenerP(key) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${key}`).then(function (response) {
        response.json().then(function (poke) {
            crearP(poke, key);
        })
    })
}
window.onload = function () {
    var contador = 0;
    
    document.getElementById("btn_n").onclick = function () {
        contador++;
        obtenerP(contador);
    }
    cont_s = 10;
    window.setInterval(function () {
        if (cont_s == 10) {
            cont_s = 0;
            contador++;
            obtenerP(contador);
        }
        if (contador == 0) {
            contador = 0;
        }
        cont_s++;
    }, 1000)

}
function crearP(poke, key) {


    let img = document.getElementsByTagName("img")[1]
    img.setAttribute("src", poke.sprites.front_default);

    let nom = document.getElementsByTagName("h3")[0];
    nom.textContent = poke.name;

    let hp = document.getElementsByTagName("h3")[1]
    hp.textContent = ("HP " + poke.stats[0].base_stat)

    let ata = document.getElementsByTagName("h5")[0]
    ata.textContent = ("A " + poke.stats[1].base_stat + "k")

    let esp = document.getElementsByTagName("h5")[1]
    esp.textContent = ("E " + poke.stats[2].base_stat + "k")

    let def = document.getElementsByTagName("h5")[2]
    def.textContent = ("D " + poke.stats[3].base_stat + "k")

    let btn = document.getElementsByTagName("button")[0]
    btn.setAttribute("id", key)
}