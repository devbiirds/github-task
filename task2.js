var readline = require('readline');

var a = 5;
var b = 6;
console.log(a > b ? a : b);

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]
rl.question("Введите число от 1 до 12: ", function (number) {
    console.log(months[number])
    rl.close();
});