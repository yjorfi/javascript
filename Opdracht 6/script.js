function calculate(num1, num2) {
    let sum = num1 + num2; 
    console.log(`De som van ${num1} en ${num2} is: ${sum}`);
}

calculate(1, 12); 

function multiplyByFive(num) {
    let result = num * 5; 
    console.log(`${num} vermenigvuldigd met 5 is: ${result}`);
}

multiplyByFive(7);

function calculateMinutes(seconds) {
    let minutes = seconds / 60;
    console.log(`${seconds} seconden is gelijk aan: ${minutes} minuten`);
}

calculateMinutes(3600);
