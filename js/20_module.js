//module
//importing & exporting funtion from different files
//linked with exportmodule.js
//in html we have to link file with module.

/*
import vishnudas from "./exportmodule.js";
import { vimal as vimalkumar} from "./exportmodule.js";
import { sankar as sankarsan} from "./exportmodule.js";

console.log(vishnudas());
console.log(sankarsan())
*/


//importing all function 
import * as name from "./exportmodule.js";
//import { exportClass } from "./exportmodule.js";//its not manditory
console.log(name.sankar());
console.log(name.default());
const classCreate = new name.exportClass("vishnudas");
console.log(classCreate.fun());


//broswer version is important sometime module won't get imported(new std wont support), so they babble tool which convert new to old version in code will change. 
//"can i use " website will say wil that browser support which version
