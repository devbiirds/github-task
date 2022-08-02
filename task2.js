var readline = require('readline');

let comparison = (a, b) => a > b ? a : b

console.log(comparison(5, 6));

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let compareMonths = (number) => months[number - 1]
let months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]
rl.question("Введите число от 1 до 12: ", function (number) {
    console.log(compareMonths(number))
    rl.close();
});