let getal_1 = document.getElementById("getal-1");
let getal_2 = document.getElementById("getal-2");
let antwoord = document.getElementById("antwoord");

function multiply() {
    let result = getal_1.value * getal_2.value;
    if (result < 0) {
        antwoord.innerText = "antwoord onder de 0";
    } else {
        antwoord.innerText = result;
    }
}

function add() {
    let result = Number(getal_1.value) + Number(getal_2.value);
    if (result < 0) {
        antwoord.innerText = "antwoord onder de 0";
    } else {
        antwoord.innerText = result;
    }
}

function divide() {
    let result = getal_1.value / getal_2.value;
    if (result < 0) {
        antwoord.innerText = "antwoord onder de 0";
    } else {
        antwoord.innerText = result;
    }
}

function minus() {
    let result = getal_1.value - getal_2.value;
    if (result < 0) {
        antwoord.innerText = "antwoord onder de 0";
    } else {
        antwoord.innerText = result;
    }
}
