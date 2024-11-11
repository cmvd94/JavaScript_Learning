/*
function sum (num1, num2){
    if(num2 == undefined){
        return "enter correct output"; //if no input given ,it will undefined and output will be Nan
    }
    return num1+num2;
}
console.log(sum());
*/
/*
const sum = function (num1, num2){
    if(num2 == undefined){
        return "enter correct output"; //if no input given ,it will undefined and output will be Nan
    }
    return num1+num2;
}
console.log(sum(10,8));
*/
/*
const sum = (num1, num2) => {
    if(num2 == undefined){
        return "enter correct output"; //if no input given ,it will undefined and output will be Nan
    }
    return num1+num2;
}
console.log(sum(20,6));
*/


//scope var let const

//global scope 
const x = 1;
const y = 2;

//local scope & function scope
function scopee (num1){ 
   // let x = 11;
    let y = 22;
    {
       let y=33;
    }
    console.log(`function scope ${x},${y}`);
}
scopee();
console.log(`global scope ${x},${y}`);
//block scope & local
{
    let x = 111;
    let y = 222;
    let z = 333;
    console.log(`block scope ${x},${y}`);
}
console.log(`global scope ${x},${y},${z}`);