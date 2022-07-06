// console.log("from Js file");
//-------------basic functions----------with ---------window---------
// let a = window.document // or only document are same
// alert("hello");
// a = prompt('Type your name');
// console.log(a);

// b = confirm('are you sure?');
// console.log(b)  //true or false

// a = innerHeight
// console.log(a);

// a = innerWidth
// console.log(a);

// a = scrollY;
// a = location.toString();
// a = window.history;
// console.log(a);

//-------------------------------------------------

// let a = document;
// console.log(a);

// a = document.all;
// console.log(a);
// Array.from(a).forEach(function(element){
//     console.log(element);   //make array from a var and prints values   
// })
// a = document.forms;
// console.log(a);

// a = document.body;
// console.log(a);

// a = document.links;
// console.log(a);
// a = document.scripts
// console.log(a);
// let total_scripts = Array.from(a);
// console.log("total scripts on website page: "+total_scripts.length)

// b = document.images;
// console.log(b);
// let total_imgs = Array.from(b).length;
// console.log("total images "+ total_imgs);
// document.getElementById("totalImg").innerHTML = "Total Images: "+total_imgs;

//----------children,parent & Traversing the DOM------------------

// var cont1 = document.querySelector(".container1");
// console.log(cont1.childNodes); //includes every new line as text, commets etc.
// console.log(cont1.children); //includes only children not extra things
// let nodeName = cont1.childNodes[1].nodeName;
// let nodeType = cont1.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);
//node types
// 1. element
// 2. attribute
// 3. text node
// 8. comment
// 9. document
// 10. docType

// let cont2 = document.querySelector("div.container2");
// console.log(cont2.children);
// console.log(cont2.children[0].children);
// let arr=[];
// Array.from(cont2.children[0].children).forEach(element => {
//     arr.push(element.innerText);
// });
// console.log("all li elements' value :"+ arr);
// console.log(cont2.firstChild) // text
// console.log(cont2.firstElementChild) // ul 

// console.log(cont2.lastChild) // text
// console.log(cont2.lastElementChild) // class=no child 3
// console.log(cont2.childElementCount) // 1. ul and 3 div = 4

let firstContainerChild = document.querySelector("#first");
console.log(firstContainerChild);
console.log(firstContainerChild.parentNode); //container1
console.log(firstContainerChild.nextSibling); // text
console.log(firstContainerChild.nextElementSibling); // child 2
console.log(firstContainerChild.nextElementSibling.nextElementSibling); // child 3

//-------------------------------------------------------------------------------------------
