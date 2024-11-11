//javascript object notation json
//language independent
//text format .send & receive data
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
    insideObj: function(){
        return `ECE ${this.extracur} \t ${this.semMark.firstSem}`;
    }

};
console.log(persDet);
const jsonSend = JSON.stringify(persDet);//function is negelected
// function does operation its not data so its not converting to data
console.log(jsonSend);
console.log(typeof jsonSend);

const jsonRecv = JSON.parse(jsonSend);//function is negelected
console.log(jsonRecv);
console.log(typeof jsonRecv);

////////////////////////////////////////////////////
class studentList {
    constructor(studentname,studentclass,studentage){
        this.name = studentname;
        this.class = studentclass;
        this.age = studentage;
        this.height = "6";
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

 class studentExtraCur extends studentList{
    constructor(studentname,studentclass,studentage){
        super(studentname,studentclass,studentage);
        this.extraCur = "shuttle";
    }
    disp(){
        console.log(`child ${this.extraCur}\t${this.name}\t${this.class}\t${this.age}\t${this.height}\t${this.subject}`);
    }
 }
 const sankar = new studentExtraCur("vishnudas","12A","18");
 const jsonClassSend = JSON.stringify(sankar);
 console.log(jsonClassSend);
 const jsonClassRecv = JSON.parse(jsonClassSend);
 console.log(jsonClassRecv);