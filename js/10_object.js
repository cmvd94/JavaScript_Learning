//object contain key:value
/*
const myObj = {name:"vishnu"};
console.log(myObj);

const persDet = {
    name: "vishnudas",
    rollno: 957196,
    age: "30",
    present: true,
    semMark: {
        firstSem: "A",
        secondSem: "A+"
    },
    extracur: ["football player","dancer"],
    department: function(){
        return "ECE";
    },
    insideObj: function(){
        return `ECE ${this.extracur} \t ${this.semMark.firstSem}`;
    }

};
console.log(persDet);
console.log(persDet["rollno"]);

console.log(persDet.semMark);
console.log(persDet["semMark"]);

console.log(persDet.semMark.firstSem);
console.log(persDet["semMark"]["firstSem"]);
console.log(persDet.extracur);
console.log(persDet.department());
console.log(persDet.insideObj());

/////////copy obj property to new obj/////////
//inheritance

console.log(persDet);
const newPerDet = Object.create(persDet);
console.log(newPerDet);
console.log(newPerDet.name);
newPerDet.name = "sankar";
newPerDet.wife = true;
console.log(newPerDet);
console.log(persDet.name);
console.log(newPerDet.name);
console.log(newPerDet.age);//if its not initialied it take value from parent obj
//if we create another obj with newperdet , new obj can access data of perdet obj
const testObj = Object.create(newPerDet);
console.log(testObj.wife,testObj.name,testObj.age);//inherits both object.
*/
///////////////////////////////////////
/*
const movie = {
    moviename: "three",
    actor: ["dhanush","shruti"],
    director: "aishwariya",
    music: "anirudh"
};

console.log(movie);
console.log(Object.values(movie));
//adding
movie.supportingActor = "sk";
//for in-loop
//for(let key in objname)
for(let job in movie){
    console.log(movie[job]);
    console.log(`${job} its value ${movie[job]}`)
}
    
//delete
console.log(movie);
console.log(Object.values(movie));
delete movie.music;
console.log(movie);
console.log(Object.values(movie));
console.log(movie.music);
//instead for returning undefined we can check it is available or not
console.log(movie.hasOwnProperty("music"));//if available true or false

//destructuring the obj
//we can store property value to a variable
const { moviename : moviedest} = movie;
console.log(moviedest);
//use key name of obj to make it as variable, if the uninitialised key is used it value will be undefined
const {moviename, actor, director, music } = movie;
console.log(actor);
console.log(music);
*/
const number = {
    n1: 1,
    n2: 2,
    n3: 3
};

function destNumber (n1){
    return n1;
}
//const {one} = number;
console.log(destNumber(number));

// sending key value in function by calling function with obj nmae as parameter 

function destNumberfn ({n1}){
    return n1;
}
//const {one} = number;
console.log(destNumberfn(number));
