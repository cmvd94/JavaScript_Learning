//class property value should not be changed directly by usind . operator
/*
//using " _ " . it make coder to understand that property value should not change but it is possible to change it value
class studentList {
    constructor(name){
        this._name = name;
        this._class = "12A";
        this._age = 17;
    }
    display(){
        return console.log( `${this._name}\t${this._class}\t${this._age}`);
    }
}
const sankar = new studentList("sankar");
sankar.display();
sankar._age = 8;//hence it is possible
sankar.display();
*/

/* 
//new method called FACTORY FUNCTION
function stdlist(name){
    const stdname = name;
    const stdage = "20";
    return {
        disp: ()=> console.log(`${stdname}\t${stdage}`)
    };
}
const vimal = stdlist("vimal");
vimal.disp();
console.log(vimal.stdage);//but in this data is protected but we cant even read the value .so still it is satisfied

 */

//new update using #
class studentList {
    #school = "ramakrishna"//private data
    address = "nggo colony"//public
    constructor(studentname,studentclass,studentage){
        this.name = studentname;
        this.class = studentclass;
        this.age = studentage;
        this.height = "5.11";
        this.subject = [];
    }
    getHeight(){
        return this.height;
    }
    setHeight(height){
        this.height = height;
    }
    getSubject(){
        return  this.subject;
    }
    setSubject(sub){
        this.subject.push(sub);
    }
    display(){
        return console.log( `${this.name}\t${this.class}\t${this.age} ${this.height} ${this.subject}`);
    }
}
const sankar = new studentList("sankar","12A","17");
sankar.display();
//console.log(sankar.#school);
console.log(sankar.address);