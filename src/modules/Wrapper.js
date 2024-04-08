import axios from "axios";
const APIKEY = "15374cbd";
const OMDBSearchByPage = async (searchText, page = 1) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : []
};
let response = axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`)
if (returnObject.datos != undefined && returnObject.datos != null){
    returnObject.respuesta = true;
}
response.Search.forEach(element => {
    returnObject.datos += element;
    returnObject.cantidadTotal++;
});
return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : []
};
let page = 1;
let pageResponse = {};
while(pageResponse != {Response:"False",Error:"Movie not found!"}){
    pageResponse = axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`)
    if(pageResponse != {Response:"False",Error:"Movie not found!"}){
        pageResponse.Search.forEach(element => {
            returnObject.datos += element;
            returnObject.cantidadTotal++;
        });
    }
}
if (returnObject.datos != undefined && returnObject.datos != null){
    returnObject.respuesta = true;
}
return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
let returnObject = {
respuesta : false,
cantidadTotal : 1,
datos : {}
};
returnObject.datos = axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`)
if (returnObject.datos != undefined && returnObject.datos != null){
    returnObject.respuesta = true;
}
return returnObject;
};

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};