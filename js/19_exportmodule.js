
const vishnudas = () =>{
     return "Vishnudas Export";
}
const sankar = () => {
    return "sankar export";
}
const vimal = () => {
    return "vimal export";
}

//default export is manditory
export default vishnudas;
export { sankar , vimal};
/*
//method 2

export default function vishnudas(){
    return "Vishnudas Export";
}
export const sankar = () => {
   return "sankar export";
}
export const vimal = () => {
   return "vimal export";
}
*/

//if we want make default then use default after export
export class exportClass  {
    constructor(parameter) {
        this.name = parameter;
    }
    fun() {
        return `class function ${this.name}`;
    }
};