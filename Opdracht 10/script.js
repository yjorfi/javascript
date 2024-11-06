let getal_1 = document.getElementById("getal-1")
let getal_2 = document.getElementById("getal-2")
let antwoord = document.getElementById("antwoord")

function multiply() {
    antwoord.innerText = getal_1.value * getal_2.value
}
function add() {
    antwoord.innerText = Number(getal_1.value) + Number(getal_2.value)
}
function divide() {
    antwoord.innerText = getal_1.value / getal_2.value
}
function minus() {
    antwoord.innerText = getal_1.value - getal_2.value
}