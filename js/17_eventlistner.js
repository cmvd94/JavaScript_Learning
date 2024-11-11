//event listener
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = view.querySelector("h2");

//syntax
// .addEventListeners(event,fn,usecapture);
/*
const doSomething= () => {
    alert("done");
}

h2.addEventListener("click",doSomething,false);
h2.removeEventListener("click",doSomething,false);
*/
/*
h2.addEventListener("click", (event) =>{
    console.log(event.target);
    event.target.textContent = "vishnudas"
},false);
*/
//site loaded?

document.addEventListener("readystatechange", (event) =>{
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
        formApp();
    }
})
//even bubbling up 
//when h2 is clicked it is taken from div and view.so all changes happen at once .if div clicked then div & view changed
//if usecapture is changes happen from inside(child) to (parent)out , if true it happens outside to in
/*
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = view.querySelector("h2");
    view.addEventListener("click", (event) => {
        //event.stopPropagation();//bubbling is off
        //view.style.backgroundColor = "purple";
        event.target.style.backgroundColor = "purple";
    },false)
    
    div.addEventListener("click", (event) => {
       // event.stopPropagation();// bubbling is off
        //div.style.backgroundColor = "blue";
        event.target.style.backgroundColor = "pink";
    },false)
    
    h2.addEventListener("click", (event) => {
        //event.stopPropagation();// bubbling is off
        event.target.textContent = "soollluuu";
    },false)
}; ///if event.target is used ,change happen only when click in respective area. 

*/

//using class
//colors are defined in css
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = view.querySelector("h2");
    view.addEventListener("click", (event) => {
        
       //check section view2. have to mention actuall color mentioned in html section
       // view.classList.add("purple");
       // view.classList.remove("darkblue");
       view.classList.toggle("purple");
       view.classList.toggle("darkblue");
        
    })
    
    div.addEventListener("click", (event) => {
        //event.stopPropagation();
        div.classList.toggle("green");
        div.classList.toggle("black");
        
    })
    
    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent ;
        myText === "vishnudas" ? (event.target.textContent = "sollluu") : (event.target.textContent ="vishnudas");
    })
};
const nav = document.querySelector("nav");
nav.addEventListener("mouseover", (event) => {
     event.target.classList.add("height100");//height100 class defined in css
});
nav.addEventListener("mouseout", (event) =>{
    event.target.classList.remove("height100");
});

//form view3
const formApp = () =>{
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();//after pressing submit page automatically get reloaded which is called default behaviour to stop it this fun is called
        console.log("submit event done");
    })   
}