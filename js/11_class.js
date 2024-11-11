 //classes syntax for object
/*
 class studentList {
    constructor(){
        this.name = "vishnudas";
        this.class = "12A";
        this.age = 17;
    }
    display(){
        return console.log( `${this.name}\t${this.class}\t${this.age}`);
    }
 }
 //console.log(studentList);
 //creating object
 const sankar = new studentList();
 //console.log(sankar.display());
 sankar.display();
 */
 class studentList {
    constructor(studentname,studentclass,studentage){
        this.name = studentname;
        this.class = studentclass;
        this.age = studentage;
        this.height = "5.11";
        this.subject = [];
    }
    /* directly should not change property value,so get & set used
    get studentheight(){
        return this.height;
    }
        //work only when set function name and paramete name same 
    set studentheight(studentheight){
        this.height = studentheight;
    }
        */
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
  

 const sankar = new studentList("sankar","12A",18);
 //sankar.studentheight = "5.10";
 sankar.display();
 sankar.setHeight("5.9");
 sankar.setSubject("english");
 sankar.setSubject("tamil");
 console.log(sankar.getHeight());
 sankar.display();
 /*
 console.log(sankar.hasOwnProperty("this.age"));
 const vimal = Object.create(sankar);
 vimal.display();
 //const varma = sankar; //wrong way of creating obj;it affect sanka value
 const varma = Object.create(sankar);
 varma.display();
 sankar.age = 18;
 sankar.display();
 varma.display();
 vimal.display();
 varma.name ="varma";
 console.log("checking that varma affect sankarq")
 sankar.display();
 */