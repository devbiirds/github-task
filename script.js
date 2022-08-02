var readline = require('readline');

let sum = (a, b) => a + b
let sumStrLength = (str1, str2) => str1.length + str2.length

console.log(sum(5, 6));
console.log(sumStrLength('test', 'test2'));


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sumOfNumbers = (num) => num.toString().split('').reduce(function (a, b) {
  return +a + +b;
})


rl.question("Введите трехзначное число: ", function (number) {
  console.log(sumOfNumbers(number))
  rl.close();
});