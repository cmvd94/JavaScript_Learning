
//console.log(prompt("enter").length);//if cancel or okay without string ,length zero
//promt NULL & zero string lenth issue
/*
let chkVal = prompt("cancel or enter nothing");
let resVal ;
*/
//console.log(chkVal ?? "you have cancelled")
/*
if(chkVal){
    console.log( (chkVal.length != 0) ?  "have string" : "no string");

}else{
    console.log("you have cancelled");
    
}
console.log(`chkval ${chkVal}`);
*/
/*
if(chkVal){
    console.log("inside null bracket");
    console.log(chkVal ?? "you have cancelled");
}else{
    console.log("inside else bracket");
    console.log("no string");
}
console.log(`chkval ${chkVal}`);
*/

let myTrim = prompt("enter");
//console.log(myTrim.length);
if(myTrim){
    myTrim = myTrim.trim();
    console.log(myTrim);
    console.log(myTrim.length);
}else{
    console.log(myTrim ?? "null");
}

