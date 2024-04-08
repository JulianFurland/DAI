import { getCurrencyAbbreviation, getCountryByAbbreviation } from 'currency-map-country';
let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = ObtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = ObtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
function ObtenerMoneda(codigo){
    let country = getCountryByAbbreviation(codigo);
    if(country == undefined){
        return null;
    }
    else{
        return getCurrencyAbbreviation(country);
    } 
}