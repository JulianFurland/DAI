import url from "url";
let miUrl = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
let miObjeto = null;
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laUrl){
return {
    host: miUrl.hostname,
    pathname: miUrl.pathname,
    parametros: miUrl.searchParams
}
}