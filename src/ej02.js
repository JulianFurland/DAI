import {PI, sumar, numeros} from './modules/matematica.js';
let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`);
total = sumar(numero1, numero2);
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
numeros.forEach(num => {
    console.log(num);
});
