let myName;
let myLength;
myName = prompt("enter your name");
myLength = myName.length;

console.log( myName.charAt((Math.floor(Math.random()*myLength))));