// normal javascript doesnt have strict rules.

"use strict";
//variable = 10;//reference error
const variable = 10;
//variable = 11; //type error . reinstialising

//Object..create();//syntax error

/*error handling */
/*try catch finally*/
/*
const errorHandling = () => {
    try{
        const number = 1;
        number = 2;
        
    }catch(err){
        
        console.log("inside catch");
        console.log(typeof err);
        console.log(Object.values(err));
        console.log("............................");
        //different type of error display
       
        console.log(err);
        console.error(err);
       
        console.error(err.name);
        console.error(err.stack);
        console.warn(err);
        console.table(err);
        
        
    }finally{
    
    }
}

errorHandling();
*/
/*
//custom error
const errorHandling = () => {
    try{
        
        throw new customError("custom error");
        //throw new Error("java in-build error func");
    }catch(err){
        //throw redirect to userdefined error function 
        console.error(err.stk);
        //console.error(err.stack);//point to Java Error function 
    }finally{
        //try(error)->catch->finally
        //try(no error)->fnally
        console.log("finally");

    }
}

errorHandling();

function customError(message){
    this.message = message;
    this.name = "custom error";
    this.stk =`${this.name} : ${this.message}`
}
    */

//example

function customError(message){
    this.message = message;
    this.name = "custom error";
    this.stk =`${this.name} : ${this.message}`
}

const errorHandling = () => {
    let i = 0;
    while(i <= 6){
        try{
            if(i%2 != 0)
            throw new customError("odd number");
             
            console.log("even number");
            
        }catch(err){
          
            console.error(err.stk);
            
        }finally{
            
            console.log("finally");
            console.log(".....");
            i++;
    
        }
    }
}

errorHandling();
