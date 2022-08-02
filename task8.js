var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите дату в формате ДД.ММ.ГГГГ :", function (date) {
    date = new Date(date);
    let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

    console.log(days[date.getDay()]);
    console.log(getMinutesFromStartDay(new Date()))
    rl.close();
});

let getMinutesFromStartDay = (date) => {
    let now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    return Math.floor((date.getTime() - now.getTime()) / 1000 / 60);
}