var readline = require('readline');

function checkTriangle(a, b, c) {
    return Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2) ? true : false;

}
console.log(checkTriangle(10, 24, 26))
console.log(checkTriangle(11, 24, 26))

let squareCircle = (radius) => 2 * Math.PI * radius
let lengthCircle = (radius) => Math.pow(radius, 2) + Math.PI

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите R :", function (radius) {
    console.log('Площадь круга = ' + squareCircle(radius))
    console.log('Длина окружности = ' + lengthCircle(radius));
    rl.close();
});

