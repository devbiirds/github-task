var readline = require('readline');

let user = {
    name: 'John'
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите возраст: ", function (number) {
    user.age = number;
    let admin = {}
    Object.assign(admin, user)
    admin['role'] = 'admin';
    
    console.log(user);
    console.log(admin)
    rl.close();
});
