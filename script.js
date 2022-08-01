var readline = require('readline');

var a = 5;
var b = 6;
console.log(a + b);

var str1 = 'test'
var str2 = 'test2';
console.log(str1.length + str2.length);


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите трехзначное число: ", function(number) {
    console.log(number.toString().split('').reduce(function(a, b) {
                 return +a + +b;
             })
        )
  rl.close();
});