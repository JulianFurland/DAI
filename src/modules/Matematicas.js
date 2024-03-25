const PI = 3.14159265359;
const numeros =  ["dos", "cuatro", "ocho", "diez"];
const Sumar = (num1, num2) => {return +(num1) + +(num2);}

const Restar = (num1,num2) => {return +(num1) - +(num2);}

function Multiplicar(num1,num2){return +(num1) * +(num2);}

function Dividir(num1,num2){return +(num1) / +(num2);}

export {PI, numeros, Sumar, Restar, Multiplicar, Dividir};