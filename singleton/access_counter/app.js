const counter1 = require('./accessCounter');
const counter2 = require('./accessCounter');

counter1.increment();
counter1.increment();
counter2.increment();

console.log("Total de acessos", counter1.getCount());
console.log("Instâncias iguais?", counter1 === counter2);