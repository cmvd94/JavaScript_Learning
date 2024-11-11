//document object model

//elements are tag eg div
//accessing html element. secion 1. view element is obj
//view1 string is used as id in section 1
const view1 = document.getElementById("view1");
//console.log(view1);
//query selector have to inform we're using ID so should use # prefix
const view2 = document.querySelector("#view2");
//console.log(view2);

//accessing style file and changing entry
//view1.style.display = "none";// no blank page
//view2.style.display = "flex";//now second section enabled

//we can also access section using class
//html collection refer to elements ie div,h1etc
//node list contain all content ie space,enter,text,div,h1etc
/*
const classViews = document.getElementsByClassName("view");
console.log(classViews);//html collection(elements ie div)

const classViewQuery = document.querySelectorAll(".view");//have inform we're using class so used '.'
console.log(classViewQuery);//node list(any content in web)
*/
 
//initial we're selecting section now from that we're selecting only div. in general there may be many other elements but we're selecting only div
const div = view1.querySelectorAll("div");
//console.log(div);//stored in array//node

/*//can access directly
const directDiv = document.querySelectorAll("div");
console.log(directDiv);
*/
const sameDiv = view1.getElementsByTagName("div");
//console.log(sameDiv);//html collections

//selecting even div
//elements are count start from 1 but in array its 0
const evenDiv = view1.querySelectorAll("div:nth-of-type(2n)");//nth-of-type() is css command. what value given in bracket will get stored
//console.log(evenDiv);
evenDiv[4].style.backgroundColor = "purple";
for(i=0; i < evenDiv.length; i++){
    evenDiv[i].style.backgroundColor = "green";
    evenDiv[i].style.width = "150px"
}

//add & remove txt 
const navText = document.querySelector("nav h1");
//console.log(navText);
navText.textContent = "CM VISHNUDAS";
const navBar = document.querySelector("nav");
navBar.innerHTML = '<h1> ML Fabric </h1> <p> loopknit|lycra </p>';
//console.log(navBar);
navBar.style.justifyContent = "space-evenly";//other value flex-end or flex-start
/*
//dom is obj tree .so using evenDiv obj we're gonna travell in all other obj
console.log(evenDiv[0].parentElement);//access parent ie section
console.log(evenDiv[0].parentElement.children);
console.log(evenDiv[0].parentElement.childElementCount);
console.log(evenDiv[0].parentElement.childNodes);//it count div ,space or enter etc
console.log(evenDiv[0].parentElement.lastChild);
console.log(evenDiv[0].parentElement.lastElementChild);
console.log(evenDiv[0].parentElement.firstChild);
*/

//add elements
//view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

//console.log(view2.lastElementChild);
while(view2.lastChild){
    view2.lastChild.remove();
}
//console.log(view2.lastElementChild);
const createDiv = (parent,itr) =>{
    const newDiv = document.createElement("div");
newDiv.textContent = itr;
newDiv.style.width = "100px";
newDiv.style.height = "100px";
newDiv.style.margin = "10px"
newDiv.style.backgroundColor = "yellow";
newDiv.style.color ="black";
newDiv.style.display = "flex";
newDiv.style.justifyContent = "center";
newDiv.style.alignItems = "center";
parent.append(newDiv);
}
//createDiv(view2,0);

for (let i = 1; i < 11; i++){
    createDiv(view2,i);
}
    