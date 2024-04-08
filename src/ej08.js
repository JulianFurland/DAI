import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from "./modules/Wrapper.js";
let a = await(OMDBSearchByPage("cars",1));
console.log(a.datos);

let b = await(OMDBSearchComplete("Wonka"));
console.log(b.datos);

let c = await(OMDBGetByImdbID("tt2661044"));
console.log(c.datos);