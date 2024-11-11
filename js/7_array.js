const emptyArray = [];

emptyArray[0] = "vishnu";
emptyArray[1] = "das";
emptyArray[2] = 26;
emptyArray[3] = true;


console.log(emptyArray[0][1]);
console.log(emptyArray[2][0]);

emptyArray.push("cm");
console.log(emptyArray);
emptyArray.pop()
console.log(emptyArray);
emptyArray.unshift("ggs");
console.log(emptyArray);
emptyArray.shift();
console.log(emptyArray);

const copyArray = emptyArray;// will reflect in copyarray variable throughout program
console.log(copyArray);
const length = emptyArray.push("leng"); //gives length
console.log(length);
const remove = emptyArray.pop(); //store pop item
console.log(remove);

//delete emptyArray[2];
//console.log(emptyArray); // inbtw delete index element but it wont sort
//so use splice
emptyArray.splice(1,1);//sort deletion
console.log(emptyArray);
emptyArray.splice(1,0,"add");
console.log(emptyArray);
emptyArray.splice(1,1,"replace");
console.log(emptyArray);
emptyArray.splice(1,2,"delete & replace");
console.log(emptyArray);

const copySlice = emptyArray.slice(1,2);
console.log(copySlice);

console.log(`emptyarray before reverse ${emptyArray} \n copyarray ${copyArray}`);
const revArray = emptyArray.reverse();
console.log(revArray);
console.log(`emptyarray after reverse ${emptyArray}\n copyarray${copyArray}`);
/**/ /**/ /*array to string*/
const joinArray = emptyArray.join();
console.log(joinArray);
const splitArray = joinArray.split(',');
console.log(splitArray);

const addArray = emptyArray.concat(revArray);
console.log(addArray);

const spreadArray = [...emptyArray, ...revArray];
console.log(spreadArray);

const addOppArray = emptyArray + revArray ;
console.log(addOppArray);

const twoDim = [copySlice,revArray];
console.log(twoDim);
console.log(twoDim[0],twoDim[1]); 