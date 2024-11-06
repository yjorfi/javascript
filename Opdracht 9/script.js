let counter = 0;

function knop() {
    document.getElementById("counter").innerText = counter; 

    counter += 1;

    if (counter === 11) {
        counter = 0; 
    }
}
