

//API = application programming inteface

//web storeage API has 2 storeage ie session and local storeage
document.addEventListener("readystatechange", (event) =>{
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
        
    }
})
//article in developer morzilla org
//local storage store as a cache in computer
//session storage is deleted once the windows is closed
// standard mechanism. window.sessionStorage & window.localStoage
// window object is predefined

const initApp = () => {
    const myFriend = ["sankar","vimal","varma"];
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
        }
    
    };

    //my obj is name under data is stored
    // can write with window.local or session orelse we can directly use session orlocal storage command
    
    window.sessionStorage.setItem("my Obj", JSON.stringify(persDet));

    const sessionData = JSON.parse(sessionStorage.getItem("my Obj"));

    //window.localStorage.setItem("localStore",JSON.stringify(persDet));
    //console.log(JSON.parse(localStorage.getItem("localStore")));
    console.log(sessionData);
    
    //when live server is enable this data is stored in session storage so tried to print it
    console.log(sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer"));

    //local & session stroge is stored by index so we can chkk that

    console.log(localStorage.key(0));
    console.log(localStorage.length);
    
   // console.log(localStorage);
    localStorage.removeItem("localStore");
    console.log(localStorage);
    //localStorage.clear;
    
   
};
