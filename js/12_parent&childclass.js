
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
 sankar.disp();
 sankar.setSubject("english");
 sankar.disp();
 