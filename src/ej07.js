import getCurrencyAbbreviation from 'currency-map-country';
let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = ObtenerMoneda(codigoPais)
console.log();
function ObtenerMoneda(codigo){
    return getCurrencyAbbreviation(codigo)
}