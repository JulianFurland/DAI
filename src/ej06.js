import url from "url";
try {
    let miUrl = new URL('a'); 
} catch (error) {
    console.log("No se ingreso una URL valida")
    var miUrl = {
        host: null,
        pathname: null,
        parametros: null
    }
}
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